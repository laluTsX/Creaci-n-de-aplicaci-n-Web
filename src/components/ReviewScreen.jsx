import { LETTERS } from '../data/questions.js';

export default function ReviewScreen({ history, onBack }) {
  return (
    <div className="review-container">
      <button onClick={onBack} className="back-btn">
        <span className="back-symbol">⟨</span>
        BACK TO RESULTS
      </button>

      <h2 className="review-title">ANSWER REVIEW</h2>

      <div className="review-list">
        {history.map((h, i) => {
          const ok = h.chosen === h.correct;
          const timedOut = h.chosen === -1;
          return (
            <div key={i} className={`review-item ${ok ? 'item-correct' : 'item-wrong'}`}>
              <div className="review-header">
                <span className="review-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="review-question">{h.question}</span>
                <span className="review-status">{timedOut ? '⏱' : ok ? '✓' : '✗'}</span>
              </div>
              <div className="review-details">
                {timedOut ? (
                  <span className="detail-timeout">TIME EXPIRED</span>
                ) : (
                  <span className={`detail-answer ${ok ? 'detail-correct' : 'detail-wrong'}`}>
                    YOUR ANSWER: {LETTERS[h.chosen]}. {h.options[h.chosen]}
                  </span>
                )}
                {!ok && !timedOut && (
                  <span className="detail-correct-answer">
                    CORRECT: {LETTERS[h.correct]}. {h.options[h.correct]}
                  </span>
                )}
                {timedOut && (
                  <span className="detail-correct-answer">
                    CORRECT: {LETTERS[h.correct]}. {h.options[h.correct]}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .review-container {
          max-width: 680px;
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          animation: slideUp 0.5s ease-out;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--border-color);
          padding: 8px 16px;
          color: #e5e7eb;
          font-size: 11px;
          font-family: monospace;
          letter-spacing: 1px;
          cursor: pointer;
          margin-bottom: 20px;
          transition: all 0.2s ease;
        }

        .back-btn:hover {
          background: rgba(107, 114, 128, 0.2);
          transform: translateX(-4px);
        }

        .back-symbol {
          font-size: 12px;
        }

        .review-title {
          font-size: 18px;
          font-weight: 600;
          font-family: monospace;
          letter-spacing: 2px;
          color: #e5e7eb;
          margin-bottom: 20px;
        }

        .review-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: calc(100vh - 200px);
          overflow: auto;
          padding-right: 8px;
        }

        .review-list::-webkit-scrollbar {
          width: 6px;
        }

        .review-list::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 4px;
        }

        .review-list::-webkit-scrollbar-thumb {
          background: rgba(107, 114, 128, 0.6);
          border-radius: 4px;
        }

        .review-item {
          background: rgba(30, 41, 59, 0.4);
          border-left: 4px solid;
          padding: 14px 16px;
          transition: transform 0.2s ease;
        }

        .review-item:hover {
          transform: translateX(4px);
        }

        .item-correct {
          border-left-color: #10b981;
        }

        .item-wrong {
          border-left-color: #ef4444;
        }

        .review-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .review-number {
          font-size: 11px;
          font-weight: 600;
          font-family: monospace;
          color: #6b7280;
          background: rgba(0,0,0,0.3);
          padding: 2px 6px;
        }

        .review-question {
          flex: 1;
          font-size: 13px;
          color: #e5e7eb;
          line-height: 1.4;
        }

        .review-status {
          font-size: 14px;
        }

        .review-details {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 11px;
          font-family: monospace;
          padding-left: 28px;
        }

        .detail-timeout {
          color: #f59e0b;
        }

        .detail-answer {
          color: #fca5a5;
        }

        .detail-correct {
          color: #6ee7b7;
        }

        .detail-wrong {
          color: #fca5a5;
        }

        .detail-correct-answer {
          color: #6ee7b7;
        }
      `}</style>
    </div>
  );
}