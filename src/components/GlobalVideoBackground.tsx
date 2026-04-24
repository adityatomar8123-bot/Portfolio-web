'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  hue: number; life: number; maxLife: number;
}

export default function GlobalVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', e => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    });

    const spawnParticle = () => {
      const edge = Math.random();
      let x: number, y: number;
      if (edge < 0.25) { x = Math.random() * w; y = 0; }
      else if (edge < 0.5) { x = w; y = Math.random() * h; }
      else if (edge < 0.75) { x = Math.random() * w; y = h; }
      else { x = 0; y = Math.random() * h; }

      const angle = Math.atan2(h / 2 - y, w / 2 - x) + (Math.random() - 0.5) * 1.5;
      const speed = 0.2 + Math.random() * 0.6;
      const hue = Math.random() < 0.7 ? 42 : 195; // gold or cyan

      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0,
        hue,
        life: 0,
        maxLife: 300 + Math.random() * 400,
      });
    };

    // Constellation lines between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08 * particles[i].opacity * particles[j].opacity;
            ctx.strokeStyle = `rgba(232,184,75,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Ambient grid
    const drawGrid = (t: number) => {
      ctx.save();
      const gridSize = 80;
      const cols = Math.ceil(w / gridSize) + 1;
      const rows = Math.ceil(h / gridSize) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          const dist = Math.sqrt((x - mouseRef.current.x) ** 2 + (y - mouseRef.current.y) ** 2);
          const brightness = Math.max(0, 1 - dist / 350);
          const pulse = Math.sin(t * 0.001 + i * 0.3 + j * 0.4) * 0.5 + 0.5;
          ctx.fillStyle = `rgba(232,184,75,${0.03 + brightness * 0.08 + pulse * 0.02})`;
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    };

    // Orbs floating in background
    const orbs = Array.from({ length: 4 }, (_, i) => ({
      x: (i + 1) * (w / 5), y: h * (0.2 + i * 0.2),
      r: 150 + Math.random() * 200,
      hue: i % 2 === 0 ? 42 : 195,
      phase: Math.random() * Math.PI * 2,
      speed: 0.0003 + Math.random() * 0.0004,
    }));

    const drawOrbs = (t: number) => {
      orbs.forEach(orb => {
        const y = orb.y + Math.sin(t * orb.speed + orb.phase) * 30;
        const grd = ctx.createRadialGradient(orb.x, y, 0, orb.x, y, orb.r);
        const alpha = orb.hue === 42 ? 0.06 : 0.04;
        grd.addColorStop(0, `hsla(${orb.hue},80%,60%,${alpha})`);
        grd.addColorStop(1, `hsla(${orb.hue},80%,60%,0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(orb.x, y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    let t = 0;
    const loop = () => {
      t++;
      ctx.clearRect(0, 0, w, h);

      // Gradient base
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#050508');
      bg.addColorStop(0.5, '#070710');
      bg.addColorStop(1, '#050508');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      drawOrbs(t);
      drawGrid(t);

      // Spawn particles
      if (particles.length < 120 && t % 3 === 0) spawnParticle();

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repel
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += (dx / dist) * 0.05;
          p.vy += (dy / dist) * 0.05;
        }

        // Damping
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Fade in/out
        const progress = p.life / p.maxLife;
        if (progress < 0.1) p.opacity = progress / 0.1;
        else if (progress > 0.8) p.opacity = 1 - (progress - 0.8) / 0.2;
        else p.opacity = 1;

        if (p.life >= p.maxLife) { particles.splice(i, 1); continue; }
        if (p.x < -50 || p.x > w + 50 || p.y < -50 || p.y > h + 50) { particles.splice(i, 1); continue; }

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.85;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grd.addColorStop(0, `hsla(${p.hue},80%,70%,1)`);
        grd.addColorStop(1, `hsla(${p.hue},80%,70%,0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      drawConnections();

      // Noise scanlines (subtle)
      if (t % 4 === 0) {
        for (let i = 0; i < h; i += 4) {
          ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.015})`;
          ctx.fillRect(0, i, w, 1);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  );
}
