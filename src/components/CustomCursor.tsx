'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const posRef = useRef({ x: -100, y: -100 });
  const dotPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let animId: number;
    let isHovering = false;
    let isClicking = false;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const onEnter = () => {
      isHovering = true;
      cursor.style.width = '56px';
      cursor.style.height = '56px';
      cursor.style.borderColor = '#c084fc';
      cursor.style.background = 'rgba(167,139,250,0.12)';
      cursor.style.boxShadow = '0 0 20px rgba(167,139,250,0.3)';
    };

    const onLeave = () => {
      isHovering = false;
      cursor.style.width = '32px';
      cursor.style.height = '32px';
      cursor.style.borderColor = 'rgba(167,139,250,0.5)';
      cursor.style.background = 'transparent';
      cursor.style.boxShadow = 'none';
    };

    const onDown = () => {
      isClicking = true;
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      cursor.style.borderColor = '#e879f9';
    };

    const onUp = () => {
      isClicking = false;
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'rgba(167,139,250,0.5)';
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      dotPosRef.current.x = lerp(dotPosRef.current.x, posRef.current.x, 0.12);
      dotPosRef.current.y = lerp(dotPosRef.current.y, posRef.current.y, 0.12);
      cursor.style.left = dotPosRef.current.x + 'px';
      cursor.style.top = dotPosRef.current.y + 'px';
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Use MutationObserver to handle dynamically-added elements
    const attachListeners = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor]');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachListeners();

    const observer = new MutationObserver(() => attachListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring — violet/purple */}
      <div ref={cursorRef} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9999,
        width: '32px', height: '32px', borderRadius: '50%',
        border: '1.5px solid rgba(167,139,250,0.5)',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s, box-shadow 0.3s',
        mixBlendMode: 'difference',
        left: '-100px', top: '-100px',
      }} />
      {/* Center dot — bright violet */}
      <div ref={dotRef} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 10000,
        width: '5px', height: '5px', borderRadius: '50%',
        background: '#a78bfa',
        boxShadow: '0 0 8px rgba(167,139,250,0.6)',
        transform: 'translate(-50%, -50%)',
        left: '-100px', top: '-100px',
        transition: 'transform 0.1s',
      }} />
    </>
  );
}
