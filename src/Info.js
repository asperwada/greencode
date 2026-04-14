import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InteractiveQuiz from './Quize';
import Header from './Header';
import "./style.css";

const CarbonCalc = () => {
    const { t } = useTranslation();
    const [kwh, setKwh] = useState(150);
    const co2Energy = (kwh * 0.5 * 12).toFixed(0);
    return (
        <div className="stat-card">
            <h3>{t('info.sec3.calcTitle')}</h3>
            <p>{t('info.sec3.consumption')}: <strong>{kwh}</strong></p>
            <input
                type="range" min="50" max="1000" step="10"
                value={kwh} onChange={(e) => setKwh(e.target.value)}
                className="calc-input"
            />
            <p>{t('info.sec3.footprint')}: <span style={{color: '#4fa', fontSize: '1.5rem'}}>{co2Energy} {t('info.sec3.year')}</span></p>
            <small>{t('info.sec3.small')}</small>
        </div>
    );
};

function Info() {
    const { t } = useTranslation();
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const impactKeys = ['arctic', 'oceans', 'health', 'economy'];
    const actionKeys = ['home', 'city', 'business', 'policy'];
    const habitKeys = ['h1', 'h2', 'h3', 'h4', 'h5'];

    return (
        <div>
            <Header />

            {/* 01. КТО ВИНОВАТ? */}
            <section id="problem" className="section" style={{marginTop: '60px'}}>
                <h2>{t('info.sec1.title')}</h2>
                <div className="content-grid">
                    <div className="stat-card">
                        <h3>{t('info.sec1.energy')}</h3>
                        <p>{t('info.sec1.energyDesc')}</p>
                    </div>
                    <div className="stat-card">
                        <h3>{t('info.sec1.industry')}</h3>
                        <p>{t('info.sec1.industryDesc')}</p>
                    </div>
                    <div className="stat-card">
                        <h3>{t('info.sec1.deforestation')}</h3>
                        <p>{t('info.sec1.deforestDesc')}</p>
                    </div>
                </div>
            </section>

            {/* 02. МИФЫ И РЕАЛЬНОСТЬ */}
            <section className="section">
                <h2>{t('info.sec2.title')}</h2>
                <div className="content-grid">
                    <div className="stat-card" style={{borderLeft: '4px solid #ff4f4f'}}>
                        <p>
                            <strong>{t('info.sec2.mythLabel')}:</strong> {t('info.sec2.mythText')}
                        </p>
                    </div>
                    <div className="stat-card" style={{borderLeft: '4px solid #4fa'}}>
                        <p>
                            <strong>{t('info.sec2.realityLabel')}:</strong> {t('info.sec2.realityText')}
                        </p>
                    </div>
                </div>
            </section>

            {/* 03. ЧТО ДЕЛАТЬ? */}
            <section className="section">
                <h2>{t('info.sec3.title')}</h2>
                <div className="content-grid">
                    <CarbonCalc />
                    <div className="stat-card">
                        <h3>{t('info.sec3.roadmap')}</h3>
                        <ul style={{lineHeight: 2, listStyle: 'none', padding: 0}}>
                            <li>✅ {t('info.sec3.step1')}</li>
                            <li>✅ {t('info.sec3.step2')}</li>
                            <li>✅ {t('info.sec3.step3')}</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 04. ПОСЛЕДСТВИЯ УЖЕ СЕГОДНЯ */}
            <section className="section">
                <h2>{t('info.sec4.title')}</h2>
                <p style={{maxWidth: '950px', lineHeight: 1.7, opacity: 0.9}}>{t('info.sec4.intro')}</p>
                <div className="content-grid">
                    {impactKeys.map((key) => (
                        <div key={key} className="stat-card">
                            <h3>{t(`info.sec4.${key}Title`)}</h3>
                            <p>{t(`info.sec4.${key}Desc`)}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 05. РЕШЕНИЯ НА РАЗНЫХ УРОВНЯХ */}
            <section className="section">
                <h2>{t('info.sec5.title')}</h2>
                <p style={{maxWidth: '950px', lineHeight: 1.7, opacity: 0.9}}>{t('info.sec5.intro')}</p>
                <div className="content-grid">
                    {actionKeys.map((key) => (
                        <div key={key} className="stat-card">
                            <h3>{t(`info.sec5.${key}Title`)}</h3>
                            <p>{t(`info.sec5.${key}Desc`)}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 06. ПЛАН НА БЛИЖАЙШИЙ МЕСЯЦ */}
            <section className="section">
                <h2>{t('info.sec6.title')}</h2>
                <div className="content-grid">
                    <div className="stat-card">
                        <h3>{t('info.sec6.planTitle')}</h3>
                        <ul style={{lineHeight: 1.9, margin: 0, paddingLeft: '20px'}}>
                            {habitKeys.map((key) => (
                                <li key={key}>{t(`info.sec6.${key}`)}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="stat-card">
                        <h3>{t('info.sec6.whyTitle')}</h3>
                        <p style={{lineHeight: 1.7}}>{t('info.sec6.whyText')}</p>
                    </div>
                </div>
            </section>

            {/* 07. НОВОЕ ЗАКЛЮЧЕНИЕ */}
            <section className="section">
                <h2>{t('info.sec7.title')}</h2>
                <div className="stat-card">
                    <p style={{fontSize: '1.2rem', lineHeight: 1.8}}>
                        {t('info.sec7.text1')}
                    </p>
                    <p style={{fontSize: '1.2rem', lineHeight: 1.8}}>
                        {t('info.sec7.text2')}
                    </p>
                    <p style={{fontSize: '1.2rem', lineHeight: 1.8}}>
                        {t('info.sec7.text3')}
                    </p>
                </div>
            </section>

            {/* КНОПКА ТЕСТА */}
            <section className="section" style={{alignItems: 'center'}}>
                <button className="btn-main" onClick={() => setIsQuizOpen(true)}>{t('header.quiz')}</button>
                <InteractiveQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
            </section>
        </div>
    );
}

export default Info;