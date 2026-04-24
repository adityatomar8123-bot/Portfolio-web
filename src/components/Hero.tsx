'use client';
import { useEffect, useRef, useState } from 'react';
import FlipCard from './FlipCard';

const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Next.js Architect', 'Creative Coder'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);

    // Typewriter cycling
    let timeout: NodeJS.Timeout;
    const cycle = () => {
      setRoleIdx(i => (i + 1) % roles.length);
      setCharIdx(0);
      timeout = setTimeout(cycle, 3500);
    };
    timeout = setTimeout(cycle, 3500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (charIdx < roles[roleIdx].length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 55);
      return () => clearTimeout(t);
    }
  }, [charIdx, roleIdx]);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '6rem',
    }}>
      {/* Animated ring */}
      <svg style={{
        position: 'absolute', top: '50%', right: '-10%',
        transform: 'translateY(-50%)',
        width: '600px', height: '600px', opacity: 0.12,
        pointerEvents: 'none',
      }} viewBox="0 0 600 600">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#4fc3f7" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="260" fill="none"
          stroke="url(#ringGrad)" strokeWidth="1"
          strokeDasharray="8 16"
          style={{ transformOrigin: '300px 300px', animation: 'spin-slow 30s linear infinite' }} />
        <circle cx="300" cy="300" r="200" fill="none"
          stroke="#a78bfa" strokeWidth="0.5"
          strokeDasharray="4 20"
          style={{ transformOrigin: '300px 300px', animation: 'spin-slow 20s linear infinite reverse' }} />
        <circle cx="300" cy="300" r="140" fill="none"
          stroke="#4fc3f7" strokeWidth="0.5"
          style={{ transformOrigin: '300px 300px', animation: 'spin-slow 15s linear infinite' }} />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '90px', flexWrap: 'wrap',
        }}>
          {/* Left: Text content */}
          <div style={{ maxWidth: '900px', flex: '1 1 400px' }}>

            {/* Overline */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '0.75rem',
                letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase',
              }}>Aditya Tomar — Portfolio</span>
            </div>

            {/* Main heading */}
            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.75,
              fontWeight: 900, textTransform: 'uppercase',
              marginBottom: '1.2rem', letterSpacing: '-0.04em',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}>
              <span style={{ display: 'block', color: 'var(--text)' }}>CRAFTING</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold2) 40%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'shimmer 4s linear infinite',
              }}>DIGITAL</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>EXPERIENCES</span>
            </h1>

            {/* Role typewriter */}
            <div style={{
              height: '2.5rem', marginBottom: '2.5rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s 0.4s',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                fontWeight: 500, color: 'var(--text2)',
                letterSpacing: '0.02em',
              }}>
                {roles[roleIdx].slice(0, charIdx)}
                <span style={{
                  display: 'inline-block', width: '2px', height: '1.4rem',
                  background: 'var(--gold)', verticalAlign: 'middle',
                  marginLeft: '2px',
                  animation: 'pulse-glow 0.8s ease-in-out infinite',
                }} />
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.15rem', color: 'var(--text2)', maxWidth: '520px',
              lineHeight: 1.8, marginBottom: '3rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s',
            }}>
              Building smart solutions from scratch, breaking problems into code that just hits right — clean, logical, and kinda satisfying ngl.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: '1rem', flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s',
            }}>
              <a href="#projects" style={{
                padding: '0.9rem 2.2rem', borderRadius: '8px',
                background: 'var(--gold)', color: 'var(--bg)',
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '0.9rem', letterSpacing: '0.06em',
                transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(232,184,75,0.35)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >View Work</a>

              <a href="#contact" style={{
                padding: '0.9rem 2.2rem', borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--text)', background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: '0.9rem', letterSpacing: '0.06em',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                }}
              >Get in Touch</a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: '3rem', marginTop: '4rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 1s 0.9s',
            }}>
              {[
                { num: '2', label: 'Projects Built' },
                { num: '1+', label: 'Year Experience' },
                { num: '∞', label: 'Cups of Coffee' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800,
                    color: 'var(--gold)', lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text3)', marginTop: '0.3rem', letterSpacing: '0.05em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Flip Card */}
          <div style={{
            flex: '0 0 auto',
            marginTop: '-160px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(60px)',
            transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.4s',
          }}>
            <FlipCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        opacity: visible ? 0.5 : 0, transition: 'opacity 1s 1.2s',
      }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text3)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
