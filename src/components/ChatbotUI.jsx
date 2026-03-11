// chatbot interactivo flotante
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState([
    { type: 'sys', text: '> init hub interactivo v2.1.0...' },
    { type: 'sys', text: '> enlazando subrutinas modulares...' },
    { type: 'bot', text: '> terminal online. usa \'ayuda\' para iniciar integracion.', isHtml: true }
  ]);
  const endRef = useRef(null);
  const navigate = useNavigate();

  // auto scroll en la historia de comandos
  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleCommand = (cmd) => {
    const c = cmd.toLowerCase().trim();
    if (c === 'ayuda' || c === 'help') return "> comandos disponibles: quien eres, proyectos, contacto, limpiar";
    if (c === 'quien eres' || c === 'whoami') return "> soy vitalii zhdanskyi, desarrollador full-stack especializado en backend y microservicios. escribo codigo para sobrevivir en la matrix.";
    if (c === 'proyectos') return "> accediendo a la base de datos de proyectos... escribe 'nav proyectos' para navegar a la seccion, o usa el menu superior.";
    if (c === 'contacto') return "> enlace de comunicaciones: usa el menu superior o envia un mail a zhdanskyibusiness@gmail.com";
    if (c === 'limpiar' || c === 'clear') {
      setMessages([]);
      return "> terminal reiniciada.";
    }
    if (c.startsWith('nav ')) {
      const page = c.split(' ')[1];
      if (page === 'proyectos') { goTo('/proyectos'); return '> redirigiendo a proyectos...'; }
      if (page === 'experiencia') { goTo('/experiencia'); return '> redirigiendo a experiencia...'; }
      if (page === 'contacto') { goTo('/contacto'); return '> redirigiendo a contacto...'; }
    }
    return "> comando no reconocido. escribe 'ayuda' para ver las opciones validas.";
  };

  const goTo = (url) => {
    setMessages(prev => [
      ...prev,
      { type: 'bot', text: '> estableciendo conexion cifrada...', color: '#00FF00' },
      { type: 'user', text: '> redirigiendo...', color: '#fff' }
    ]);
    setTimeout(() => {
      navigate(url);
    }, 500);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && inputVal.trim() !== '') {
      const currentCmd = inputVal;
      setMessages(prev => [...prev, { type: 'user', text: `root@zhdanskyi:~# ${currentCmd}` }]);
      setInputVal('');
      
      setTimeout(() => {
        const response = handleCommand(currentCmd);
        if (response) {
            if (response === '> terminal reiniciada.') return; 
            setMessages(prev => [...prev, { type: 'bot', text: response }]);
        }
      }, 300);
    }
  };

  return (
    <div id="chatbot" role="complementary" aria-label="Asistente virtual Zhdanskyi" data-testid="chatbot-component">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-10 right-10 w-14 h-14 bg-power-box dark:bg-[#0a0a0a] border border-power-highlight dark:border-neon-green flex items-center justify-center z-[100] hover:bg-power-highlight/20 dark:hover:bg-neon-green/20 transition-all duration-300 group"
        aria-label="Abrir asistente inteligente"
      >
        <span className="text-power-highlight dark:text-neon-green text-xl font-mono group-hover:scale-110 transition-transform select-none">&gt;_</span>
      </button>
      <span className="fixed bottom-4 right-10 text-[0.55rem] text-power-highlight/70 dark:text-neon-green/50 font-mono select-none">ASISTENTE ACTIVO</span>

      {isOpen && (
        <div className="fixed bottom-28 right-10 z-[99] animate-fade-in w-[90vw] max-w-[400px]">
          <div className="w-full h-[350px] bg-power-box/95 dark:bg-terminal-bg border border-power-highlight dark:border-neon-green shadow-[0_0_15px_rgba(133,227,255,0.15)] dark:shadow-terminal flex flex-col relative bg-scanlines overflow-hidden">
            <span className="sr-only">Chatbot interactivo activo para asistencia al usuario</span>
            {/* barra de control estilo terminal linux pura sin dots de mac */}
            <div className="bg-power-bg dark:bg-[#111] py-2 px-4 flex items-center justify-between border-b border-power-highlight dark:border-neon-green relative z-10">
              <div className="font-body text-power-highlight/70 dark:text-[#666] text-[0.75rem]">root@zhdanskyi:/sys/chatbot# _</div>
              <button onClick={() => setIsOpen(false)} aria-label="cerrar terminal" className="text-power-highlight dark:text-neon-green hover:text-white transition-colors cursor-pointer font-mono text-sm leading-none">[x]</button>
            </div>

            {/* log de mensajes del historial interactivo */}
            <div className="flex-grow p-4 overflow-y-auto font-body text-[0.9rem] leading-relaxed z-10 flex flex-col items-start text-left">
              {messages.map((m, i) => (
                <p key={i} className={`mb-1 w-full break-words ${m.type === 'sys' ? 'text-power-highlight/60 dark:text-[#888]' : m.type === 'bot' ? 'text-power-highlight dark:text-neon-green' : 'text-white'}`} style={m.color ? {color: m.color} : {}}>
                  {m.isHtml ? <span dangerouslySetInnerHTML={{ __html: m.text.replace("'ayuda'", `<span class="text-power-accent dark:text-white">'ayuda'</span>`) }} /> : m.text}
                </p>
              ))}
              <div ref={endRef} />
            </div>

            {/* input para comandos directos */}
            <div className="flex items-center justify-start py-3 px-4 bg-power-box dark:bg-[#0a0a0a] border-t border-dashed border-power-highlight/50 dark:border-[#333] z-10">
              <span className="text-power-accent dark:text-neon-purple mr-3 font-bold">&gt;</span>
              <input 
                type="text" 
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={onKeyDown}
                className="bg-transparent border-none text-power-text dark:text-white font-body text-[0.9rem] flex-grow outline-none text-left"
                autoComplete="off" 
                autoFocus 
                spellCheck="false"
                placeholder="..."
              />
              <span className="blinking-cursor text-power-highlight dark:text-neon-green font-bold">_</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotUI;
