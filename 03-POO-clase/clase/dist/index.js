"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class POO {
    constructor(_codigo, _nombre, _edad, _laboratorio, _parcial) {
        this.codigo = _codigo;
        this.nombre = _nombre;
        this.edad = _edad;
        this.laboratorio = _laboratorio;
        this.parcial = _parcial;
    }
    mostrarDatos() {
        console.log("El estudiante: " + this.nombre);
        console.log("Codigo: " + this.codigo);
        console.log("tiene las siguientes notas - Laboratorio: "
            + this.laboratorio + " Parcial: " + this.parcial);
    }
}
class Redes {
    constructor(_nombre, _l1, _l2, _l3, _p1, _p2, _p3) {
        this.nombre = _nombre;
        this.l1 = _l1;
        this.l2 = _l2;
        this.l3 = _l3;
        this.p1 = _p1;
        this.p2 = _p2;
        this.p3 = _p3;
    }
    mostrar() {
        let comp1 = ((this.l1 * 0.60) + (this.p1 * 0.40)) / 3;
        let comp2 = ((this.l2 * 0.60) + (this.p2 * 0.40)) / 3;
        let comp3 = ((this.l3 * 0.60) + (this.p3 * 0.40)) / 3;
        let notaF = comp1 + comp2 + comp3;
        console.log("La nota final de " + this.nombre + " es " + notaF);
    }
}
//Objeto Iniciado en POO
let estudiante1 = new POO(`u20250481`, `Hugo Fabrizzio`, 18, 10, 10);
estudiante1.mostrarDatos();
//Objeto inicializado en Redes
let estudiante3 = new Redes("Hugo", 9, 8, 8, 9, 7, 8);
estudiante3.mostrar();
//# sourceMappingURL=index.js.map