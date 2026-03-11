import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const Collaborators = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>vitalii | colaboradores</title>
                <meta name="description" content="colaboradores y proyectos compartidos con vitalii zhdanskyi" />
            </Helmet>

            <main id="main-content" className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col items-center">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-power-highlight text-center border-b-2 border-power-highlight pb-2 uppercase">COLABORADORES</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    
                    {/* primer colaborador */}
                    <article className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                        <div className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono">[ RED TEAM | PENTESTING ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-power-accent leading-[1.4]">HACKER 0X1</h2>
                        <p className="text-[0.95rem] text-power-text mb-6">
                            Especialista en seguridad ofensiva colaborando en multiples auditorias de sistemas distribuidos y pruebas de penetracion.
                        </p>
                        <a href="#" className="inline-block border-b border-dashed border-power-highlight text-[0.9rem] pb-[1px] text-power-highlight hover:text-power-accent hover:border-power-accent transition-colors">&gt; PERFIL</a>
                    </article>

                    {/* segundo colaborador */}
                    <article className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                        <div className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono">[ FRONTEND | UX UI ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-power-accent leading-[1.4]">DEV NODEJS</h2>
                        <p className="text-[0.95rem] text-power-text mb-6">
                            Arquitecturas reactivas y desarrollo de interfaces visuales de alto rendimiento en proyectos del sector fintech.
                        </p>
                        <a href="#" className="inline-block border-b border-dashed border-power-highlight text-[0.9rem] pb-[1px] text-power-highlight hover:text-power-accent hover:border-power-accent transition-colors">&gt; PERFIL</a>
                    </article>

                    {/* tercer colaborador */}
                    <article className="bg-power-box/80 border border-power-highlight/50 p-8 relative transition-all duration-300 shadow-[0_0_10px_rgba(133,227,255,0.1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(133,227,255,0.4)] hover:border-power-highlight">
                        <div className="text-[0.9rem] text-power-highlight mb-4 font-bold font-mono">[ DEVOPS | KUBERNETES ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-power-accent leading-[1.4]">SYS ADMIN</h2>
                        <p className="text-[0.95rem] text-power-text mb-6">
                            Automatizacion de despliegues y monitoreo continuo sobre nubes hibridas para garantizar la resiliencia.
                        </p>
                        <a href="#" className="inline-block border-b border-dashed border-power-highlight text-[0.9rem] pb-[1px] text-power-highlight hover:text-power-accent hover:border-power-accent transition-colors">&gt; PERFIL</a>
                    </article>

                </div>
            </main>

            <Footer />
        </>
    );
};

export default Collaborators;
