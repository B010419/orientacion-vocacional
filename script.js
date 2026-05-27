const detalles = {
    'bioquimica': { 
        titulo: 'Ingeniería Bioquímica', 
        imagen: 'bioquimica.jpeg',
        sueldo: '$18,000 a $45,000+ MXN al mes',
        desc: 'Utiliza la química y la biología para crear medicinas y alimentos.', 
        campo: 'Laboratorios farmacéuticos e industria alimentaria.',
        reto: 'Mucha memoria para fórmulas y largas horas de precisión en laboratorio.',
        tip: 'No te desesperes con la Termodinámica; es la base de todo lo demás.',
        materias: [
            { n: '🧪 Microbiología', d: 'Estudias los microorganismos (bacterias, hongos y virus) para aprender a controlarlos o usarlos a favor en la creación de medicinas, vacunas y fermentaciones industriales.' },
            { n: '🧬 Ingeniería Genética', d: 'Aprendes a manipular el ADN de organismos para mejorar sus propiedades, como crear plantas más resistentes a plagas o bacterias que producen insulina humana.' },
            { n: '🍎 Tecnología de Alimentos', d: 'Aplicas procesos físicos y químicos para conservar los alimentos por más tiempo, mejorar su valor nutricional y diseñar empaques seguros sin perder calidad.' }
        ],
        empresas: ['Pfizer', 'Bayer', 'Nestlé', 'Sigma Alimentos', 'Laboratorios Pisa'],
        futuro: 'Si mantienes la disciplina, en 5 años serás la mente detrás de nuevas fórmulas médicas o patentes de alimentos sustentables. Te esperan salarios competitivos en farmacéuticas multinacionales, puestos de dirección en control de calidad y la satisfacción de crear productos que salvan vidas o alimentan al planeta.'
    },
    'industrial': { 
        titulo: 'Ingeniería Industrial', 
        imagen: 'industrial.jpeg',
        sueldo: '$20,000 a $55,000+ MXN al mes',
        desc: 'Optimiza recursos y procesos para mejorar la productividad.', 
        campo: 'Plantas de manufactura, logística y gestión de calidad.',
        reto: 'Subestimar la carga matemática y estadística de los procesos.',
        tip: 'Desarrolla tus habilidades sociales; un Industrial lidera personas, no solo máquinas.',
        materias: [
            { n: '📉 Ergonomía', d: 'Diseñas estaciones y herramientas de trabajo que se adapten al cuerpo humano, reduciendo el cansancio y las lesiones de los operadores para aumentar la productividad.' },
            { n: '⚙️ Procesos de Fabricación', d: 'Conoces a fondo cómo se transforman las materias primas utilizando maquinaria, fundición y moldeado para crear productos en masa con el menor costo posible.' },
            { n: '📊 Calidad', d: 'Utilizas herramientas estadísticas para detectar errores en la línea de producción antes de que el producto llegue al cliente, garantizando la perfección en cada pieza.' }
        ],
        empresas: ['Femsa', 'Jabil', 'Flextronics', 'Amazon Logistics', 'Walmart'],
        futuro: 'Al graduarte y no tirar la toalla con las estadísticas, te convertirás en el motor estratégico de las empresas. En pocos años escalarás a gerencias de operaciones o direcciones de logística, diseñando plantas eficientes, liderando equipos masivos y maximizando ganancias, lo que se traduce en una alta estabilidad económica y un perfil corporativo ejecutivo.'
    },
    'mecatronica': { 
        titulo: 'Ingeniería Mecatrónica', 
        imagen: 'mecatronica.jpeg',
        sueldo: '$22,000 a $60,000+ MXN al mes',
        desc: 'Diseña sistemas automatizados combinando mecánica y electrónica.', 
        campo: 'Industria automotriz, robótica y aeronáutica.',
        reto: 'Dominar tres áreas a la vez: mecánica, electrónica y programación.',
        tip: 'Sé muy ordenado con tus circuitos o perderás horas buscando una falla simple.',
        materias: [
            { n: '🤖 Robótica Industrial', d: 'Aprendes a calcular los movimientos, fuerza y trayectorias de brazos robóticos utilizados en líneas de ensamblaje automotriz y cómo programar sus tareas.' },
            { n: '🔌 Microcontroladores', d: 'Programas pequeños cerebros electrónicos (chips) para que lean sensores y controlen motores, dándole "vida" e inteligencia a un sistema físico.' },
            { n: '⚙️ Mecanismos', d: 'Estudias los engranes, poleas y palancas para diseñar estructuras móviles que transformen la fuerza de un motor en un movimiento útil y preciso.' }
        ],
        empresas: ['Intel', 'Bosch', 'Tesla', 'Continental', 'Honda'],
        futuro: 'Tu resistencia al estudiar tres áreas simultáneamente pagará dividendos enormes. En el futuro cercano estarás programando y calibrando brazos robóticos industriales, automatizando líneas de producción aeroespaciales o automotrices. Serás un ingeniero altamente cotizado con acceso a bonos internacionales y proyectos tecnológicos de vanguardia.'
    },
    'dev_software': { 
        titulo: 'Ingeniería en Desarrollo de Software', 
        imagen: 'software.jpeg', 
        sueldo: '$25,000 a $80,000+ MXN al mes (¡O más si es remoto en USD!)',
        desc: 'Diseña y programa aplicaciones e Inteligencia Artificial.', 
        campo: 'Google, Oracle, Startups y trabajo remoto.',
        reto: 'La combinación de frustración constante cuando el código no funciona a la primera.',
        tip: 'Aprende a buscar soluciones en inglés; la comunidad global será tu mejor apoyo.',
        materias: [
            { n: '💻 Estructura de Datos', d: 'Aprendes las formas lógicas más eficientes de organizar y guardar la información en la memoria de la computadora para que los programas sean súper rápidos.' },
            { n: '📱 Desarrollo Móvil', d: 'Diseñas y construyes aplicaciones nativas para sistemas iOS y Android, manejando pantallas, almacenamiento interno y conexiones a internet.' },
            { n: '🤖 IA (Inteligencia Artificial)', d: 'Programas algoritmos y redes neuronales capaces de aprender por sí mismos mediante datos, permitiendo reconocer imágenes, procesar texto o predecir patrones.' }
        ],
        empresas: ['Google', 'Oracle', 'IBM', 'Tata (TCS)', '🚀 Startups Remotas'],
        futuro: 'Soportar los errores de compilación te dará la llave al mercado laboral más lucrativo del mundo. Te verás ganando en dólares desde la comodidad de tu casa o viajando a hubs tecnológicos. Diseñarás algoritmos de Inteligencia Artificial o aplicaciones móviles que usarán millones de personas, logrando una libertad geográfica y financiera inigualable.'
    },
    'civil': { 
        titulo: 'Ingeniería Civil Sustentable', 
        imagen: 'civil.jpeg',
        sueldo: '$18,000 a $50,000+ MXN al mes (Más libre por obra)',
        desc: 'Construye infraestructura moderna con técnicas ecológicas.', 
        campo: 'Constructoras y desarrollo urbano.',
        reto: 'La responsabilidad legal y física de que una estructura sea segura.',
        tip: 'Domina el dibujo técnico y el software de cálculo estructural desde el inicio.',
        materias: [
            { n: '🏗️ Mecánica de Suelos', d: 'Analizas muestras de tierra y roca en laboratorio para saber cuánta carga pueden soportar, evitando que un edificio o puente se hunda o se agriete en el futuro.' },
            { n: '📐 Cálculo Estructural', d: 'Utilizas matemáticas y leyes físicas avanzadas para determinar el grosor exacto de las vigas, varillas y columnas de concreto para soportar sismos y vientos.' },
            { n: '🌿 Materiales Sustentables', d: 'Investigas y aplicas nuevos materiales ecológicos, como concretos reciclados o compuestos avanzados, para reducir la contaminación de las obras.' }
        ],
        empresas: ['CEMEX', 'ICA', 'Grupo Carso', 'SEDATU', 'Constructoras Privadas'],
        futuro: 'Al vencer el reto de los cálculos estructurales complejos, pasarás a plasmar tus ideas en el mundo físico. Dirigirás proyectos de infraestructura masiva, complejos habitacionales ecológicos o sistemas de transporte inteligente. Tu firma tendrá valor legal, liderarás constructoras enteras y dejarás un legado tangible y verde en las ciudades.'
    },
    'diseno_elec': { 
        titulo: 'Ingeniería en Diseño Electrónico', 
        imagen: 'electronico.jpeg',
        sueldo: '$24,000 a $70,000+ MXN al mes',
        desc: 'Crea el hardware y microchips de la tecnología moderna.', 
        campo: 'Intel, Bosch y diseño de hardware.',
        reto: 'La complejidad de los circuitos integrados y la nanotecnología.',
        tip: 'Ten paciencia con la física de semiconductores; es difícil pero fascinante.',
        materias: [
            { n: '🔌 Circuitos Integrados', d: 'Diseñas los mapas internos de los microchips a nivel microscópico, acomodando millones de transistores en placas diminutas de silicio.' },
            { n: '📡 Telecomunicaciones', d: 'Estudias cómo viaja la información por el aire mediante ondas electromagnéticas para diseñar antenas y sistemas de conexión como el 5G, Wi-Fi o Bluetooth.' },
            { n: '🔬 Nanotecnología', d: 'Exploras el comportamiento de la materia a escalas atómicas para crear componentes electrónicos ultrarreducidos, eficientes y que gasten menos batería.' }
        ],
        empresas: ['Intel Hardware Lab', 'Bosch Semiconductors', 'NXP', 'AMD', 'Qualcomm'],
        futuro: 'Superar la abstracción de la nanotecnología te colocará en la cima de la pirámide de hardware. Trabajarás en laboratorios de alta tecnología desarrollando la arquitectura de los próximos microprocesadores, sensores médicos o componentes automotrices autónomos. Es una de las ingenierías con menor competencia y con los contratos más exclusivos del mercado corporativo.'
    }
};

const preguntas = [
    { 
        q: "¿Qué actividad te llamaría más la atención hacer en tu tiempo libre?", 
        ops: [
            {t: "💻 Desarrollar una aplicación, un sitio web o crear un videojuego", v: "dev_software"},
            {t: "🤖 Armar y programar un dispositivo automatizado o un pequeño robot", v: "mecatronica"},
            {t: "🏗️ Diseñar el plano de un espacio o una estructura moderna y ecológica", v: "civil"},
            {t: "🧪 Experimentar con reacciones químicas o analizar muestras biológicas", v: "bioquimica"},
            {t: "📊 Planificar cómo mejorar los tiempos y ventas de un negocio", v: "industrial"},
            {t: "🔬 Desarmar circuitos para entender cómo funcionan los microchips por dentro", v: "diseno_elec"}
        ] 
    },
    { 
        q: "Cuando trabajas en equipo para un proyecto, ¿qué rol prefieres tomar?", 
        ops: [
            {t: "🗣️ Ser el líder: Organizar a las personas, delegar tareas y cuidar el tiempo", v: "industrial"},
            {t: "🧠 Ser el estratega: Concentrarme en resolver la lógica interna del problema", v: "dev_software"},
            {t: "🛠️ Ser el constructor: Encargarme de la parte física, ensamblaje o materiales", v: "mecatronica"},
            {t: "🥼 Ser el investigador: Analizar datos a fondo y seguir métodos precisos", v: "bioquimica"}
        ] 
    },
    { 
        q: "¿Qué tipo de problemas te genera más satisfacción resolver?", 
        ops: [
            {t: "🧩 Errores lógicos y fallas de código que no se ven a simple vista", v: "dev_software"},
            {t: "📉 Procesos lentos en donde se está perdiendo dinero, tiempo o esfuerzo", v: "industrial"},
            {t: "📐 Calcular cómo distribuir cargas físicas para que una estructura sea segura", v: "civil"},
            {t: "🔌 Averiguar por qué falló una conexión eléctrica diminuta o un componente", v: "diseno_elec"}
        ] 
    },
    { 
        q: "¿Cuál de las siguientes áreas te despierta mayor curiosidad aprender?", 
        ops: [
            {t: "💻 Algoritmos, bases de datos y herramientas de Inteligencia Artificial", v: "dev_software"},
            {t: "🧬 Microbiología, genética y procesos de transformación alimentaria", v: "bioquimica"},
            {t: "🌿 Mecánica de suelos, materiales sustentables y desarrollo urbano", v: "civil"},
            {t: "⚡ Automatización industrial, servomotores y sistemas mecatrónicos", v: "mecatronica"},
            {t: "📈 Modelos estadísticos, administración y sistemas de control de calidad", v: "industrial"},
            {t: "📡 Telecomunicaciones, ondas electromagnéticas y desarrollo de hardware", v: "diseno_elec"}
        ] 
    },
    { 
        q: "Visualizando tu futuro profesional, ¿cómo te ves en tu entorno ideal?", 
        ops: [
            {t: "🏠 Trabajando de forma remota (Home Office) con horarios flexibles", v: "dev_software"},
            {t: "🏢 En un entorno corporativo tomando decisiones clave y guiando personal", v: "industrial"},
            {t: "🥼 En un laboratorio controlado desarrollando nuevas fórmulas o productos", v: "bioquimica"},
            {t: "🏗️ En campo abierto supervisando obras e infraestructura real", v: "civil"},
            {t: "⚙️ En una planta de manufactura avanzada interactuando con maquinaria inteligente", v: "mecatronica"},
            {t: "🔬 En un laboratorio de diseño tecnológico creando microprocesadores del futuro", v: "diseno_elec"}
        ] 
    }
];

let pActual = 0;
let puntajes = { bioquimica: 0, industrial: 0, mecatronica: 0, dev_software: 0, civil: 0, diseno_elec: 0 };

function cambiarItemActivo(idMenu) {
    const home = document.getElementById('menu-home');
    const test = document.getElementById('menu-test');
    if(home) home.classList.remove('active');
    if(test) test.classList.remove('active');
    
    const activo = document.getElementById(idMenu);
    if(activo) activo.classList.add('active');
}

function regresarMenu() {
    cambiarItemActivo('menu-home');
    document.getElementById('menu-inicial').style.display = 'block'; 
    document.getElementById('info-carrera').style.display = 'none';
    document.getElementById('seccion-inicio').style.display = 'none';
    document.getElementById('quiz-dinamico').style.display = 'none';
    
    const viejoHeader = document.getElementById('felicitacion-resultado');
    if(viejoHeader) viejoHeader.remove();
    
    const sidebarEmpresas = document.getElementById('sidebar-empresas');
    if(sidebarEmpresas) sidebarEmpresas.classList.add('hidden');
    
    document.getElementById('seccion-video').style.display = 'flex';
    document.getElementById('seccion-desercion').style.display = 'block';
    document.getElementById('bloque-contacto').style.display = 'block';
}

function abrirTestDesdeMenu() {
    cambiarItemActivo('menu-test');
    document.getElementById('seccion-video').style.display = 'none';
    document.getElementById('seccion-desercion').style.display = 'none';
    document.getElementById('info-carrera').style.display = 'none';
    document.getElementById('bloque-contacto').style.display = 'none';
    document.getElementById('menu-inicial').style.display = 'none';
    document.getElementById('quiz-dinamico').style.display = 'none';
    
    const sidebarEmpresas = document.getElementById('sidebar-empresas');
    if(sidebarEmpresas) sidebarEmpresas.classList.add('hidden');
    
    document.getElementById('seccion-inicio').style.display = 'block';
}

function verificarYRegresar() {
    regresarMenu();
}

function iniciarTest() {
    const nombre = document.getElementById('nombre-input').value;
    if(!nombre) return alert("Por favor escribe tu nombre para comenzar.");
    
    pActual = 0;
    puntajes = { bioquimica: 0, industrial: 0, mecatronica: 0, dev_software: 0, civil: 0, diseno_elec: 0 };
    document.getElementById('seccion-inicio').style.display = 'none';
    document.getElementById('quiz-dinamico').style.display = 'block';
    mostrarPregunta();
}

function mostrarPregunta() {
    const p = preguntas[pActual];
    document.getElementById('progreso').innerText = `Pregunta ${pActual + 1} de ${preguntas.length}`;
    document.getElementById('pregunta-texto').innerText = p.q;
    const cont = document.getElementById('opciones-contenedor');
    cont.innerHTML = "";
    
    p.ops.forEach(op => {
        const btn = document.createElement('button');
        btn.className = 'btn-carrera';
        btn.innerText = op.t;
        btn.onclick = () => {
            puntajes[op.v] = (puntajes[op.v] || 0) + 1;
            pActual++;
            if(pActual < preguntas.length) {
                mostrarPregunta();
            } else {
                finalizarTest();
            }
        };
        cont.appendChild(btn);
    });
}

function finalizarTest() {
    const ganador = Object.keys(puntajes).reduce((a, b) => puntajes[a] > puntajes[b] ? a : b);
    const nombre = document.getElementById('nombre-input').value;
    
    document.getElementById('quiz-dinamico').style.display = 'none';
    document.getElementById('menu-inicial').style.display = 'block'; 
    
    verInfo(ganador);
    
    const cont = document.getElementById('info-carrera');
    const viejoHeader = document.getElementById('felicitacion-resultado');
    if(viejoHeader) viejoHeader.remove();
    
    const headerResultado = document.createElement('div');
    headerResultado.id = 'felicitacion-resultado';
    headerResultado.style.textAlign = 'center';
    headerResultado.style.marginBottom = '20px';
    headerResultado.innerHTML = `
        <h2 style="color:var(--azul-oscuro)">¡Test Finalizado, ${nombre}!</h2>
        <p style="margin-bottom:10px; color: var(--texto-secundario);">Basado en tus respuestas, tu perfil ideal apunta a:</p>
        <div style="background:var(--naranja-ceti); color:white; padding:10px 25px; border-radius:30px; display:inline-block; font-size: 1.1rem; font-weight:700; margin-bottom:15px;">
            ${detalles[ganador].titulo}
        </div>
        <p style="font-size:0.9rem; color:var(--texto-secundario);">Puedes interactuar con los botones ordenados de abajo para investigar cada sección a tu propio ritmo.</p>
        <hr style="border:0; border-top:1px dashed #cbd5e1; margin-top:20px;">
    `;
    cont.insertBefore(headerResultado, cont.firstChild);
}

function cambiarPestana(idPestana) {
    const contenidos = document.querySelectorAll('.tab-content');
    contenidos.forEach(c => c.style.display = 'none');
    
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(b => {
        b.style.background = '#f1f5f9';
        b.style.color = '#475569';
    });
    
    const elementoTab = document.getElementById(idPestana);
    if(elementoTab) elementoTab.style.display = 'block';
    
    const botonActivo = document.querySelector(`[onclick="cambiarPestana('${idPestana}')"]`);
    if(botonActivo) {
        botonActivo.style.background = 'var(--naranja-ceti, #ff9800)';
        botonActivo.style.color = 'white';
    }
}

function conmutarMateria(idBloque) {
    const descBlock = document.getElementById(idBloque);
    const icono = document.getElementById('ico-' + idBloque);
    
    if (descBlock.style.display === 'none' || descBlock.style.display === '') {
        descBlock.style.display = 'block';
        if(icono) icono.style.transform = 'rotate(180deg)';
    } else {
        descBlock.style.display = 'none';
        if(icono) icono.style.transform = 'rotate(0deg)';
    }
}

function verInfo(id) {
    const info = detalles[id];
    const cont = document.getElementById('info-carrera');
    if (!info) return;

    let listaMaterias = '';
    info.materias.forEach((materia, index) => {
        const idBloque = `desc-mat-${id}-${index}`;
        listaMaterias += `
            <div style="margin: 12px 0; background:#ffffff; border-radius:8px; border-left:4px solid #1b4d6b; box-shadow:0 2px 5px rgba(0,0,0,0.05); overflow:hidden;">
                <div onclick="conmutarMateria('${idBloque}')" style="padding:14px 20px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; font-weight: 600; font-size:1.05rem; color:#1e293b; user-select:none;">
                    <span>${materia.n}</span>
                    <span id="ico-${idBloque}" style="transition: transform 0.3s; color:var(--naranja-ceti); font-size:0.8rem; display:inline-block;">▼</span>
                </div>
                <div id="${idBloque}" style="display:none; padding: 0 20px 15px 20px; color:#475569; font-size:0.95rem; line-height:1.6; border-top:1px solid #f1f5f9; background:#fafbfc;">
                    <p style="margin-top:10px;">${materia.d}</p>
                </div>
            </div>
        `;
    });

    let bloquesEmpresas = '';
    if(info.empresas) {
        info.empresas.forEach(emp => {
            bloquesEmpresas += `
                <span style="background: #ffffff; color: #1e293b; padding: 10px 20px; margin: 6px; border-radius: 30px; font-weight: bold; font-size: 1rem; display: inline-block; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                     🏢 ${emp}
                </span>
            `;
        });
    }

    document.getElementById('menu-inicial').style.display = 'none';
    document.getElementById('seccion-desercion').style.display = 'none';
    document.getElementById('seccion-video').style.display = 'none';
    document.getElementById('seccion-inicio').style.display = 'none';
    document.getElementById('bloque-contacto').style.display = 'none';

    const viejoHeader = document.getElementById('felicitacion-resultado');
    const htmlHeader = viejoHeader ? viejoHeader.outerHTML : '';

    cont.innerHTML = htmlHeader + `
        <div class="detalle-card-moderno" style="margin-top: 20px; padding: 25px; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
            
            <div style="text-align:center; margin-bottom: 25px;">
                <h2 style="color: var(--azul-oscuro); margin-bottom: 15px; font-size: 1.8rem;">📋 ${info.titulo}</h2>
                <img src="${info.imagen}" alt="${info.titulo}" class="img-carrera-detalle" style="max-width: 100%; height: auto; border-radius: 12px;" onerror="this.style.display='none'; document.getElementById('error-img-${id}').style.display='block';">
                <div id="error-img-${id}" style="background:#e2e8f0; padding:20px; border-radius:15px; color:#475569; display:none; max-width:400px; margin:0 auto;">
                    <p style="margin:0; font-weight:600;">[ Imagen: ${info.imagen} ]</p>
                </div>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 25px; border-bottom: 2px solid #f1f5f9; padding-bottom: 15px;">
                <button class="tab-btn" onclick="cambiarPestana('tab-general')">📊 General</button>
                <button class="tab-btn" onclick="cambiarPestana('tab-empresas')">🏢 Dónde Trabajar</button>
                <button class="tab-btn" onclick="cambiarPestana('tab-materias')">📚 Plan de Estudios</button>
                <button class="tab-btn" onclick="cambiarPestana('tab-futuro')">🚀 Retos y Futuro</button>
            </div>

            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; min-height: 200px; margin-bottom: 25px;">
                
                <div id="tab-general" class="tab-content">
                    <div style="background:#e6f4ea; border: 2px solid #34a853; color:#137333; padding:12px; border-radius:12px; text-align:center; margin-bottom:20px; font-size:1.1rem; font-weight:bold;">
                        💸 Ingreso Promedio Estimado: ${info.sueldo}
                    </div>
                    <p style="font-size: 1.1rem; line-height: 1.7; color:#334155; margin-bottom: 15px;"><strong>¿Qué es?:</strong> ${info.desc}</p>
                    <p style="font-size: 1.1rem; line-height: 1.7; color:#334155;"><strong>📍 Áreas de Desempeño:</strong> ${info.campo}</p>
                </div>

                <div id="tab-empresas" class="tab-content" style="display:none; text-align:center;">
                    <p style="color: #64748b; font-weight: 600; margin-bottom: 15px;">Convenios y empresas ideales donde podrás ejercer:</p>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
                        ${bloquesEmpresas}
                    </div>
                </div>

                <div id="tab-materias" class="tab-content" style="display:none;">
                    <p style="color: #64748b; font-weight: 600; margin-bottom: 15px; text-align:center;">💡 Haz clic en cualquier materia para conocer qué harás en ella:</p>
                    <div style="margin-top:15px;">
                        ${listaMaterias}
                    </div>
                </div>

                <div id="tab-futuro" class="tab-content" style="display:none;">
                    <div style="background:#fff3e0; border-left:5px solid #ff9800; padding:15px; margin-bottom:15px; border-radius: 8px;">
                        <h4 style="margin:0 0 5px 0; color:#e65100; font-size: 1.05rem;">⚠️ EL RETO (Para no desertar):</h4>
                        <p style="margin:0; color: #475569; line-height: 1.5;">${info.reto}</p>
                    </div>

                    <div style="background:#e8f5e9; border-left:5px solid #4caf50; padding:15px; margin-bottom:15px; border-radius: 8px;">
                        <h4 style="margin:0 0 5px 0; color:#2e7d32; font-size: 1.05rem;">💡 CONSEJO CLAVE:</h4>
                        <p style="margin:0; color: #475569; line-height: 1.5;">${info.tip}</p>
                    </div>

                    <div style="background:#0f172a; color:#f8fafc; border-left:5px solid #ff9800; padding:15px; border-radius: 8px;">
                        <h4 style="margin:0 0 5px 0; color:#ff9800; font-size: 1.05rem;">🚀 TU FUTURO A 5 AÑOS:</h4>
                        <p style="margin:0; line-height:1.6; text-align:justify; font-size:0.95rem; color:#cbd5e1;">${info.futuro}</p>
                    </div>
                </div>

            </div>

            <div style="text-align: center;">
                <button class="btn-test-mini" style="background: var(--azul-oscuro, #0f172a); padding:12px 24px; border-radius:8px; color:white; border:none; cursor:pointer; font-weight:bold;" onclick="verificarYRegresar()">
                    ← Volver al Panel de Inicio
                </button>
            </div>
            
        </div>
    `;

    cont.style.display = 'block';
    cambiarPestana('tab-general');
}
// Función para contar las visitas de forma automática
function registrarVisita() {
    // Usamos una clave única basada en tu proyecto del CETI
    const urlAPI = "https://api.countapi.xyz/hit/ceti-orientacion-vocacional/visitas";
    
    fetch(urlAPI)
        .then(res => res.json())
        .then(data => {
            const elemento = document.getElementById('contador-visitas');
            if (elemento && data.value) {
                // Formatea el número para que lleve comas si es muy grande (ej. 1,250)
                elemento.innerText = data.value.toLocaleString();
            }
        })
        .catch(err => {
            // Si por algo falla la conexión o se prueba en local sin internet, muestra un número inicial simulación
            const elemento = document.getElementById('contador-visitas');
            if (elemento) elemento.innerText = "1";
            console.log("Contador en modo local o API fuera de línea");
        });
}

// Ejecutar la función en cuanto cargue la página
document.addEventListener("DOMContentLoaded", registrarVisita);