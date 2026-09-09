// Datos de los 60 NPCs para Cazador de Bestias
// 20 Principales (misiones) + 40 Secundarios (objetos, armas, intercambio)

export const NPCS_PRINCIPALES = [
  {
    id: 1,
    nombre: "Eldara",
    rol: "Cazadora del Alba",
    tipo: "Líder del Gremio",
    descripcion: "Líder del gremio de cazadores. Da las misiones principales para romper el Sello de Cristal.",
    misiones: ["Romper el Sello", "Derrotar a Velthar", "Despertar al Dios Bestia"],
    modelo: "assets/models/npc_eldara.glb",
    icono: "assets/icons/npc_eldara.png"
  },
  {
    id: 2,
    nombre: "Dravok",
    rol: "Forjador de Armas",
    tipo: "Herrero Principal",
    descripcion: "Forja armas y mejoramientos. Principal para el combate.",
    misiones: ["Forjar la Espada de Cristal", "Mejorar el Arma", "Crear Armas Avanzadas"],
    modelo: "assets/models/npc_dravok.glb",
    icono: "assets/icons/npc_dravok.png"
  },
  {
    id: 3,
    nombre: "Sylthar",
    rol: "Mercader de Cristales",
    tipo: "Comerciante Avanzado",
    descripcion: "Vende materiales raros y cristales de bestias derrotadas.",
    misiones: ["Obtener Cristal Raro", "Intercambiar Cristales", "Comprar Materiales Únicos"],
    modelo: "assets/models/npc_sylthar.glb",
    icono: "assets/icons/npc_sylthar.png"
  },
  {
    id: 4,
    nombre: "Morvay",
    rol: "Alquimista Veneno",
    tipo: "Creador de Pociones",
    descripcion: "Crea pociones de veneno, curación y mejora de armas.",
    misiones: ["Crear Pociones Avanzadas", "Mejorar Antídotos", "Crear Veneno para Bestias"],
    modelo: "assets/models/npc_morvay.glb",
    icono: "assets/icons/npc_morvay.png"
  },
  {
    id: 5,
    nombre: "Tharok",
    rol: "Guardián de la Tierra",
    tipo: "Defensor",
    descripcion: "Protege la ciudad y da misiones de defensa.",
    misiones: ["Defender el Valle", "Proteger el Gremio", "Expulsar a las Bestias"],
    modelo: "assets/models/npc_tharok.glb",
    icono: "assets/icons/npc_tharok.png"
  },
  {
    id: 6,
    nombre: "Vyrath",
    rol: "Capitán del Agua",
    tipo: "Líder Marino",
    descripcion: "Capitán del agua que lidera misiones marinas.",
    misiones: ["Explorar el Mar Silenciado", "Derrotar a Vyrath", "Recuperar Cristales del Agua"],
    modelo: "assets/models/npc_vyrath.glb",
    icono: "assets/icons/npc_vyrath.png"
  },
  {
    id: 7,
    nombre: "Zornath",
    rol: "Maestra del Rayo",
    tipo: "Maestra Eléctrica",
    descripcion: "Maestra del rayo que enseña velocidad y combate eléctrico.",
    misiones: ["Aprender Velocidad", "Derrotar a Zornath", "Mejorar Armas Eléctricas"],
    modelo: "assets/models/npc_zornath.glb",
    icono: "assets/icons/npc_zornath.png"
  },
  {
    id: 8,
    nombre: "Krythos",
    rol: "Guardián de la Oscuridad",
    tipo: "Infiltrador",
    descripcion: "Guardián de la oscuridad que enseña sigilo y misiones de infiltración.",
    misiones: ["Infiltración en el Abismo", "Derrotar a Krythos", "Recuperar Objetos Ocultos"],
    modelo: "assets/models/npc_krythos.glb",
    icono: "assets/icons/npc_krythos.png"
  },
  {
    id: 9,
    nombre: "Selkor",
    rol: "Maestro del Viento",
    tipo: "Maestro Aéreo",
    descripcion: "Maestro del viento que enseña movilidad y combate aéreo.",
    misiones: ["Aprender Vuelo", "Derrotar a Selkor", "Mejorar Armas Aéreas"],
    modelo: "assets/models/npc_selkor.glb",
    icono: "assets/icons/npc_selkor.png"
  },
  {
    id: 10,
    nombre: "Dravoth",
    rol: "Ingeniero de Metal",
    tipo: "Mejorador de Armaduras",
    descripcion: "Ingeniero que mejora armaduras metálicas y crea defensas avanzadas.",
    misiones: ["Crear Armadura de Metal", "Mejorar Defensa", "Crear Armaduras Avanzadas"],
    modelo: "assets/models/npc_dravoth.glb",
    icono: "assets/icons/npc_dravoth.png"
  },
  {
    id: 11,
    nombre: "Ignathar",
    rol: "Maestro del Fuego",
    tipo: "Maestro Volcánico",
    descripcion: "Maestro del fuego que enseña combate avanzado con daño de fuego.",
    misiones: ["Aprender Fuego", "Derrotar a Ignathar", "Mejorar Armas de Fuego"],
    modelo: "assets/models/npc_ignathar.glb",
    icono: "assets/icons/npc_ignathar.png"
  },
  {
    id: 12,
    nombre: "Lurvath",
    rol: "Espía de Sombras",
    tipo: "Espía",
    descripcion: "Espía que enseña sigilo y obtención de información.",
    misiones: ["Obtener Información", "Derrotar a Lurvath", "Mejorar Sigilo"],
    modelo: "assets/models/npc_lurvath.glb",
    icono: "assets/icons/npc_lurvath.png"
  },
  {
    id: 13,
    nombre: "Nyrvak",
    rol: "Curandera de Veneno",
    tipo: "Curandera Avanzada",
    descripcion: "Curandera avanzada que crea antídotos y curaciones únicas.",
    misiones: ["Crear Antídotos", "Curar Veneno", "Mejorar Curación"],
    modelo: "assets/models/npc_nyrvak.glb",
    icono: "assets/icons/npc_nyrvak.png"
  },
  {
    id: 14,
    nombre: "Kalthor",
    rol: "Arquitecto de Cristales",
    tipo: "Arquitecto",
    descripcion: "Arquitecto que construye mejoras de base y estructuras de cristal.",
    misiones: ["Construir Base", "Mejorar Estructuras", "Crear Cristales Avanzados"],
    modelo: "assets/models/npc_kalthor.glb",
    icono: "assets/icons/npc_kalthor.png"
  },
  {
    id: 15,
    nombre: "Zyvark",
    rol: "Explorador de Hielo",
    tipo: "Explorador",
    descripcion: "Explorador que enseña navegación ártica y supervivencia en hielo.",
    misiones: ["Explorar el Hielo", "Derrotar a Zyvark", "Mejorar Supervivencia"],
    modelo: "assets/models/npc_zyvark.glb",
    icono: "assets/icons/npc_zyvark.png"
  },
  {
    id: 16,
    nombre: "Raxoth",
    rol: "Líder del Fuego",
    tipo: "Líder de Combate",
    descripcion: "Líder del fuego que enseña combate avanzado y estrategia.",
    misiones: ["Aprender Estrategia", "Derrotar a Raxoth", "Mejorar Combate"],
    modelo: "assets/models/npc_raxoth.glb",
    icono: "assets/icons/npc_raxoth.png"
  },
  {
    id: 17,
    nombre: "Veythok",
    rol: "Navegante del Agua",
    tipo: "Navegante",
    descripcion: "Navegante del agua que enseña viajes y comercio marítimo.",
    misiones: ["Viajar por el Mar", "Derrotar a Veythok", "Mejorar Navegación"],
    modelo: "assets/models/npc_veythok.glb",
    icono: "assets/icons/npc_veythok.png"
  },
  {
    id: 18,
    nombre: "Thryvok",
    rol: "Defensor de la Tierra",
    tipo: "Defensor Avanzado",
    descripcion: "Defensor avanzado que protege la ciudad con fuerza devastadora.",
    misiones: ["Proteger la Ciudad", "Derrotar a Thryvok", "Mejorar Defensa"],
    modelo: "assets/models/npc_thryvok.glb",
    icono: "assets/icons/npc_thryvok.png"
  },
  {
    id: 19,
    nombre: "Zarnok",
    rol: "Ingeniero del Rayo",
    tipo: "Ingeniero Eléctrico",
    descripcion: "Ingeniero del rayo que mejora armas y velocidad con electricidad.",
    misiones: ["Mejorar Velocidad", "Derrotar a Zarnok", "Mejorar Armas Eléctricas"],
    modelo: "assets/models/npc_zarnok.glb",
    icono: "assets/icons/npc_zarnok.png"
  },
  {
    id: 20,
    nombre: "Klyvar",
    rol: "Oráculo de la Oscuridad",
    tipo: "Oráculo",
    descripcion: "Oráculo que predice misiones finales y guía al jugador.",
    misiones: ["Predecir el Futuro", "Derrotar a Klyvar", "Romper el Sello Final"],
    modelo: "assets/models/npc_klyvar.glb",
    icono: "assets/icons/npc_klyvar.png"
  }
];

export const NPCS_SECUNDARIOS = [
  // Grupo A: Comerciantes de Objetos (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 21 + i,
    nombre: ["Marvok", "Selthis", "Dravok Jr", "Veythok Jr", "Tharok Jr", "Ignis", "Lurvis", "Zornis", "Krythis", "Selvak"][i],
    rol: "Comerciante",
    tipo: "Vendedor de Objetos",
    descripcion: "Vendedor de objetos básicos y materiales comunes.",
    misiones: ["Comprar Objetos", "Vender Materiales"],
    ofrece: ["Poción", "Cristal Básico", "Herramienta", "Material Común"],
    modelo: `assets/models/npc_secundario_${String(i + 1).padStart(2, '0')}.glb`,
    icono: `assets/icons/npc_secundario_${String(i + 1).padStart(2, '0')}.png`
  })),
  // Grupo B: Intercambistas (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 31 + i,
    nombre: ["Marvar", "Selthar", "Dravot", "Veythar", "Ignark", "Lurvot", "Zorvak", "Kryvot", "Selvot", "Tharvot"][i],
    rol: "Intercambista",
    tipo: "Intercambio de Materiales",
    descripcion: "Intercambista que ofrece objetos a cambio de materiales específicos.",
    misiones: ["Intercambiar Materiales", "Obtener Objetos Raros"],
    ofrece: ["Arma Básica", "Armadura Básica", "Objeto Único"],
    modelo: `assets/models/npc_secundario_2_${String(i + 1).padStart(2, '0')}.glb`,
    icono: `assets/icons/npc_secundario_2_${String(i + 1).padStart(2, '0')}.png`
  })),
  // Grupo C: Proveedores de Armas (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 41 + i,
    nombre: ["Morvoth", "Selthok", "Dravoth", "Veythot", "Ignoth", "Lurvoth", "Zorvoth", "Kryvoth", "Selvoth", "Tharvoth"][i],
    rol: "Proveedor",
    tipo: "Proveedor de Armas",
    descripcion: "Proveedor de armas básicas y mejoradas para cazadores.",
    misiones: ["Obtener Armas", "Mejorar Equipamiento"],
    ofrece: ["Espada", "Arco", "Lanza", "Ballesta", "Hacha", "Daga", "Espada Grande", "Espada Oscura", "Espada de Viento", "Espada de Tierra"],
    modelo: `assets/models/npc_secundario_3_${String(i + 1).padStart(2, '0')}.glb`,
    icono: `assets/icons/npc_secundario_3_${String(i + 1).padStart(2, '0')}.png`
  })),
  // Grupo D: Especialistas (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 51 + i,
    nombre: ["Marvoth Jr", "Selthis Jr", "Dravok Jr 2", "Veythok Jr 2", "Tharok Jr 2", "Ignark Jr", "Lurvot Jr", "Zornis Jr", "Krythis Jr", "Selvak Jr"][i],
    rol: "Aprendiz",
    tipo: "Especialista de Apoyo",
    descripcion: "Aprendiz o especialista que ofrece objetos de apoyo y comercio básico.",
    misiones: ["Ayudar con Objetos", "Obtener Materiales Básicos"],
    ofrece: ["Poción Básica", "Material de Apoyo", "Objeto Común"],
    modelo: `assets/models/npc_secundario_4_${String(i + 1).padStart(2, '0')}.glb`,
    icono: `assets/icons/npc_secundario_4_${String(i + 1).padStart(2, '0')}.png`
  }))
];
