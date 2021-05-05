//Ejercicio 1:

class FiguraGeometrica {
    nombre
    dato1

    constructor(nombre, dato1) {
        this.nombre = nombre
        this.dato1 = dato1
    }

    toString() {
        return this.nombre
    }
}

class PoligonoRegular extends FiguraGeometrica {
    numLados

    constructor(dato1, numLados) {
        var nombre
        if (numLados == 3) {
            nombre = "triángulo"
        }
        else if (numLados == 4) {
            nombre = "cuadrado"
        }
        else if (numLados == 5) {
            nombre = "pentágono"
        }
        else if (numLados == 6) {
            nombre = "hexágono"
        }
        else {
            nombre = "polígono"
        }
        super(nombre, dato1)
        this.numLados = numLados
    }

    toString() {
        if (this.numLados <= 6) {
            return this.nombre + " regular"
        }
        else {
            return this.nombre + " regular de " + this.numLados + " lados"
        }
    }

    calcularPerimetro() {
        return this.numLados * this.dato1
    }

    calcularApotema() {
        return this.dato1 / (2 * Math.tan(Math.PI / this.numLados))
    }

    calcularArea() {
        return (this.calcularPerimetro() * this.calcularApotema()) / 2
    }
}


class Triangulo extends FiguraGeometrica {
    dato2
    dato3

    constructor(dato1, dato2, dato3) {
        super("Triángulo", dato1)
        this.dato1 = dato1
        this.dato2 = dato2
        this.dato3 = dato3
    }

    toString() {
        return this.nombre + " de lados " + this.dato1 + ", " + this.dato2 + " y " + this.dato3
    }

    calcularPerimetro() {

        return this.dato1 + this.dato2 + this.dato3
    }

    calcularArea() {
        var semiperimetro = this.calcularPerimetro() / 2
        var area = Math.sqrt(semiperimetro * (semiperimetro - this.dato1) * (semiperimetro - this.dato2) * (semiperimetro - this.dato3))
        return area
    }
}

class Circulo extends FiguraGeometrica {
    constructor(dato1) {
        super(dato1)
        this.nombre = "Círculo"
        this.dato1 = dato1

    }

    toString() {
        return this.nombre + " de radio " + this.dato1
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.dato1
    }

    calcularArea() {
        return Math.PI * this.dato1 ** 2
    }
}

//Programa prueba ejrcicio 1:
let figura = new FiguraGeometrica("cuadrado", 2)
console.log(figura.toString())

let poligono = new PoligonoRegular(6, 6)
console.log(poligono.toString())
console.log(poligono.calcularPerimetro())
console.log(poligono.calcularApotema())
console.log(poligono.calcularArea())

let triangulo = new Triangulo(2, 3, 4)
console.log(triangulo.toString())
console.log(triangulo.calcularPerimetro())
console.log(triangulo.calcularArea())

let circulo = new Circulo(3)
console.log(circulo.toString())
console.log(circulo.calcularPerimetro())
console.log(circulo.calcularArea())


//Ejercicio 2:

class TrianguloEquilatero extends Triangulo {
    constructor(dato1) {
        super(dato1, dato1, dato1)
        this.nombre = "Triángulo equilátero"
    }
    toString() {
        return this.nombre + " de lado " + this.dato1
    }
}

//Programa prueba ejercicio 2:
let trianguloequilatero = new TrianguloEquilatero(4)
console.log(trianguloequilatero.toString())
console.log(trianguloequilatero.calcularPerimetro())
console.log(trianguloequilatero.calcularArea())


//Ejercicio 3:

class Rectangulo extends FiguraGeometrica {
    dato2
    constructor(dato1, dato2) {
        super(dato1)
        this.dato1 = dato1
        this.dato2 = dato2
        this.nombre = "Rectángulo"
    }
    toString() {
        return this.nombre + " de lados " + this.dato1 + " y " + this.dato2
    }
    calcularPerimetro() {
        return 2 * this.dato1 + 2 * this.dato2
    }
    calcularArea() {
        return this.dato1 * this.dato2
    }

}

//Programa prueba ejercicio 3:
let rectangulo = new Rectangulo(2, 3)
console.log (rectangulo.toString())
console.log(rectangulo.calcularPerimetro())
console.log(rectangulo.calcularArea())