// ============================================================
// APP.JS — Plataforma E-Learning Sistemas de Gestión
// ============================================================

// --- CONFIGURACIÓN ---
// Pegar aquí la URL de tu Google Apps Script desplegado
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8UWT8mowIOS7Gc4RSZ-z2CMBYcmP5dBYPB6daRlBv3RTgqhPkO4n7yTfi7OWj9U_AKA/exec';

// ============================================================
// ESTADO DE LA APLICACIÓN
// ============================================================
const STATE = {
  alumno: null,
  progreso: {}, // { "clase_ID": { completada: bool, respuestas: [], nota: number } }
  claseActual: null,
  moduloActual: null,
  respuestasActuales: {}, // { preguntaIndex: opcionIndex }
  cuestionarioEnviado: false,
};

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  cargarDesdeLocalStorage();
  setupEventListeners();

  if (STATE.alumno) {
    mostrarApp();
  } else {
    mostrarLogin();
  }
});

function cargarDesdeLocalStorage() {
  const alumnoGuardado = localStorage.getItem('elearning_alumno');
  const progresoGuardado = localStorage.getItem('elearning_progreso');

  if (alumnoGuardado) STATE.alumno = alumnoGuardado;
  if (progresoGuardado) {
    try {
      STATE.progreso = JSON.parse(progresoGuardado);
    } catch (e) {
      STATE.progreso = {};
    }
  }
}

function guardarEnLocalStorage() {
  if (STATE.alumno) localStorage.setItem('elearning_alumno', STATE.alumno);
  localStorage.setItem('elearning_progreso', JSON.stringify(STATE.progreso));
}

function setupEventListeners() {
  // Login
  document.getElementById('btn-login').addEventListener('click', handleLogin);
  document.getElementById('nombre-alumno').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleLogin();
  });

  // Logout
  document.getElementById('btn-logout').addEventListener('click', handleLogout);

  // Botón volver al dashboard desde clase
  document.getElementById('btn-back-dashboard').addEventListener('click', mostrarDashboard);

  // Botón enviar cuestionario
  document.getElementById('btn-enviar').addEventListener('click', enviarCuestionario);

  // Botón reintentar cuestionario
  document.getElementById('btn-retry').addEventListener('click', () => {
    renderizarCuestionario(STATE.claseActual);
  });

  // Botón ir al dashboard desde resultado
  document.getElementById('btn-go-dashboard').addEventListener('click', mostrarDashboard);

  // Botón siguiente clase
  document.getElementById('btn-next-clase').addEventListener('click', irSiguienteClase);
}

// ============================================================
// LOGIN / LOGOUT
// ============================================================
function handleLogin() {
  const input = document.getElementById('nombre-alumno');
  const nombre = input.value.trim();

  if (!nombre) {
    input.style.borderColor = 'var(--error-accent)';
    input.placeholder = 'Por favor, escribí tu nombre';
    setTimeout(() => {
      input.style.borderColor = '';
      input.placeholder = 'Ejemplo: Juan Pérez';
    }, 2000);
    return;
  }

  STATE.alumno = nombre;
  guardarEnLocalStorage();
  mostrarApp();
}

function handleLogout() {
  if (!confirm('¿Seguro que querés cerrar sesión? Tu progreso no se perderá.')) return;
  STATE.alumno = null;
  localStorage.removeItem('elearning_alumno');
  location.reload();
}

// ============================================================
// NAVEGACIÓN DE VISTAS
// ============================================================
function mostrarLogin() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
}

function mostrarApp() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  document.getElementById('user-name').textContent = STATE.alumno;
  actualizarProgresoGeneral();
  mostrarDashboard();
}

function mostrarDashboard() {
  document.getElementById('dashboard-view').style.display = 'block';
  document.getElementById('clase-view').style.display = 'none';
  STATE.claseActual = null;
  STATE.moduloActual = null;
  renderizarDashboard();
  actualizarProgresoGeneral();
}

function mostrarClase(moduloId, claseId) {
  const modulo = COURSE_DATA.modulos.find(m => m.id === moduloId);
  const clase = modulo?.clases_lista.find(c => c.id === claseId);
  if (!modulo || !clase) return;

  // Verificar si está desbloqueada
  if (!estaDesbloqueada(claseId)) {
    mostrarToast('🔒 Completá la clase anterior primero', 'info');
    return;
  }

  STATE.claseActual = clase;
  STATE.moduloActual = modulo;
  STATE.respuestasActuales = {};
  STATE.cuestionarioEnviado = false;

  document.getElementById('dashboard-view').style.display = 'none';
  document.getElementById('clase-view').style.display = 'block';

  renderizarClase(modulo, clase);

  // Scroll al top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// LÓGICA DE PROGRESO Y DESBLOQUEO
// ============================================================
function estaCompletada(claseId) {
  return STATE.progreso[`clase_${claseId}`]?.completada === true;
}

function estaDesbloqueada(claseId) {
  if (claseId === 1) return true; // Clase 1 siempre desbloqueada
  return estaCompletada(claseId - 1);
}

function calcularProgresoTotal() {
  const totalClases = COURSE_DATA.totalClases;
  const completadas = Object.values(STATE.progreso).filter(p => p.completada).length;
  return { completadas, totalClases, porcentaje: Math.round((completadas / totalClases) * 100) };
}

function calcularProgresoModulo(modulo) {
  const ids = modulo.clases_lista.map(c => c.id);
  const completadas = ids.filter(id => estaCompletada(id)).length;
  return { completadas, total: ids.length };
}

function actualizarProgresoGeneral() {
  const { completadas, totalClases, porcentaje } = calcularProgresoTotal();
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');
  if (fill) fill.style.width = `${porcentaje}%`;
  if (label) label.textContent = `${completadas}/${totalClases} clases`;
}

// ============================================================
// RENDER — DASHBOARD
// ============================================================
function renderizarDashboard() {
  const { completadas, totalClases, porcentaje } = calcularProgresoTotal();

  // Stats
  const disponibles = calcularDisponibles();
  document.getElementById('stat-completadas').textContent = completadas;
  document.getElementById('stat-disponibles').textContent = disponibles;
  document.getElementById('stat-total').textContent = totalClases;
  document.getElementById('stat-porcentaje').textContent = `${porcentaje}%`;

  // Welcome
  const welcomeText = document.getElementById('welcome-text');
  if (completadas === 0) {
    welcomeText.textContent = `Bienvenido, ${STATE.alumno}. Comenzá con la Clase 1 del Módulo 1.`;
  } else if (completadas === totalClases) {
    welcomeText.textContent = `¡Felicitaciones, ${STATE.alumno}! Completaste todo el curso. 🎉`;
  } else {
    welcomeText.textContent = `Bienvenido de vuelta, ${STATE.alumno}. Seguí desde donde lo dejaste.`;
  }

  // Módulos
  const container = document.getElementById('modulos-container');
  container.innerHTML = '';

  COURSE_DATA.modulos.forEach(modulo => {
    container.appendChild(crearTarjetaModulo(modulo));
  });
}

function calcularDisponibles() {
  let count = 0;
  COURSE_DATA.modulos.forEach(m => {
    m.clases_lista.forEach(c => {
      if (estaDesbloqueada(c.id) && !estaCompletada(c.id)) count++;
    });
  });
  return count;
}

function crearTarjetaModulo(modulo) {
  const { completadas, total } = calcularProgresoModulo(modulo);
  const porcentaje = Math.round((completadas / total) * 100);

  const card = document.createElement('div');
  card.className = 'modulo-card';
  card.setAttribute('data-modulo', modulo.id);

  card.innerHTML = `
    <div class="modulo-header">
      <span class="modulo-icon">${modulo.icon}</span>
      <div class="modulo-numero">Módulo ${modulo.id} · Clases ${modulo.clases}</div>
      <div class="modulo-titulo">${modulo.titulo}</div>
      <div class="modulo-subtitulo">${modulo.subtitulo}</div>
    </div>
    <div class="modulo-progress">
      <div class="modulo-progress-bar">
        <div class="modulo-progress-fill" style="width: ${porcentaje}%"></div>
      </div>
    </div>
    <div class="clases-list">
      ${modulo.clases_lista.map(clase => crearItemClase(clase, modulo.id)).join('')}
    </div>
  `;

  return card;
}

function crearItemClase(clase, moduloId) {
  const completada = estaCompletada(clase.id);
  const desbloqueada = estaDesbloqueada(clase.id);
  const bloqueada = !desbloqueada;

  let statusClass = 'available';
  let icon = '▶';
  if (completada) { statusClass = 'completed'; icon = '✅'; }
  if (bloqueada) { statusClass = 'locked'; icon = '🔒'; }

  return `
    <div class="clase-item ${statusClass}"
         onclick="${!bloqueada ? `mostrarClase(${moduloId}, ${clase.id})` : ''}">
      <span class="clase-status-icon">${icon}</span>
      <div class="clase-info">
        <div class="clase-numero">Clase ${clase.id}</div>
        <div class="clase-titulo-item">${clase.titulo}</div>
      </div>
    </div>
  `;
}

// ============================================================
// RENDER — VISTA DE CLASE
// ============================================================
function renderizarClase(modulo, clase) {
  // Header de la clase
  const header = document.getElementById('clase-header');
  header.setAttribute('data-icon', modulo.icon);
  header.style.background = `linear-gradient(135deg, ${modulo.color}, ${modulo.color}cc)`;

  const badge = header.querySelector('.clase-badge');
  badge.textContent = `Módulo ${modulo.id} · Clase ${clase.id}`;
  badge.style.background = `${modulo.colorAccent}20`;
  badge.style.color = modulo.colorAccent;

  header.querySelector('.clase-titulo').textContent = clase.titulo;
  header.querySelector('.clase-subtitulo-text').textContent = clase.subtitulo;
  header.querySelector('.clase-duracion').textContent = `⏱ ${clase.duracion}`;

  // Breadcrumb
  document.getElementById('breadcrumb-text').textContent =
    `${COURSE_DATA.titulo} / Módulo ${modulo.id} / Clase ${clase.id}`;

  // Banner si ya está completada
  const banner = document.getElementById('clase-completada-banner');
  if (estaCompletada(clase.id)) {
    const nota = STATE.progreso[`clase_${clase.id}`]?.nota ?? 0;
    banner.style.display = 'flex';
    banner.querySelector('.banner-text').textContent =
      `Ya completaste esta clase con ${nota}% de aciertos. Podés repasar el contenido.`;
  } else {
    banner.style.display = 'none';
  }

  // Contenido
  const contenidoContainer = document.getElementById('clase-contenido');
  contenidoContainer.innerHTML = clase.contenido.map(bloque => `
    <div class="contenido-bloque tipo-${bloque.tipo}">
      <div class="contenido-bloque-header">
        <span class="contenido-tipo-badge">${bloque.tipo}</span>
        <span class="contenido-bloque-titulo">${bloque.titulo}</span>
      </div>
      <div class="contenido-bloque-body">${bloque.texto}</div>
    </div>
  `).join('');

  // Cuestionario
  renderizarCuestionario(clase);
}

function renderizarCuestionario(clase) {
  STATE.respuestasActuales = {};
  STATE.cuestionarioEnviado = false;

  const container = document.getElementById('cuestionario-body');
  const resultado = document.getElementById('resultado-container');
  const footer = document.getElementById('cuestionario-footer');
  const btnEnviar = document.getElementById('btn-enviar');

  resultado.style.display = 'none';
  container.style.display = 'block';
  footer.style.display = 'flex';

  // Estilo del botón según módulo
  const mod = STATE.moduloActual;
  btnEnviar.style.background = `${mod.colorAccent}15`;
  btnEnviar.style.borderColor = mod.colorAccent;
  btnEnviar.style.color = mod.colorAccent;
  btnEnviar.disabled = true;

  container.innerHTML = clase.preguntas.map((pregunta, pIdx) => `
    <div class="pregunta-item" id="pregunta-${pIdx}">
      <div class="pregunta-numero">Pregunta ${pIdx + 1} de ${clase.preguntas.length}</div>
      <div class="pregunta-texto">${pregunta.texto}</div>
      <div class="opciones-lista">
        ${pregunta.opciones.map((opcion, oIdx) => `
          <button class="opcion-btn"
                  onclick="seleccionarOpcion(${pIdx}, ${oIdx}, this)"
                  data-pregunta="${pIdx}" data-opcion="${oIdx}">
            <span class="opcion-letra">${String.fromCharCode(65 + oIdx)}.</span>
            <span>${opcion}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  actualizarContadorRespuestas();
}

function seleccionarOpcion(preguntaIdx, opcionIdx, btn) {
  if (STATE.cuestionarioEnviado) return;

  // Desmarcar otras opciones de esta pregunta
  const preguntaEl = document.getElementById(`pregunta-${preguntaIdx}`);
  preguntaEl.querySelectorAll('.opcion-btn').forEach(b => b.classList.remove('selected'));

  // Marcar esta
  btn.classList.add('selected');
  STATE.respuestasActuales[preguntaIdx] = opcionIdx;

  actualizarContadorRespuestas();
}

function actualizarContadorRespuestas() {
  const clase = STATE.claseActual;
  const total = clase.preguntas.length;
  const respondidas = Object.keys(STATE.respuestasActuales).length;
  const btnEnviar = document.getElementById('btn-enviar');
  const texto = document.getElementById('cuestionario-progress-text');

  if (texto) texto.textContent = `${respondidas} de ${total} preguntas respondidas`;
  if (btnEnviar) btnEnviar.disabled = respondidas < total;
}

// ============================================================
// ENVÍO DEL CUESTIONARIO
// ============================================================
function enviarCuestionario() {
  const clase = STATE.claseActual;
  if (!clase) return;

  STATE.cuestionarioEnviado = true;

  const resultados = clase.preguntas.map((pregunta, idx) => {
    const respuesta = STATE.respuestasActuales[idx];
    const esCorrecta = respuesta === pregunta.correcta;
    return { pregunta: idx, respuesta, correcta: pregunta.correcta, esCorrecta };
  });

  const correctas = resultados.filter(r => r.esCorrecta).length;
  const total = clase.preguntas.length;
  const porcentaje = Math.round((correctas / total) * 100);

  // Mostrar feedback visual en cada pregunta
  clase.preguntas.forEach((pregunta, pIdx) => {
    const resultado = resultados[pIdx];
    const preguntaEl = document.getElementById(`pregunta-${pIdx}`);
    const botones = preguntaEl.querySelectorAll('.opcion-btn');

    botones.forEach(btn => {
      const oIdx = parseInt(btn.dataset.opcion);
      btn.classList.add('disabled');
      btn.classList.remove('selected');

      if (oIdx === pregunta.correcta) {
        btn.classList.add('correct');
      } else if (oIdx === resultado.respuesta && !resultado.esCorrecta) {
        btn.classList.add('incorrect');
      }
    });
  });

  // Guardar progreso
  STATE.progreso[`clase_${clase.id}`] = {
    completada: true,
    nota: porcentaje,
    respuestas: resultados,
    fecha: new Date().toISOString(),
    alumno: STATE.alumno
  };
  guardarEnLocalStorage();

  // Esperar un momento y mostrar resultado
  setTimeout(() => mostrarResultado(correctas, total, porcentaje), 800);

  // Enviar a Google Sheets (si está configurado)
  if (APPS_SCRIPT_URL) {
    enviarAGoogleSheets(clase, resultados, correctas, total, porcentaje);
  }
}

function mostrarResultado(correctas, total, porcentaje) {
  const container = document.getElementById('cuestionario-body');
  const resultado = document.getElementById('resultado-container');
  const footer = document.getElementById('cuestionario-footer');

  container.style.display = 'none';
  footer.style.display = 'none';
  resultado.style.display = 'block';

  const aprobado = porcentaje >= 50; // Umbral: 50%
  const clase = STATE.claseActual;
  const siguienteId = clase.id + 1;
  const haySiguiente = siguienteId <= COURSE_DATA.totalClases;

  document.getElementById('resultado-icon').textContent = aprobado ? '🎉' : '💪';
  document.getElementById('resultado-titulo').textContent = aprobado ? '¡Muy bien!' : '¡Buen intento!';
  document.getElementById('resultado-score').textContent = `${porcentaje}%`;
  document.getElementById('resultado-score').style.color =
    aprobado ? 'var(--success-accent)' : 'var(--m3-accent)';
  document.getElementById('resultado-desc').textContent =
    aprobado
      ? `Respondiste ${correctas} de ${total} preguntas correctamente. La siguiente clase está desbloqueada.`
      : `Respondiste ${correctas} de ${total} preguntas. ¡Igual desbloqueaste la siguiente clase!`;

  // Botón siguiente clase
  const btnNext = document.getElementById('btn-next-clase');
  if (haySiguiente) {
    btnNext.style.display = 'inline-flex';
  } else {
    btnNext.style.display = 'none';
    document.getElementById('resultado-titulo').textContent = '🎓 ¡Curso completado!';
    document.getElementById('resultado-desc').textContent =
      'Completaste todas las clases del curso. ¡Felicitaciones!';
  }

  resultado.classList.add('fade-in');
  window.scrollTo({ top: document.getElementById('resultado-container').offsetTop - 100, behavior: 'smooth' });
}

function irSiguienteClase() {
  const clase = STATE.claseActual;
  if (!clase) return;

  const siguienteId = clase.id + 1;

  // Encontrar el módulo de la siguiente clase
  for (const modulo of COURSE_DATA.modulos) {
    const siguienteClase = modulo.clases_lista.find(c => c.id === siguienteId);
    if (siguienteClase) {
      mostrarClase(modulo.id, siguienteId);
      return;
    }
  }
}

// ============================================================
// GOOGLE SHEETS — ENVÍO DE DATOS
// ============================================================
async function enviarAGoogleSheets(clase, resultados, correctas, total, porcentaje) {
  try {
    const datos = {
      alumno: STATE.alumno,
      modulo: STATE.moduloActual?.id,
      clase: clase.id,
      tituloClase: clase.titulo,
      respuestas: resultados.map(r => r.respuesta),
      correctas,
      totalPreguntas: total,
      porcentaje,
      aprobado: porcentaje >= 50
    };

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(datos),
      headers: { 'Content-Type': 'text/plain' }
    });

    mostrarToast('📊 Resultados enviados al registro', 'success');
  } catch (error) {
    // Silencioso — el progreso ya está guardado en localStorage
    console.warn('No se pudo enviar a Google Sheets:', error.message);
  }
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function mostrarToast(mensaje, tipo = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.textContent = mensaje;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
