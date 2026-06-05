import { useState, useEffect, useCallback } from 'react';
import { QUESTIONS } from './data/questions.js';
import StartScreen from './components/StartScreen.jsx';
import QuizQuestion from './components/QuizQuestion.jsx';
import ResultsScreen from './components/ResultsScreen.jsx';
import ReviewScreen from './components/ReviewScreen.jsx';
import GameOverScreen from './components/GameOverScreen.jsx';

const TIMER_SECONDS = 20;
const QUESTIONS_PER_CATEGORY = 15;
const MAX_ATTEMPTS = 3;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuestionsByCategory(categoryKey) {
  const filtered = QUESTIONS.filter(q => q.category === categoryKey);
  return shuffle(filtered).slice(0, QUESTIONS_PER_CATEGORY);
}

export default function App() {
  const [screen, setScreen] = useState('start');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState(null);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [history, setHistory] = useState([]);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
  const [remainingAttempts, setRemainingAttempts] = useState(() => {
    try { 
      const saved = localStorage.getItem('utvtquiz_attempts');
      return saved ? parseInt(saved) : MAX_ATTEMPTS;
    } catch { return MAX_ATTEMPTS; }
  });
  const [highScore, setHighScore] = useState(() => {
    try { return parseInt(localStorage.getItem('utvtquiz_highscore') || '0'); } catch { return 0; }
  });

  useEffect(() => {
    if (screen !== 'quiz' || answered) return;
    if (timer <= 0) { handleTimeUp(); return; }
    const id = setTimeout(() => setTimer(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timer, screen, answered]);

  function checkGameOver() {
    if (wrongAnswersCount >= MAX_ATTEMPTS) {
      const newAttempts = remainingAttempts - 1;
      setRemainingAttempts(newAttempts);
      localStorage.setItem('utvtquiz_attempts', newAttempts);
      
      if (newAttempts <= 0) {
        setScreen('gameover');
      } else {
        alert(`Has fallado 3 preguntas. Te quedan ${newAttempts} intento(s) restante(s).`);
        setScreen('start');
        setSelectedCategory(null);
        setWrongAnswersCount(0);
      }
      return true;
    }
    return false;
  }

  function handleTimeUp() {
    setAnswered(true);
    setChosen(-1);
    const newWrongCount = wrongAnswersCount + 1;
    setWrongAnswersCount(newWrongCount);
    
    const q = questions[qi];
    setHistory(h => [...h, { 
      question: q.question, 
      chosen: -1, 
      correct: q.answer, 
      options: q.options,
      explanation: q.explanation,
      isWrong: true
    }]);
    
    setTimeout(() => {
      if (!checkGameOver()) {
        const nextQi = qi + 1;
        if (nextQi >= questions.length) {
          finishQuiz();
        } else {
          setQi(nextQi);
          setAnswered(false);
          setChosen(null);
          setTimer(TIMER_SECONDS);
        }
      }
    }, 1500);
  }

  const handleChoose = useCallback((idx) => {
    if (answered) return;
    setAnswered(true);
    setChosen(idx);
    const q = questions[qi];
    const ok = idx === q.answer;
    
    if (ok) {
      setScore(s => s + 1);
    } else {
      const newWrongCount = wrongAnswersCount + 1;
      setWrongAnswersCount(newWrongCount);
    }
    
    setHistory(h => [...h, { 
      question: q.question, 
      chosen: idx, 
      correct: q.answer, 
      options: q.options,
      explanation: q.explanation,
      isCorrect: ok
    }]);
    
    setTimeout(() => {
      if (!ok && checkGameOver()) return;
      
      const nextQi = qi + 1;
      if (nextQi >= questions.length) {
        finishQuiz();
      } else {
        setQi(nextQi);
        setAnswered(false);
        setChosen(null);
        setTimer(TIMER_SECONDS);
      }
    }, 1500);
  }, [answered, questions, qi, wrongAnswersCount]);

  function finishQuiz() {
    const finalScore = history.filter(h => h.chosen === h.correct).length + (chosen === questions[qi]?.answer ? 1 : 0);
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem('utvtquiz_highscore', finalScore);
    }
    setScreen('results');
  }

  function handleStart(categoryKey) {
    const qs = getQuestionsByCategory(categoryKey);
    setSelectedCategory(categoryKey);
    setQuestions(qs);
    setQi(0);
    setScore(0);
    setWrongAnswersCount(0);
    setAnswered(false);
    setChosen(null);
    setTimer(TIMER_SECONDS);
    setHistory([]);
    setScreen('quiz');
  }

  function handleRestart() {
    setScreen('start');
    setSelectedCategory(null);
    setWrongAnswersCount(0);
  }

  function handleResetAll() {
    setRemainingAttempts(MAX_ATTEMPTS);
    localStorage.setItem('utvtquiz_attempts', MAX_ATTEMPTS);
    setScreen('start');
    setSelectedCategory(null);
    setWrongAnswersCount(0);
  }

  return (
    <div className="app-wrapper">
      <div className="particles-bg"></div>
      <div className="animated-gradient"></div>
      
      <header className="app-header-glass">
        <h1 className="glitch-text">UTVT QUIZ</h1>
        
        <div className="stats-container">
          {screen === 'quiz' && (
            <div className={`stat-chip ${wrongAnswersCount >= 2 ? 'danger-pulse' : 'success-pulse'}`}>
              <span className="stat-icon">⚡</span>
              Fallos: {wrongAnswersCount}/{MAX_ATTEMPTS}
            </div>
          )}
          
          <div className="stat-chip warning-glow">
            <span className="stat-icon">💫</span>
            Intentos: {remainingAttempts}
          </div>
          
          {screen !== 'start' && screen !== 'gameover' && (
            <button onClick={handleRestart} className="exit-btn">
              <span className="btn-icon">↺</span>
              Salir
            </button>
          )}
        </div>
      </header>

      <main className="app-main-content">
        {screen === 'start' && (
          <StartScreen 
            onStart={handleStart} 
            highScore={highScore} 
            remainingAttempts={remainingAttempts} 
          />
        )}

        {screen === 'quiz' && questions.length > 0 && (
          <QuizQuestion
            question={questions[qi]}
            total={questions.length}
            index={qi}
            score={score}
            wrongCount={wrongAnswersCount}
            maxWrong={MAX_ATTEMPTS}
            timer={timer}
            answered={answered}
            chosen={chosen}
            onChoose={handleChoose}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            score={history.filter(h => h.chosen === h.correct).length}
            total={QUESTIONS_PER_CATEGORY}
            history={history}
            onRestart={handleRestart}
            onReview={() => setScreen('review')}
            remainingAttempts={remainingAttempts}
          />
        )}

        {screen === 'review' && (
          <ReviewScreen
            history={history}
            questions={questions}
            onBack={() => setScreen('results')}
          />
        )}

        {screen === 'gameover' && (
          <GameOverScreen onReset={handleResetAll} highScore={highScore} />
        )}
      </main>
    </div>
  );
}