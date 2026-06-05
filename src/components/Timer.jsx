import { useEffect, useState } from 'react';

export default function Timer({ seconds, total }) {
  const percentage = (seconds / total) * 100;
  const color = seconds <= 5 ? '#ef4444' : seconds <= 10 ? '#f59e0b' : '#6b7280';
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale(1.1);
    const timer = setTimeout(() => setScale(1), 200);
    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        <svg className="timer-svg" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="rgba(75, 85, 99, 0.3)"
            strokeWidth="3"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray="100.53"
            strokeDashoffset={100.53 * (1 - percentage / 100)}
            style={{
              transition: 'stroke-dashoffset 0.3s ease, stroke 0.3s ease',
            }}
          />
        </svg>
        <div className="timer-value" style={{ transform: `scale(${scale})`, color }}>
          {seconds}
        </div>
      </div>
      <span className="timer-label">SEC</span>

      <style>{`
        .timer-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .timer-container {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .timer-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .timer-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 12px;
          font-weight: 700;
          font-family: monospace;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .timer-label {
          font-size: 9px;
          font-family: monospace;
          letter-spacing: 1px;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}