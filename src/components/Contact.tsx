'use client';
import { useEffect, useRef, useState } from 'react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const socials = [
  { label: 'GitHub', href: 'https://github.com/adityatomar8123-bot', icon: <GithubIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-pratap-singh-tomar-2b35193a6/', icon: <LinkedInIcon /> },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=adityatomar8123@gmail.com', icon: <MailIcon /> },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '0.9rem 1.1rem',
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
    outline: 'none', transition: 'all 0.3s',
    resize: 'none' as const,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
  };

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '10rem 0', position: 'relative' }}>
      {/* Big ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(232,184,75,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>04 — Contact</span>
          <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(to right, var(--gold), transparent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start' }}>
          {/* Left */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '3rem',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
          }}>
            <h2 className="reveal" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem',
              letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
              Let's build<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--gold), var(--accent))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>something great.</span>
            </h2>

            <p className="reveal reveal-delay-1" style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '3rem', fontSize: '1.1rem' }}>
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
            </p>

            <div className="reveal reveal-delay-2" style={{ marginBottom: '3rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.9rem 0',
                  color: 'var(--text2)', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                    (e.currentTarget as HTMLElement).style.paddingLeft = '0.5rem';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text2)';
                    (e.currentTarget as HTMLElement).style.paddingLeft = '0';
                  }}
                >
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    border: '1px solid var(--border)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                    color: 'var(--gold)',
                  }}>{s.icon}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '0.03em' }}>{s.label}</span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.8rem' }}>→</span>
                </a>
              ))}
            </div>

            {/* Availability indicator */}
            <div className="reveal reveal-delay-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#34d399', boxShadow: '0 0 12px #34d39980',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text2)', fontFamily: 'var(--font-display)' }}>
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2" style={{ marginTop: '12rem' }}>
            {sent ? (
              <div style={{
                padding: '3rem', border: '1px solid rgba(52,211,153,0.3)',
                borderRadius: '12px', textAlign: 'center',
                background: 'rgba(52,211,153,0.05)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.75rem', color: '#34d399' }}>Message sent!</h3>
                <p style={{ color: 'var(--text2)' }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text3)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Name</label>
                  <input
                    type="text" required value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--gold)'; (e.target as HTMLElement).style.background = 'rgba(232,184,75,0.04)'; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--border)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text3)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email</label>
                  <input
                    type="email" required value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--gold)'; (e.target as HTMLElement).style.background = 'rgba(232,184,75,0.04)'; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--border)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text3)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Message</label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--gold)'; (e.target as HTMLElement).style.background = 'rgba(232,184,75,0.04)'; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--border)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                  />
                </div>
                <button type="submit" disabled={sending} style={{
                  padding: '1rem 2rem', borderRadius: '6px',
                  background: sending ? 'var(--gold3)' : 'var(--gold)',
                  color: 'var(--bg)', border: 'none',
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.9rem', letterSpacing: '0.06em',
                  cursor: sending ? 'wait' : 'pointer',
                  transition: 'all 0.3s',
                  position: 'relative', overflow: 'hidden',
                }}
                  onMouseEnter={e => {
                    if (!sending) {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(232,184,75,0.35)';
                    }
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
