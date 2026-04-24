'use client';
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Jeevan Amrit',
    desc: 'Ayurvedic Health Dashboard — A comprehensive wellness platform for doctors and patients. Features Dosha-based diet planning, Ayurvedic health questionnaires, and clinical reporting. Bridges ancient Ayurvedic wisdom with modern nutritional science for healthcare practitioners.',
    tags: ['React', 'TypeScript', 'Supabase'],
    color: '#34d399',
    size: 'large',
    icon: '🌿',
    link: 'https://github.com/adityatomar8123-bot',
  },
  {
    title: 'Portfolio',
    desc: 'This very website — a cinematic, scroll-driven portfolio with frame-by-frame video animation, custom cursor, and premium micro-interactions. Built to showcase work with style.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Canvas'],
    color: '#e8b84b',
    size: 'large',
    icon: '◈',
    link: 'https://github.com/adityatomar8123-bot/Portfolio-web',
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * 12;
    const tiltY = (x - 0.5) * -12;
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    card.style.setProperty('--mouse-x', `${x * 100}%`);
    card.style.setProperty('--mouse-y', `${y * 100}%`);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)';
    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        padding: '2rem', borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
        transition: 'transform 0.1s, box-shadow 0.3s, border-color 0.3s, background 0.3s',
        cursor: 'pointer', position: 'relative', overflow: 'hidden',
        gridColumn: 'span 1',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minHeight: '280px',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${project.color}40`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.color}15, inset 0 1px 0 rgba(255,255,255,0.08)`;
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
      }}
    >
      {/* Gradient spotlight */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0,
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}15 0%, transparent 60%)`,
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
      }} className="card-spotlight" />

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '1.8rem', color: project.color }}>{project.icon}</span>
        <a href={project.link} style={{
          padding: '0.3rem 0.8rem', borderRadius: '30px',
          border: `1px solid ${project.color}40`,
          fontSize: '0.75rem', color: project.color,
          fontFamily: 'var(--font-display)', letterSpacing: '0.06em',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = `${project.color}20`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
          }}
        >View →</a>
      </div>

      {/* Content */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.map(t => (
            <span key={t} style={{
              padding: '0.2rem 0.6rem', borderRadius: '4px',
              background: 'var(--border)', fontSize: '0.72rem',
              color: 'var(--text3)', fontFamily: 'var(--font-display)',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els?.forEach(el => observer.observe(el));

    // Spotlight effect
    const cards = document.querySelectorAll('.card-spotlight');
    const onMouseMove = (e: Event) => {
      cards.forEach(c => ((c as HTMLElement).style.opacity = '1'));
    };
    const onMouseLeave = () => {
      cards.forEach(c => ((c as HTMLElement).style.opacity = '0'));
    };
    document.querySelectorAll('[data-project-card]').forEach(card => {
      card.addEventListener('mouseenter', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>02 — Projects</span>
          <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(to right, var(--gold), transparent)' }} />
        </div>

        <h2 className="reveal" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '4rem',
          letterSpacing: '-0.02em',
          fontWeight: 700, textTransform: 'uppercase'
        }}>
          DEV DROP<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--gold), var(--accent))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>WORK.</span>
        </h2>

        <div className="reveal reveal-delay-1" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        <div className="reveal reveal-delay-2" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="https://github.com/adityatomar8123-bot" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.9rem 2rem', borderRadius: '4px',
            border: '1px solid var(--border2)',
            color: 'var(--text2)', fontFamily: 'var(--font-display)',
            fontSize: '0.9rem', letterSpacing: '0.05em',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--gold)';
              el.style.color = 'var(--gold)';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--border2)';
              el.style.color = 'var(--text2)';
              el.style.transform = 'none';
            }}
          >
            View all on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}