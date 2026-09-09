// Cazador de Bestias: El Silencio de Cristal
// Juego Web con sistema básico inspirado en Monster Hunter

import { BESTIAS } from './bestias.js';
import { NPCS_PRINCIPALES, NPCS_SECUNDARIOS } from './npcs.js';
import { SistemaCombate } from './combat.js';

// Estado global del juego
const estadoJuego = {
  pantallaActual: 'menu',
  jugador: {
    nombre: "Cazador del Alba",
    nivel: 1,
    experiencia: 0,
    saludMaxima: 100,
    salud: 100,
    ataque: 120,
    defensa: 80,
    velocidad: 65,
    armaEquipada: "Espada de Cristal",
    elemento: "cristal",
    inventario: ["Poción Básica", "Cristal Roto", "Escama de Cristal"],
    bestiasDerrotadas: [],
    misionesActivas: []
  },
  sistemaCombate: new SistemaCombate(),
  bestiaSeleccionada: null
};

// Función de inicialización
function init() {
  renderMenuPrincipal();
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      const destino = e.target.getAttribute('data-destino');
      navegarA(destino);
    }
  });

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') navegarA('menu');
    if (e.key === '1') navegarA('caza');
    if (e.key === '2') navegarA('npcs');
  });
}

// Navegación entre pantallas
function navegarA(pantalla) {
  estadoJuego.pantallaActual = pantalla;
  switch (pantalla) {
    case 'menu': renderMenuPrincipal(); break;
    case 'caza': renderPantallaCaza(); break;
    case 'npcs': renderPantallaNPCs(); break;
    case 'combate': renderPantallaCombate(); break;
    case 'inventario': renderPantallaInventario(); break;
    case 'armas': renderPantallaArmas(); break;
    case 'mapa': renderPantallaMapa(); break;
    default: renderMenuPrincipal();
  }
  window.scrollTo(0, 0);
}

// --- RENDERS ---

function renderMenuPrincipal() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="pantalla pantalla-menu" style="background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #2a1a3e 100%); min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #e0d0ff; padding: 2rem;">
      <div class="logo-container" style="text-align: center; margin-bottom: 3rem; animation: fadeIn 1.5s ease;">
        <h1 style="font-size: 4rem; text-shadow: 0 0 30px #9b59b6, 0 0 60px #8e44ad; letter-spacing: 0.2em; margin-bottom: 0.5rem; font-weight: 900;">CAZADOR DE BESTIAS</h1>
        <h2 style="font-size: 1.4rem; color: #b8a0d0; letter-spacing: 0.4em; text-transform: uppercase;">El Silencio de Cristal</h2>
        <div style="margin-top: 2rem; width: 300px; height: 3px; background: linear-gradient(90deg, transparent, #9b59b6, transparent); border-radius: 3px;"></div>
      </div>

      <nav class="menu-nav" style="display: grid; gap: 1rem; width: 100%; max-width: 500px;">
        <a href="#" data-destino="caza" class="nav-link" style="display: block; padding: 1.2rem 2rem; background: rgba(155, 89, 182, 0.1); border: 1px solid rgba(155, 89, 182, 0.3); border-radius: 8px; text-decoration: none; color: #e0d0ff; text-align: center; font-size: 1.1rem; letter-spacing: 0.1em; transition: all 0.3s;">INICIAR CAZA</a>
        <a href="#" data-destino="mapa" class="nav-link" style="display: block; padding: 1.2rem 2rem; background: rgba(155, 89, 182, 0.1); border: 1px solid rgba(155, 89, 182, 0.3); border-radius: 8px; text-decoration: none; color: #e0d0ff; text-align: center; font-size: 1.1rem; letter-spacing: 0.1em; transition: all 0.3s;">MAPA DE AETHELGARD</a>
        <a href="#" data-destino="npcs" class="nav-link" style="display: block; padding: 1.2rem 2rem; background: rgba(155, 89, 182, 0.1); border: 1px solid rgba(155, 89, 182, 0.3); border-radius: 8px; text-decoration: none; color: #e0d0ff; text-align: center; font-size: 1.1rem; letter-spacing: 0.1em; transition: all 0.3s;">GREMIO Y NPCS</a>
        <a href="#" data-destino="inventario" class="nav-link" style="display: block; padding: 1.2rem 2rem; background: rgba(155, 89, 182, 0.1); border: 1px solid rgba(155, 89, 182, 0.3); border-radius: 8px; text-decoration: none; color: #e0d0ff; text-align: center; font-size: 1.1rem; letter-spacing: 0.1em; transition: all 0.3s;">INVENTARIO</a>
        <a href="#" data-destino="armas" class="nav-link" style="display: block; padding: 1.2rem 2rem; background: rgba(155, 89, 182, 0.1); border: 1px solid rgba(155, 89, 182, 0.3); border-radius: 8px; text-decoration: none; color: #e0d0ff; text-align: center; font-size: 1.1rem; letter-spacing: 0.1em; transition: all 0.3s;">ARMAS Y EQUIPO</a>
      </nav>

      <div style="margin-top: 3rem; text-align: center; opacity: 0.6; font-size: 0.85rem;">
        <p>Juego desarrollado para Cazador de Bestias</p>
        <p>Inspirado en Monster Hunter · Historia original · 30 Bestias únicas</p>
        <p>Assets generados con herramientas externas · Texturas PBR 4K</p>
      </div>
    </div>`;

  // Animación hover para botones
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.background = 'rgba(155, 89, 182, 0.25)';
      link.style.borderColor = '#9b59b6';
      link.style.transform = 'translateY(-2px)';
      link.style.boxShadow = '0 8px 25px rgba(155, 89, 182, 0.3)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.background = 'rgba(155, 89, 182, 0.1)';
      link.style.borderColor = 'rgba(155, 89, 182, 0.3)';
      link.style.transform = 'translateY(0)';
      link.style.boxShadow = 'none';
    });
  });
}

function renderPantallaCaza() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="pantalla caza-screen" style="min-height: 100vh; background: linear-gradient(135deg, #0f0f1a 0%, #1a152e 100%); color: #e0d0ff; padding: 2rem;">
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(155,89,182,0.3); padding-bottom: 1rem;">
        <div>
          <h2 style="margin: 0; color: #b8a0d0; letter-spacing: 0.15em;">CAZA DE BESTIAS</h2>
          <p style="margin: 0.2rem 0 0; opacity: 0.7; font-size: 0.9rem;">Selecciona una Bestia para iniciar el combate</p>
        </div>
        <a href="#" data-destino="menu" class="nav-link" style="padding: 0.6rem 1.2rem; background: rgba(155,89,182,0.15); border: 1px solid rgba(155,89,182,0.4); border-radius: 6px; text-decoration: none; color: #e0d0ff; font-size: 0.9rem;">VOLVER</a>
      </header>

      <div class="bestias-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
        ${BESTIAS.map(b => `
          <article class="bestia-card" data-id="${b.id}" style="background: rgba(155, 89, 182, 0.05); border: 1px solid rgba(155, 89, 182, 0.2); border-radius: 12px; padding: 1.5rem; transition: all 0.3s; cursor: pointer; position: relative; overflow: hidden;" onclick="seleccionarBestia(${b.id})">
            <div style="position: absolute; top: -20px; right: -20px; font-size: 6rem; opacity: 0.05; font-weight: 900;">${b.id}</div>
            <h3 style="margin: 0 0 0.2rem; color: #e0d0ff; font-size: 1.3rem;">${b.nombre}</h3>
            <p style="margin: 0 0 1rem; color: #b8a0d0; font-size: 0.85rem; letter-spacing: 0.05em;">${b.subtitulo}</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
              <span style="padding: 0.2rem 0.6rem; background: rgba(155,89,182,0.2); border-radius: 4px; font-size: 0.75rem;">Nivel ${b.nivel}</span>
              <span style="padding: 0.2rem 0.6rem; background: rgba(155,89,182,0.2); border-radius: 4px; font-size: 0.75rem;">${b.tipo}</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.8rem; opacity: 0.8;">
              <div>Salud: <strong>${b.salud}</strong></div>
              <div>Ataque: <strong>${b.ataque}</strong></div>
              <div>Defensa: <strong>${b.defensa}</strong></div>
              <div>Velocidad: <strong>${b.velocidad}</strong></div>
            </div>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(155,89,182,0.2); font-size: 0.8rem; color: #b8a0d0;">
              <strong>Zona:</strong> ${b.zona} · <strong>Debilidades:</strong> ${b.debilidades.join(", ")}
            </div>
          </article>
        `).join('')}
      </div>
    </div>`;

  // Estilos interactivos
  document.querySelectorAll('.bestia-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.background = 'rgba(155, 89, 182, 0.15)';
      card.style.borderColor = '#9b59b6';
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 15px 35px rgba(155, 89, 182, 0.3)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = 'rgba(155, 89, 182, 0.05)';
      card.style.borderColor = 'rgba(155, 89, 182, 0.2)';
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });
}

function seleccionarBestia(id) {
  const bestia = BESTIAS.find(b => b.id === id);
  if (!bestia) return;
  
  // Inicializar salud actual para el combate
  bestia.saludActual = bestia.salud;
  estadoJuego.bestiaSeleccionada = bestia;
  estadoJuego.sistemaCombate.iniciarCombate(bestia);
  
  navegarA('combate');
}

function renderPantallaCombate() {
  const app = document.getElementById('app');
  const bestia = estadoJuego.bestiaSeleccionada;
  const sistema = estadoJuego.sistemaCombate;
  const estado = sistema.obtenerEstado();
  
  if (!bestia) {
    navegarA('caza');
    return;
  }

  app.innerHTML = `
    <div class="pantalla combate-screen" style="min-height: 100vh; background: linear-gradient(135deg, #1a0a2a 0%, #0a0a1a 100%); color: #e0d0ff; padding: 2rem;">
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2 style="margin: 0; color: #b8a0d0;">COMBATE</h2>
        <a href="#" data-destino="caza" class="nav-link" style="padding: 0.6rem 1.2rem; background: rgba(155,89,182,0.15); border: 1px solid rgba(155,89,182,0.4); border-radius: 6px; text-decoration: none; color: #e0d0ff; font-size: 0.9rem;">HUYENDO</a>
      </header>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
        <!-- Jugador -->
        <div style="background: rgba(155, 89, 182, 0.08); border: 1px solid rgba(155, 89, 182, 0.3); border-radius: 12px; padding: 1.5rem;">
          <h3 style="margin: 0 0 1rem; color: #e0d0ff;">CAZADOR DEL ALBA</h3>
          <div style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.3rem;"><span>Salud</span><span>${estado.jugador.salud}/${estado.jugador.saludMaxima}</span></div>
            <div style="height: 20px; background: #2a1a3e; border-radius: 10px; overflow: hidden;">
              <div style="height: 100%; width: ${(estado.jugador.salud / estado.jugador.saludMaxima) * 100}%; background: linear-gradient(90deg, #e0d0ff, #b8a0d0); border-radius: 10px;"></div>
            </div>
          </div>
          <div style="font-size: 0.85rem; opacity: 0.8;">
            <p>Arma: <strong>${estado.jugador.arma}</strong></p>
            <p>Ataque: <strong>${estado.jugador.ataque}</strong> · Defensa: <strong>${estado.jugador.defensa}</strong></p>
            <p>Elemento: <strong>${estado.jugador.elemento}</strong></p>
          </div>
        </div>

        <!-- Bestia -->
        <div style="background: rgba(155, 89, 182, 0.08); border: 1px solid rgba(155, 89, 182, 0.3); border-radius: 12px; padding: 1.5rem;">
          <h3 style="margin: 0 0 0.2rem; color: #e0d0ff;">${bestia.nombre}</h3>
          <p style="margin: 0 0 1rem; color: #b8a0d0; font-size: 0.85rem;">${bestia.subtitulo} · Nivel ${bestia.nivel}</p>
          <div style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.3rem;"><span>Salud</span><span>${bestia.saludActual}/${bestia.salud}</span></div>
            <div style="height: 20px; background: #2a1a3e; border-radius: 10px; overflow: hidden;">
              <div style="height: 100%; width: ${(bestia.saludActual / bestia.salud) * 100}%; background: linear-gradient(90deg, #9b59b6, #8e44ad); border-radius: 10px;"></div>
            </div>
          </div>
          <div style="font-size: 0.8rem; opacity: 0.8;">
            <p>Tipo: <strong>${bestia.tipo}</strong> · Ataque: <strong>${bestia.ataque}</strong> · Defensa: <strong>${bestia.defensa}</strong></p>
            <p>Zona: <strong>${bestia.zona}</strong></p>
          </div>
        </div>
      </div>

      <!-- Acciones -->
      <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap;">
        <button onclick="accionCombate('normal')" style="padding: 1rem 2rem; background: linear-gradient(135deg, #9b59b6, #8e44ad); border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; letter-spacing: 0.05em; box-shadow: 0 4px 15px rgba(155,89,182,0.4);">ATAQUE NORMAL</button>
        <button onclick="accionCombate('cargado')" style="padding: 1rem 2rem; background: linear-gradient(135deg, #6c3483, #5b2c6f); border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; letter-spacing: 0.05em; box-shadow: 0 4px 15px rgba(108,52,131,0.4);">ATAQUE CARGADO ×2.2</button>
        <button onclick="accionCombate('elemental')" style="padding: 1rem 2rem; background: linear-gradient(135deg, #5b2c6f, #4a235a); border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; letter-spacing: 0.05em; box-shadow: 0 4px 15px rgba(91,44,111,0.4);">ATAQUE ELEMENTAL ×1.8</button>
        <button onclick="accionCombate('especial')" style="padding: 1rem 2rem; background: linear-gradient(135deg, #8e44ad, #722e9a); border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; letter-spacing: 0.05em; box-shadow: 0 4px 15px rgba(142,68,173,0.4);">ESPECIAL ×3.5</button>
        <button onclick="accionCombate('defender')" style="padding: 1rem 2rem; background: linear-gradient(135deg, #2a1a3e, #3a2560); border: 1px solid rgba(155,89,182,0.5); border-radius: 8px; color: #e0d0ff; font-weight: bold; cursor: pointer; letter-spacing: 0.05em;">DEFENDER</button>
        <button onclick="accionCombate('objeto')" style="padding: 1rem 2rem; background: linear-gradient(135deg, #1a3e2a, #2a5a3e); border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; letter-spacing: 0.05em;">USAR POCIÓN</button>
      </div>

      <!-- Log -->
      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(155,89,182,0.2); border-radius: 8px; padding: 1rem; max-height: 250px; overflow-y: auto; font-family: monospace; font-size: 0.85rem;">
        <h4 style="margin: 0 0 0.5rem; color: #b8a0d0;">LOG DE COMBATE</h4>
        <div id="log-combate">${estado.log.map(l => `<div style="margin-bottom: 0.2rem; padding: 0.2rem; border-left: 2px solid #9b59b6;">${l}</div>`).join('')}</div>
      </div>
    </div>`;
}

function accionCombate(tipo) {
  const bestia = estadoJuego.bestiaSeleccionada;
  if (!bestia) return;
  
  let resultados = [];
  
  if (tipo === 'objeto') {
    resultados = estadoJuego.sistemaCombate.usarObjeto("Poción Básica");
  } else if (tipo === 'defender') {
    resultados = estadoJuego.sistemaCombate.defender(estadoJuego.sistemaCombate.jugador, bestia);
  } else if (tipo === 'especial') {
    resultados = estadoJuego.sistemaCombate.atacar(estadoJuego.sistemaCombate.jugador, bestia, 'especial');
  } else if (tipo === 'elemental') {
    resultados = estadoJuego.sistemaCombate.atacar(estadoJuego.sistemaCombate.jugador, bestia, 'elemental');
  } else if (tipo === 'cargado') {
    resultados = estadoJuego.sistemaCombate.atacar(estadoJuego.sistemaCombate.jugador, bestia, 'cargado');
  } else {
    resultados = estadoJuego.sistemaCombate.atacar(estadoJuego.sistemaCombate.jugador, bestia, 'normal');
  }
  
  // Si el combate terminó, actualizar jugador
  const estado = estadoJuego.sistemaCombate.obtenerEstado();
  if (!estado.enCombate && bestia.saludActual <= 0) {
    estadoJuego.jugador.experiencia += bestia.nivel * 100;
    estadoJuego.jugador.bestiasDerrotadas.push(bestia.id);
    estadoJuego.jugador.inventario.push(...bestia.drops);
    
    // Restaurar salud para la próxima caza
    setTimeout(() => {
      alert(`¡Derrota confirmada! Has obtenido: ${bestia.drops.join(", ")}`);
      navegarA('caza');
    }, 500);
  } else if (!estado.enCombate && estado.jugador.salud <= 0) {
    setTimeout(() => {
      alert("¡Has sido vencido! Regresa al gremio para curarte.");
      estadoJuego.jugador.salud = estadoJuego.jugador.saludMaxima;
      navegarA('caza');
    }, 500);
  }
  
  renderPantallaCombate();
}

function renderPantallaNPCs() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="pantalla npcs-screen" style="min-height: 100vh; background: linear-gradient(135deg, #0f0f1a 0%, #1a152e 100%); color: #e0d0ff; padding: 2rem;">
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(155,89,182,0.3); padding-bottom: 1rem;">
        <div>
          <h2 style="margin: 0; color: #b8a0d0; letter-spacing: 0.15em;">GREMIO Y NPCS</h2>
          <p style="margin: 0.2rem 0 0; opacity: 0.7; font-size: 0.9rem;">20 Principales · 40 Secundarios</p>
        </div>
        <a href="#" data-destino="menu" class="nav-link" style="padding: 0.6rem 1.2rem; background: rgba(155,89,182,0.15); border: 1px solid rgba(155,89,182,0.4); border-radius: 6px; text-decoration: none; color: #e0d0ff; font-size: 0.9rem;">VOLVER</a>
      </header>

      <section style="margin-bottom: 3rem;">
        <h3 style="color: #9b59b6; border-left: 3px solid #9b59b6; padding-left: 1rem; margin-bottom: 1.5rem;">PRINCIPALES (20) — MISIONES Y HISTORIA</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
          ${NPCS_PRINCIPALES.map(n => `
            <div style="background: rgba(155,89,182,0.08); border: 1px solid rgba(155,89,182,0.2); border-radius: 8px; padding: 1rem;">
              <h4 style="margin: 0 0 0.2rem; color: #e0d0ff;">${n.nombre}</h4>
              <p style="margin: 0 0 0.5rem; color: #b8a0d0; font-size: 0.8rem;">${n.rol} · ${n.tipo}</p>
              <p style="font-size: 0.85rem; opacity: 0.9;">${n.descripcion}</p>
              <div style="margin-top: 0.5rem; font-size: 0.8rem; color: #9b59b6;">Misiones: ${n.misiones.join(" · ")}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <section>
        <h3 style="color: #9b59b6; border-left: 3px solid #9b59b6; padding-left: 1rem; margin-bottom: 1.5rem;">SECUNDARIOS (40) — OBJETOS, ARMAS E INTERCAMBIO</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
          ${NPCS_SECUNDARIOS.map(n => `
            <div style="background: rgba(155,89,182,0.05); border: 1px solid rgba(155,89,182,0.15); border-radius: 6px; padding: 0.8rem;">
              <h4 style="margin: 0 0 0.1rem; color: #e0d0ff; font-size: 1rem;">${n.nombre}</h4>
              <p style="margin: 0; font-size: 0.75rem; opacity: 0.7;">${n.tipo}</p>
              <p style="font-size: 0.8rem; margin-top: 0.3rem; opacity: 0.9;">${n.descripcion}</p>
              <p style="font-size: 0.75rem; color: #9b59b6; margin-top: 0.3rem;">Ofrece: ${n.ofrece ? n.ofrece.slice(0, 2).join(", ") : "Objetos varios"}${n.ofrece && n.ofrece.length > 2 ? "..." : ""}</p>
            </div>
          `).join('')}
        </div>
      </section>
    </div>`;
}

function renderPantallaInventario() {
  const app = document.getElementById('app');
  const jugador = estadoJuego.jugador;
  
  app.innerHTML = `
    <div class="pantalla inventario-screen" style="min-height: 100vh; background: linear-gradient(135deg, #0f0f1a 0%, #1a152e 100%); color: #e0d0ff; padding: 2rem;">
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(155,89,182,0.3); padding-bottom: 1rem;">
        <h2 style="margin: 0; color: #b8a0d0;">INVENTARIO</h2>
        <a href="#" data-destino="menu" class="nav-link" style="padding: 0.6rem 1.2rem; background: rgba(155,89,182,0.15); border: 1px solid rgba(155,89,182,0.4); border-radius: 6px; text-decoration: none; color: #e0d0ff; font-size: 0.9rem;">VOLVER</a>
      </header>

      <div style="display: grid; grid-template-columns: 300px 1fr; gap: 2rem;">
        <div style="background: rgba(155,89,182,0.08); border: 1px solid rgba(155,89,182,0.3); border-radius: 12px; padding: 1.5rem;">
          <h3 style="margin: 0 0 1rem;">ESTADÍSTICAS</h3>
          <div style="font-size: 0.9rem; line-height: 2;">
            <p><strong>Nombre:</strong> ${jugador.nombre}</p>
            <p><strong>Nivel:</strong> ${jugador.nivel}</p>
            <p><strong>Experiencia:</strong> ${jugador.experiencia}</p>
            <p><strong>Salud:</strong> ${jugador.salud}/${jugador.saludMaxima}</p>
            <p><strong>Ataque:</strong> ${jugador.ataque}</p>
            <p><strong>Defensa:</strong> ${jugador.defensa}</p>
            <p><strong>Velocidad:</strong> ${jugador.velocidad}</p>
            <p><strong>Arma:</strong> ${jugador.armaEquipada}</p>
            <p><strong>Elemento:</strong> ${jugador.elemento}</p>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 1rem;">OBJETOS</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
            ${jugador.inventario.map(obj => `
              <div style="background: rgba(155,89,182,0.05); border: 1px solid rgba(155,89,182,0.2); border-radius: 8px; padding: 1rem; text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎁</div>
                <h4 style="margin: 0; font-size: 0.9rem;">${obj}</h4>
                <p style="font-size: 0.75rem; opacity: 0.7; margin-top: 0.3rem;">Objeto de caza</p>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 2rem;">
            <h3>BESTIAS DERROTADAS</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${jugador.bestiasDerrotadas.length > 0 ? jugador.bestiasDerrotadas.map(id => {
                const b = BESTIAS.find(x => x.id === id);
                return `<span style="padding: 0.3rem 0.7rem; background: rgba(155,89,182,0.2); border-radius: 4px; font-size: 0.8rem;">${b ? b.nombre : `Bestia ${id}`}</span>`;
              }).join('') : '<span style="opacity: 0.5;">Ninguna bestia derrotada aún</span>'}
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderPantallaArmas() {
  const app = document.getElementById('app');
  const armas = [
    { nombre: "Espada de Cristal", tipo: "Espada y Escudo", ataque: 120, elemento: "cristal", nivel: 1 },
    { nombre: "Gran Espada de Obsidiana", tipo: "Espada Grande", ataque: 180, elemento: "oscuridad", nivel: 3 },
    { nombre: "Lanza de Cristal Roto", tipo: "Lanza", ataque: 140, elemento: "cristal", nivel: 2 },
    { nombre: "Arco del Rayo", tipo: "Arco", ataque: 100, elemento: "eléctrica", nivel: 4 },
    { nombre: "Ballesta de Sombra", tipo: "Ballesta", ataque: 130, elemento: "sombra", nivel: 5 },
    { nombre: "Hacha del Fuego", tipo: "Hacha", ataque: 160, elemento: "fuego", nivel: 6 },
    { nombre: "Cuchillas del Viento", tipo: "Cuchillas Duales", ataque: 110, elemento: "viento", nivel: 3 },
    { nombre: "Martillo de la Tierra", tipo: "Martillo", ataque: 170, elemento: "tierra", nivel: 4 },
    { nombre: "Cuerno del Agua", tipo: "Cuerno de Caza", ataque: 90, elemento: "agua", nivel: 2 },
    { nombre: "Glaive de Veneno", tipo: "Insecto Glaive", ataque: 125, elemento: "veneno", nivel: 4 }
  ];
  
  app.innerHTML = `
    <div class="pantalla armas-screen" style="min-height: 100vh; background: linear-gradient(135deg, #0f0f1a 0%, #1a152e 100%); color: #e0d0ff; padding: 2rem;">
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(155,89,182,0.3); padding-bottom: 1rem;">
        <h2 style="margin: 0; color: #b8a0d0;">ARMAS Y EQUIPO</h2>
        <a href="#" data-destino="menu" class="nav-link" style="padding: 0.6rem 1.2rem; background: rgba(155,89,182,0.15); border: 1px solid rgba(155,89,182,0.4); border-radius: 6px; text-decoration: none; color: #e0d0ff; font-size: 0.9rem;">VOLVER</a>
      </header>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
        ${armas.map(a => `
          <div style="background: rgba(155,89,182,0.08); border: 1px solid rgba(155,89,182,0.2); border-radius: 12px; padding: 1.5rem; transition: all 0.3s;" onmouseenter="this.style.borderColor='#9b59b6';this.style.transform='translateY(-3px)'" onmouseleave="this.style.borderColor='rgba(155,89,182,0.2)';this.style.transform='translateY(0)'">
            <h3 style="margin: 0 0 0.2rem; color: #e0d0ff;">${a.nombre}</h3>
            <p style="margin: 0 0 1rem; color: #b8a0d0; font-size: 0.85rem;">${a.tipo} · Nivel ${a.nivel}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.85rem;">
              <div>Ataque: <strong>${a.ataque}</strong></div>
              <div>Elemento: <strong>${a.elemento}</strong></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function renderPantallaMapa() {
  const app = document.getElementById('app');
  const zonas = [
    { nombre: "Valle de Cristal Roto", bestias: ["Velthar", "Tharok", "Kalthor"], color: "#9b59b6" },
    { nombre: "La Forja Silenciada", bestias: ["Ignathar", "Raxoth", "Dravoth"], color: "#e67e22" },
    { nombre: "El Abismo de Sombra", bestias: ["Noxar", "Lurvath", "Krythos", "Klyvar"], color: "#2a1a3e" },
    { nombre: "El Bosque de Hielo", bestias: ["Drakhar", "Zornath", "Zyvar", "Selkor"], color: "#3498db" },
    { nombre: "El Mar Silenciado", bestias: ["Vyrath", "Veythok", "Zyvark", "Veythar"], color: "#1abc9c" }
  ];
  
  app.innerHTML = `
    <div class="pantalla mapa-screen" style="min-height: 100vh; background: linear-gradient(135deg, #0f0f1a 0%, #1a152e 100%); color: #e0d0ff; padding: 2rem;">
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(155,89,182,0.3); padding-bottom: 1rem;">
        <h2 style="margin: 0; color: #b8a0d0;">MAPA DE AETHELGARD</h2>
        <a href="#" data-destino="menu" class="nav-link" style="padding: 0.6rem 1.2rem; background: rgba(155,89,182,0.15); border: 1px solid rgba(155,89,182,0.4); border-radius: 6px; text-decoration: none; color: #e0d0ff; font-size: 0.9rem;">VOLVER</a>
      </header>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        ${zonas.map(z => `
          <div style="background: rgba(155,89,182,0.05); border: 2px solid ${z.color}; border-radius: 12px; padding: 1.5rem; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -30px; right: -30px; font-size: 8rem; opacity: 0.05; font-weight: 900;">${z.nombre[0]}</div>
            <h3 style="margin: 0 0 1rem; color: ${z.color};">${z.nombre}</h3>
            <p style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 1rem;">Zonas de caza con bestias únicas y entornos PBR HD.</p>
            <div style="font-size: 0.8rem;">
              <strong>Bestias en esta zona:</strong>
              <div style="margin-top: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${z.bestias.map(b => `<span style="padding: 0.2rem 0.6rem; background: rgba(${z.color === '#3498db' ? '52,152,219' : '155,89,182'}, 0.2); border-radius: 4px; font-size: 0.75rem;">${b}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// Hacer funciones accesibles globalmente para onclick
window.seleccionarBestia = seleccionarBestia;
window.accionCombate = accionCombate;
window.navegarA = navegarA;

// Inicializar al cargar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
