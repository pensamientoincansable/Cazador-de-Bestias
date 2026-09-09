// Sistema de Combate inspirado en Monster Hunter
// Combate en tiempo real con salud, ataque, defensa, elementos y debilidades

export class SistemaCombate {
  constructor() {
    this.jugador = {
      nombre: "Cazador del Alba",
      salud: 100,
      saludMaxima: 100,
      ataque: 120,
      defensa: 80,
      velocidad: 65,
      arma: "Espada de Cristal",
      elemento: "cristal"
    };

    this.turno = 0;
    this.enCombate = false;
    this.log = [];
  }

  iniciarCombate(bestia) {
    this.enCombate = true;
    this.turno = 0;
    this.log = [`¡Combate iniciado contra ${bestia.nombre}!`, `Nivel: ${bestia.nivel}`, `Tipo: ${bestia.tipo}`];
    return this.log;
  }

  atacar(jugador, bestia, tipoAtaque = "normal") {
    if (!this.enCombate) return ["No hay combate activo."];

    this.turno++;
    const resultados = [];

    // Cálculo de daño base tipo Monster Hunter
    let dañoBase = jugador.ataque - (bestia.defensa * 0.4);
    dañoBase = Math.max(dañoBase, jugador.ataque * 0.1); // Daño mínimo 10%

    // Modificadores de tipo de ataque
    let multiplicador = 1;
    let mensajeAtaque = "";

    switch (tipoAtaque) {
      case "cargado":
        multiplicador = 2.2;
        mensajeAtaque = `${jugador.nombre} carga su ataque con ${jugador.arma}... ¡Golpe devastador!`;
        break;
      case "especial":
        multiplicador = 3.5;
        mensajeAtaque = `${jugador.nombre} desata el poder del Cristal con ${jugador.arma}... ¡Ataque especial!`;
        break;
      case "elemental":
        multiplicador = 1.8;
        mensajeAtaque = `${jugador.nombre} ataca con el poder de ${jugador.elemento}...`;
        // Verificar debilidad
        if (bestia.debilidades.includes(jugador.elemento)) {
          multiplicador *= 1.5;
          mensajeAtaque += ` ¡${bestia.nombre} es débil a ${jugador.elemento}!`;
        }
        break;
      default:
        mensajeAtaque = `${jugador.nombre} ataca con ${jugador.arma}.`;
    }

    // Aplicar daño
    const dañoFinal = Math.round(dañoBase * multiplicador);
    bestia.saludActual = Math.max(0, (bestia.saludActual || bestia.salud) - dañoFinal);

    resultados.push(mensajeAtaque);
    resultados.push(`Daño: ${dañoFinal} (Base: ${Math.round(dañoBase)})`);
    resultados.push(`Salud de ${bestia.nombre}: ${bestia.saludActual}/${bestia.salud}`);

    // Contraataque de la bestia (simulado)
    if (bestia.saludActual > 0 && tipoAtaque !== "especial") {
      const dañoBestia = Math.max(1, Math.round(bestia.ataque - jugador.defensa * 0.5));
      jugador.salud = Math.max(0, jugador.salud - dañoBestia);
      resultados.push(`${bestia.nombre} contraataca con ${bestia.tipo}... ¡Daño recibido: ${dañoBestia}!`);
      resultados.push(`Tu salud: ${jugador.salud}/${jugador.saludMaxima}`);
    }

    // Verificar victoria
    if (bestia.saludActual <= 0) {
      this.enCombate = false;
      resultados.push(`¡VICTORIA! Has derrotado a ${bestia.nombre}!`);
      resultados.push(`Drops obtenidos: ${bestia.drops.join(", ")}`);
    }

    // Verificar derrota
    if (jugador.salud <= 0) {
      this.enCombate = false;
      resultados.push(`¡Derrota! Has sido vencido por ${bestia.nombre}...`);
    }

    this.log = [...this.log, ...resultados];
    return resultados;
  }

  defender(jugador, bestia) {
    if (!this.enCombate) return ["No hay combate activo."];

    this.turno++;
    const resultados = [];
    resultados.push(`${jugador.nombre} se defiende con el escudo...`);
    resultados.push("Defensa aumentada para este turno.");
    jugador.defensa *= 1.5; // Defensa temporal aumentada

    // La bestia ataca pero con daño reducido
    const dañoBestia = Math.max(1, Math.round((bestia.ataque * 0.5) - jugador.defensa * 0.7));
    jugador.salud = Math.max(0, jugador.salud - dañoBestia);
    resultados.push(`${bestia.nombre} ataca pero el escudo reduce el daño... ¡Daño recibido: ${dañoBestia}!`);
    resultados.push(`Tu salud: ${jugador.salud}/${jugador.saludMaxima}`);

    jugador.defensa /= 1.5; // Restaurar defensa
    this.log = [...this.log, ...resultados];
    return resultados;
  }

  usarObjeto(objeto) {
    if (!this.enCombate) return ["No hay combate activo."];

    this.turno++;
    const resultados = [];
    resultados.push(`Has usado ${objeto}.`);

    if (objeto.toLowerCase().includes("poción") || objeto.toLowerCase().includes("curación")) {
      const curacion = 30;
      this.jugador.salud = Math.min(this.jugador.saludMaxima, this.jugador.salud + curacion);
      resultados.push(`Salud restaurada: +${curacion}`);
      resultados.push(`Tu salud: ${this.jugador.salud}/${this.jugador.saludMaxima}`);
    } else if (objeto.toLowerCase().includes("mejora") || objeto.toLowerCase().includes("buff")) {
      this.jugador.ataque *= 1.2;
      resultados.push("Ataque mejorado temporalmente.");
    }

    this.log = [...this.log, ...resultados];
    return resultados;
  }

  obtenerEstado() {
    return {
      jugador: { ...this.jugador },
      turno: this.turno,
      enCombate: this.enCombate,
      log: [...this.log]
    };
  }
}
