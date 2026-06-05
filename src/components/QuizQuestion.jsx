import Timer from './Timer.jsx';
import { LETTERS, CATEGORY_COLORS } from '../data/questions.js';

export default function QuizQuestion({ 
  question, total, index, score, wrongCount, maxWrong, 
  timer, answered, chosen, onChoose 
}) {
  const catColor = CATEGORY_COLORS[question.category];
  const progress = ((index) / total) * 100;

  return (
    <div style={{
      width: '100%',
      maxWidth: 650,
      margin: '0 auto',
      padding: '0 16px',
      animation: 'scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }}>
      {/* Barra de progreso animada */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '20px',
        height: 6,
        marginBottom: 24,
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #69bc6f, #fbbf24)',
          borderRadius: '20px',
          transition: 'width 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          boxShadow: '0 0 10px rgba(105,188,111,0.5)',
        }} />
      </div>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span style={{
          fontSize: 'clamp(11px, 3vw, 13px)',
          color: 'rgba(255,255,255,0.5)',
          padding: '6px 12px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '20px',
        }}>
          Pregunta {index + 1} / {total}
        </span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 'clamp(13px, 3.5vw, 16px)',
            color: '#fbbf24',
            fontWeight: 'bold',
            background: 'rgba(251,191,36,0.1)',
            padding: '6px 12px',
            borderRadius: '20px',
          }}>
            {score}
          </span>
          <span style={{
            fontSize: 'clamp(11px, 3vw, 13px)',
            color: wrongCount >= 2 ? '#ef4444' : '#69bc6f',
            background: wrongCount >= 2 ? 'rgba(239,68,68,0.1)' : 'rgba(105,188,111,0.1)',
            padding: '6px 12px',
            borderRadius: '20px',
          }}>
            {wrongCount}/{maxWrong}
          </span>
          <Timer seconds={timer} total={20} />
        </div>
      </div>

      {/* Question Card */}
      <div style={{
        background: 'rgba(18, 18, 28, 0.6)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${catColor.accent}33`,
        borderRadius: 'clamp(24px, 6vw, 32px)',
        padding: 'clamp(20px, 5vw, 28px)',
        marginBottom: 20,
        transition: 'all 0.3s ease',
      }}>
        <div style={{ marginBottom: 16 }}>
          <span style={{
            background: catColor.bg,
            color: catColor.text,
            padding: '6px 14px',
            borderRadius: '30px',
            fontSize: 'clamp(11px, 3vw, 12px)',
            fontWeight: 600,
            display: 'inline-block',
          }}>
            {question.category === 'music' ? 'Musica' : question.category === 'anime' ? 'Anime' : 'Caricaturas'}
          </span>
        </div>

        <p style={{
          fontSize: 'clamp(18px, 5vw, 24px)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.4,
          marginBottom: 28,
        }}>
          {question.question}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {question.options.map((opt, i) => {
            const isCorrect = i === question.answer;
            const isWrong = i === chosen && i !== question.answer;
            const isSelected = i === chosen;
            
            return (
              <button
                key={i}
                onClick={() => !answered && onChoose(i)}
                disabled={answered}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  width: '100%',
                  padding: 'clamp(12px, 3.5vw, 14px) clamp(16px, 4vw, 20px)',
                  background: answered
                    ? isCorrect
                      ? 'linear-gradient(135deg, rgba(74,222,128,0.2), rgba(74,222,128,0.05))'
                      : isWrong
                      ? 'linear-gradient(135deg, rgba(248,113,113,0.2), rgba(248,113,113,0.05))'
                      : 'rgba(255,255,255,0.05)'
                    : 'rgba(255,255,255,0.05)',
                  border: answered
                    ? isCorrect
                      ? '2px solid #4ade80'
                      : isWrong
                      ? '2px solid #f87171'
                      : '1px solid rgba(255,255,255,0.1)'
                    : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'clamp(16px, 4vw, 20px)',
                  color: '#fff',
                  fontSize: 'clamp(13px, 3.5vw, 15px)',
                  textAlign: 'left',
                  cursor: answered ? 'default' : 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transform: isSelected && !answered ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isSelected && !answered ? `0 0 20px ${catColor.accent}` : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!answered) {
                    e.currentTarget.style.transform = 'translateX(8px) scale(1.02)';
                    e.currentTarget.style.borderColor = catColor.accent;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!answered && !isSelected) {
                    e.currentTarget.style.transform = 'translateX(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }
                }}>
                <span style={{
                  width: 'clamp(28px, 7vw, 32px)',
                  height: 'clamp(28px, 7vw, 32px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: answered && isCorrect
                    ? '#4ade80'
                    : answered && isWrong
                    ? '#f87171'
                    : 'rgba(255,255,255,0.1)',
                  borderRadius: 'clamp(10px, 3vw, 12px)',
                  fontSize: 'clamp(12px, 3.5vw, 14px)',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                }}>
                  {LETTERS[i]}
                </span>
                <span style={{ flex: 1 }}>{opt}</span>
                {answered && isCorrect && <span style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>✓</span>}
                {answered && isWrong && <span style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>✗</span>}
              </button>
            );
          })}
        </div>

        {/* Feedback animado */}
        {answered && (
          <div style={{
            marginTop: 24,
            padding: 'clamp(12px, 3vw, 16px)',
            background: chosen === question.answer
              ? 'linear-gradient(135deg, rgba(74,222,128,0.15), rgba(74,222,128,0.05))'
              : 'linear-gradient(135deg, rgba(248,113,113,0.15), rgba(248,113,113,0.05))',
            borderRadius: 'clamp(16px, 4vw, 20px)',
            fontSize: 'clamp(12px, 3vw, 13px)',
            color: chosen === question.answer ? '#86efac' : '#fca5a5',
            borderLeft: `4px solid ${chosen === question.answer ? '#4ade80' : '#f87171'}`,
            animation: 'slideInFromLeft 0.4s ease-out',
          }}>
            {chosen === -1
              ? `Tiempo agotado. Respuesta: ${question.options[question.answer]}`
              : chosen === question.answer
                ? `Correcto! ${question.explanation}`
                : `${question.explanation}`}
          </div>
        )}
      </div>

      {/* Mensaje de espera */}
      {answered && (
        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(11px, 3vw, 12px)',
          color: 'rgba(255,255,255,0.4)',
          marginTop: 16,
          animation: 'pulseGlow 1s infinite',
        }}>
          Cargando siguiente pregunta...
        </p>
      )}
    </div>
  );
}