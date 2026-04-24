'use client';

export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 0', borderTop: '1px solid var(--border)',
      position: 'relative', zIndex: 1,
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
            background: 'linear-gradient(135deg, var(--gold), var(--gold2))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Aditya Tomar</span>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text3)', fontFamily: 'var(--font-display)' }}>
          Designed & built with ♥ in Next.js — {new Date().getFullYear()}
        </p>
        <a href="#hero" style={{
          fontSize: '0.82rem', color: 'var(--text3)', fontFamily: 'var(--font-display)',
          letterSpacing: '0.06em', transition: 'color 0.25s',
        }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text3)'}
        >Back to top ↑</a>
      </div>
    </footer>
  );
}
