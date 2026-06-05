import Timer from './Timer.jsx';
import { LETTERS, CATEGORY_COLORS } from '../data/questions.js';

export default function QuizQuestion({ 
  question, total, index, score, wrongCount, maxWrong, 
  timer, answered, chosen, onChoose 
}) {
  const catColor = CATEGORY_COLORS[question.category];
  const progress = (index / total) * 100;

  return (
    <div className="quiz-container">
      {/* Progress bar estilo retro */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}>
          <span className="progress-text">{index}/{total}</span>
        </div>
      </div>

      {/* Header stats */}
      <div className="quiz-header">
        <div className="question-counter">
          <span className="counter-label">QUESTION</span>
          <span className="counter-value">{String(index + 1).padStart(2, '0')}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">{String(total).padStart(2, '0')}</span>
        </div>
        
        <div className="score-stats">
          <div className="stat-box">
            <span className="stat-label">SCORE</span>
            <span className="stat-value">{String(score).padStart(2, '0')}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">FAILS</span>
            <span className="stat-value">{wrongCount}/{maxWrong}</span>
          </div>
          <Timer seconds={timer} total={20} />
        </div>
      </div>

      {/* Question card */}
      <div className="question-card">
        <div className="category-tag" style={{ background: catColor.bg, color: catColor.text }}>
          {question.category === 'music' ? 'MUSIC' : question.category === 'anime' ? 'ANIME' : 'CARTOONS'}
        </div>

        <p className="question-text">{question.question}</p>

        <div className="options-grid">
          {question.options.map((opt, i) => {
            const isCorrect = i === question.answer;
            const isWrong = i === chosen && i !== question.answer;
            const isSelected = i === chosen;
            
            return (
              <button
                key={i}
                onClick={() => !answered && onChoose(i)}
                disabled={answered}
                className={`option-btn ${answered ? 'disabled' : ''} ${
                  answered && isCorrect ? 'correct' : ''
                } ${answered && isWrong ? 'wrong' : ''} ${
                  isSelected && !answered ? 'selected' : ''
                }`}
                style={{
                  '--cat-accent': catColor.accent,
                }}
              >
                <span className="option-letter">{LETTERS[i]}</span>
                <span className="option-text">{opt}</span>
                {answered && isCorrect && <span className="option-icon">✓</span>}
                {answered && isWrong && <span className="option-icon">✗</span>}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={`feedback-box ${chosen === question.answer ? 'feedback-correct' : 'feedback-wrong'}`}>
            <span className="feedback-icon">{chosen === question.answer ? '▶' : '◀'}</span>
            <span className="feedback-text">
              {chosen === -1
                ? `TIME OUT! Answer: ${question.options[question.answer]}`
                : chosen === question.answer
                  ? `CORRECT! ${question.explanation}`
                  : `${question.explanation}`}
            </span>
          </div>
        )}
      </div>

      {answered && (
        <p className="loading-message">◈ NEXT QUESTION ◈</p>
      )}

      <style>{`
        .quiz-container {
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          padding: 0 16px;
          animation: scaleBounce 0.5s ease-out;
        }

        .progress-bar {
          background: rgba(30, 41, 59, 0.5);
          height: 8px;
          margin-bottom: 24px;
          position: relative;
          border: 1px solid var(--border-color);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          width: 0%;
          transition: width 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .progress-text {
          display: none;
        }

        .quiz-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .question-counter {
          display: flex;
          align-items: baseline;
          gap: 4px;
          background: rgba(0,0,0,0.3);
          padding: 8px 16px;
          border: 1px solid var(--border-color);
        }

        .counter-label {
          font-size: 9px;
          font-family: monospace;
          letter-spacing: 2px;
          color: #6b7280;
        }

        .counter-value, .counter-total {
          font-size: 16px;
          font-weight: 700;
          font-family: monospace;
          color: #e5e7eb;
        }

        .counter-sep {
          color: var(--primary);
          font-size: 12px;
        }

        .score-stats {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          background: rgba(0,0,0,0.3);
          padding: 6px 12px;
          border: 1px solid var(--border-color);
          min-width: 60px;
          text-align: center;
        }

        .stat-label {
          font-size: 8px;
          font-family: monospace;
          letter-spacing: 1px;
          color: #6b7280;
        }

        .stat-value {
          font-size: 14px;
          font-weight: 700;
          font-family: monospace;
          color: #e5e7eb;
        }

        .question-card {
          background: var(--card-bg);
          backdrop-filter: blur(12px);
          border: 2px solid var(--border-color);
          padding: clamp(20px, 5vw, 28px);
          margin-bottom: 20px;
        }

        .category-tag {
          display: inline-block;
          padding: 4px 12px;
          font-size: 10px;
          font-weight: 600;
          font-family: monospace;
          letter-spacing: 1px;
          margin-bottom: 16px;
          border: 1px solid currentColor;
        }

        .question-text {
          font-size: clamp(16px, 4.5vw, 22px);
          font-weight: 500;
          color: #e5e7eb;
          line-height: 1.5;
          margin-bottom: 28px;
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .option-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 12px 18px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-color);
          color: #e5e7eb;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .option-btn:not(.disabled):hover {
          transform: translateX(6px);
          border-color: var(--cat-accent);
          background: rgba(107, 114, 128, 0.2);
        }

        .option-btn.selected {
          border-color: var(--cat-accent);
          background: rgba(107, 114, 128, 0.3);
          transform: scale(1.01);
        }

        .option-btn.disabled {
          cursor: default;
          opacity: 0.7;
        }

        .option-btn.correct {
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.15);
        }

        .option-btn.wrong {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.15);
        }

        .option-letter {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.4);
          font-weight: 700;
          font-family: monospace;
          font-size: 14px;
          border: 1px solid var(--border-color);
        }

        .option-text {
          flex: 1;
        }

        .option-icon {
          font-size: 18px;
        }

        .feedback-box {
          margin-top: 20px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          font-family: monospace;
          animation: slideUp 0.3s ease-out;
        }

        .feedback-correct {
          background: rgba(16, 185, 129, 0.1);
          border-left: 4px solid #10b981;
          color: #6ee7b7;
        }

        .feedback-wrong {
          background: rgba(239, 68, 68, 0.1);
          border-left: 4px solid #ef4444;
          color: #fca5a5;
        }

        .feedback-icon {
          font-size: 14px;
        }

        .loading-message {
          text-align: center;
          font-size: 10px;
          font-family: monospace;
          letter-spacing: 2px;
          color: #6b7280;
          margin-top: 16px;
          animation: pixelPulse 1s infinite;
        }
      `}</style>
    </div>
  );
}