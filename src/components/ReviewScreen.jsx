import { LETTERS } from '../data/questions.js';

export default function ReviewScreen({ history, questions, onBack }) {
  return (
    <div style={{ 
      maxWidth: 600, 
      width: '100%', 
      margin: '0 auto',
      padding: '0 16px',
      animation: 'scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }}>
      <button 
        onClick={onBack} 
        style={{
          background: 'rgba(255,255,255,0.06)', 
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.6)', 
          borderRadius: 'clamp(12px, 3vw, 16px)',
          padding: 'clamp(8px, 2.5vw, 10px) clamp(16px, 4vw, 18px)', 
          fontSize: 'clamp(12px, 3.5vw, 14px)', 
          marginBottom: 20,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.target.style.background = 'rgba(255,255,255,0.1)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.target.style.background = 'rgba(255,255,255,0.06)';
          e.target.style.transform = 'translateY(0)';
        }}>
        ← Volver a resultados
      </button>

      <h2 style={{
        fontFamily: 'Syne, sans-serif', 
        fontSize: 'clamp(18px, 5vw, 22px)', 
        fontWeight: 700,
        color: '#fff', 
        marginBottom: 18,
      }}>
        Revision de respuestas
      </h2>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 14,
        maxHeight: 'calc(100vh - 200px)',
        overflow: 'auto',
        paddingRight: 8,
      }}
      className="custom-scrollbar">
        {history.map((h, i) => {
          const ok = h.chosen === h.correct;
          const timedOut = h.chosen === -1;
          return (
            <div 
              key={i} 
              style={{
                background: ok ? 'rgba(74,222,128,0.07)' : 'rgba(248,113,113,0.07)',
                border: `1px solid ${ok ? '#4ade8033' : '#f8717133'}`,
                borderRadius: 'clamp(16px, 4vw, 20px)', 
                padding: 'clamp(14px, 3.5vw, 16px) clamp(16px, 4vw, 18px)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                gap: 12, 
                marginBottom: 10 
              }}>
                <p style={{ 
                  fontSize: 'clamp(13px, 3.5vw, 14px)', 
                  fontWeight: 600, 
                  color: '#fff', 
                  lineHeight: 1.4, 
                  flex: 1 
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 6 }}>{i + 1}.</span>
                  {h.question}
                </p>
                <span style={{ fontSize: 'clamp(16px, 4vw, 18px)', flexShrink: 0 }}>
                  {timedOut ? '⏱' : ok ? '✓' : '✗'}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 'clamp(12px, 3vw, 13px)' }}>
                {timedOut ? (
                  <span style={{ color: '#fca5a5' }}>Sin respuesta (tiempo agotado)</span>
                ) : (
                  <span style={{ color: ok ? '#86efac' : '#fca5a5' }}>
                    Tu respuesta: {LETTERS[h.chosen]}. {h.options[h.chosen]}
                  </span>
                )}
                {!ok && (
                  <span style={{ color: '#86efac' }}>
                    · Correcta: {LETTERS[h.correct]}. {h.options[h.correct]}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}