function getRank(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { title: 'GENIO TOTAL', color: '#fbbf24' };
  if (pct >= 80) return { title: 'EXPERTO', color: '#60a5fa' };
  if (pct >= 60) return { title: 'AVANZADO', color: '#34d399' };
  if (pct >= 40) return { title: 'APRENDIZ', color: '#fb923c' };
  return { title: 'PRINCIPIANTE', color: '#f87171' };
}

export default function ResultsScreen({ score, total, history, onRestart, onReview, remainingAttempts }) {
  const rank = getRank(score, total);
  const wrong = history.filter(h => h.chosen !== -1 && h.chosen !== h.correct).length;
  const skipped = history.filter(h => h.chosen === -1).length;

  return (
    <div style={{
      maxWidth: 600,
      width: '100%',
      margin: '0 auto',
      padding: '0 16px',
      animation: 'scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }}>
      <div style={{
        background: 'rgba(18, 18, 28, 0.6)',
        backdropFilter: 'blur(20px)',
        borderRadius: 'clamp(32px, 8vw, 40px)',
        padding: 'clamp(32px, 8vw, 48px) clamp(24px, 6vw, 32px)',
        marginBottom: 24,
        border: `2px solid ${rank.color}66`,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 'clamp(48px, 12vw, 72px)',
          marginBottom: 16,
          animation: 'floatAround 3s ease-in-out infinite',
        }}>🏆</div>
        <div style={{
          fontSize: 'clamp(40px, 12vw, 80px)',
          fontWeight: 800,
          color: rank.color,
          textShadow: `0 0 30px ${rank.color}`,
          marginBottom: 8,
        }}>
          {score}<span style={{ fontSize: '30%', color: 'rgba(255,255,255,0.4)' }}>/{total}</span>
        </div>
        <div style={{
          display: 'inline-block',
          background: `linear-gradient(135deg, ${rank.color}20, transparent)`,
          padding: '8px 24px',
          borderRadius: '50px',
          marginTop: 16,
          marginBottom: 8,
        }}>
          <span style={{ fontWeight: 700, color: rank.color, fontSize: 'clamp(14px, 4vw, 16px)' }}>
            {rank.title}
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { val: score, label: 'Correctas', color: '#4ade80' },
          { val: wrong, label: 'Incorrectas', color: '#f87171' },
          { val: skipped, label: 'Sin respuesta', color: '#fbbf24' },
        ].map((s, idx) => (
          <div
            key={s.label}
            style={{
              background: 'rgba(18, 18, 28, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'clamp(20px, 5vw, 24px)',
              padding: 'clamp(16px, 4vw, 20px)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              animation: `slideInFromLeft ${0.3 + idx * 0.1}s ease-out`,
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: 'clamp(28px, 7vw, 32px)', fontWeight: 800, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        style={{
          width: '100%',
          padding: 'clamp(14px, 4vw, 16px)',
          background: 'linear-gradient(135deg, #69bc6f, #4a9f4f)',
          color: '#fff',
          borderRadius: '50px',
          fontSize: 'clamp(14px, 4vw, 16px)',
          fontWeight: 700,
          marginBottom: 12,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 10px 30px rgba(105,188,111,0.5)';
        }}
        onMouseLeave={e => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}>
        {remainingAttempts > 1 ? `JUGAR DE NUEVO (${remainingAttempts - 1} intentos)` : 'ULTIMO INTENTO'}
      </button>
      
      <button
        onClick={onReview}
        style={{
          width: '100%',
          padding: 'clamp(12px, 3.5vw, 14px)',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'rgba(255,255,255,0.7)',
          borderRadius: '50px',
          fontSize: 'clamp(12px, 3.5vw, 14px)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.target.style.background = 'rgba(255,255,255,0.1)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.target.style.background = 'rgba(255,255,255,0.05)';
          e.target.style.transform = 'translateY(0)';
        }}>
        VER RESPUESTAS DETALLADAS
      </button>
    </div>
  );
}