import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => { i18n.changeLanguage(lng); };

    const navStyle = {
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 3000,
        padding: '15px 10%', display: 'flex', justifyContent: 'flex-end',
        gap: '10px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)'
    };

    const btnStyle = (lang) => ({
        background: i18n.language.startsWith(lang) ? '#4fa' : 'transparent',
        border: '1px solid #4fa',
        color: i18n.language.startsWith(lang) ? 'black' : '#4fa',
        cursor: 'pointer', padding: '5px 12px', borderRadius: '20px',
        fontWeight: 'bold', transition: '0.3s', fontSize: '12px'
    });

    return (
        <nav style={navStyle}>
            {['en', 'ru', 'es', 'fr'].map(lang => (
                <button key={lang} onClick={() => changeLanguage(lang)} style={btnStyle(lang)}>
                    {lang.toUpperCase()}
                </button>
            ))}
        </nav>
    );
};

export default Header;