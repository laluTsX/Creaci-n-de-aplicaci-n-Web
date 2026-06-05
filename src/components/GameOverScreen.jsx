    export default function GameOverScreen({ onReset, highScore }) {
    return (
        <div style={{ 
        textAlign: 'center', 
        maxWidth: 400, 
        width: '100%', 
        margin: '0 auto',
        padding: '0 16px',
        animation: 'scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }}>
        <div style={{
            background: 'rgba(18, 18, 28, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '2px solid #ef4444',
            borderRadius: 'clamp(24px, 6vw, 32px)',
            padding: 'clamp(32px, 8vw, 48px) clamp(24px, 6vw, 32px)',
        }}>
            <div style={{ 
            fontSize: 'clamp(48px, 12vw, 64px)', 
            marginBottom: 16,
            animation: 'floatAround 3s ease-in-out infinite',
            }}>💀</div>
            
            <h2 style={{ 
            fontSize: 'clamp(28px, 7vw, 36px)', 
            fontWeight: 800, 
            color: '#ef4444', 
            marginBottom: 12 
            }}>
            GAME OVER
            </h2>
            
            <p style={{ 
            color: 'rgba(255,255,255,0.6)', 
            marginBottom: 24, 
            fontSize: 'clamp(13px, 3.5vw, 14px)' 
            }}>
            Se te acabaron los intentos
            </p>

            {highScore > 0 && (
            <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: 'clamp(16px, 4vw, 20px)',
                padding: 'clamp(16px, 4vw, 20px)',
                marginBottom: 24,
            }}>
                <p style={{ fontSize: 'clamp(11px, 3vw, 12px)', color: '#fbbf24', marginBottom: 8 }}>
                MEJOR PUNTAJE
                </p>
                <p style={{ fontSize: 'clamp(28px, 7vw, 36px)', fontWeight: 700, color: '#fbbf24' }}>
                {highScore}/15
                </p>
            </div>
            )}

            <button
            onClick={onReset}
            style={{
                width: '100%',
                padding: 'clamp(14px, 4vw, 16px)',
                background: 'linear-gradient(135deg, #69bc6f, #4a9f4f)',
                border: 'none',
                borderRadius: '50px',
                color: '#fff',
                fontSize: 'clamp(14px, 4vw, 16px)',
                fontWeight: 'bold',
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
            REINICIAR INTENTOS
            </button>
        </div>
        </div>
    );
    }