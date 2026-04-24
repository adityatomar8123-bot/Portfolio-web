'use client';
import { useEffect, useRef } from 'react';

const experiences = [
  {
    role: 'Computer Science Student',
    company: 'Amity University, Gwalior',
    period: '2025 — 2029',
    location: 'Gwalior, India',
    desc: 'Pursuing Computer Science with a focus on full-stack development, algorithms, and modern web technologies. Building real-world projects alongside academics.',
    highlights: ['Data Structures & Algorithms', 'Full Stack Development', 'Database Design', 'Software Engineering'],
    color: '#a78bfa',
  },
  {
    role: 'Full Stack Developer',
    company: 'Self-Taught / Personal Projects',
    period: '2025 — Present',
    location: 'India',
    desc: 'Building end-to-end web applications including an Ayurvedic health platform and this portfolio. Working with React, Next.js, TypeScript, and Supabase.',
    highlights: ['Next.js & React', 'TypeScript', 'Supabase', 'Canvas Animations'],
    color: '#e8b84b',
  },
];

const achievements = [
  {
    icon: '🏅',
    title: 'Smart India Hackathon — Internal Round Qualifier',
    desc: 'Cleared the college-level internal selection round of SIH, competing against multiple teams with an innovative full-stack solution.',
    category: 'Hackathon',
    categoryColor: '#f59e0b',
  },
  {
    icon: '🛡️',
    title: 'Capture The Flag — 7th Position',
    desc: 'Secured 7th position in a competitive CTF cybersecurity challenge, demonstrating skills in web exploitation, cryptography, and reverse engineering.',
    category: 'Cybersecurity',
    categoryColor: '#60a5fa',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: '10rem 0', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>03 — Experience</span>
          <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(to right, var(--gold), transparent)' }} />
        </div>

        <h2 className="reveal" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '5rem',
          letterSpacing: '-0.02em', maxWidth: '500px',
        }}>
          The journey<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--gold), var(--accent))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>so far.</span>
        </h2>

        {/* Timeline — clean, no dots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {experiences.map((exp, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
              position: 'relative',
            }}>


              <div style={{
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                transition: 'all 0.4s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${exp.color}33`;
                  el.style.background = `rgba(255,255,255,0.05)`;
                  el.style.transform = 'translateX(8px)';
                  el.style.boxShadow = `0 8px 40px ${exp.color}15, inset 0 1px 0 rgba(255,255,255,0.08)`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.background = 'rgba(255,255,255,0.03)';
                  el.style.transform = 'none';
                  el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <div style={{ color: exp.color, fontSize: '0.95rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>{exp.company}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text3)', marginBottom: '0.2rem', fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>{exp.period}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>{exp.location}</div>
                  </div>
                </div>

                <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.2rem' }}>{exp.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.highlights.map(h => (
                    <span key={h} style={{
                      padding: '0.2rem 0.7rem', borderRadius: '30px',
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}30`,
                      fontSize: '0.78rem', color: exp.color,
                      fontFamily: 'var(--font-display)', letterSpacing: '0.03em',
                    }}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ═══ Achievements Section ═══ */}
        <div style={{ marginTop: '2rem' }}>
          <h3 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            marginBottom: '3rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <span style={{ fontSize: '1.5rem' }}>🏆</span>
            <span>
              Battle{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Scars</span>
            </span>
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}>
            {achievements.map((a, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
                padding: '2rem',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-4px) scale(1.01)';
                  el.style.borderColor = `${a.categoryColor}40`;
                  el.style.boxShadow = `0 12px 48px ${a.categoryColor}15, inset 0 1px 0 rgba(255,255,255,0.08)`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'none';
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)';
                }}
              >
                {/* Ambient glow */}
                <div style={{
                  position: 'absolute', top: '-30%', right: '-20%',
                  width: '200px', height: '200px',
                  background: `radial-gradient(circle, ${a.categoryColor}12 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{a.icon}</span>
                    <span style={{
                      padding: '0.2rem 0.7rem', borderRadius: '20px',
                      background: `${a.categoryColor}18`,
                      border: `1px solid ${a.categoryColor}35`,
                      fontSize: '0.68rem', fontWeight: 600,
                      color: a.categoryColor,
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>{a.category}</span>
                  </div>

                  <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '0.6rem',
                    lineHeight: 1.3,
                  }}>{a.title}</h4>

                  <p style={{
                    color: 'var(--text2)',
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                  }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
