'use client';
import { useEffect, useRef } from 'react';

export default function ScrollVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 192;
  const displayFrameRef = useRef(0);
  const scrollTargetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const idlePhaseRef = useRef(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Cache canvas dimensions to avoid re-measuring every frame
  const dimRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    let loadedCount = 0;
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/video-frames/frame_${i.toString().padStart(4, '0')}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1 && canvasRef.current && framesRef.current[0]) {
          resizeCanvas();
          drawBlended(canvasRef.current, 0);
        }
      };
      framesRef.current.push(img);
    }
  }, []);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = 1; // keep at 1 for performance
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    dimRef.current = { w: canvas.width, h: canvas.height };
  };

  // Draw a single frame (no blending) for resize events
  const drawSingle = (canvas: HTMLCanvasElement, idx: number) => {
    const ctx = canvas.getContext('2d');
    const maxIdx = totalFrames - 1;
    let reflectedIdx = Math.abs(idx);
    while (reflectedIdx > maxIdx) {
      reflectedIdx = Math.abs(2 * maxIdx - reflectedIdx);
    }
    const img = framesRef.current[Math.round(reflectedIdx)];
    if (!ctx || !img?.complete) return;
    const { w, h } = dimRef.current;
    const ir = img.width / img.height;
    const cr = w / h;
    let dw = w, dh = h, ox = 0, oy = 0;
    if (cr > ir) { dh = w / ir; oy = (h - dh) / 2; }
    else { dw = h * ir; ox = (w - dw) / 2; }
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, ox, oy, dw, dh);
  };

  // Cross-fade blended rendering — buttery smooth sub-frame interpolation
  const drawBlended = (canvas: HTMLCanvasElement, floatIdx: number) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const maxIdx = totalFrames - 1;
    let reflectedIdx = Math.abs(floatIdx);
    while (reflectedIdx > maxIdx) {
      reflectedIdx = Math.abs(2 * maxIdx - reflectedIdx);
    }
    
    const lo = Math.floor(reflectedIdx);
    const hi = Math.min(lo + 1, maxIdx);
    const t = reflectedIdx - lo;
    const imgA = framesRef.current[lo];
    if (!imgA?.complete) return;

    const { w, h } = dimRef.current;
    const ir = imgA.width / imgA.height;
    const cr = w / h;
    let dw = w, dh = h, ox = 0, oy = 0;
    if (cr > ir) { dh = w / ir; oy = (h - dh) / 2; }
    else { dw = h * ir; ox = (w - dw) / 2; }

    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(imgA, ox, oy, dw, dh);

    const imgB = framesRef.current[hi];
    if (imgB?.complete && t > 0.005) {
      ctx.globalAlpha = t;
      ctx.drawImage(imgB, ox, oy, dw, dh);
      ctx.globalAlpha = 1;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas();

    // Continuous animation loop — NEVER stops
    const animate = (time: number) => {
      const dt = lastTimeRef.current ? (time - lastTimeRef.current) / 1000 : 0.016;
      lastTimeRef.current = time;

      // Always advance idle phase — even during scroll — so transition is seamless
      idlePhaseRef.current += dt * 1.5; // ~1.5 radians/sec = faster moving

      if (isScrollingRef.current) {
        // Smooth chase toward scroll position
        const diff = scrollTargetRef.current - displayFrameRef.current;
        displayFrameRef.current += diff * Math.min(1, dt * 8); // ~8x/sec convergence
      } else {
        // Idle breathing: continuous sine wave oscillation ±30 frames around scroll position
        const baseFrame = scrollTargetRef.current;
        const breathe = Math.sin(idlePhaseRef.current) * 30;
        const target = baseFrame + breathe;
        const diff = target - displayFrameRef.current;
        displayFrameRef.current += diff * Math.min(1, dt * 3); // softer chase = smoother
      }

      drawBlended(canvas, displayFrameRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      resizeCanvas();
      drawSingle(canvas, displayFrameRef.current);
    };
    window.addEventListener('resize', onResize);

    const onScroll = () => {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 400); // shorter timeout = quicker return to breathing

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      scrollTargetRef.current = Math.max(0, Math.min(
        totalFrames - 1,
        (window.scrollY / maxScroll) * totalFrames
      ));
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 0, background: '#000',
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.6,
        }}
      />
      {/* Ultra-smooth multi-stop overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(180deg,
            rgba(3,7,18,0.45) 0%,
            rgba(3,7,18,0.2) 12%,
            rgba(0,0,0,0.08) 30%,
            transparent 45%,
            transparent 55%,
            rgba(0,0,0,0.08) 70%,
            rgba(3,7,18,0.2) 88%,
            rgba(3,7,18,0.45) 100%
          )
        `,
        pointerEvents: 'none',
      }} />
    </div>
  );
}
