/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Collaborators from './pages/Collaborators';
import DigitalCV from './pages/DigitalCV';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import ReturnButton from './components/ReturnButton';
import SeoLayout from './components/SeoLayout';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/index.html';

  return (
    <SeoLayout>
      <div className={`w-full min-h-screen ${isHome ? 'flex items-center justify-center bg-light-bg dark:bg-dark-bg bg-matrix' : 'h-auto overflow-y-auto bg-light-box dark:bg-[#050505] transition-colors duration-500'}`}>
        {/* accesibilidad a11y skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">Saltar al contenido principal</a>
      <AnimatedBackground />
      {/* doble marco global cyber */}
      <div className="double-frame"></div>
      
      {/* boton de retorno superior para sub-paginas */}
      {!isHome && <ReturnButton />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/projects.html" element={<Projects />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/experience.html" element={<Experience />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/colaboradores.html" element={<Collaborators />} />
        <Route path="/colaboradores" element={<Collaborators />} />
        <Route path="/cv.html" element={<DigitalCV />} />
        <Route path="/cv" element={<DigitalCV />} />
        {/* redireccion forzada al inicio para rutas 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </div>
    </SeoLayout>
  );
}

export default App;
