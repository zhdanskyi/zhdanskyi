/* eslint-disable react/prop-types */
// logica del componente del menu web usando react router y context
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navigation = ({ isHome = false }) => {
  const { lang, changeLanguage, t } = useLanguage();
  const [animKey, setAnimKey] = useState(0);

  const handleLangChange = (newLang) => {
    changeLanguage(newLang);
    setAnimKey(prev => prev + 1); // forzar re-animacion
  };

  return (
    <header className={isHome ? "w-full flex justify-center mb-12 relative" : "flex flex-wrap gap-4 justify-between items-center p-8 max-w-[1200px] mx-auto w-full"}>
      <nav key={animKey} className={`flex ${isHome ? 'gap-6 bg-[#050505] py-3 px-8 border border-neon-green shadow-[0_0_10px_rgba(0,255,0,0.1)] rounded-sm relative z-10 fade-in' : 'gap-4 bg-[#050505] p-3 border border-neon-green shadow-[0_0_10px_rgba(0,255,0,0.1)] flex-wrap text-sm fade-in'}`}>
        <Link to="/proyectos" className="font-head text-[0.85rem] text-[#aaa] hover:text-neon-green hover:border-neon-green hover:bg-[rgba(0,255,0,0.05)] hover:text-shadow-neon transition-all duration-300 py-2 px-4 border border-transparent">{isHome ? t('nav.03') : `[ ${t('nav.03')} ]`}</Link>
        <Link to="/experiencia" className="font-head text-[0.85rem] text-[#aaa] hover:text-neon-green hover:border-neon-green hover:bg-[rgba(0,255,0,0.05)] hover:text-shadow-neon transition-all duration-300 py-2 px-4 border border-transparent">{isHome ? t('nav.02') : `[ ${t('nav.02')} ]`}</Link>
        {!isHome && (
          <Link to="/colaboradores" className="font-head text-[0.85rem] text-[#aaa] hover:text-neon-green hover:border-neon-green hover:bg-[rgba(0,255,0,0.05)] hover:text-shadow-neon transition-all duration-300 py-2 px-4 border border-transparent">[ COLABORADORES ]</Link>
        )}
        <Link to="/contacto" className={`font-head text-[0.85rem] transition-all duration-300 py-2 px-4 border border-transparent hover:text-white hover:border-neon-purple hover:bg-[rgba(109,40,217,0.1)] hover:text-shadow-purple ${isHome ? 'text-neon-purple' : 'text-[#aaa]'}`}>{isHome ? t('nav.04') : `[ ${t('nav.04')} ]`}</Link>
        <Link to="/cv" className={`font-head text-[0.85rem] transition-all duration-300 py-2 px-4 border border-transparent hover:text-white hover:border-neon-purple hover:bg-[rgba(109,40,217,0.1)] hover:text-shadow-purple ${isHome ? 'text-neon-purple' : 'text-[#aaa]'} ${!isHome && 'text-neon-purple'}`}>{isHome ? t('cv.nav') : `[ ${t('cv.nav')} ]`}</Link>
      </nav>

      {/* decoracion lineal de cyberpunk */}
      {isHome && (
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#333] -z-10"></div>
      )}

      {/* selector del idioma actual (español, ingles, ucraniano) */}
      <div className={isHome ? "fixed top-8 right-8 flex gap-2 bg-[rgba(0,0,0,0.8)] p-2 border border-[#333] z-[1000]" : "flex gap-2"}>
        <button onClick={() => handleLangChange('es')} className={`font-head text-[0.7rem] uppercase p-2 border transition-all duration-200 cursor-pointer overflow-hidden ${lang === 'es' ? 'bg-neon-purple text-white border-neon-purple glitch-anim' : 'bg-transparent text-[#555] border-transparent hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_5px_#00ff00]'}`}>ES</button>
        <button onClick={() => handleLangChange('en')} className={`font-head text-[0.7rem] uppercase p-2 border transition-all duration-200 cursor-pointer overflow-hidden ${lang === 'en' ? 'bg-neon-purple text-white border-neon-purple glitch-anim' : 'bg-transparent text-[#555] border-transparent hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_5px_#00ff00]'}`}>EN</button>
        <button onClick={() => handleLangChange('ua')} className={`font-head text-[0.7rem] uppercase p-2 border transition-all duration-200 cursor-pointer overflow-hidden ${lang === 'ua' ? 'bg-neon-purple text-white border-neon-purple glitch-anim' : 'bg-transparent text-[#555] border-transparent hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_5px_#00ff00]'}`}>UA</button>
      </div>
    </header>
  );
};

export default Navigation;
