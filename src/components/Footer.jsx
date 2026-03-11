// footer modular inferior global
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    
    return (
        <footer className="w-full flex flex-col items-center gap-4 mt-8 pt-4 pb-8 border-t border-[#333] text-[0.8rem] text-[#666] font-body bg-transparent z-10 relative">
            <div className="flex gap-6">
                <a href="https://github.com/zhdanskyi" target="_blank" rel="noreferrer">
                    <img src="/img/github-pixel.png" alt="github" className="w-8 h-8 object-contain transition-all duration-300 filter grayscale brightness-200 hover:filter-none hover:drop-shadow-[0_0_8px_#00ff00] hover:scale-110" />
                </a>
                <a href="https://linkedin.com/in/zhdanskyi" target="_blank" rel="noreferrer">
                    <img src="/img/linkedin-pixel.png" alt="linkedin" className="w-8 h-8 object-contain transition-all duration-300 filter grayscale brightness-200 hover:filter-none hover:drop-shadow-[0_0_8px_#00ff00] hover:scale-110" />
                </a>
                <a href="mailto:zhdanskyibusiness@gmail.com">
                    <img src="/img/email-pixel.png" alt="email" className="w-8 h-8 object-contain transition-all duration-300 filter grayscale brightness-200 hover:filter-none hover:drop-shadow-[0_0_8px_#00ff00] hover:scale-110" />
                </a>
            </div>
            <p className="uppercase mt-2">© 2026 VITALII ZHDANSKYI | <span className="fade-in">{t('footer.made')}</span></p>
        </footer>
    );
};

export default Footer;
