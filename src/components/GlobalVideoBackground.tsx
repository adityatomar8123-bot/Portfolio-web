"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function GlobalVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track the scroll progress of the entire window
  const { scrollYProgress } = useScroll();

  // Map the 0-1 scroll progress to frame 1-192
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 192]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Array to hold our preloaded images
    const images: HTMLImageElement[] = [];
    const totalFrames = 192;

    // Preload all 192 frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Format number to 4 digits (e.g. 0001, 0002)
      const paddedIndex = i.toString().padStart(4, "0");
      img.src = `/video-frames/frame_${paddedIndex}.jpg`;
      images.push(img);
    }

    // Function to draw a specific frame to the canvas
    const render = (index: number) => {
      // Keep index within bounds
      if (index < 1) index = 1;
      if (index > totalFrames) index = totalFrames;
      
      const img = images[index - 1];
      if (img && img.complete) {
        // Draw using 'contain' logic to prevent cutting the video
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        // Use "cover" logic to ensure there are NEVER any black borders/empty spaces
        if (canvasRatio > imgRatio) {
          // Canvas is proportionally wider than image: stretch width to match canvas, allow height to overflow
          drawWidth = canvas.width;
          drawHeight = img.height * (canvas.width / img.width);
        } else {
          // Canvas is proportionally taller than image: stretch height to match canvas, allow width to overflow
          drawHeight = canvas.height;
          drawWidth = img.width * (canvas.height / img.height);
        }

        // Apply a 10% zoom to push the Veed watermark off the screen
        const zoomFactor = 1.10;
        drawWidth *= zoomFactor;
        drawHeight *= zoomFactor;

        // Center the image (this will natively crop the overlapping edges)
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;

        // Fill background with black to avoid empty spaces
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw the frame
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Draw the first frame as soon as it loads
    images[0].onload = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       render(1);
    };

    // Handle window resize dynamically
    const handleResize = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       render(Math.round(frameIndex.get()));
    };
    window.addEventListener("resize", handleResize);

    // Re-render whenever the framer motion scroll value changes
    const unsubscribe = frameIndex.onChange((val) => {
      render(Math.round(val));
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-screen z-[-50] overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Dark overlay to ensure text readability across the site */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
    </div>
  );
}
