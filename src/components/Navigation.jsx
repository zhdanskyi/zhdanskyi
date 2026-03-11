/* eslint-disable react/prop-types */
// logica del componente del menu web usando react router y context
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navigation = ({ isHome = false }) => {
  const { t } = useLanguage();

  return (
    <nav className={isHome ? "w-full max-w-[420px] flex flex-col gap-3 mt-8 z-10 fade-in" : "flex gap-4 bg-power-box/80 dark:bg-[#050505] p-3 border border-power-highlight dark:border-neon-green shadow-terminal text-sm fade-in w-full max-w-[1000px] mx-auto mb-4"}>
      {/* Game Style Menu Items */}
      <Link to="/proyectos" className={`group relative font-head text-[0.8rem] transition-all duration-300 py-3 px-6 border border-power-highlight/30 hover:border-power-highlight dark:border-[#333] dark:hover:border-neon-green hover:bg-power-highlight/10 dark:hover:bg-[rgba(0,255,0,0.05)] ${isHome ? 'text-power-text dark:text-[#aaa] block w-full text-left' : 'text-center'}`}>
        <span className="opacity-0 group-hover:opacity-100 text-power-highlight dark:text-neon-green absolute left-2 transition-opacity">&gt; </span>
        {isHome ? t('nav.03') : `[ ${t('nav.03')} ]`}
      </Link>
      
      <Link to="/experiencia" className={`group relative font-head text-[0.8rem] transition-all duration-300 py-3 px-6 border border-power-highlight/30 hover:border-power-highlight dark:border-[#333] dark:hover:border-neon-green hover:bg-power-highlight/10 dark:hover:bg-[rgba(0,255,0,0.05)] ${isHome ? 'text-power-text dark:text-[#aaa] block w-full text-left' : 'text-center'}`}>
        <span className="opacity-0 group-hover:opacity-100 text-power-highlight dark:text-neon-green absolute left-2 transition-opacity">&gt; </span>
        {isHome ? t('nav.02') : `[ ${t('nav.02')} ]`}
      </Link>
      
      {!isHome && (
        <Link to="/colaboradores" className="font-head text-[0.8rem] text-power-text dark:text-[#aaa] hover:text-power-highlight dark:hover:text-neon-green transition-all duration-300 py-3 px-6 border border-transparent">[ COLABORADORES ]</Link>
      )}
      
      <Link to="/contacto" className={`group relative font-head text-[0.8rem] transition-all duration-300 py-3 px-6 border border-power-highlight/30 hover:border-power-highlight dark:border-[#333] dark:hover:border-neon-green hover:bg-power-highlight/10 dark:hover:bg-[rgba(0,255,0,0.05)] ${isHome ? 'text-power-highlight block w-full text-left' : 'text-center'}`}>
        <span className="opacity-0 group-hover:opacity-100 text-power-highlight dark:text-neon-green absolute left-2 transition-opacity">&gt; </span>
        {isHome ? t('nav.04') : `[ ${t('nav.04')} ]`}
      </Link>
      
      <Link to="/cv" className={`group relative font-head text-[0.8rem] transition-all duration-300 py-3 px-6 border border-power-highlight/30 hover:border-power-highlight dark:border-[#333] dark:hover:border-neon-green hover:bg-power-highlight/10 dark:hover:bg-[rgba(0,255,0,0.05)] ${isHome ? 'text-power-accent dark:text-neon-purple block w-full text-left' : 'text-power-accent dark:text-neon-purple text-center'}`}>
        <span className="opacity-0 group-hover:opacity-100 text-power-accent dark:text-neon-purple absolute left-2 transition-opacity">&gt; </span>
        {isHome ? t('cv.nav') : `[ ${t('cv.nav')} ]`}
      </Link>
    </nav>

  );
};

export default Navigation;
