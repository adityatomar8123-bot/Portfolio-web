'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['about', 'experience', 'projects', 'contact'];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) setActive(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: '1.5rem', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: scrolled ? 'rgba(10,8,15,0.75)' : 'rgba(10,8,15,0.35)',
        backdropFilter: 'blur(24px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
        border: `1px solid ${scrolled ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '60px',
        padding: '0.75rem 2rem',
        display: 'flex', alignItems: 'center', gap: '3rem',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)' : 'inset 0 1px 0 rgba(255,255,255,0.04)',
        minWidth: '600px',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: '1.1rem', letterSpacing: '0.05em',
          background: 'linear-gradient(135deg, var(--gold), var(--gold2))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', whiteSpace: 'nowrap',
        }}>AT</a>

        <div style={{ display: 'flex', gap: '0.25rem', flex: 1, justifyContent: 'center' }}>
          {links.map(l => {
            const isActive = active === l.href.slice(1);
            return (
              <a key={l.href} href={l.href} style={{
                padding: '0.4rem 1.1rem', borderRadius: '30px', fontSize: '0.85rem',
                letterSpacing: '0.04em', fontWeight: 500, fontFamily: 'var(--font-display)',
                color: isActive ? 'var(--bg)' : 'var(--text2)',
                background: isActive ? 'var(--gold)' : 'transparent',
                transition: 'all 0.25s', position: 'relative',
              }}
                onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--text)'; }}
                onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--text2)'; }}
              >{l.label}</a>
            );
          })}
        </div>

        <a href="#contact" style={{
          padding: '0.4rem 1.2rem', borderRadius: '30px', fontSize: '0.8rem',
          fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.06em',
          border: '1px solid rgba(232,184,75,0.4)',
          color: 'var(--gold)',
          transition: 'all 0.25s', whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = 'var(--gold)';
            el.style.color = 'var(--bg)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = 'transparent';
            el.style.color = 'var(--gold)';
          }}
        >Hire me →</a>
      </nav>
    </>
  );
}
