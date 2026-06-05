    export default function GameOverScreen({ onReset, highScore }) {
    return (
        <div className="gameover-container">
        <div className="gameover-card">
            <div className="gameover-icon">✖</div>
            
            <h2 className="gameover-title">GAME OVER</h2>
            
            <p className="gameover-message">
            NO LIVES REMAINING
            </p>

            {highScore > 0 && (
            <div className="highscore-panel">
                <span className="highscore-label">★ HIGH SCORE</span>
                <span className="highscore-value">{highScore}/15</span>
            </div>
            )}

            <button onClick={onReset} className="reset-btn">
            <span className="reset-symbol">↺</span>
            RESTART GAME
            <span className="reset-symbol">↺</span>
            </button>
        </div>

        <style>{`
            .gameover-container {
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
            padding: 0 16px;
            animation: shake 0.5s ease-out;
            }

            .gameover-card {
            background: var(--card-bg);
            backdrop-filter: blur(12px);
            border: 2px solid #ef4444;
            padding: 40px 32px;
            text-align: center;
            }

            .gameover-icon {
            font-size: 64px;
            color: #ef4444;
            margin-bottom: 20px;
            animation: pixelFloat 2s ease-in-out infinite;
            }

            .gameover-title {
            font-size: 32px;
            font-weight: 800;
            font-family: monospace;
            color: #ef4444;
            letter-spacing: 4px;
            margin-bottom: 12px;
            }

            .gameover-message {
            font-size: 12px;
            font-family: monospace;
            letter-spacing: 2px;
            color: #9ca3af;
            margin-bottom: 28px;
            }

            .highscore-panel {
            background: rgba(0, 0, 0, 0.4);
            padding: 16px;
            margin-bottom: 28px;
            border: 1px solid var(--border-color);
            }

            .highscore-label {
            display: block;
            font-size: 10px;
            font-family: monospace;
            letter-spacing: 2px;
            color: #fbbf24;
            margin-bottom: 8px;
            }

            .highscore-value {
            font-size: 36px;
            font-weight: 700;
            font-family: monospace;
            color: #fbbf24;
            }

            .reset-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 14px;
            background: var(--primary);
            border: none;
            color: #fff;
            font-size: 13px;
            font-weight: 600;
            font-family: monospace;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.2s ease;
            }

            .reset-btn:hover {
            transform: translateY(-2px);
            filter: drop-shadow(0 5px 15px rgba(107, 114, 128, 0.5));
            }

            .reset-symbol {
            font-size: 12px;
            }
        `}</style>
        </div>
    );
    }