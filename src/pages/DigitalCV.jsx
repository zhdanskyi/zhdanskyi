import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const DigitalCV = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>vitalii | cv</title>
                <meta name="description" content="curriculum vitae digital de vitalii zhdanskyi" />
            </Helmet>

            <main id="main-content" className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col items-center">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-power-highlight text-center border-b-2 border-power-highlight pb-2 uppercase">{t('cv.title')}</h1>
                </div>

                <div className="w-full max-w-[900px]">
                    {/* resumen */}
                    <section className="mb-12">
                        <h2 className="font-head text-power-highlight text-[1.2rem] border-b border-[#333] pb-2 mb-6 mt-12 fade-in">{t('cv.summary.title')}</h2>
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                            <p className="text-power-text fade-in leading-relaxed">{t('cv.summary.text')}</p>
                        </div>
                    </section>

                    {/* matriz de habilidades */}
                    <section className="mb-12">
                        <h2 className="font-head text-power-highlight text-[1.2rem] border-b border-[#333] pb-2 mb-6 mt-12 fade-in">{t('cv.skills.title')}</h2>

                        <h3 className="font-head text-[1rem] text-power-highlight mb-4 fade-in">{t('cv.skills.tech')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight text-center">
                                <h3 className="font-head text-[1.2rem] mb-4 text-power-highlight">JAVA STACK</h3>
                                <p className="text-[0.95rem] text-power-text">Java 21, Spring Boot, Hibernate, Kafka</p>
                            </div>
                            <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight text-center">
                                <h3 className="font-head text-[1.2rem] mb-4 text-power-accent">PYTHON STACK</h3>
                                <p className="text-[0.95rem] text-power-text">Django (DRF), FastAPI, Selenium, Pandas</p>
                            </div>
                            <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight text-center">
                                <h3 className="font-head text-[1.2rem] mb-4 text-power-text">FULL STACK</h3>
                                <p className="text-[0.95rem] text-power-text">Angular, React, SQL, MongoDB, Docker</p>
                            </div>
                        </div>

                        <h3 className="font-head text-[1rem] text-power-accent mb-4 fade-in">{t('cv.skills.soft')}</h3>
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                            <ul className="list-square ml-6 text-power-text text-[0.95rem] flex flex-col gap-2">
                                <li className="fade-in">{t('cv.soft.1')}</li>
                                <li className="fade-in">{t('cv.soft.2')}</li>
                                <li className="fade-in">{t('cv.soft.3')}</li>
                            </ul>
                        </div>
                    </section>

                    {/* historial */}
                    <section className="mb-12">
                        <h2 className="font-head text-power-highlight text-[1.2rem] border-b border-[#333] pb-2 mb-6 mt-12 fade-in">{t('cv.history.title')}</h2>

                        {/* trabajo 1 */}
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight mb-6">
                            <div className="flex justify-between flex-wrap gap-2 mb-4">
                                <h3 className="font-head text-[1.2rem] text-power-highlight fade-in">{t('exp.role1')}</h3>
                                <span className="text-power-accent font-bold fade-in">{t('exp.role1.time')}</span>
                            </div>
                            <p className="text-[0.95rem] text-power-text fade-in">{t('exp.desc1')}</p>
                        </div>

                        {/* trabajo 2 */}
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight mb-6">
                            <div className="flex justify-between flex-wrap gap-2 mb-4">
                                <h3 className="font-head text-[1.2rem] text-power-highlight fade-in">{t('exp.role2')}</h3>
                                <span className="text-power-accent font-bold fade-in">{t('exp.role2.time')}</span>
                            </div>
                            <p className="text-[0.95rem] text-power-text fade-in">{t('exp.desc2')}</p>
                        </div>

                        {/* trabajo 3 */}
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight mb-6">
                            <div className="flex justify-between flex-wrap gap-2 mb-4">
                                <h3 className="font-head text-[1.2rem] text-power-highlight fade-in">{t('exp.role3')}</h3>
                                <span className="text-power-accent font-bold fade-in">{t('exp.role3.time')}</span>
                            </div>
                            <p className="text-[0.95rem] text-power-text fade-in">{t('exp.desc3')}</p>
                        </div>
                    </section>

                    {/* educacion */}
                    <section className="mb-12">
                        <h2 className="font-head text-power-highlight text-[1.2rem] border-b border-[#333] pb-2 mb-6 mt-12 fade-in">{t('cv.edu.title')}</h2>
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight mb-4">
                            <div className="flex justify-between flex-wrap gap-2 mb-4">
                                <h3 className="font-head text-[1.2rem] text-power-text fade-in">{t('cv.edu.dam')}</h3>
                                <span className="text-power-accent font-bold fade-in">{t('cv.edu.dam.time')}</span>
                            </div>
                            <p className="text-[0.9rem] text-power-highlight font-bold fade-in">{t('cv.edu.dam.desc')}</p>
                        </div>
                        <div className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                            <div className="flex justify-between flex-wrap gap-2 mb-4">
                                <h3 className="font-head text-[1.2rem] text-power-text fade-in">{t('cv.edu.mate')}</h3>
                                <span className="text-power-accent font-bold fade-in">{t('cv.edu.mate.time')}</span>
                            </div>
                            <p className="text-[0.9rem] text-power-highlight font-bold fade-in">{t('cv.edu.mate.desc')}</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default DigitalCV;
