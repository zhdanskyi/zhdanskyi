import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import TerminalBot from '../components/TerminalBot';
import Footer from '../components/Footer';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('meta.title') || 'Vitalii Zhdanskyi | desarrollador backend y full-stack'}</title>
        <meta name="description" content="vitalii zhdanskyi - desarrollador backend full-stack. portfolio tecnico, proyectos java (spring boot), c++ y terminal algoritmica." />
      </Helmet>

      <div className="flex w-full max-w-[900px] flex-col justify-center items-center m-auto relative z-10 box-border py-8 px-4 fade-in">

        {/* cabecera: h1 con palabras clave seo, sin foto de perfil (tamano aumentado para foco visual) */}
        <header className="flex flex-col items-center text-center w-full mb-6">
          <h1 className="font-head text-[3rem] md:text-[4rem] leading-[1.2] m-0 text-white uppercase tracking-[-2px] text-shadow-purple mb-2">
            <span className="fade-in block">{t('header.main')}</span>
            <span className="text-neon-purple fade-in block">{t('header.sub')}</span>
            <span className="hidden">desarrollador backend y full-stack</span>
          </h1>
        </header>

        {/* navegacion principal: caja recta con enlaces semanticos bicromatics */}
        <Navigation isHome={true} />

        <main className="w-full max-w-[650px] flex-none flex flex-col mb-4 scale-[0.95] origin-top">
          <TerminalBot />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
