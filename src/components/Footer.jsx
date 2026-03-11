// footer modular inferior global
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useLanguage();
    
    return (
        <footer className="w-full flex flex-col items-center gap-4 mt-8 pt-4 pb-8 border-t border-[#333] text-[0.8rem] text-[#666] font-body bg-transparent z-10 relative">
            {/* enlaces internos para mejorar la densidad de enlaces seo */}
            <div className="flex gap-4 mb-2 text-xs">
                <Link to="/" className="hover:text-neon-purple transition-colors duration-300">Inicio</Link>
                <span>|</span>
                <Link to="/proyectos" className="hover:text-neon-purple transition-colors duration-300">Proyectos</Link>
                <span>|</span>
                <Link to="/experiencia" className="hover:text-neon-purple transition-colors duration-300">Experiencia</Link>
                <span>|</span>
                <Link to="/contacto" className="hover:text-neon-purple transition-colors duration-300">Contacto</Link>
                {/* hack seo heuristico para deteccion de error 404 */}
                <a href="/404.html" className="sr-only" rel="nofollow">gestion de errores 404</a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/vitalii-zhdanskyi-3186b2305" target="_blank" rel="me noopener" className="hover:text-purple-500 transition-colors">LinkedIn</a>
                <span>|</span>
                <a href="https://github.com/zhdanskyi" target="_blank" rel="noopener" className="hover:text-neon-green transition-colors duration-300">GitHub</a>
                <span>|</span>
                <a href="https://react.dev" target="_blank" rel="noopener" className="hover:text-[#61dafb] transition-colors duration-300">React Oficial</a>
            </div>
            <div className="flex gap-6 items-center justify-center">
                <a href="https://github.com/zhdanskyi" target="_blank" rel="noreferrer" className="font-head text-power-text dark:text-[#aaa] hover:text-power-highlight dark:hover:text-neon-green transition-colors text-sm hover:scale-110">
                    [ GH ]
                </a>
                <a href="https://linkedin.com/in/zhdanskyi" target="_blank" rel="noreferrer" className="font-head text-power-text dark:text-[#aaa] hover:text-power-highlight dark:hover:text-neon-green transition-colors text-sm hover:scale-110">
                    [ IN ]
                </a>
                <a href="mailto:zhdanskyibusiness@gmail.com" className="font-head text-power-text dark:text-[#aaa] hover:text-power-highlight dark:hover:text-neon-green transition-colors text-sm hover:scale-110">
                    [ @ ]
                </a>
            </div>
            <p className="uppercase mt-2">© 2026 VITALII ZHDANSKYI | <span className="fade-in">{t('footer.made')}</span></p>
        </footer>
    );
};

export default Footer;
