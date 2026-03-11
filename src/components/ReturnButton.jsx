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
        className="font-head text-neon-green bg-[#050505] border border-neon-green py-2 px-4 hover:bg-[rgba(0,255,0,0.05)] hover:text-shadow-neon transition-all duration-300 inline-block shadow-[0_0_8px_rgba(0,255,0,0.2)] hover:shadow-[0_0_18px_#00FF00,inset_0_0_8px_rgba(0,0,0,0.3)] text-[0.8rem] pointer-events-auto"
      >
        VOLVER
      </Link>
      
      {/* selector del idioma para subpaginas */}
      <div className="flex gap-2 pointer-events-auto bg-[#050505] p-1 border border-[#333]">
        <button onClick={() => handleLangChange('es')} className={`font-head text-[0.7rem] uppercase p-2 border transition-all duration-200 cursor-pointer overflow-hidden ${lang === 'es' ? 'bg-neon-purple text-white border-neon-purple glitch-anim' : 'bg-transparent text-[#555] border-transparent hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_5px_#00ff00]'}`}>ES</button>
        <button onClick={() => handleLangChange('en')} className={`font-head text-[0.7rem] uppercase p-2 border transition-all duration-200 cursor-pointer overflow-hidden ${lang === 'en' ? 'bg-neon-purple text-white border-neon-purple glitch-anim' : 'bg-transparent text-[#555] border-transparent hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_5px_#00ff00]'}`}>EN</button>
        <button onClick={() => handleLangChange('ua')} className={`font-head text-[0.7rem] uppercase p-2 border transition-all duration-200 cursor-pointer overflow-hidden ${lang === 'ua' ? 'bg-neon-purple text-white border-neon-purple glitch-anim' : 'bg-transparent text-[#555] border-transparent hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_5px_#00ff00]'}`}>UA</button>
      </div>
    </nav>
  );
};

export default ReturnButton;
