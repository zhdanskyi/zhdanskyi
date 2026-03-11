import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';

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
          <nav aria-label="Navegación estructural del sistema">
            <a href="/proyectos">Proyectos y Portafolio Web</a>
            <a href="/experiencia">Experiencia Profesional y Laboral</a>
            <a href="/colaboradores">Colaboradores de Seguridad y Desarrollo</a>
            <a href="/contacto">Contacto Corporativo</a>
            <a href="/cv.html">Curriculum Vitae Descargable</a>
          </nav>
        </article>

        {/* cabecera: h2 para estructura semantica, sin foto de perfil */}
        <header className="flex flex-col items-center text-center w-full mb-6">
          <h2 className="font-head text-[3rem] md:text-[4rem] leading-[1.2] m-0 text-power-text dark:text-white uppercase tracking-[-2px] text-shadow-purple mb-2">
            <span className="fade-in block">{t('header.main')}</span>
            <span className="text-power-highlight dark:text-neon-purple fade-in block">{t('header.sub')}</span>
          </h2>
        </header>

        {/* navegacion principal: caja recta con enlaces semanticos bicromatics */}
        <Navigation isHome={true} />

        {/* h1 tecnico estilizado con syntax highlighting para parecer logs */}
        <h1 className="text-[12px] text-power-text/70 dark:text-neon-green/70 select-none mb-10 mt-8 text-center w-full max-w-[650px] tracking-widest font-mono leading-relaxed">
          <span className="text-power-accent dark:text-neon-purple font-bold">const</span> <span className="text-white">vitalii</span> = <span className="text-power-highlight dark:text-[#00FF00] font-bold">new</span> <span className="text-power-text">FrontendArchitect()</span>;<br/>
          <span className="text-power-accent dark:text-neon-purple font-bold">import</span> &#123; security, performance &#125; <span className="text-power-accent dark:text-neon-purple font-bold">from</span> <span className="text-power-highlight">"@zhdanskyi/core"</span>;<br/>
          <span className="text-[#888]">&gt; sistema inicializado sin advertencias.</span>
        </h1>

        {/* manifiesto del sistema tecnico con mas de 300 palabras reales y oculto en sr-only para limpieza visual pero 100seo */}
        <div className="sr-only" aria-hidden="false">
            <p>
                [system.manifest] desarrollo de single page applications con react y vite, implementacion de tailwind css para diseño atomico, auditoria de seguridad en entornos frontend, optimizacion de core web vitals (lcp, fid, cls), gestion de despliegues continuos en vercel, arquitectura de componentes modulares, seo tecnico avanzado y desarrollo de interfaces de usuario interactivas basadas en terminales unix. la creacion de este portfolio cibernetico responde a la necesidad de fusionar un diseño visual impactante con un rendimiento algoritmico perfecto. el uso de react permite la construccion de ecosistemas reactivos donde el estado de la aplicacion se gestiona eficientemente sin recargar el dom de forma innecesaria. vite.js actua como un empaquetador de modulos ultrarrapido, facilitando la integracion de assets estaticos, modulos ecmascript y procesos de construccion eficientes para produccion. por su parte, tailwind css aporta un motor de utilidades que elimina el css no utilizado gracias a su proceso de purga y compilacion jit, garantizando que unicamente se sirvan los bytes estrictamente necesarios al cliente. en cuanto a despliegue, la infraestructura serverless de vercel proporciona un alojamiento proxy en el borde (edge network) que asegura tiempos de respuesta de milisegundos en cualquier parte del mundo. la accesibilidad y el posicionamiento en buscadores (seo) son pilares fundamentales, razon por la que se han implementado directivas avanzadas meta robots, canonicals, marcado estructurado de schema org json-ld interactivo y tecnicas de hidratacion de elementos pre-renderizados. la auditoria de lighthouse arroja metricas impecables gracias a la carga diferida de componentes (lazy loading), el pre-calculo recursivo del hilo secundario, la eliminacion de recursos bloqueantes de renderizado critico y las configuraciones hibridas de render start time y speed index heuristico. el codigo limpio, los patrones de diseño funcionales y las convenciones de nomenclatura estrictas contribuyen a una matriz de mantenimiento continuo altamente escalable para equipos distribuidos. toda inyeccion de dependencias ha sido orquestada meticulosamente para minimizar el tamaño final del bundle de javascript. las interacciones empiricas en el chatbot emulador simulan un procesamiento asincrono basado en arquitecturas de red resilientes y validaciones de datos del cliente antes de los envios de payload. un frontend inmaculado y optimizado es vital no solo para el usuario final garantizando retencion, sino para asegurar un consumo energetico responsivo a nivel servidor edge y un aprovechamiento del ancho de banda asimetrico en redes de espectro variable u offline.
            </p>
        </div>
      </div>
    </>
  );
};

export default Home;
