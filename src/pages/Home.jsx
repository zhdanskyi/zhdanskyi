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

        {/* h1 semantico y texto oculto para seo thin content denso de mas de 400 palabras */}
        <article className="sr-only">
          <h1>Vitalii Zhdanskyi - Desarrollador Backend y Full-Stack</h1>
          <p>
            Bienvenido al portfolio digital de Vitalii Zhdanskyi, un desarrollador frontend y arquitecto de software altamente experimentado. 
            Especializado en el desarrollo web frontend meticuloso y de alto rendimiento, mi enfoque radica en la convergencia entre la 
            innovación técnica y la optimización de métricas críticas. Arquitecto de soluciones escalables, disfruto creando ecosistemas digitales 
            que desdibujan la línea anatómica entre un producto y una obra de ingeniería eficiente. Este espacio ha sido concebido desde sus cimientos 
            aprovechando todo el ecosistema de React.js y el compilador ultrarrápido Vite, herramientas que me permiten modelar una arquitectura de software robusta, 
            fiable y estructurada. Más allá del código limpio y la inyección de dependencias lógicas transparentes, me obsesiona el rendimiento extremo y el 
            desarrollo de Single Page Applications (SPA) ultralivianas.

            Una interfaz de usuario no es tan solo su estética; es una experiencia integral. Por eso, mi filosofía de creación de interfaces de 
            usuario (UI/UX) va intrínsecamente ligada al diseño meticuloso con estética cyberpunk y una ambientación interactiva basada en terminal y 
            algoritmia de matriz. Todo este diseño está modelado a la medida usando Tailwind CSS, lo cual garantiza que la construcción visual se ejecute sin comprometer 
            ni un solo byte extra en tiempos de renderizado, inyectando estilos atómicos bajo demanda y eliminando latencias estructurales y de compilación indeseadas. 
            Sin embargo, la rapidez sin control no sirve, motivo por el que aplico siempre exhaustivos procesos de optimización de Core Web Vitals en cada línea de código: 
            desde la estabilización de los Largest Contentful Paint (LCP) a través de Resource Hints y un adecuado preloading, pasando por el Cumulative Layout Shift (CLS) 
            asegurando el aspecto de las proporciones e imágenes de carga diferida (lazy loading), hasta llegar a métricas interactivas y asíncronas de primer orden. 
            
            Además, mi dedicación por un código de grado maestro y una infraestructura resiliente me ha convertido en un perfil devoto a las buenas prácticas y, sobre todo, al SEO técnico. 
            Estar bien posicionado a día de hoy requiere lidiar con la indexación semántica, rastreadores heurísticos, datos estructurados LD-JSON en el árbol de dependencias, 
            jerarquías perfectas y el uso adecuado de directivas Meta Open Graph de posicionamiento. Cada etiqueta y cada selector están puestos bajo una lupa analítica antes del 
            paso de producción. Como broche final a este ciclo de desarrollo eficiente, realizo el despliegue en Vercel y plataformas edge híbridas para aprovechar el almacenamiento 
            en caché de su red CDN perimetral, obteniendo tiempos de respuesta de latencia casi cero en el Time To First Byte (TTFB).
            Mi pasión por el código limpio no es un slogan corporativo, es el oxígeno de mi vocación diaria por romper y superar los límites de la tecnología.
          </p>
        </article>

        {/* cabecera: h2 para estructura semantica, sin foto de perfil */}
        <header className="flex flex-col items-center text-center w-full mb-6">
          <h2 className="font-head text-[3rem] md:text-[4rem] leading-[1.2] m-0 text-white uppercase tracking-[-2px] text-shadow-purple mb-2">
            <span className="fade-in block">{t('header.main')}</span>
            <span className="text-neon-purple fade-in block">{t('header.sub')}</span>
          </h2>
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
