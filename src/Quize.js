import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const InteractiveQuiz = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [badHabits, setBadHabits] = useState([]);

    const impactMap = [ [0, 5, 10, 25], [0, 15, 35], [2, 8, 18], [0, 15, 22], [0, 10, 20], [3, 12, 25], [2, 10, 20], [0, 15], [0, 10], [5, 20] ];
    const tagMap = ["transport", "flights", "water", "waste", "delivery", "energy", "digital", "fashion", "paper", "heat"];

    const questionsData = t('quiz.questions', { returnObjects: true });

    const handleAnswer = (idx) => {
        const impact = impactMap[step]?.[idx] || 0;
        const tag = tagMap[step];
        setScore(score + impact);
        if (impact > 10) setBadHabits(prev => [...new Set([...prev, tag])]);

        if (step < questionsData.length - 1) setStep(step + 1);
        else setStep(100);
    };

    const resetQuiz = () => { setStep(0); setScore(0); setBadHabits([]); onClose(); };

    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.95)', zIndex: 4000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="stat-card" style={{ maxWidth: '500px', width: '90%', position: 'relative' }}>
                {step !== 100 ? (
                    <div>
                        <p style={{color: '#4fa'}}>{t('quiz.step')} {step + 1}</p>
                        <h3>{questionsData[step]?.q}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {questionsData[step]?.a.map((text, i) => (
                                <button key={i} className="quiz-btn" onClick={() => handleAnswer(i)}>{text}</button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div style={{textAlign: 'center'}}>
                        <h2>{t('quiz.result')}</h2>
                        <h1 style={{fontSize: '4rem', color: '#4fa'}}>{Math.round((score / 210) * 100)}%</h1>
                        <div style={{textAlign: 'left', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', margin: '20px 0'}}>
                            <strong>{t('quiz.plan')}:</strong>
                            <ul style={{fontSize: '0.85rem', marginTop: '10px'}}>
                                {badHabits.length > 0 ? badHabits.map(tag => <li key={tag}>{t(`quiz.recs.${tag}`)}</li>) : <li>{t('quiz.perfect')}</li>}
                            </ul>
                        </div>
                        <button className="btn-main" onClick={resetQuiz}>{t('quiz.finish')}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InteractiveQuiz;