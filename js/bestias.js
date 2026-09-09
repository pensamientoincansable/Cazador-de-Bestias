// Datos de las 30 Bestias para Cazador de Bestias
// Cada bestia tiene estadísticas de combate tipo Monster Hunter

export const BESTIAS = [
  {
    id: 1,
    nombre: "Velthar",
    subtitulo: "La Bestia del Cristal Roto",
    tipo: "Cristal / Aérea",
    nivel: 1,
    salud: 12000,
    ataque: 85,
    defensa: 45,
    velocidad: 60,
    elementos: ["morada", "cristal"],
    debilidades: ["sombra", "veneno"],
    resistencias: ["cristal", "hielo"],
    zona: "Valle de Cristal Roto",
    descripcion: "Cuerpo de obsidiana cubierta de cristales morados. Alas rotas de fragmentos. Cuernos retorcidos como espadas. Ojos de luz violeta.",
    drops: ["Cristal Roto", "Escama de Cristal", "Cuerno de Velthar"],
    icono: "assets/icons/bestia_01_velthar.png",
    modelo: "assets/models/bestia_01_velthar.glb",
    texturas: {
      albedo: "assets/textures/bestia_01_albedo.png",
      normal: "assets/textures/bestia_01_normal.png",
      roughness: "assets/textures/bestia_01_roughness.png",
      emissive: "assets/textures/bestia_01_emissive.png"
    }
  },
  {
    id: 2,
    nombre: "Ignathar",
    subtitulo: "La Bestia del Fuego Silenciado",
    tipo: "Fuego / Volcánica",
    nivel: 2,
    salud: 13500,
    ataque: 92,
    defensa: 50,
    velocidad: 55,
    elementos: ["negro", "lava"],
    debilidades: ["agua", "hielo"],
    resistencias: ["fuego", "cristal"],
    zona: "La Forja Silenciada",
    descripcion: "Cuerpo cubierto de escamas de lava negra. Ojos de fuego ámbar. Cola con punta de obsidiana ardiente. Humo negro constante.",
    drops: ["Escama de Lava", "Obsidiana Ardiente", "Cola de Ignathar"],
    icono: "assets/icons/bestia_02_ignathar.png",
    modelo: "assets/models/bestia_02_ignathar.glb",
    texturas: {
      albedo: "assets/textures/bestia_02_albedo.png",
      normal: "assets/textures/bestia_02_normal.png",
      roughness: "assets/textures/bestia_02_roughness.png",
      emissive: "assets/textures/bestia_02_emissive.png"
    }
  },
  {
    id: 3,
    nombre: "Noxar",
    subtitulo: "La Bestia de la Sombra Escindida",
    tipo: "Sombra / Terrestre",
    nivel: 3,
    salud: 11000,
    ataque: 78,
    defensa: 40,
    velocidad: 75,
    elementos: ["negro", "sombra"],
    debilidades: ["luz", "cristal"],
    resistencias: ["sombra", "veneno"],
    zona: "El Abismo de Sombra",
    descripcion: "Cuerpo de sombras sólidas con bordes cortantes. No tiene cara visible, solo una boca vertical. Brazos alargados con garras de obsidiana.",
    drops: ["Sombra Sólida", "Garra de Obsidiana", "Boca de Noxar"],
    icono: "assets/icons/bestia_03_noxar.png",
    modelo: "assets/models/bestia_03_noxar.glb",
    texturas: {
      albedo: "assets/textures/bestia_03_albedo.png",
      normal: "assets/textures/bestia_03_normal.png",
      roughness: "assets/textures/bestia_03_roughness.png",
      emissive: "assets/textures/bestia_03_emissive.png"
    }
  },
  {
    id: 4,
    nombre: "Drakhar",
    subtitulo: "La Bestia del Hielo Quebrado",
    tipo: "Hielo / Aérea",
    nivel: 4,
    salud: 14000,
    ataque: 88,
    defensa: 55,
    velocidad: 65,
    elementos: ["azul", "hielo"],
    debilidades: ["fuego", "metal"],
    resistencias: ["hielo", "agua"],
    zona: "El Bosque de Hielo",
    descripcion: "Cuerpo de hielo azul cristalino. Alas de nieve congelada. Cuernos de hielo transparente. Exhala niebla congelante.",
    drops: ["Cristal de Hielo", "Ala de Nieve", "Cuerno de Drakhar"],
    icono: "assets/icons/bestia_04_drakhar.png",
    modelo: "assets/models/bestia_04_drakhar.glb",
    texturas: {
      albedo: "assets/textures/bestia_04_albedo.png",
      normal: "assets/textures/bestia_04_normal.png",
      roughness: "assets/textures/bestia_04_roughness.png",
      emissive: "assets/textures/bestia_04_emissive.png"
    }
  },
  {
    id: 5,
    nombre: "Zornath",
    subtitulo: "La Bestia del Rayo Silente",
    tipo: "Eléctrica / Aérea",
    nivel: 5,
    salud: 12500,
    ataque: 95,
    defensa: 42,
    velocidad: 80,
    elementos: ["amarillo", "rayo"],
    debilidades: ["tierra", "sombra"],
    resistencias: ["eléctrica", "viento"],
    zona: "El Bosque de Hielo",
    descripcion: "Cuerpo cubierto de plumas metálicas negras. Ojos amarillos brillantes. Cada movimiento genera chispas. Cuerpo ágil, casi serpentino.",
    drops: ["Pluma Metálica", "Ojo de Rayo", "Cola de Zornath"],
    icono: "assets/icons/bestia_05_zornath.png",
    modelo: "assets/models/bestia_05_zornath.glb",
    texturas: {
      albedo: "assets/textures/bestia_05_albedo.png",
      normal: "assets/textures/bestia_05_normal.png",
      roughness: "assets/textures/bestia_05_roughness.png",
      emissive: "assets/textures/bestia_05_emissive.png"
    }
  },
  {
    id: 6,
    nombre: "Tharok",
    subtitulo: "La Bestia de la Tierra Rota",
    tipo: "Tierra / Terrestre",
    nivel: 6,
    salud: 16000,
    ataque: 82,
    defensa: 60,
    velocidad: 45,
    elementos: ["verde", "musgo"],
    debilidades: ["agua", "hielo"],
    resistencias: ["tierra", "fuego"],
    zona: "Valle de Cristal Roto",
    descripcion: "Cuerpo de rocas vivas con musgo verde brillante. Ojos de esmeralda. Cuernos como pilares de piedra. Se mueve lentamente pero con fuerza devastadora.",
    drops: ["Pilar de Piedra", "Musgo Brillante", "Ojo de Esmeralda"],
    icono: "assets/icons/bestia_06_tharok.png",
    modelo: "assets/models/bestia_06_tharok.glb",
    texturas: {
      albedo: "assets/textures/bestia_06_albedo.png",
      normal: "assets/textures/bestia_06_normal.png",
      roughness: "assets/textures/bestia_06_roughness.png",
      emissive: "assets/textures/bestia_06_emissive.png"
    }
  },
  {
    id: 7,
    nombre: "Vyrath",
    subtitulo: "La Bestia del Agua Silenciada",
    tipo: "Agua / Marina",
    nivel: 7,
    salud: 13000,
    ataque: 75,
    defensa: 48,
    velocidad: 70,
    elementos: ["azul", "líquido"],
    debilidades: ["eléctrica", "fuego"],
    resistencias: ["agua", "hielo"],
    zona: "El Mar Silenciado",
    descripcion: "Cuerpo de escamas azules con aletas de cristal líquido. Ojos de perla blanca. Nada a través del aire como si fuera agua, dejando un rastro de gotas.",
    drops: ["Escama Líquida", "Perla Blanca", "Aleta de Cristal"],
    icono: "assets/icons/bestia_07_vyrath.png",
    modelo: "assets/models/bestia_07_vyrath.glb",
    texturas: {
      albedo: "assets/textures/bestia_07_albedo.png",
      normal: "assets/textures/bestia_07_normal.png",
      roughness: "assets/textures/bestia_07_roughness.png",
      emissive: "assets/textures/bestia_07_emissive.png"
    }
  },
  {
    id: 8,
    nombre: "Krythos",
    subtitulo: "La Bestia de la Oscuridad Profunda",
    tipo: "Oscuridad / Subterránea",
    nivel: 8,
    salud: 15000,
    ataque: 90,
    defensa: 52,
    velocidad: 50,
    elementos: ["negro", "estrella"],
    debilidades: ["luz", "cristal"],
    resistencias: ["oscuridad", "sombra"],
    zona: "El Abismo de Sombra",
    descripcion: "Cuerpo negro profundo con estrellas brillantes como ojos. No tiene forma fija, cambia constantemente. Se alimenta de la luz.",
    drops: ["Estrella Oscura", "Sombra Cambiante", "Ojo de Krythos"],
    icono: "assets/icons/bestia_08_krythos.png",
    modelo: "assets/models/bestia_08_krythos.glb",
    texturas: {
      albedo: "assets/textures/bestia_08_albedo.png",
      normal: "assets/textures/bestia_08_normal.png",
      roughness: "assets/textures/bestia_08_roughness.png",
      emissive: "assets/textures/bestia_08_emissive.png"
    }
  },
  // Bestias 9-30 con datos resumidos para el juego
  ...Array.from({ length: 22 }, (_, i) => {
    const id = i + 9;
    const nombres = ["Morvay", "Selkor", "Dravoth", "Lurvath", "Kalthor", "Zyvar", "Raxoth", "Veythar", "Thryvok", "Zarnak", "Klyvar", "Morthak", "Nyrvak", "Selvak", "Dravok", "Lyrvath", "Kalthok", "Zyvark", "Raxvar", "Veythok", "Thryvok2", "Zarnok2"];
    const tipos = ["Veneno / Terrestre", "Viento / Aérea", "Metal / Terrestre", "Sombra / Subterránea", "Cristal / Aérea", "Hielo / Marina", "Fuego / Volcánica", "Agua / Terrestre", "Tierra / Terrestre", "Eléctrica / Aérea", "Oscuridad / Aérea", "Cristal / Terrestre", "Veneno / Aérea", "Viento / Terrestre", "Metal / Aérea", "Sombra / Aérea", "Cristal / Marina", "Hielo / Terrestre", "Fuego / Aérea", "Agua / Aérea", "Tierra / Aérea", "Eléctrica / Terrestre"];
    const zonas = ["Valle de Cristal Roto", "El Bosque de Hielo", "La Forja Silenciada", "El Abismo de Sombra", "El Valle de Cristal Roto", "El Mar Silenciado", "La Forja Silenciada", "El Mar Silenciado", "Valle de Cristal Roto", "El Bosque de Hielo", "El Abismo de Sombra", "Valle de Cristal Roto", "El Bosque de Hielo", "El Abismo de Sombra", "La Forja Silenciada", "El Mar Silenciado", "Valle de Cristal Roto", "El Bosque de Hielo", "La Forja Silenciada", "El Mar Silenciado", "Valle de Cristal Roto", "El Abismo de Sombra"];
    return {
      id,
      nombre: nombres[i] || `Bestia ${id}`,
      subtitulo: `La Bestia ${tipos[i]}`,
      tipo: tipos[i],
      nivel: Math.min(id + 1, 10),
      salud: 11000 + (id * 400),
      ataque: 70 + (id * 3),
      defensa: 38 + (id * 2),
      velocidad: 45 + (id * 3),
      elementos: ["elemento"],
      debilidades: ["fuego"],
      resistencias: ["cristal"],
      zona: zonas[i] || "Valle de Cristal Roto",
      descripcion: `Bestia original con características únicas y diseño de alta calidad PBR. ${tipos[i]}`,
      drops: [`Material de ${nombres[i] || `Bestia ${id}`}`],
      icono: `assets/icons/bestia_${String(id).padStart(2, '0')}.png`,
      modelo: `assets/models/bestia_${String(id).padStart(2, '0')}.glb`,
      texturas: {
        albedo: `assets/textures/bestia_${String(id).padStart(2, '0')}_albedo.png`,
        normal: `assets/textures/bestia_${String(id).padStart(2, '0')}_normal.png`,
        roughness: `assets/textures/bestia_${String(id).padStart(2, '0')}_roughness.png`,
        emissive: `assets/textures/bestia_${String(id).padStart(2, '0')}_emissive.png`
      }
    };
  })
];
