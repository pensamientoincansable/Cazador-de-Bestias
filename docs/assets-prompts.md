# Cazador de Bestias: Prompts Detallados para Assets de Alta Calidad

## Historia Original

**Título:** *Cazador de Bestias: El Silencio de Cristal*  
**Ambientación:** Aethelgard, un mundo sellado por los Dioses Bestia hace 300 años. El cielo es un cristal roto. Las ciudades flotan sobre ruinas de piedra negra. El jugador es un *Cazador del Alba*, un guerrero sin memoria que debe romper el Sello de Cristal enfrentando a 30 Bestias para despertar al último Dios Bestia y decidir si el mundo se libera o se sella para siempre.

---

## Índice de Assets

1. [Bestias (30)](#bestias-30)
2. [NPCs Principales (20)](#npcs-principales-20)
3. [NPCs Secundarios (40)](#npcs-secundarios-40)
4. [Armas y Equipamiento](#armas-y-equipamiento)
5. [Entornos de Caza](#entornos-de-caza)
6. [UI / HUD / Interfaz](#ui--hud--interfaz)
7. [Efectos VFX](#efectos-vfx)

---

## Bestias (30)

Cada bestia requiere los siguientes assets (prompts individuales):
- Modelo 3D PBR (archivo `.fbx` / `.glb` o referencia visual para generación 3D)
- Textura Difusa / Albedo 4K (4096x4096)
- Textura Normal 4K
- Textura Roughness / Metallic 4K (mapa combinado R=metallic, G=roughness, B=ambient occlusion)
- Textura Emissive 2K (para partes brillantes, cristales, ojos)
- Animación de Ataque (loop de 24-30 fps, referencia visual descriptiva)
- Animación de Muerte (caída dramática, referencia visual descriptiva)
- Icono 2D para HUD / Menú

### 1. Velthar, la Bestia del Cristal Roto
- **Tipo:** Bestia de Cristal / Aérea
- **Descripción:** Cuerpo de obsidiana y cristales morados que reflejan luz. Alas rotas hechas de fragmentos de cristal. Cuernos retorcidos como espadas. Ojos de luz violeta.
- **Prompts:**
  - Modelo 3D: `Majestic crystal beast "Velthar", obsidian body with purple glowing crystal shards, broken crystal wings, twisted horns like swords, violet glowing eyes, high-poly PBR model, 8K resolution, photorealistic, Unreal Engine 5, studio lighting, isolated on white background`
  - Albedo 4K: `4K PBR albedo texture for crystal beast, obsidian stone surface with purple crystal veins, rough stone texture with crystalline reflections, 4096x4096, seamless, highly detailed`
  - Normal 4K: `4K PBR normal map for crystal beast, deep cracks and crystal edges, rough obsidian surface details, 4096x4096, high frequency detail`
  - Roughness/Metallic 4K: `4K PBR roughness metallic texture for crystal beast, crystal surfaces with low roughness (shiny), obsidian high roughness (matte), 4096x4096, combined R=metallic G=roughness B=AO`
  - Emissive 2K: `2K emissive texture for crystal beast, glowing purple crystal veins and bright violet eyes, 2048x2048, black background with bright emission`
  - Ataque: `Animation reference for crystal beast attack, crystal shards exploding outward, wings spreading with light burst, dramatic motion, dark atmospheric lighting`
  - Muerte: `Animation reference for crystal beast death, crystal body shattering and dissolving into light particles, slow motion, epic dramatic fall, dark background with purple glow`
  - Icono HUD: `Icon for crystal beast Velthar, stylized profile with purple crystal horns, dark background, video game HUD style, 512x512, clean design`

### 2. Ignathar, la Bestia del Fuego Silenciado
- **Tipo:** Bestia de Fuego / Volcánica
- **Descripción:** Cuerpo cubierto de escamas de lava negra. Ojos de fuego ámbar. Cola con punta de obsidiana ardiente. Humo negro constante.
- **Prompts:**
  - Modelo 3D: `Fire beast "Ignathar", black lava scales, amber fire eyes, obsidian tail with burning tip, smoke rising from body, high-poly PBR, Unreal Engine 5, studio lighting, isolated`
  - Albedo 4K: `4K albedo texture for fire beast, black volcanic rock scales with orange and red lava veins, rough texture, 4096x4096`
  - Normal 4K: `4K normal map for fire beast, deep scale patterns and lava cracks, high detail, 4096x4096`
  - Roughness/Metallic 4K: `4K roughness metallic texture, lava veins low roughness (glossy), volcanic rock high roughness (matte), 4096x4096`
  - Emissive 2K: `2K emissive texture, glowing amber eyes and burning tail tip, 2048x2048`
  - Ataque: `Fire beast attack animation reference, lava eruption from mouth, tail whipping with fire trail, dramatic lighting, dark atmosphere`
  - Muerte: `Fire beast death animation, body collapsing into molten lava, fire fading out, dramatic slow fall, dark background`
  - Icono HUD: `Icon for fire beast Ignathar, stylized profile with amber eyes and burning tail, dark background, 512x512`

### 3. Noxar, la Bestia de la Sombra Escindida
- **Tipo:** Bestia de Sombra / Terrestre
- **Descripción:** Cuerpo de sombras sólidas con bordes cortantes. No tiene cara visible, solo una boca vertical. Brazos alargados con garras de obsidiana. Camina sobre cuatro patas, pero se alza para atacar.
- **Prompts:**
  - Modelo 3D: `Shadow beast "Noxar", solid black shadow body with sharp edges, no face only vertical mouth, long arms with obsidian claws, walks on four legs but stands to attack, high-poly PBR, Unreal Engine 5, studio lighting, isolated`
  - Albedo 4K: `4K albedo texture for shadow beast, pure black with subtle dark purple gradients at edges, seamless, 4096x4096`
  - Normal 4K: `4K normal map for shadow beast, sharp edge cuts and claw details, 4096x4096`
  - Roughness/Metallic 4K: `4K roughness metallic texture, pure black with slight roughness variation, 4096x4096`
  - Emissive 2K: `2K emissive texture, faint purple glow at mouth and claw tips, 2048x2048`
  - Ataque: `Shadow beast attack animation, arms stretching out with claw slash, vertical mouth opening, dark atmospheric lighting`
  - Muerte: `Shadow beast death animation, body dissolving into dark smoke, slow fade to nothing, dramatic lighting`
  - Icono HUD: `Icon for shadow beast Noxar, stylized black silhouette with vertical mouth, 512x512`

### 4. Drakhar, la Bestia del Hielo Quebrado
- **Tipo:** Bestia de Hielo / Aérea
- **Descripción:** Cuerpo de hielo azul cristalino. Alas de nieve congelada. Cuernos de hielo transparente. Exhala niebla congelante.
- **Prompts:**
  - Modelo 3D: `Ice beast "Drakhar", crystal blue ice body, frozen snow wings, transparent ice horns, exhaling frozen mist, high-poly PBR, Unreal Engine 5, studio lighting`
  - Albedo 4K: `4K albedo texture for ice beast, crystal blue ice with white snow details, rough texture, 4096x4096`
  - Normal 4K: `4K normal map for ice beast, crystal facets and snow texture, 4096x4096`
  - Roughness/Metallic 4K: `4K roughness metallic texture, crystal surfaces very smooth (low roughness), snow rough, 4096x4096`
  - Emissive 2K: `2K emissive texture, faint blue glow inside crystal body, 2048x2048`
  - Ataque: `Ice beast attack animation, frozen mist blast from mouth, wings spreading with snow burst, dramatic lighting`
  - Muerte: `Ice beast death animation, crystal body cracking and shattering, snow falling, dramatic slow fall`
  - Icono HUD: `Icon for ice beast Drakhar, stylized blue crystal profile, 512x512`

### 5. Zornath, la Bestia del Rayo Silente
- **Tipo:** Bestia Eléctrica / Aérea
- **Descripción:** Cuerpo cubierto de plumas metálicas negras. Ojos amarillos brillantes. Cada movimiento genera chispas. Cuerpo ágil, casi serpentino.
- **Prompts:**
  - Modelo 3D: `Electric beast "Zornath", black metallic feather body, bright yellow glowing eyes, agile serpentine body, sparks emitting on movement, high-poly PBR, Unreal Engine 5`
  - Albedo 4K: `4K albedo texture for electric beast, black metallic feathers with silver details, rough texture, 4096x4096`
  - Normal 4K: `4K normal map, feather patterns and metal details, 4096x4096`
  - Roughness/Metallic 4K: `4K roughness metallic texture, metal surfaces low roughness, feathers medium roughness, 4096x4096`
  - Emissive 2K: `2K emissive texture, bright yellow eyes and spark trails, 2048x2048`
  - Ataque: `Electric beast attack animation, lightning strike from above, body coiling then striking, dramatic lighting`
  - Muerte: `Electric beast death animation, body fading with sparks, slow collapse, dark atmosphere`
  - Icono HUD: `Icon for electric beast Zornath, stylized black feather profile with yellow eyes, 512x512`

### 6. Tharok, la Bestia de la Tierra Rota
- **Tipo:** Bestia de Tierra / Terrestre
- **Descripción:** Cuerpo de rocas vivas con musgo verde brillante. Ojos de esmeralda. Cuernos como pilares de piedra. Se mueve lentamente pero con fuerza devastadora.
- **Prompts:**
  - Modelo 3D: `Earth beast "Tharok", living rock body with bright green moss, emerald eyes, stone horns like pillars, slow but powerful movement, high-poly PBR, Unreal Engine 5`
  - Albedo 4K: `4K albedo texture for earth beast, rough rock with bright green moss patches, 4096x4096`
  - Normal 4K: `4K normal map, rock texture and moss details, 4096x4096`
  - Roughness/Metallic 4K: `4K roughness metallic texture, rock very rough, moss slightly smoother, 4096x4096`
  - Emissive 2K: `2K emissive texture, emerald eyes and glowing green moss, 2048x2048`
  - Ataque: `Earth beast attack animation, ground tremor with rock pillars rising, slow powerful strike, dramatic lighting`
  - Muerte: `Earth beast death animation, body collapsing into rubble, moss fading, slow dramatic fall`
  - Icono HUD: `Icon for earth beast Tharok, stylized rock profile with green moss, 512x512`

### 7. Vyrath, la Bestia del Agua Silenciada
- **Tipo:** Bestia de Agua / Marina
- **Descripción:** Cuerpo de escamas azules con aletas de cristal líquido. Ojos de perla blanca. Nada a través del aire como si fuera agua, dejando un rastro de gotas.
- **Prompts:**
  - Modelo 3D: `Water beast "Vyrath", blue crystal liquid scales, pearl white eyes, crystal liquid fins, swims through air leaving water droplets, high-poly PBR, Unreal Engine 5`
  - Albedo 4K: `4K albedo texture for water beast, blue crystal scales with water reflections, 4096x4096`
  - Normal 4K: `4K normal map, scale patterns and crystal fin details, 4096x4096`
  - Roughness/Metallic 4K: `4K roughness metallic texture, crystal surfaces low roughness, water high roughness, 4096x4096`
  - Emissive 2K: `2K emissive texture, pearl white eyes and crystal fin glow, 2048x2048`
  - Ataque: `Water beast attack animation, water blast from mouth, crystal fins cutting through air, dramatic lighting`
  - Muerte: `Water beast death animation, body dissolving into water and light, slow fade`
  - Icono HUD: `Icon for water beast Vyrath, stylized blue crystal profile, 512x512`

### 8. Krythos, la Bestia de la Oscuridad Profunda
- **Tipo:** Bestia de Oscuridad / Subterránea
- **Descripción:** Cuerpo negro profundo con estrellas brillantes como ojos. No tiene forma fija, cambia constantemente. Se alimenta de la luz.
- **Prompts:**
  - Modelo 3D: `Darkness beast "Krythos", deep black body with bright star-like eyes, no fixed shape constantly changing, feeds on light, high-poly PBR, Unreal Engine 5, studio lighting`
  - Albedo 4K: `4K albedo texture for darkness beast, pure black with star patterns, 4096x4096`
  - Normal 4K: `4K normal map, abstract shape details, 4096x4096`
  - Roughness/Metallic 4K: `4K roughness metallic texture, very low roughness (glossy black), 4096x4096`
  - Emissive 2K: `2K emissive texture, bright star eyes, 2048x2048`
  - Ataque: `Darkness beast attack animation, light absorption effect, shape shifting to strike, dramatic lighting`
  - Muerte: `Darkness beast death animation, stars fading out, body dissolving into nothing, slow dramatic`
  - Icono HUD: `Icon for darkness beast Krythos, stylized black shape with star eyes, 512x512`

---

### Bestias 9 a 30 (Resumen con Prompts Clave)

Cada una sigue el mismo esquema de 8 prompts (Modelo, Albedo, Normal, Roughness, Emissive, Ataque, Muerte, Icono).

| # | Nombre | Tipo | Prompto Modelo 3D (Resumen) | Prompto Albedo (Resumen) |
|---|--------|------|------------------------------|--------------------------|
| 9 | Morvay | Veneno / Terrestre | `Venom beast "Morvay", green toxic scales, purple venom dripping from mouth, high-poly PBR` | `4K albedo, green toxic scales with purple venom details` |
| 10 | Selkor | Viento / Aérea | `Wind beast "Selkor", feathered white and silver body, swirling wind aura, high-poly PBR` | `4K albedo, white silver feathers with wind texture` |
| 11 | Dravoth | Metal / Terrestre | `Metal beast "Dravoth", polished steel body with rust patches, red glowing core, high-poly PBR` | `4K albedo, polished steel with rust details` |
| 12 | Lurvath | Sombra / Subterránea | `Shadow beast "Lurvath", shadow tendrils, red glowing eyes, underground form, high-poly PBR` | `4K albedo, pure black with red glow details` |
| 13 | Kalthor | Cristal / Aérea | `Crystal beast "Kalthor", transparent crystal body with internal light, sharp edges, high-poly PBR` | `4K albedo, transparent crystal with light refraction` |
| 14 | Zyvar | Hielo / Marina | `Ice beast "Zyvar", frozen ocean scales, ice spikes, blue crystal eyes, high-poly PBR` | `4K albedo, frozen ocean blue with ice spikes` |
| 15 | Raxoth | Fuego / Volcánica | `Fire beast "Raxoth", magma body with black rock crust, fire tail, high-poly PBR` | `4K albedo, magma red with black rock crust` |
| 16 | Veythar | Agua / Terrestre | `Water beast "Veythar", liquid metal body, flowing water texture, silver eyes, high-poly PBR` | `4K albedo, liquid metal with water flow` |
| 17 | Thryvok | Tierra / Terrestre | `Earth beast "Thryvok", moss-covered stone giant, green glowing veins, heavy body, high-poly PBR` | `4K albedo, moss stone with green veins` |
| 18 | Zarnak | Eléctrica / Aérea | `Electric beast "Zarnak", black and silver body, lightning aura, sharp wings, high-poly PBR` | `4K albedo, black silver with lightning texture` |
| 19 | Klyvar | Oscuridad / Aérea | `Darkness beast "Klyvar", shadow wings, purple glowing core, floating form, high-poly PBR` | `4K albedo, shadow purple with glowing core` |
| 20 | Morthak | Cristal / Terrestre | `Crystal beast "Morthak", red crystal body, sharp crystal horns, glowing red core, high-poly PBR` | `4K albedo, red crystal with sharp details` |
| 21 | Nyrvak | Veneno / Aérea | `Venom beast "Nyrvak", purple and black body, toxic wings, dripping venom, high-poly PBR` | `4K albedo, purple black with toxic details` |
| 22 | Selvak | Viento / Terrestre | `Wind beast "Selvak", feathered brown body, wind aura, sharp beak, high-poly PBR` | `4K albedo, feathered brown with wind details` |
| 23 | Dravok | Metal / Aérea | `Metal beast "Dravok", polished gold body, sharp metal wings, glowing gold core, high-poly PBR` | `4K albedo, polished gold with metal details` |
| 24 | Lyrvath | Sombra / Aérea | `Shadow beast "Lyrvath", black shadow body with white glowing eyes, floating, high-poly PBR` | `4K albedo, pure black with white glow` |
| 25 | Kalthok | Cristal / Marina | `Crystal beast "Kalthok", underwater crystal body, bioluminescent details, high-poly PBR` | `4K albedo, underwater crystal with bioluminescence` |
| 26 | Zyvark | Hielo / Terrestre | `Ice beast "Zyvark", frozen body with snow details, blue crystal horns, high-poly PBR` | `4K albedo, frozen body with snow details` |
| 27 | Raxvar | Fuego / Aérea | `Fire beast "Raxvar", fire feather body, burning wings, bright orange core, high-poly PBR` | `4K albedo, fire feathers with bright orange` |
| 28 | Veythok | Agua / Aérea | `Water beast "Veythok", liquid body with water reflections, silver wings, pearl eyes, high-poly PBR` | `4K albedo, liquid body with water reflections` |
| 29 | Thryvok | Tierra / Aérea | `Earth beast "Thryvok", rock body with moss, green glowing core, heavy wings, high-poly PBR` | `4K albedo, rock moss with green core` |
| 30 | Zarnok | Eléctrica / Terrestre | `Electric beast "Zarnok", black body with silver lightning, sharp claws, bright yellow core, high-poly PBR` | `4K albedo, black silver with lightning texture` |

---

## NPCs Principales (20) — Dan Misiones y Avanzan la Historia

### 1. Eldara, la Cazadora del Alba (Líder del Gremio)
- **Rol:** Líder del gremio de cazadores. Da las misiones principales.
- **Prompts:** Modelo 3D PBR femenino, armadura de cristal y obsidiana, cabello blanco largo, espada grande, alta calidad, Unreal Engine 5, estudio.
- **Diálogo Clave:** "El Sello de Cristal no se romperá solo. Necesitamos a alguien que recuerde lo que olvidó."

### 2. Dravok, el Forjador de Armas (Herrero Principal)
- **Rol:** Forja armas y mejoramientos. Principal para el combate.
- **Prompts:** Modelo 3D PBR masculino, forjador con martillo gigante, armadura de metal, barba negra, taller, Unreal Engine 5, estudio.

### 3. Sylthar, el Mercader de Cristales (Intercambio Avanzado)
- **Rol:** Vende materiales raros y cristales de bestias derrotadas.
- **Prompts:** Modelo 3D PBR andrógino, vestido de cristales, cabello de cristal, mercader, Unreal Engine 5, estudio.

### 4. Morvay, el Alquimista Veneno (Objetos de Apoyo)
- **Rol:** Crea pociones de veneno, curación y mejora de armas.
- **Prompts:** Modelo 3D PBR femenino, alquimista con túnica verde, frascos de veneno, cabello verde oscuro, Unreal Engine 5.

### 5. Tharok, el Guardián de la Tierra (Defensor)
- **Rol:** Protege la ciudad y da misiones de defensa.
- **Prompts:** Modelo 3D PBR masculino grande, armadura de piedra verde, escudo gigante, barba de musgo, Unreal Engine 5.

### 6-20. Resumen de NPCs Principales Adicionales

| # | Nombre | Rol | Tipo de Misión / Función | Prompto Modelo (Resumen) |
|---|--------|-----|--------------------------|--------------------------|
| 6 | Vyrath | Capitán del Agua | Misiones marinas | Modelo PBR masculino, armadura de cristal líquido, cabello azul, Unreal Engine 5 |
| 7 | Zornath | Maestra del Rayo | Misiones eléctricas / Velocidad | Modelo PBR femenino, armadura negra y plata, cabello de rayos, Unreal Engine 5 |
| 8 | Krythos | Guardián de la Oscuridad | Misiones de infiltración | Modelo PBR andrógino, sombra sólida, ojos de estrellas, Unreal Engine 5 |
| 9 | Selkor | Maestro del Viento | Misiones aéreas / Movilidad | Modelo PBR masculino, plumas blancas y plata, armadura ligera, Unreal Engine 5 |
| 10 | Dravoth | Ingeniero de Metal | Mejora de armaduras metálicas | Modelo PBR masculino, armadura de acero, herramientas de ingeniería, Unreal Engine 5 |
| 11 | Ignathar | Maestro del Fuego | Misiones volcánicas / Daño de fuego | Modelo PBR masculino, armadura de lava, cabello de fuego, Unreal Engine 5 |
| 12 | Lurvath | Espía de Sombras | Misiones de sigilo / Información | Modelo PBR femenino, capa de sombra, ojos rojos, Unreal Engine 5 |
| 13 | Nyrvak | Curandera de Veneno | Curación avanzada / Antídotos | Modelo PBR femenino, túnica púrpura, cabello de veneno, Unreal Engine 5 |
| 14 | Kalthor | Arquitecto de Cristales | Construcción / Mejoras de base | Modelo PBR masculino, armadura de cristal transparente, cabello de cristal, Unreal Engine 5 |
| 15 | Zyvark | Explorador de Hielo | Misiones de exploración ártica | Modelo PBR masculino, armadura de hielo azul, barba blanca, Unreal Engine 5 |
| 16 | Raxoth | Líder del Fuego | Misiones de combate avanzado | Modelo PBR masculino, armadura de magma, ojos ámbar, Unreal Engine 5 |
| 17 | Veythok | Navegante del Agua | Viajes / Comercio marítimo | Modelo PBR masculino, armadura líquida, cabello de agua, Unreal Engine 5 |
| 18 | Thryvok | Defensor de la Tierra | Protección de la ciudad | Modelo PBR masculino grande, armadura de piedra, barba de musgo, Unreal Engine 5 |
| 19 | Zarnok | Ingeniero del Rayo | Mejoras de velocidad / Armas eléctricas | Modelo PBR masculino, armadura negra y plata, ojos amarillos, Unreal Engine 5 |
| 20 | Klyvar | Oráculo de la Oscuridad | Predicciones / Misiones finales | Modelo PBR femenino, sombra flotante, estrellas en el cuerpo, Unreal Engine 5 |

---

## NPCs Secundarios (40) — Dan Objetos, Armas o Quieren Intercambiar

Cada NPC secundario requiere:
- Modelo 3D PBR básico (menos detalle que principales)
- Textura Albedo 2K (suficiente para NPCs secundarios)
- Animación de interacción (saludo, entrega de objeto, intercambio)
- Icono 2D para menú / Mapa

### Grupo A: Comerciantes de Objetos (10 NPCs)

| # | Nombre | Rol | Prompto Modelo | Prompto Interacción |
|---|--------|-----|----------------|----------------------|
| 1 | Marvok | Vendedor de pociones | Modelo PBR masculino, túnica simple, cabello corto, sonrisa amable, Unreal Engine 5 | Animación de entregar frasco, mano extendida, sonrisa |
| 2 | Selthis | Vendedor de cristales | Modelo PBR femenino, vestido simple, cabello largo, Unreal Engine 5 | Animación de mostrar cristal brillante, mano abierta |
| 3 | Dravok Jr | Aprendiz de herrero | Modelo PBR joven masculino, delantal de herrero, cabello desordenado, Unreal Engine 5 | Animación de mostrar herramienta, gesto de orgullo |
| 4 | Veythok Jr | Aprendiz de agua | Modelo PBR joven femenino, túnica azul, cabello mojado, Unreal Engine 5 | Animación de saludar con mano mojada, sonrisa |
| 5 | Tharok Jr | Aprendiz de tierra | Modelo PBR joven masculino, ropa de musgo, cabello verde, Unreal Engine 5 | Animación de entregar piedra, gesto de respeto |
| 6 | Ignis | Vendedor de fuego | Modelo PBR femenino, ropa roja, cabello de fuego, Unreal Engine 5 | Animación de mostrar objeto ardiente, mano protegida |
| 7 | Lurvis | Mercader de sombras | Modelo PBR andrógino, capa simple, ojos ocultos, Unreal Engine 5 | Animación de entregar objeto oculto, gesto misterioso |
| 8 | Zornis | Vendedor de rayos | Modelo PBR masculino, ropa negra, cabello de rayos, Unreal Engine 5 | Animación de entregar objeto con chispa, gesto rápido |
| 9 | Krythis | Vendedor de oscuridad | Modelo PBR femenino, ropa negra, cabello oscuro, Unreal Engine 5 | Animación de entregar objeto con sombra, gesto silencioso |
| 10 | Selvak | Vendedor de viento | Modelo PBR masculino, ropa de plumas, cabello blanco, Unreal Engine 5 | Animación de entregar objeto con viento, gesto ligero |

### Grupo B: Intercambistas de Materiales (10 NPCs)

| # | Nombre | Rol | Prompto Modelo | Prompto Interacción |
|---|--------|-----|----------------|----------------------|
| 11 | Marvar | Intercambista de cristal | Modelo PBR masculino, armadura simple, cabello corto, Unreal Engine 5 | Animación de intercambiar cristal por objeto, gesto de acuerdo |
| 12 | Selthar | Intercambista de metal | Modelo PBR femenino, delantal de metal, cabello largo, Unreal Engine 5 | Animación de intercambiar metal, gesto de satisfacción |
| 13 | Dravot | Intercambista de piedra | Modelo PBR masculino, ropa de piedra, cabello de tierra, Unreal Engine 5 | Animación de intercambiar piedra, gesto de respeto |
| 14 | Veythar | Intercambista de agua | Modelo PBR femenino, ropa líquida, cabello de agua, Unreal Engine 5 | Animación de intercambiar objeto mojado, gesto de alegría |
| 15 | Ignark | Intercambista de fuego | Modelo PBR masculino, ropa ardiente, cabello de fuego, Unreal Engine 5 | Animación de intercambiar objeto ardiente, gesto de confianza |
| 16 | Lurvot | Intercambista de sombra | Modelo PBR andrógino, capa de sombra, ojos ocultos, Unreal Engine 5 | Animación de intercambiar objeto oculto, gesto misterioso |
| 17 | Zorvak | Intercambista de rayo | Modelo PBR masculino, ropa negra, cabello de rayos, Unreal Engine 5 | Animación de intercambiar objeto con chispa, gesto rápido |
| 18 | Kryvot | Intercambista de oscuridad | Modelo PBR femenino, ropa negra, cabello oscuro, Unreal Engine 5 | Animación de intercambiar objeto con sombra, gesto silencioso |
| 19 | Selvot | Intercambista de viento | Modelo PBR masculino, ropa de plumas, cabello blanco, Unreal Engine 5 | Animación de intercambiar objeto con viento, gesto ligero |
| 20 | Tharvot | Intercambista de tierra | Modelo PBR masculino, ropa de musgo, cabello verde, Unreal Engine 5 | Animación de intercambiar objeto con musgo, gesto de respeto |

### Grupo C: Proveedores de Armas y Equipamiento (10 NPCs)

| # | Nombre | Rol | Prompto Modelo | Prompto Interacción |
|---|--------|-----|----------------|----------------------|
| 21 | Morvoth | Proveedor de espadas | Modelo PBR masculino, armadura de espada, cabello oscuro, Unreal Engine 5 | Animación de mostrar espada, gesto de orgullo |
| 22 | Selthok | Proveedor de arcos | Modelo PBR femenino, armadura de arco, cabello largo, Unreal Engine 5 | Animación de mostrar arco, gesto de precisión |
| 23 | Dravoth | Proveedor de lanzas | Modelo PBR masculino, armadura de lanza, cabello de metal, Unreal Engine 5 | Animación de mostrar lanza, gesto de fuerza |
| 24 | Veythot | Proveedor de ballestas | Modelo PBR femenino, armadura de ballesta, cabello de agua, Unreal Engine 5 | Animación de mostrar ballesta, gesto de confianza |
| 25 | Ignoth | Proveedor de hachas | Modelo PBR masculino, armadura de hacha, cabello de fuego, Unreal Engine 5 | Animación de mostrar hacha, gesto de poder |
| 26 | Lurvoth | Proveedor de dagas | Modelo PBR femenino, armadura de daga, cabello de sombra, Unreal Engine 5 | Animación de mostrar daga, gesto de sigilo |
| 27 | Zorvoth | Proveedor de espadas grandes | Modelo PBR masculino, armadura pesada, cabello de rayo, Unreal Engine 5 | Animación de mostrar espada grande, gesto de poder |
| 28 | Kryvoth | Proveedor de espadas oscuras | Modelo PBR femenino, armadura oscura, cabello negro, Unreal Engine 5 | Animación de mostrar espada oscura, gesto misterioso |
| 29 | Selvoth | Proveedor de espadas de viento | Modelo PBR masculino, armadura ligera, cabello blanco, Unreal Engine 5 | Animación de mostrar espada de viento, gesto de velocidad |
| 30 | Tharvoth | Proveedor de espadas de tierra | Modelo PBR masculino, armadura de piedra, cabello de musgo, Unreal Engine 5 | Animación de mostrar espada de tierra, gesto de resistencia |

### Grupo D: Especialistas de Apoyo y Comercio (10 NPCs)

| # | Nombre | Rol | Prompto Modelo | Prompto Interacción |
|---|--------|-----|----------------|----------------------|
| 31 | Marvoth Jr | Aprendiz de pociones | Modelo PBR joven, túnica simple, cabello corto, Unreal Engine 5 | Animación de entregar poción, gesto de entusiasmo |
| 32 | Selthis Jr | Aprendiz de cristales | Modelo PBR joven femenino, vestido simple, cabello largo, Unreal Engine 5 | Animación de entregar cristal, gesto de alegría |
| 33 | Dravok Jr 2 | Aprendiz de metal | Modelo PBR joven, delantal, cabello desordenado, Unreal Engine 5 | Animación de entregar objeto de metal, gesto de orgullo |
| 34 | Veythok Jr 2 | Aprendiz de agua | Modelo PBR joven femenino, túnica azul, cabello mojado, Unreal Engine 5 | Animación de entregar objeto mojado, gesto de alegría |
| 35 | Tharok Jr 2 | Aprendiz de tierra | Modelo PBR joven masculino, ropa de musgo, cabello verde, Unreal Engine 5 | Animación de entregar objeto de tierra, gesto de respeto |
| 36 | Ignark Jr | Aprendiz de fuego | Modelo PBR joven masculino, ropa roja, cabello de fuego, Unreal Engine 5 | Animación de entregar objeto ardiente, gesto de confianza |
| 37 | Lurvot Jr | Aprendiz de sombra | Modelo PBR joven andrógino, capa simple, ojos ocultos, Unreal Engine 5 | Animación de entregar objeto oculto, gesto misterioso |
| 38 | Zornis Jr | Aprendiz de rayo | Modelo PBR joven masculino, ropa negra, cabello de rayos, Unreal Engine 5 | Animación de entregar objeto con chispa, gesto rápido |
| 39 | Krythis Jr | Aprendiz de oscuridad | Modelo PBR joven femenino, ropa negra, cabello oscuro, Unreal Engine 5 | Animación de entregar objeto con sombra, gesto silencioso |
| 40 | Selvak Jr | Aprendiz de viento | Modelo PBR joven masculino, ropa de plumas, cabello blanco, Unreal Engine 5 | Animación de entregar objeto con viento, gesto ligero |

---

## Armas y Equipamiento

Cada arma requiere los mismos 8 assets (Modelo 3D PBR, Albedo, Normal, Roughness, Emissive, Ataque, Icono HUD, Sonido de impacto). Las armas deben ser lo más parecido posible a Monster Hunter.

### Tipos de Armas (10 Categorías, 4 Variantes Cada Una = 40 Armas)

| Categoría | Nombre Ejemplo | Descripción | Prompto Modelo (Ejemplo) |
|-----------|----------------|-------------|--------------------------|
| Espada y Escudo | Escudo de Cristal | Espada corta con escudo de cristal | `Crystal shield sword, crystal blade with crystal shield, high-poly PBR, Unreal Engine 5` |
| Espada Grande | Gran Espada de Obsidiana | Espada grande pesada de obsidiana | `Large obsidian sword, heavy blade, crystal details, high-poly PBR` |
| Lanza | Lanza de Cristal Roto | Larga lanza con punta de cristal | `Crystal lance, long crystal tip, broken crystal details, high-poly PBR` |
| Arco | Arco del Rayo | Arco con detalles eléctricos | `Electric bow, black and silver, lightning details, high-poly PBR` |
| Ballesta | Ballesta de Sombra | Ballesta oscura con detalles de sombra | `Shadow crossbow, black metal, shadow details, high-poly PBR` |
| Hacha | Hacha del Fuego | Hacha con detalles de lava | `Fire axe, magma metal, fire details, high-poly PBR` |
| Cuchillas Duales | Cuchillas del Viento | Dagas dobles con detalles de viento | `Wind dual blades, white silver, feather details, high-poly PBR` |
| Martillo | Martillo de la Tierra | Martillo pesado con detalles de piedra | `Earth hammer, rock metal, moss details, high-poly PBR` |
| Cuerno de Caza | Cuerno del Agua | Cuerno de cristal líquido | `Water hunting horn, crystal liquid, pearl details, high-poly PBR` |
| Insecto Glaive | Glaive de Veneno | Arma aérea con detalles de veneno | `Venom insect glaive, purple black, toxic details, high-poly PBR` |

### Prompts de Ataque y Animación (Ejemplo para Espada Grande)

- Ataque Básico: `Animation reference for large sword basic attack, heavy swing from right to left, slow powerful motion, dust particles, dramatic lighting, dark atmospheric background`
- Ataque Cargado: `Animation reference for large sword charged attack, sword raised high, glowing crystal core, powerful downward strike, shockwave effect, dramatic lighting`
- Ataque Especial: `Animation reference for large sword special attack, crystal explosion from blade, huge shockwave, dramatic slow motion, dark atmosphere with crystal light`

### Prompts de Equipamiento (Ejemplo para Armadura de Cristal)

- Modelo: `Crystal armor set, high-poly PBR, crystal plates with obsidian details, male character, Unreal Engine 5, studio lighting, isolated`
- Albedo: `4K albedo texture for crystal armor, crystal plates with purple veins, obsidian details, 4096x4096`
- Normal: `4K normal map for crystal armor, crystal facets and plate edges, 4096x4096`
- Roughness: `4K roughness metallic texture, crystal low roughness, metal medium roughness, 4096x4096`
- Emissive: `2K emissive texture, glowing crystal veins and core, 2048x2048`

---

## Entornos de Caza

### 1. El Valle de Cristal Roto (Zona de Velthar y Kalthor)
- **Descripción:** Valle cubierto de fragmentos de cristal rotos. Niebla morada constante. El cielo es un cristal roto que refleja luz.
- **Prompts:**
  - Entorno 3D: `Crystal valley environment, broken crystal shards covering ground, purple mist, broken crystal sky, dramatic lighting, high-poly, Unreal Engine 5`
  - Textura Terreno 4K: `4K terrain texture, crystal shards and purple mist ground, rough crystal surface, 4096x4096`
  - Cielo / Atmosfera: `Crystal broken sky environment, purple mist atmosphere, dramatic lighting, Unreal Engine 5`

### 2. La Forja Silenciada (Zona de Ignathar y Raxoth)
- **Descripción:** Volcán dormido con ríos de lava negra. Rocas de obsidiana. Humo negro constante. El aire es caliente y pesado.
- **Prompts:**
  - Entorno 3D: `Volcanic forge environment, black lava rivers, obsidian rocks, black smoke, dramatic lighting, high-poly, Unreal Engine 5`
  - Textura Terreno 4K: `4K terrain texture, black lava and obsidian rocks, rough volcanic surface, 4096x4096`

### 3. El Abismo de Sombra (Zona de Noxar, Lurvath, Krythos)
- **Descripción:** Subterráneo profundo con paredes de sombra sólida. Luz mínima, solo estrellas brillantes en la oscuridad. El silencio es absoluto.
- **Prompts:**
  - Entorno 3D: `Dark abyss environment, solid shadow walls, bright star lights, absolute silence atmosphere, dramatic lighting, high-poly, Unreal Engine 5`
  - Textura Terreno 4K: `4K terrain texture, pure black with star light details, 4096x4096`

### 4. El Bosque de Hielo (Zona de Drakhar, Zyvark)
- **Descripción:** Bosque congelado con árboles de cristal azul. Nieve constante. El viento es silencioso. Cada paso cruje como cristal.
- **Prompts:**
  - Entorno 3D: `Frozen crystal forest environment, blue crystal trees, constant snow, silent wind, dramatic lighting, high-poly, Unreal Engine 5`
  - Textura Terreno 4K: `4K terrain texture, frozen crystal ground with snow, rough crystal surface, 4096x4096`

### 5. El Mar Silenciado (Zona de Vyrath, Veythok)
- **Descripción:** Océano congelado con olas de cristal líquido. El cielo refleja el agua. La luz es líquida y fluida.
- **Prompts:**
  - Entorno 3D: `Silenced ocean environment, frozen crystal liquid waves, liquid light sky, dramatic lighting, high-poly, Unreal Engine 5`
  - Textura Terreno 4K: `4K terrain texture, crystal liquid ground with frozen waves, 4096x4096`

---

## UI / HUD / Interfaz

### Estilo Visual
- **Tema:** Cristal Roto, Oscuridad y Luz. Colores principales: morado, negro, plata, cristal transparente.
- **Tipografía:** Fuentes futuristas con bordes de cristal.
- **Iconos:** Estilo minimalista con bordes brillantes.

### Prompts para UI

- **Fondo de Menú:** `UI background, broken crystal sky, purple mist, dark atmosphere, crystal borders, video game menu style, 4K`
- **Panel de Estadísticas:** `UI stats panel, crystal border design, dark background, purple glow text, minimalist, 4K`
- **Botones:** `UI button, crystal edge design, purple glow on hover, dark background, minimalist, 4K`
- **Mapa de Caza:** `UI hunt map, crystal valley representation, bestia icons, purple mist atmosphere, minimalist, 4K`
- **HUD de Combate:** `UI combat HUD, health bar with crystal design, bestia icon, weapon status, purple and black, minimalist, 4K`
- **Inventario:** `UI inventory screen, crystal grid layout, item icons with crystal borders, dark background, 4K`

---

## Efectos VFX

### Efectos de Ataque (Ejemplos)

| Efecto | Descripción | Prompto |
|--------|-------------|---------|
| Cristal Roto | Explosión de cristales morados | `Crystal explosion VFX, purple crystal shards exploding, light burst, dark background, high quality, Unreal Engine 5` |
| Fuego Silenciado | Llamas negras con humo | `Fire VFX, black flames with smoke, dark atmosphere, high quality, Unreal Engine 5` |
| Sombra Escindida | Disolución en sombras | `Shadow dissolve VFX, dark smoke with purple glow, slow dissolve, high quality, Unreal Engine 5` |
| Hielo Quebrado | Cristales azules estallando | `Ice shatter VFX, blue crystal shards, snow particles, dramatic lighting, high quality, Unreal Engine 5` |

### Efectos de Muerte (Ejemplos)

| Efecto | Descripción | Prompto |
|--------|-------------|---------|
| Muerte de Cristal | Cuerpo de cristal disolviéndose | `Crystal death VFX, crystal body dissolving into light particles, purple glow, slow motion, high quality, Unreal Engine 5` |
| Muerte de Fuego | Fuego apagándose lentamente | `Fire death VFX, flames fading out, smoke rising, dark background, high quality, Unreal Engine 5` |
| Muerte de Sombra | Sombras desvaneciéndose | `Shadow death VFX, body dissolving into dark smoke, stars fading, slow dramatic, high quality, Unreal Engine 5` |

---

## Instrucciones para Generación Externa

1. **Herramientas Recomendadas:**
   - **Modelos 3D y Texturas PBR:** Midjourney (v6), Stable Diffusion 3 (con ControlNet para PBR), Meshy, Tripo3D, Meshy AI.
   - **Texturas PBR HD:** Material Maker, Substance Designer, o generación con IA (Stable Diffusion con prompts específicos para PBR).
   - **Animaciones:** Runway Gen-3, Pika Labs, o referencias visuales para animadores en Blender.

2. **Formato de Entrega:**
   - Modelos: `.glb` / `.fbx` con texturas PBR incrustadas o referenciadas.
   - Texturas: `.png` 4K (4096x4096) para Albedo, Normal, Roughness/Metallic, Emissive.
   - Animaciones: `.fbx` con rig básico o referencias visuales `.mp4` / `.gif`.

3. **Calidad Esperada:**
   - Texturas: 4K para bestias y entornos, 2K para NPCs secundarios.
   - Modelos: High-poly con LOD para juego web (Three.js / Babylon.js).
   - Iluminación: PBR completo con metal/roughness maps.

---

*Documento creado para el desarrollo del juego "Cazador de Bestias: El Silencio de Cristal". Todos los nombres, historias y diseños son originales.*
