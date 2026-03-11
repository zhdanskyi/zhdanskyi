import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>vitalii | contacto</title>
                <meta name="description" content="formulario de contacto de vitalii zhdanskyi" />
            </Helmet>

            <main id="main-content" className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col justify-center items-center min-h-[50vh]">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-power-highlight text-center border-b-2 border-power-highlight pb-2 uppercase">{t('nav.04')}</h1>
                </div>

                <div className="max-w-[600px] w-full mx-auto border border-power-highlight p-8 bg-power-box/80 shadow-[0_0_15px_rgba(133,227,255,0.2)]">
                    <form action="https://formsubmit.co/zhdanskyibusiness@gmail.com" method="POST">
                        <div className="mb-6">
                            <label htmlFor="contact-name" className="block mb-2 font-head text-[0.8rem] text-power-highlight fade-in">{t('cont.name')}</label>
                            <input 
                                id="contact-name"
                                type="text" 
                                name="name" 
                                className="w-full bg-power-bg border border-power-highlight/30 p-4 text-power-text font-body focus:outline-none focus:border-power-highlight shadow-inner fade-in" 
                                required 
                                placeholder={t('cont.name.ph')} 
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="contact-email" className="block mb-2 font-head text-[0.8rem] text-power-highlight fade-in">{t('cont.email')}</label>
                            <input 
                                id="contact-email"
                                type="email" 
                                name="email" 
                                className="w-full bg-power-bg border border-power-highlight/30 p-4 text-power-text font-body focus:outline-none focus:border-power-highlight shadow-inner fade-in" 
                                required 
                                placeholder={t('cont.email.ph')} 
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="contact-message" className="block mb-2 font-head text-[0.8rem] text-power-highlight fade-in">{t('cont.msg')}</label>
                            <textarea 
                                id="contact-message"
                                name="message" 
                                rows="5" 
                                className="w-full bg-power-bg border border-power-highlight/30 p-4 text-power-text font-body focus:outline-none focus:border-power-highlight shadow-inner fade-in resize-y" 
                                required 
                                placeholder={t('cont.msg.ph')}
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full p-4 bg-power-highlight text-power-box font-head border-none cursor-pointer font-bold hover:bg-power-accent hover:text-power-box transition-colors fade-in">
                            {t('cont.send')}
                        </button>
                    </form>

                    <div className="mt-8 text-center border-t border-dashed border-power-highlight/30 pt-4">
                        <p className="text-power-text/70 text-[0.8rem] mb-4 fade-in">{t('cont.or')}</p>
                        <a href="https://wa.me/34602446939" target="_blank" rel="noreferrer" className="inline-block border-b border-dashed border-power-highlight text-[0.9rem] pb-[1px] text-power-highlight hover:text-power-accent hover:border-power-accent transition-colors fade-in">
                            {t('cont.wa')}
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Contact;
