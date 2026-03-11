import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const FloatingUi = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
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

  return (
    <div className="fixed bottom-24 right-6 z-[90] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Search Bar - Terminal Style */}
      {isSearching && (
        <form onSubmit={handleSearch} className="pointer-events-auto bg-light-box dark:bg-[#111] border border-electric-blue dark:border-neon-green p-2 shadow-neon-purple animate-fade-in flex items-center mb-2">
          <span className="text-electric-blue dark:text-neon-green mr-2 text-xs font-bold">&gt;</span>
          <input 
            autoFocus
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="scan_data..."
            className="bg-transparent border-none outline-none text-light-text dark:text-neon-green font-body text-xs w-32 md:w-48 placeholder-opacity-50"
          />
          <span className="blinking-cursor text-electric-blue dark:text-neon-green">_</span>
        </form>
      )}

      {/* Floating Menu - Staggered */}
      {menuOpen && (
        <nav className="pointer-events-auto flex flex-col items-end gap-2 mb-2 font-mono text-[0.65rem] md:text-xs">
          {['Inicio', 'Proyectos', 'Experiencia', 'Colaboradores', 'Contacto'].map((item, i) => (
            <button 
              key={item} 
              onClick={() => { navigate(item === 'Inicio' ? '/' : `/${item.toLowerCase()}`); setMenuOpen(false); }}
              className="stagger-item bg-light-box dark:bg-[#111] text-light-text dark:text-white border border-gray-300 dark:border-[#333] px-3 py-2 hover:border-electric-blue dark:hover:border-neon-purple hover:text-electric-blue dark:hover:text-neon-purple transition-colors shadow-sm"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              [{item}]
            </button>
          ))}
        </nav>
      )}

      {/* Control Buttons */}
      <div className="pointer-events-auto flex gap-2">
        <button 
          onClick={() => setIsSearching(!isSearching)}
          className="w-10 h-10 bg-light-box dark:bg-[#111] border border-gray-300 dark:border-[#333] text-light-text dark:text-white rounded-md shadow flex items-center justify-center hover:border-electric-blue dark:hover:border-neon-green transition-all"
          aria-label="Buscar"
        >
          <span className="text-sm">🔍</span>
        </button>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 bg-light-box dark:bg-[#111] border border-gray-300 dark:border-[#333] text-light-text dark:text-white rounded-md shadow flex items-center justify-center hover:border-electric-blue dark:hover:border-neon-green transition-all"
          aria-label="Menu Flotante"
        >
          <span className="font-mono">{menuOpen ? 'X' : '///'}</span>
        </button>
        <button 
          onClick={toggleTheme}
          className="w-10 h-10 bg-light-box dark:bg-[#111] border border-gray-300 dark:border-[#333] text-light-text dark:text-white rounded-md shadow flex items-center justify-center hover:border-electric-blue dark:hover:border-neon-green transition-all"
          aria-label="Toggle Theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>

    </div>
  );
};

export default FloatingUi;
