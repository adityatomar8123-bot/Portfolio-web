'use client';

const techTags = [
  { name: 'React', icon: '⚛', color: '#61dafb' },
  { name: 'TS', icon: '𝗧𝗦', color: '#3178c6' },
  { name: 'Node', icon: '⬢', color: '#68a063' },
  { name: 'Next', icon: 'Ⓝ', color: '#ffffff' },
  { name: 'Python', icon: '🐍', color: '#f7df1e' },
  { name: 'AI/ML', icon: '⚙', color: '#34d399' },
];

const cardBase: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(30px) saturate(1.5)',
  WebkitBackdropFilter: 'blur(30px) saturate(1.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
};

export default function FlipCard() {
  return (
    <div className="flip-card" style={{ width: '600px', height: '400px' }}>
      <div className="flip-card-inner">

        {/* ═══════════ FRONT — Personal Card ═══════════ */}
        <div className="flip-card-front" style={{
          ...cardBase,
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
        }}>

          {/* Header: Avatar + Name */}
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #1a1a2e, #2d2d44)',
              border: '2px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem', flexShrink: 0,
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}>
              👨‍💻
            </div>
            <div>
              <div style={{
                fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)',
                fontFamily: 'monospace', marginBottom: '0.3rem',
              }}>
                {'// full-stack dev'}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem',
                fontWeight: 800, lineHeight: 1, marginBottom: '0.3rem',
                color: '#f5f5f5',
              }}>
                Aditya<br />Tomar
              </h3>
              <div style={{
                fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)',
                fontFamily: 'var(--font-display)',
              }}>
                CS &apos;29 • Amity Univ Gwalior
              </div>
            </div>
          </div>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {techTags.map(t => (
              <span key={t.name} style={{
                padding: '0.35rem 0.8rem', borderRadius: '8px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.78rem', fontWeight: 600,
                color: '#e5e5e5', fontFamily: 'var(--font-display)',
                display: 'flex', alignItems: 'center', gap: '0.3rem',
              }}>
                <span style={{ color: t.color, fontSize: '0.7rem' }}>{t.icon}</span>
                {t.name}
              </span>
            ))}
          </div>

          {/* Bio glass panel */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '14px',
            padding: '1rem',
            border: '1px solid rgba(255,255,255,0.06)',
            marginBottom: '1rem',
            flex: 1,
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1.05rem', lineHeight: 1.4, marginBottom: '0.8rem',
              color: '#f0f0f0',
            }}>
              Turning ideas into real-world impact.
            </div>
            <p style={{
              fontSize: '0.85rem', lineHeight: 1.7,
              color: 'rgba(255,255,255,0.5)',
            }}>
              I love building things from scratch, solving complex problems, and
              shipping products that make a difference. Always learning, always
              building, always leveling up.
            </p>
          </div>

          {/* Open to work */}
          <div style={{ marginBottom: '0.8rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1.2rem', borderRadius: '24px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.85rem', fontWeight: 600,
              color: '#f0f0f0', fontFamily: 'var(--font-display)',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#34d399',
                boxShadow: '0 0 10px #34d399',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }} />
              Open to work
            </span>
          </div>

          {/* Social icons
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {[
              { icon: '⌘', label: 'GitHub', href: 'https://github.com/adityatomar8123-bot' },
              { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-pratap-singh-tomar-2b35193a6/' },
              { icon: '✉', label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=adityatomar8123@gmail.com' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                width: '52px', height: '44px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)',
                fontFamily: 'var(--font-display)', fontWeight: 700,
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                }}
              >{s.icon}</a>
            ))}
          </div> */}

          {/* Hover hint */}
          <div style={{
            marginTop: 'auto', paddingTop: '0.8rem',
            fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)',
            fontFamily: 'monospace', textAlign: 'center',
          }}>
            hover to flip →
          </div>
        </div>

        {/* ═══════════ BACK — Mindset Card ═══════════ */}
        <div className="flip-card-back" style={{
          ...cardBase,
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
        }}>

          {/* Terminal header */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            marginBottom: '0.8rem',
          }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b3b3b' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b3b3b' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b3b3b' }} />
            <span style={{
              marginLeft: '0.6rem', fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace',
            }}>
              aditya.mindset.js
            </span>
          </div>

          {/* Code block */}
          <pre style={{
            fontSize: '0.72rem', lineHeight: 1.8, fontFamily: 'monospace',
            color: '#d4d4d4', margin: 0, marginBottom: '1rem',
            whiteSpace: 'pre-wrap',
          }}>
            <span style={{ color: '#555' }}>{'// genz mode: always on'}</span>{'\n'}

            <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#f0f0f0', fontWeight: 700 }}>aditya</span> = {'{'}{'\n'}
            {'  '}code: <span style={{ color: '#34d399' }}>&quot;passion&quot;</span>,{'\n'}
            {'  '}fuel: <span style={{ color: '#34d399' }}>&quot;caffeine ☕&quot;</span>,{'\n'}
            {'  '}vibe: <span style={{ color: '#34d399' }}>&quot;build • break • learn • repeat&quot;</span>,{'\n'}
            {'  '}goal: <span style={{ color: '#34d399' }}>&quot;solve problems. build impact.&quot;</span>,{'\n'}
            {'  '}status: <span style={{ color: '#34d399' }}>&quot;in_the_zone&quot;</span>{'\n'}
            {'}'}{'\n'}

            <span style={{ color: '#555' }}>{'// daily routine'}</span>{'\n'}
            <span style={{ color: '#c084fc' }}>while</span> (alive) {'{'}{'\n'}
            {'  '}learn();{'\n'}
            {'  '}build();{'\n'}
            {'  '}breakThings(); <span style={{ color: '#555' }}>{'// so i truly understand'}</span>{'\n'}
            {'  '}improve();{'\n'}
            {'  '}repeat();{'\n'}
            {'}'}{'\n'}
            {'\n'}
            <span style={{ color: '#555' }}>{'// shipping dreams. not just code. 🚀'}</span>
          </pre>

          {/* Quick stats header */}
          <div style={{
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)',
            fontFamily: 'monospace', marginBottom: '0.6rem',
          }}>
            quick.stats()
          </div>

          {/* Stats rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.8rem' }}>
            {[
              { icon: '⚡', num: '2', label: 'PROJECTS BUILT', color: '#f59e0b' },
              { icon: '', num: '1+', label: 'HACKATHONS JOINED', color: '#a78bfa' },
              { icon: '🏆', num: '2', label: 'AWARDS EARNED', color: '#f59e0b' },
            ].map(s => (
              <div key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.55rem 0.8rem', borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                {s.icon && <span style={{ fontSize: '0.85rem' }}>{s.icon}</span>}
                <span style={{
                  fontSize: '1.1rem', fontWeight: 800, color: '#f0f0f0',
                  fontFamily: 'var(--font-display)', minWidth: '28px',
                }}>{s.num}</span>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)',
                  fontFamily: 'var(--font-display)', letterSpacing: '0.1em',
                }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
            {[
              { icon: '🏅', text: 'SIH Internal Round Qualifier' },
              { icon: '⚙', text: 'CTF Competitor — 7th Place' },
            ].map(a => (
              <div key={a.text} style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)',
                fontFamily: 'var(--font-display)',
              }}>
                <span style={{ fontSize: '0.95rem' }}>{a.icon}</span>
                {a.text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
