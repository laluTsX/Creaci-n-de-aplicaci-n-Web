import { CATEGORIES, CATEGORY_COLORS } from '../data/questions.js';
import { useState, useEffect } from 'react';

export default function StartScreen({ onStart, highScore, lives }) {
  const [selectedCat, setSelectedCat] = useState(null);
  const categoriesList = Object.entries(CATEGORIES);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="start-container">
      <div className="start-card">
        {/* Pixel corner decorations */}
        <div className="pixel-corner top-left"></div>
        <div className="pixel-corner top-right"></div>
        <div className="pixel-corner bottom-left"></div>
        <div className="pixel-corner bottom-right"></div>

        <div className="start-header">
          <div className="start-badge">
            ◈ NEW GAME ◈
          </div>
          
          <h1 className="start-title">
            UTVT QUIZ
          </h1>
          
          <div className="start-stats">
            <span className="stat-item">15 QUESTIONS</span>
            <span className="stat-divider">◆</span>
            <span className="stat-item">20 SECONDS</span>
            <span className="stat-divider">◆</span>
            <span className="stat-item">3 CATEGORIES</span>
          </div>
        </div>

        <div className="categories-section">
          <p className="categories-label">SELECT CATEGORY</p>
          <div className="categories-grid">
            {categoriesList.map(([key, name]) => {
              const c = CATEGORY_COLORS[key];
              const isSelected = selectedCat === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCat(key)}
                  className={`category-btn ${isSelected ? 'selected' : ''}`}
                  style={{
                    '--cat-bg': c.bg,
                    '--cat-accent': c.accent,
                    '--cat-text': c.text,
                  }}
                >
                  <span className="category-marker">▶</span>
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => selectedCat && onStart(selectedCat)}
          disabled={!selectedCat}
          className={`start-btn ${selectedCat ? 'active' : ''}`}
        >
          <span className="btn-arrow">►</span>
          {selectedCat ? 'START GAME' : 'SELECT CATEGORY'}
          <span className="btn-arrow">◄</span>
        </button>

        <div className="start-footer">
          {highScore > 0 && (
            <div className="highscore-box">
              <span className="highscore-label">★ HIGH SCORE</span>
              <span className="highscore-value">{highScore}/15</span>
            </div>
          )}
          <div className="lives-box">
            <span className="lives-label">◈ LIVES REMAINING</span>
            <span className="lives-value">{lives}</span>
          </div>
        </div>
      </div>

      <style>{`
        .start-container {
          position: relative;
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
          padding: 0 16px;
          animation: scaleBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .start-card {
          position: relative;
          background: var(--card-bg);
          backdrop-filter: blur(12px);
          border: 2px solid var(--border-color);
          padding: clamp(28px, 6vw, 40px) clamp(20px, 5vw, 32px);
          transition: all 0.3s ease;
        }

        .start-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(107, 114, 128, 0.6);
        }

        /* Pixel corners */
        .pixel-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--primary);
          opacity: 0.5;
        }

        .top-left { top: -2px; left: -2px; }
        .top-right { top: -2px; right: -2px; }
        .bottom-left { bottom: -2px; left: -2px; }
        .bottom-right { bottom: -2px; right: -2px; }

        .start-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .start-badge {
          display: inline-block;
          background: rgba(107, 114, 128, 0.2);
          padding: 6px 16px;
          font-size: 10px;
          font-weight: 600;
          font-family: monospace;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 20px;
          border: 1px solid var(--border-color);
        }

        .start-title {
          font-size: clamp(32px, 8vw, 52px);
          font-weight: 700;
          font-family: 'Space Grotesk', monospace;
          color: #e5e7eb;
          letter-spacing: 4px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .start-stats {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .stat-item {
          font-size: 11px;
          font-family: monospace;
          color: #9ca3af;
          letter-spacing: 1px;
        }

        .stat-divider {
          color: var(--primary);
          font-size: 10px;
        }

        .categories-section {
          margin-bottom: 32px;
        }

        .categories-label {
          font-size: 10px;
          font-family: monospace;
          letter-spacing: 2px;
          color: #6b7280;
          margin-bottom: 16px;
          text-align: center;
        }

        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-color);
          color: #e5e7eb;
          font-size: 13px;
          font-weight: 500;
          font-family: monospace;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 1px;
        }

        .category-marker {
          font-size: 10px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .category-btn:hover {
          transform: translateY(-2px);
          border-color: var(--primary);
          background: rgba(107, 114, 128, 0.2);
        }

        .category-btn:hover .category-marker {
          opacity: 1;
        }

        .category-btn.selected {
          background: var(--cat-accent);
          border-color: var(--cat-accent);
          color: #fff;
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(107, 114, 128, 0.4);
        }

        .category-btn.selected .category-marker {
          opacity: 1;
        }

        .start-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 14px;
          background: #374151;
          border: none;
          color: #9ca3af;
          font-size: 14px;
          font-weight: 600;
          font-family: monospace;
          letter-spacing: 2px;
          cursor: not-allowed;
          margin-bottom: 24px;
          transition: all 0.2s ease;
        }

        .start-btn.active {
          background: var(--primary);
          color: #fff;
          cursor: pointer;
        }

        .start-btn.active:hover {
          transform: translateY(-2px);
          filter: drop-shadow(0 5px 15px rgba(107, 114, 128, 0.5));
        }

        .btn-arrow {
          font-size: 12px;
          opacity: 0.7;
        }

        .start-footer {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .highscore-box, .lives-box {
          display: flex;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border-color);
        }

        .highscore-label, .lives-label {
          font-size: 9px;
          font-family: monospace;
          letter-spacing: 1px;
          color: #6b7280;
        }

        .highscore-value {
          font-size: 12px;
          font-weight: bold;
          font-family: monospace;
          color: #fbbf24;
        }

        .lives-value {
          font-size: 12px;
          font-weight: bold;
          font-family: monospace;
          color: #f87171;
        }
      `}</style>
    </div>
  );
}