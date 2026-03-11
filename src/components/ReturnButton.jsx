// boton unico semantico de retroceso para las subpaginas
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ReturnButton = () => {
  const { lang, changeLanguage } = useLanguage();
  const [animKey, setAnimKey] = useState(0);

  const handleLangChange = (newLang) => {
    changeLanguage(newLang);
    setAnimKey(prev => prev + 1);
  };

  return (
    <nav key={animKey} className="sticky top-[20px] z-50 w-full max-w-[1200px] mx-auto px-8 pt-4 pb-2 flex justify-between items-center pointer-events-none">
      <Link 
        to="/" 
        className="font-head text-power-accent dark:text-neon-green bg-power-box dark:bg-[#050505] border border-power-accent dark:border-neon-green py-2 px-4 hover:bg-power-accent/10 dark:hover:bg-[rgba(0,255,0,0.05)] hover:shadow-[0_0_12px_rgba(249,241,165,0.4)] dark:hover:shadow-[0_0_18px_#00FF00,inset_0_0_8px_rgba(0,0,0,0.3)] transition-all duration-300 inline-block text-[0.75rem] pointer-events-auto"
      >
        VOLVER
      </Link>
      
      {/* selector del idioma removido para evitar duplicidad, gestionado por FloatingUi */}
    </nav>
  );
};

export default ReturnButton;
