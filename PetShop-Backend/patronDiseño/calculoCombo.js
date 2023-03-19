class Mascota {
  constructor(nombre, peso, edad, castrado) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.castrado = castrado;
  }

  calcularCantidadAlimento() {
    // Este método se sobrescribirá en las clases derivadas
  }

  obtenerComplementosDietarios() {
    // Este método se sobrescribirá en las clases derivadas
  }
}


class Gato extends Mascota {
  constructor(nombre, peso, edad, castrado) {
    super(nombre, peso, edad, castrado);
  }

  calcularCantidadAlimento() {
    return Math.ceil(this.peso * 0.5);;
  }

  obtenerComplementosDietarios() {
    let complementos = [];

    if (this.edad > 5) {
      complementos.push(1);
    }

    if (this.castrado) {
      complementos.push(1);
    }

    const suma = complementos.reduce((total, actual) => total + actual, 0);
    return suma;
  }
}

class Perro extends Mascota {
  constructor(nombre, peso, edad, castrado) {
    super(nombre, peso, edad, castrado);
  }

  calcularCantidadAlimento() {
    return Math.ceil(this.peso * 0.8);;
  }

  obtenerComplementosDietarios() {
    let complementos = [];

    complementos.push(parseInt(`${Math.floor(this.edad / 3)}`));

    if (this.castrado && this.edad > 5) {
      complementos.push(1);
    }
    const suma = complementos.reduce((total, actual) => total + actual, 0);
    return suma;
  }
}


export { Gato, Perro };

// const miGato = new Gato('Mittens', 4.5, 7, true);
// const cantidadAlimentoGato = miGato.calcularCantidadAlimento();
// const complementosDietariosGato = miGato.obtenerComplementosDietarios();
// const miPerro = new Perro('Dogi', 15, 9, true);
// const cantidadAlimentoPerro = miPerro.calcularCantidadAlimento();
// const complementosDietariosPerro = miPerro.obtenerComplementosDietarios();

// console.log(`Tu gato ${miGato.nombre} necesita ${cantidadAlimentoGato} Kg de comida y ${complementosDietariosGato} complementos dietarios`);
// console.log(`Tu perro ${miPerro.nombre} necesita ${cantidadAlimentoPerro} Kg de comida y ${complementosDietariosPerro} complementos dietarios`);