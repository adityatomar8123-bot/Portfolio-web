'use client';
import { useEffect, useRef } from 'react';

const skills = [
  { name: 'Next.js / React', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js / Express', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'PostgreSQL / MongoDB', level: 75 },
  { name: 'Docker / DevOps', level: 65 },
];

const tags = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Figma', 'AWS', 'Redis', 'GraphQL'];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const animatedRef = useRef(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els?.forEach(el => observer.observe(el));

    const barObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          barsRef.current.forEach((bar, i) => {
            setTimeout(() => {
              if (bar) bar.style.width = bar.dataset.level + '%';
            }, i * 120);
          });
        }
      });
    }, { threshold: 0.3 });

    const barSection = sectionRef.current?.querySelector('.skill-bars');
    if (barSection) barObserver.observe(barSection);

    return () => { observer.disconnect(); barObserver.disconnect(); };
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: '5rem 0', position: 'relative' }}>
      {/* Section label */}
      <div className="container">
        <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>01 — About</span>
          <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(to right, var(--gold), transparent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start' }}>
          {/* Left: text */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(16px) saturate(1.2)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: 'none',
            boxShadow: '0 4px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}>
            <h2 className="reveal" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem',
              lineHeight: 1.1, letterSpacing: '-0.02em',
              fontWeight: 700, textTransform: 'uppercase'
            }}>
              TURNING IDEAS<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--gold), var(--accent))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>INTO PIXELS.</span>
            </h2>

            <p className="reveal reveal-delay-1" style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              I'm a passionate full-stack developer who believes great software is a blend of engineering precision and design intuition. I specialise in building scalable, user-first applications that people actually enjoy using.
            </p>

            <p className="reveal reveal-delay-2" style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '3rem', fontSize: '1.1rem' }}>
              When I'm not building things for the web, I'm exploring new frameworks, contributing to open source, or obsessing over micro-interactions that most people will never notice — but will always feel.
            </p>

            {/* Tech tags */}
            <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  padding: '0.3rem 0.9rem', borderRadius: '4px',
                  border: '1px solid var(--border2)',
                  fontSize: '0.78rem', fontFamily: 'var(--font-display)',
                  color: 'var(--text3)', letterSpacing: '0.04em',
                  transition: 'all 0.25s', cursor: 'default',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--gold)';
                    el.style.color = 'var(--gold)';
                    el.style.background = 'var(--glow)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--border2)';
                    el.style.color = 'var(--text3)';
                    el.style.background = 'transparent';
                  }}
                >{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: skill bars */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(16px) saturate(1.2)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: 'none',
            boxShadow: '0 4px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}>
            <div className="skill-bars" style={{ marginBottom: '3rem' }}>
              {skills.map((s, i) => (
                <div key={s.name} className="reveal" style={{ marginBottom: '1.8rem', transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}>{s.name}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 500 }}>{s.level}%</span>
                  </div>
                  <div style={{ height: '2px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div
                      ref={el => { if (el) barsRef.current[i] = el; }}
                      data-level={s.level}
                      style={{
                        height: '100%', width: '0%', borderRadius: '2px',
                        background: `linear-gradient(to right, var(--gold3), var(--gold), ${i % 2 ? 'var(--accent)' : 'var(--gold2)'})`,
                        transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                        position: 'relative',
                      }}
                    >
                      <div style={{
                        position: 'absolute', right: 0, top: '-3px',
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: 'var(--gold)',
                        boxShadow: '0 0 8px var(--gold)',
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '◈', label: 'Clean Code', desc: 'Readable, maintainable, scalable' },
                { icon: '◇', label: 'Fast & Accessible', desc: 'Performance-first development' },
                { icon: '◎', label: 'User Focused', desc: 'Empathy-driven design decisions' },
                { icon: '◉', label: 'Always Learning', desc: 'Staying ahead of the curve' },
              ].map(v => (
                <div key={v.label} className="reveal" style={{
                  padding: '1.2rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,184,75,0.25)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(232,184,75,0.06)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(232,184,75,0.1), inset 0 1px 0 rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)';
                  }}
                >
                  <span style={{ fontSize: '1.2rem', color: 'var(--gold)', display: 'block', marginBottom: '0.5rem' }}>{v.icon}</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{v.label}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.5 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
