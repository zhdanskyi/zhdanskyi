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

            <main className="max-w-[1200px] mx-auto px-8 pb-16 pt-8 fade-in flex flex-col items-center">
                <div className="flex justify-center items-center pb-4 mb-8 w-full">
                    <h1 className="font-head text-[2rem] text-neon-green text-center border-b-2 border-neon-green pb-2 uppercase">COLABORADORES</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    
                    {/* primer colaborador */}
                    <article className="bg-[#000] border-2 border-neon-purple p-8 relative transition-all duration-300 shadow-neon-purple hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neon-green-hover hover:border-neon-green">
                        <div className="text-[0.9rem] text-neon-green mb-4 font-bold">[ RED TEAM | PENTESTING ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-white leading-[1.4]">HACKER 0X1</h2>
                        <p className="text-[0.95rem] text-[#ccc] mb-6">
                            Especialista en seguridad ofensiva colaborando en multiples auditorias de sistemas distribuidos y pruebas de penetracion.
                        </p>
                        <a href="#" className="inline-block border-b border-dashed border-white text-[0.9rem] pb-[1px] hover:text-neon-green hover:border-neon-green transition-colors">PERFIL &gt;&gt;</a>
                    </article>

                    {/* segundo colaborador */}
                    <article className="bg-[#000] border-2 border-neon-purple p-8 relative transition-all duration-300 shadow-neon-purple hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neon-green-hover hover:border-neon-green">
                        <div className="text-[0.9rem] text-neon-green mb-4 font-bold">[ FRONTEND | UX UI ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-white leading-[1.4]">DEV NODEJS</h2>
                        <p className="text-[0.95rem] text-[#ccc] mb-6">
                            Arquitecturas reactivas y desarrollo de interfaces visuales de alto rendimiento en proyectos del sector fintech.
                        </p>
                        <a href="#" className="inline-block border-b border-dashed border-white text-[0.9rem] pb-[1px] hover:text-neon-green hover:border-neon-green transition-colors">PERFIL &gt;&gt;</a>
                    </article>

                    {/* tercer colaborador */}
                    <article className="bg-[#000] border-2 border-neon-purple p-8 relative transition-all duration-300 shadow-neon-purple hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neon-green-hover hover:border-neon-green">
                        <div className="text-[0.9rem] text-neon-green mb-4 font-bold">[ DEVOPS | KUBERNETES ]</div>
                        <h2 className="font-head text-[1.2rem] mb-4 text-white leading-[1.4]">SYS ADMIN</h2>
                        <p className="text-[0.95rem] text-[#ccc] mb-6">
                            Automatizacion de despliegues y monitoreo continuo sobre nubes hibridas para garantizar la resiliencia.
                        </p>
                        <a href="#" className="inline-block border-b border-dashed border-white text-[0.9rem] pb-[1px] hover:text-neon-green hover:border-neon-green transition-colors">PERFIL &gt;&gt;</a>
                    </article>

                </div>
            </main>

            <Footer />
        </>
    );
};

export default Collaborators;
