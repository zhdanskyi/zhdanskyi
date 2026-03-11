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

            <main className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col justify-center items-center min-h-[50vh]">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-neon-green text-center border-b-2 border-neon-green pb-2 uppercase">{t('nav.04')}</h1>
                </div>

                <div className="max-w-[600px] w-full mx-auto border border-neon-green p-8 bg-[#000]">
                    <form action="https://formsubmit.co/zhdanskyibusiness@gmail.com" method="POST">
                        <div className="mb-6">
                            <label className="block mb-2 font-head text-[0.8rem] text-neon-green fade-in">{t('cont.name')}</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="w-full bg-[#000] border border-[#333] p-4 text-white font-body focus:outline-none focus:border-neon-purple fade-in" 
                                required 
                                placeholder={t('cont.name.ph')} 
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 font-head text-[0.8rem] text-neon-green fade-in">{t('cont.email')}</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="w-full bg-[#000] border border-[#333] p-4 text-white font-body focus:outline-none focus:border-neon-purple fade-in" 
                                required 
                                placeholder={t('cont.email.ph')} 
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 font-head text-[0.8rem] text-neon-green fade-in">{t('cont.msg')}</label>
                            <textarea 
                                name="message" 
                                rows="5" 
                                className="w-full bg-[#000] border border-[#333] p-4 text-white font-body focus:outline-none focus:border-neon-purple fade-in resize-y" 
                                required 
                                placeholder={t('cont.msg.ph')}
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full p-4 bg-neon-green text-[#000] font-head border-none cursor-pointer font-bold hover:bg-white transition-colors fade-in">
                            {t('cont.send')}
                        </button>
                    </form>

                    <div className="mt-8 text-center border-t border-dashed border-[#333] pt-4">
                        <p className="text-[#666] text-[0.8rem] mb-4 fade-in">{t('cont.or')}</p>
                        <a href="https://wa.me/34602446939" target="_blank" rel="noreferrer" className="inline-block border-b border-dashed border-white text-[0.9rem] pb-[1px] text-neon-green hover:text-white hover:border-white transition-colors fade-in">
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
