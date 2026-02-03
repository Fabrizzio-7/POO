"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GYM {
    constructor(peso, estatura) {
        this.peso = peso;
        this.estatura = estatura;
    }
    IMC() {
        let estado;
        let imc = (this.peso / (this.estatura * this.estatura));
        if (imc < 18.5) {
            estado = "Bajo peso";
        }
        else if (imc >= 18.5 && imc < 24.9) {
            estado = "Normal";
        }
        else if (imc > 25 && imc <= 29.9) {
            estado = "sobre peso";
        }
        else if (imc >= 30) {
            estado = "Obesidad";
        }
        console.log("El IMC es de: " + imc + " y su estado es: " + estado);
    }
}
let miembro = new GYM(70, 175);
console.log(miembro.IMC);
//# sourceMappingURL=ejer1.js.map