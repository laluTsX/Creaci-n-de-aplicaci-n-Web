import { useEffect, useState } from 'react';

export default function Timer({ seconds, total }) {
  const percentage = (seconds / total) * 100;
  const color = seconds <= 5 ? '#ef4444' : seconds <= 10 ? '#fbbf24' : '#69bc6f';
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    setScale(1.1);
    const timer = setTimeout(() => setScale(1), 200);
    return () => clearTimeout(timer);
  }, [seconds]);

  const circleSize = isMobile ? 40 : 48;
  const radius = circleSize / 2 - 4;
  const circumference = 2 * Math.PI * radius;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? 6 : 10,
      animation: 'fadeInRight 0.5s ease-out',
    }}>
      <div style={{
        position: 'relative',
        width: circleSize,
        height: circleSize,
      }}>
        <svg style={{
          transform: 'rotate(-90deg)',
          width: '100%',
          height: '100%',
        }}>
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={isMobile ? 3 : 4}
          />
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={isMobile ? 3 : 4}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percentage / 100)}
            style={{
              transition: 'stroke-dashoffset 0.3s ease, stroke 0.3s ease',
              filter: `drop-shadow(0 0 5px ${color})`,
            }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          fontSize: isMobile ? '12px' : '14px',
          fontWeight: 'bold',
          color: color,
          transition: 'transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }}>
          {seconds}
        </div>
      </div>
      <span style={{ 
        fontSize: isMobile ? '9px' : '11px', 
        color: 'rgba(255,255,255,0.4)', 
        letterSpacing: '0.5px' 
      }}>
        seg
      </span>
    </div>
  );
}