import { CATEGORIES, CATEGORY_COLORS } from '../data/questions.js';
import { useState, useEffect } from 'react';

export default function StartScreen({ onStart, highScore, remainingAttempts }) {
  const [selectedCat, setSelectedCat] = useState(null);
  const categoriesList = Object.entries(CATEGORIES);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: 600,
      margin: '0 auto',
      padding: '0 16px',
      animation: 'scaleIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }}>
      {!isMobile && (
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(105,188,111,0.15), transparent)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'transform 0.1s ease',
          transform: 'translate(-50%, -50%)',
          top: mousePosition.y,
          left: mousePosition.x,
          zIndex: 0,
        }} />
      )}
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(10, 10, 20, 0.4)',
        backdropFilter: 'blur(20px)',
        borderRadius: 'clamp(24px, 6vw, 40px)',
        padding: 'clamp(24px, 6vw, 40px) clamp(20px, 5vw, 32px)',
        border: '1px solid rgba(105, 188, 111, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(105, 188, 111, 0.1) inset',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 6vw, 32px)' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(105,188,111,0.2), rgba(251,191,36,0.1))',
            padding: '6px 16px',
            borderRadius: '50px',
            fontSize: 'clamp(11px, 3vw, 13px)',
            fontWeight: 600,
            color: '#69bc6f',
            marginBottom: 'clamp(16px, 4vw, 24px)',
            letterSpacing: '1px',
            animation: 'pulseGlow 2s infinite',
          }}>
            ELIGE TU CATEGORIA
          </div>
          
          <h2 style={{
            fontSize: 'clamp(32px, 8vw, 64px)',
            fontWeight: 800,
            marginBottom: 'clamp(12px, 3vw, 16px)',
            background: 'linear-gradient(135deg, #69bc6f, #fbbf24, #69bc6f)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmerMove 3s linear infinite, textReveal 0.8s ease-out',
          }}>
            UTVT QUIZ
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(13px, 3.5vw, 15px)', 
            color: 'rgba(255,255,255,0.6)',
            animation: 'slideInFromRight 0.6s ease-out',
          }}>
            15 preguntas · 20 segundos cada una
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(10px, 3vw, 16px)',
          marginBottom: 'clamp(24px, 6vw, 36px)',
        }}>
          {[
            { label: 'Preguntas', value: '15', icon: '📚' },
            { label: 'Segundos', value: '20', icon: '⏰' },
            { label: 'Categorías', value: '3', icon: '🎨' },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(26, 26, 36, 0.6)',
                backdropFilter: 'blur(10px)',
                padding: 'clamp(12px, 3vw, 16px) clamp(8px, 2vw, 12px)',
                borderRadius: 'clamp(16px, 4vw, 24px)',
                border: '1px solid rgba(105, 188, 111, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                animation: `slideInFromLeft ${0.5 + idx * 0.1}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(105, 188, 111, 0.8)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(105, 188, 111, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(105, 188, 111, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div style={{ 
                fontSize: 'clamp(24px, 6vw, 32px)', 
                marginBottom: 'clamp(4px, 2vw, 8px)',
                animation: 'floatAround 3s ease-in-out infinite',
              }}>{stat.icon}</div>
              <div style={{ 
                fontSize: 'clamp(22px, 6vw, 28px)', 
                fontWeight: 800, 
                color: '#fff' 
              }}>{stat.value}</div>
              <div style={{ 
                fontSize: 'clamp(9px, 2.5vw, 11px)', 
                color: 'rgba(255,255,255,0.5)', 
                letterSpacing: '0.5px' 
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 'clamp(24px, 6vw, 32px)' }}>
          <p style={{ 
            fontSize: 'clamp(10px, 2.5vw, 12px)', 
            color: 'rgba(255,255,255,0.5)', 
            marginBottom: 'clamp(16px, 4vw, 20px)',
            letterSpacing: '1px',
            textAlign: 'center',
          }}>
            SELECCIONA UNA CATEGORIA
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 'clamp(8px, 2.5vw, 12px)', 
            justifyContent: 'center' 
          }}>
            {categoriesList.map(([key, name], idx) => {
              const c = CATEGORY_COLORS[key];
              const isSelected = selectedCat === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCat(key)}
                  style={{
                    background: isSelected ? c.accent : `${c.bg}`,
                    color: c.text,
                    border: `2px solid ${c.accent}`,
                    borderRadius: '50px',
                    padding: 'clamp(8px, 2.5vw, 10px) clamp(16px, 4vw, 24px)',
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                    boxShadow: isSelected ? `0 0 25px ${c.accent}` : 'none',
                    animation: `slideInFromRight ${0.3 + idx * 0.05}s ease-out`,
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 5px 20px ${c.accent}80`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}>
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => selectedCat && onStart(selectedCat)}
          disabled={!selectedCat}
          style={{
            width: '100%',
            padding: 'clamp(14px, 4vw, 16px)',
            background: selectedCat ? 'linear-gradient(135deg, #69bc6f, #4a9f4f)' : '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            fontSize: 'clamp(14px, 4vw, 18px)',
            fontWeight: 800,
            cursor: selectedCat ? 'pointer' : 'not-allowed',
            opacity: selectedCat ? 1 : 0.5,
            marginBottom: 'clamp(20px, 5vw, 24px)',
            transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            if (selectedCat) {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(105, 188, 111, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedCat) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}>
          {selectedCat ? 'COMENZAR QUIZ' : 'ELIGE UNA CATEGORIA'}
        </button>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'clamp(16px, 5vw, 24px)', 
          fontSize: 'clamp(11px, 3vw, 13px)',
          flexWrap: 'wrap',
        }}>
          {highScore > 0 && (
            <span style={{ 
              color: '#fbbf24',
              animation: 'pulseGlow 2s infinite',
            }}>
              Record: {highScore}/15
            </span>
          )}
          <span style={{ color: '#69bc6f' }}>
            Intentos: {remainingAttempts}
          </span>
        </div>
      </div>
    </div>
  );
}