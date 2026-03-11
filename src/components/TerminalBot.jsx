// consola cibernetica interactiva
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TerminalBot = () => {
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState([
    { type: 'sys', text: '> iniciando el asistente IA...' },
    { type: 'sys', text: '> enlazando componentes modulares...' },
    { type: 'bot', text: '> terminal online. escribe \'ayuda\' para empezar a navegar o usa el menu superior.', isHtml: true }
  ]);
  const endRef = useRef(null);
  const navigate = useNavigate();

  // auto scroll en la historia de comandos
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    <div id="chatbot" role="complementary" aria-label="Asistente virtual Zhdanskyi" data-testid="chatbot-component" className="w-full h-[350px] bg-terminal-bg border border-neon-green rounded shadow-terminal flex flex-col relative bg-scanlines overflow-hidden mt-12 mx-auto">
      {/* barra de control estilo terminal linux nativa */}
      <div className="bg-[#111] py-2 px-4 flex items-center justify-between border-b border-neon-green relative z-10">
        <div className="font-body text-[#666] text-[0.75rem]">root@zhdanskyi:/sys/chatbot_v2# _</div>
      </div>

      {/* log de mensajes del historial interactivo */}
      <div className="flex-grow p-6 overflow-y-auto font-body text-[1rem] leading-relaxed z-10 flex flex-col items-center text-center">
        {messages.map((m, i) => (
          <p key={i} className={`mb-1 w-full break-words ${m.type === 'sys' ? 'text-[#888]' : m.type === 'bot' ? 'text-neon-green' : 'text-white'}`} style={m.color ? { color: m.color } : {}}>
            {m.isHtml ? <span dangerouslySetInnerHTML={{ __html: m.text.replace("'ayuda'", "<span style='color:#fff'>'ayuda'</span>") }} /> : m.text}
          </p>
        ))}
        <div ref={endRef} />
      </div>

      {/* input para comandos directos */}
      <div className="flex items-center justify-center py-4 px-6 bg-[#0a0a0a] border-t border-dashed border-[#333] z-10">
        <span className="text-neon-purple mr-4 font-bold">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent border-none text-white font-body text-[1rem] flex-grow outline-none text-center"
          autoComplete="off"
          autoFocus
          spellCheck="false"
          placeholder="ingresa comando..."
        />
        <span className="blinking-cursor text-neon-green font-bold">_</span>
      </div>
    </div>
  );
};

export default TerminalBot;
