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

            <main className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col items-center">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-neon-green text-center border-b-2 border-neon-green pb-2 uppercase">{t('nav.02')}</h1>
                </div>

                <div className="flex flex-col gap-12 border-l-2 border-[#333] pl-8 ml-4 w-full md:w-[800px]">
                    
                    {/* trabajo 1 */}
                    <div className="relative before:content-[''] before:absolute before:-left-[2.6rem] before:top-[5px] before:w-4 before:h-4 before:bg-neon-green before:shadow-[0_0_10px_#00FF00]">
                        <div className="bg-[#000] border-2 border-neon-purple p-8 relative transition-all duration-300 shadow-neon-purple hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neon-green-hover hover:border-neon-green">
                            <h2 className="font-head text-[1.2rem] mb-4 text-neon-green leading-[1.4] fade-in">{t('exp.role1')}</h2>
                            <p className="text-[0.9rem] text-neon-green mb-4 font-bold fade-in">{t('exp.role1.time')}</p>
                            <p className="text-[0.95rem] text-[#ccc] mb-2 fade-in">{t('exp.desc1')}</p>
                        </div>
                    </div>

                    {/* trabajo 2 */}
                    <div className="relative before:content-[''] before:absolute before:-left-[2.6rem] before:top-[5px] before:w-4 before:h-4 before:bg-neon-green before:shadow-[0_0_10px_#00FF00]">
                        <div className="bg-[#000] border-2 border-neon-purple p-8 relative transition-all duration-300 shadow-neon-purple hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neon-green-hover hover:border-neon-green">
                            <h2 className="font-head text-[1.2rem] mb-4 text-neon-green leading-[1.4] fade-in">{t('exp.role2')}</h2>
                            <p className="text-[0.9rem] text-neon-green mb-4 font-bold fade-in">{t('exp.role2.time')}</p>
                            <p className="text-[0.95rem] text-[#ccc] mb-2 fade-in">{t('exp.desc2')}</p>
                        </div>
                    </div>

                    {/* trabajo 3 */}
                    <div className="relative before:content-[''] before:absolute before:-left-[2.6rem] before:top-[5px] before:w-4 before:h-4 before:bg-neon-green before:shadow-[0_0_10px_#00FF00]">
                        <div className="bg-[#000] border-2 border-neon-purple p-8 relative transition-all duration-300 shadow-neon-purple hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neon-green-hover hover:border-neon-green">
                            <h2 className="font-head text-[1.2rem] mb-4 text-neon-purple leading-[1.4] fade-in">{t('exp.role3')}</h2>
                            <p className="text-[0.9rem] text-neon-green mb-4 font-bold fade-in">{t('exp.role3.time')}</p>
                            <p className="text-[0.95rem] text-[#ccc] mb-2 fade-in">{t('exp.desc3')}</p>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
};

export default Experience;
