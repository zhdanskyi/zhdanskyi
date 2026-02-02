
const bootMessages = [
    "> GENERATING CODE BIOMES... [OK]",
    "> MINING DATABASE BUGS... [99%]",
    "> TAMING JAVA SLIMES... [SUCCESS]",
    "> WHERE'S THE GUIDE? OH, IT'S ME. [LOADING]",
    "> BUILDING WORLD... [TERRAFORMING]",
    "> SUMMONING CTHULHU'S EYE... [WAIT]",
    "> COMPILING COFFEE INTO JAVA... [DONE]",
    "> DEFEATING DEPENDENCY HELL... [CRITICAL HIT]",
    "> SPAWNING NPCs... [RECRUITERS DETECTED]"
];

const translations = {
    es: {
        "header.slogan": "> Backend Developer | Java & Spring Boot Specialist",
        "header.bio": "Desarrollador apasionado por arquitecturas robustas y código limpio. Especializado en transformar café en microservicios eficientes.",
        "top.slogan": "> SYSTEM_ADMIN // ONLINE",
        "nav.01": "[ 01. INICIO ]",
        "nav.02": "[ 02. EXPERIENCIA ]",
        "nav.03": "[ 03. PROYECTOS ]",
        "nav.04": "[ 04. CONTACTO ]",

        "exp.btn.open": "[ ABRIR INVENTARIO DE HABILIDADES ]",
        "exp.role1": "DESARROLLADOR BACKEND",
        "exp.desc1": "Diseño de APIs escalables, seguridad y microservicios (Java/Spring Boot).",
        "exp.role2": "FREELANCE PYTHON (UPWORK)",
        "exp.desc2": "Automatización de procesos y scraping de datos para clientes globales.",
        "exp.role3": "MARKETING & ECOMMERCE",
        "exp.desc3": "Gestión completa de tiendas, Facebook/Google Ads y desarrollo Angular.",

        "proj.filter.all": "TODOS",
        "proj.filter.2024": "2024",
        "proj.filter.2025": "2025",
        "proj.inv": ">> CONTENIDO DEL COFRE:",

        "cont.title": "> INICIAR CONEXIÓN",
        "cont.name": "> NOMBRE / INFO:",
        "cont.msg": "> MENSAJE:",
        "cont.send": "[ ENVIAR ]",
        "cont.whatsapp": "[ WHATSAPP ]",
        "game.link": "[ JUGAR ]"
    },
    en: {
        "header.slogan": "> Backend Developer | Java & Spring Boot Specialist",
        "header.bio": "Developer passionate about robust architectures and clean code. Specialized in transforming coffee into efficient microservices.",
        "top.slogan": "> SYSTEM_ADMIN // ONLINE",
        "nav.01": "[ 01. HOME ]",
        "nav.02": "[ 02. EXPERIENCE ]",
        "nav.03": "[ 03. PROJECTS ]",
        "nav.04": "[ 04. CONTACT ]",

        "exp.btn.open": "[ OPEN SKILL INVENTORY ]",
        "exp.role1": "BACKEND DEVELOPER",
        "exp.desc1": "Design of scalable APIs, security, and microservices (Java/Spring Boot).",
        "exp.role2": "FREELANCE PYTHON (UPWORK)",
        "exp.desc2": "Process automation and data scraping for global clients.",
        "exp.role3": "MARKETING & ECOMMERCE",
        "exp.desc3": "Full store management, Facebook/Google Ads, and Angular development.",

        "proj.filter.all": "ALL",
        "proj.filter.2024": "2024",
        "proj.filter.2025": "2025",
        "proj.inv": ">> CHEST CONTENTS:",

        "cont.title": "> INITIATE CONNECTION",
        "cont.name": "> NAME / INFO:",
        "cont.msg": "> MESSAGE:",
        "cont.send": "[ SEND ]",
        "cont.whatsapp": "[ WHATSAPP ]",
        "game.link": "[ PLAY ]"
    },
    ua: {
        "header.slogan": "> Backend Developer | Java & Spring Boot Specialist",
        "header.bio": "Розробник, захоплений надійною архітектурою та чистим кодом. Спеціалізуюся на перетворенні кави в ефективні мікросервіси.",
        "top.slogan": "> SYSTEM_ADMIN // ONLINE",
        "nav.01": "[ 01. ГОЛОВНА ]",
        "nav.02": "[ 02. ДОСВІД ]",
        "nav.03": "[ 03. ПРОЄКТИ ]",
        "nav.04": "[ 04. КОНТАКТИ ]",

        "exp.btn.open": "[ ВІДКРИТИ ІНВЕНТАР НАВИЧОК ]",
        "exp.role1": "BACKEND DEVELOPER",
        "exp.desc1": "Проєктування масштабованих API, безпека та мікросервіси (Java/Spring Boot).",
        "exp.role2": "FREELANCE PYTHON (UPWORK)",
        "exp.desc2": "Автоматизація процесів та скрейпінг даних.",
        "exp.role3": "MARKETING & ECOMMERCE",
        "exp.desc3": "Повне управління магазинами, Facebook/Google Ads та розробка на Angular.",

        "proj.filter.all": "ВСІ",
        "proj.filter.2024": "2024",
        "proj.filter.2025": "2025",
        "proj.inv": ">> ВМІСТ СКРИНІ:",

        "cont.title": "> ВСТАНОВИТИ ЗВ'ЯЗОК",
        "cont.name": "> ІМ'Я / ІНФО:",
        "cont.msg": "> ПОВІДОМЛЕННЯ:",
        "cont.send": "[ НАДІСЛАТИ ]",
        "cont.whatsapp": "[ WHATSAPP ]",
        "game.link": "[ ГРАТИ ]"
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    if (!translations[lang]) return;
    document.body.className = lang;
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang][key]) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = translations[lang][key];
            } else {
                elem.innerHTML = translations[lang][key];
            }
        }
    });
}

function checkBoot() {
    const saved = localStorage.getItem('selectedLang');
    const overlay = document.getElementById('lang-overlay');

    // Fun Text
    const bootText = document.getElementById('boot-text');
    if (bootText) {
        // Random message
        bootText.innerHTML = bootMessages[Math.floor(Math.random() * bootMessages.length)];
    }

    if (saved) {
        if (overlay) overlay.style.display = 'none';
        applyLanguage(saved);
        document.body.style.overflow = 'auto';
    } else {
        if (overlay) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
}

// function toggleExperience() REMOVED

/* --- PROJECT FILTER (ROBUST) --- */
// function filterProjects(year) { ... } REMOVED

window.changeLanguage = setLanguage;
// window.toggleExp = toggleExperience;
// window.filterProj = filterProjects;

function confirmSend() {
    alert(">> MESSAGE TRANSMITTED TO SERVER. [OK]");
    return true;
}
window.confirmSend = confirmSend;
