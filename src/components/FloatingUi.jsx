import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const FloatingUi = () => {
  const { isDark, toggleTheme } = useTheme();
  const { lang, changeLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.toLowerCase();
    if(q.includes('proyect') || q.includes('project')) navigate('/proyectos');
    else if(q.includes('exp')) navigate('/experiencia');
    else if(q.includes('colab')) navigate('/colaboradores');
    else if(q.includes('cont')) navigate('/contacto');
    else if(q.includes('cv')) navigate('/cv.html');
    else navigate('/');
    setSearchQuery('');
    setIsSearching(false);
  };

  const searchResults = ['Proyectos', 'Experiencia', 'Colaboradores', 'Contacto', 'CV'].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 0);

  return (
    <div className="fixed top-8 right-8 z-[90] flex items-start gap-3 pointer-events-none">
      
      {/* Control Buttons and Lang */}
      <div className="pointer-events-auto flex flex-col gap-2">
        <div className="flex gap-2 bg-[rgba(0,0,0,0.5)] p-1 border border-power-highlight dark:border-[#333]">
          {['es', 'en', 'ua'].map((l) => (
            <button 
              key={l}
              onClick={() => changeLanguage(l)} 
              className={`font-head text-[0.55rem] uppercase py-1 px-1.5 transition-all duration-200 ${lang === l ? 'bg-power-highlight dark:bg-neon-purple text-dark-bg dark:text-white' : 'text-power-text dark:text-[#555] hover:text-power-accent dark:hover:text-neon-green'}`}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <button 
            onClick={() => setIsSearching(!isSearching)}
            className="w-7 h-7 bg-power-box dark:bg-[#111] border border-power-highlight dark:border-[#333] text-power-highlight dark:text-white flex items-center justify-center hover:bg-power-highlight hover:text-power-box dark:hover:border-neon-green transition-all"
            aria-label="Scanner Buscador"
          >
            <span className="text-xs">⌖</span>
          </button>
          <button 
            onClick={toggleTheme}
            className="w-7 h-7 bg-power-box dark:bg-[#111] border border-power-highlight dark:border-[#333] text-power-highlight dark:text-white flex items-center justify-center hover:bg-power-highlight hover:text-power-box dark:hover:border-neon-green transition-all"
            aria-label="Toggle Theme"
          >
            <span className="text-xs">{isDark ? '⚡' : '🌙'}</span>
          </button>
        </div>
      </div>

      {/* Expanded Radar Scanner */}
      {isSearching && (
        <div className="pointer-events-auto flex flex-col items-end">
          <form 
            onSubmit={handleSearchSubmit} 
            className="bg-power-box dark:bg-[#111] border border-power-highlight dark:border-neon-green p-1.5 shadow-[0_0_10px_rgba(133,227,255,0.4)] dark:shadow-neon-purple animate-fade-in flex items-center transition-[width] duration-300 ease-out overflow-hidden"
            style={{ width: `${Math.max(140, 100 + searchQuery.length * 8)}px` }}
          >
            <span className="text-power-highlight dark:text-neon-green mr-1.5 text-[0.55rem] font-bold font-mono whitespace-nowrap">SCAN&gt;</span>
            <input 
              autoFocus
              type="text" 
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="..."
              className="bg-transparent border-none outline-none text-power-highlight dark:text-neon-green font-body text-[0.65rem] w-full placeholder-opacity-50 whitespace-nowrap min-w-[50px]"
            />
          </form>
          {searchResults.length > 0 && (
            <div className="w-full mt-1 border border-power-highlight dark:border-neon-green bg-power-box dark:bg-[#111]">
              {searchResults.map((res) => (
                <button 
                  key={res} 
                  onClick={() => { navigate(`/${res.toLowerCase().replace('.html','')}`); setIsSearching(false); setSearchQuery(''); }}
                  className="w-full text-right p-1.5 text-[0.55rem] font-mono text-power-text hover:bg-power-highlight hover:text-power-box dark:hover:bg-neon-purple dark:text-[#aaa] transition-colors"
                >
                  [ {res} ]
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingUi;
