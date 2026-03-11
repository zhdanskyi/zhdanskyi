import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const Projects = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>vitalii | proyectos</title>
                <meta name="description" content="proyectos de desarrollo web y backend de vitalii zhdanskyi" />
            </Helmet>

            <main id="main-content" className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col items-center">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-power-highlight text-center border-b-2 border-power-highlight pb-2 uppercase">{t('nav.03')}</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {/* proyecto 1 */}
                    <article className="bg-power-box/80 border border-power-highlight p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)]">
                        <div className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono">[ SPRING BOOT | KAFKA ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-power-text leading-[1.4]">ECOMMERCE API V2</h2>
                        <p className="text-[0.95rem] text-[#ccc] mb-6">{t('proj.1.desc')}</p>
                        <a href="https://github.com/zhdanskyi" target="_blank" rel="noreferrer" className="inline-block border-b border-dashed border-power-highlight text-[0.9rem] pb-[1px] hover:text-power-accent hover:border-power-accent transition-colors">&gt; {t('btn.view')}</a>
                    </article>

                    {/* proyecto 2 */}
                    <article className="bg-power-box/80 border border-power-highlight p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)]">
                        <div className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono">[ PYTHON | SELENIUM ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-power-text leading-[1.4]">UPWORK AUTO-BOT</h2>
                        <p className="text-[0.95rem] text-[#ccc] mb-6">{t('proj.2.desc')}</p>
                        <a href="https://github.com/zhdanskyi" target="_blank" rel="noreferrer" className="inline-block border-b border-dashed border-power-highlight text-[0.9rem] pb-[1px] hover:text-power-accent hover:border-power-accent transition-colors">&gt; {t('btn.view')}</a>
                    </article>

                    {/* proyecto 3 */}
                    <article className="bg-power-box/80 border border-power-highlight p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)]">
                        <div className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono">[ HTML | CSS | JS ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-power-text leading-[1.4]">PIXEL PORTFOLIO</h2>
                        <p className="text-[0.95rem] text-[#ccc] mb-6">{t('proj.3.desc')}</p>
                        <a href="#" className="inline-block border-b border-dashed border-power-highlight text-[0.9rem] pb-[1px] hover:text-power-accent hover:border-power-accent transition-colors">&gt; {t('btn.demo')}</a>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Projects;
