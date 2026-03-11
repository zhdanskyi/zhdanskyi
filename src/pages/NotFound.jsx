import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>error 404 - sistema no encontrado | zhdanskyi</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="flex flex-col justify-center items-center h-screen max-w-[680px] mx-auto w-[90%] fade-in bg-[#050505]">
                {/* ventana de terminal que contiene el error */}
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] border-t-[28px] border-t-[#111] rounded-t-md p-10 w-full relative shadow-[0_0_30px_rgba(0,255,0,0.12),_0_0_60px_rgba(181,55,242,0.06)] text-center">
                    
                    {/* botones decorativos de la barra de titulo de la terminal */}
                    <div className="absolute -top-[17px] left-[14px] w-[10px] h-[10px] rounded-full bg-error-red shadow-[18px_0_0_#ffbd2e,_36px_0_0_#27c93f]"></div>
                    
                    {/* etiqueta de la barra de titulo de la terminal */}
                    <div className="absolute -top-[19px] left-1/2 -translate-x-1/2 text-[#555] text-[0.65rem] font-body whitespace-nowrap">
                        root@zhdanskyi:/error/404#
                    </div>

                    {/* titulo principal del error con brillo morado */}
                    <h1 className="font-head text-[1.8rem] text-[#b537f2] shadow-neon mb-6 leading-[1.4] [text-shadow:0_0_12px_#b537f2,_0_0_25px_rgba(181,55,242,0.4)]">
                        ERROR 404<br/>SISTEMA NO ENCONTRADO
                    </h1>

                    <p className="text-left my-2 text-[#00FF00] text-[0.95rem] leading-[1.5]">&gt; escaneando directorios del sistema...</p>
                    <p className="text-left my-2 text-error-red text-[0.95rem] leading-[1.5]">&gt; FATAL: la ruta solicitada no existe en este servidor.</p>
                    <p className="text-left my-2 text-[#00FF00] text-[0.95rem] leading-[1.5]">&gt; el recurso puede haber sido movido o eliminado.</p>
                    <p className="text-left my-2 text-[#555] text-[0.95rem] leading-[1.5]">
                        &gt; conexion terminada. esperando instrucciones del operador<span className="blinking-cursor text-neon-green">_</span>
                    </p>

                    <hr className="border-none border-t border-dashed border-[#222] my-6" />

                    {/* enlace semantico de retorno al directorio raiz */}
                    <Link to="/" className="inline-block mt-6 text-[#00FF00] no-underline border border-[#00FF00] py-[0.7rem] px-[1.4rem] font-head text-[0.65rem] tracking-[1px] [text-shadow:0_0_6px_#00FF00] shadow-[0_0_8px_rgba(0,255,0,0.2)] transition-all duration-300 hover:bg-[#00FF00] hover:text-[#000] hover:shadow-[0_0_18px_#00FF00,_inset_0_0_8px_rgba(0,0,0,0.3)] hover:text-shadow-none">
                        [ &lt; VOLVER AL INICIO ]
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
