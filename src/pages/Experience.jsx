import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>vitalii | experiencia</title>
                <meta name="description" content="experiencia laboral de vitalii zhdanskyi - fullstack developer" />
            </Helmet>

            <main id="main-content" className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col items-center">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-power-highlight text-center border-b-2 border-power-highlight pb-2 uppercase">{t('nav.02')}</h1>
                </div>

                <div className="flex flex-col gap-12 border-l-2 border-power-highlight/30 pl-8 ml-4 w-full md:w-[800px]">
                    
                    {/* trabajo 1 */}
                    <div className="relative before:content-[''] before:absolute before:-left-[2.6rem] before:top-[5px] before:w-4 before:h-4 before:bg-power-highlight before:shadow-[0_0_10px_rgba(133,227,255,0.8)]">
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                            <h2 className="font-head text-[1.2rem] mb-4 text-power-accent leading-[1.4] fade-in">{t('exp.role1')}</h2>
                            <p className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono fade-in">{t('exp.role1.time')}</p>
                            <p className="text-[0.95rem] text-power-text mb-2 fade-in">{t('exp.desc1')}</p>
                        </div>
                    </div>

                    {/* trabajo 2 */}
                    <div className="relative before:content-[''] before:absolute before:-left-[2.6rem] before:top-[5px] before:w-4 before:h-4 before:bg-power-highlight before:shadow-[0_0_10px_rgba(133,227,255,0.8)]">
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                            <h2 className="font-head text-[1.2rem] mb-4 text-power-accent leading-[1.4] fade-in">{t('exp.role2')}</h2>
                            <p className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono fade-in">{t('exp.role2.time')}</p>
                            <p className="text-[0.95rem] text-power-text mb-2 fade-in">{t('exp.desc2')}</p>
                        </div>
                    </div>

                    {/* trabajo 3 */}
                    <div className="relative before:content-[''] before:absolute before:-left-[2.6rem] before:top-[5px] before:w-4 before:h-4 before:bg-power-highlight before:shadow-[0_0_10px_rgba(133,227,255,0.8)]">
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                            <h2 className="font-head text-[1.2rem] mb-4 text-power-accent leading-[1.4] fade-in">{t('exp.role3')}</h2>
                            <p className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono fade-in">{t('exp.role3.time')}</p>
                            <p className="text-[0.95rem] text-power-text mb-2 fade-in">{t('exp.desc3')}</p>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
};

export default Experience;
