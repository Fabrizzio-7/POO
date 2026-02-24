//Ejercicio Practico 1
/* import * as readline from "readline";
class Programa {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirNota();
    }
    pedirNota(): void {
        this.rl.question("Ingrese la nota: ", (respuesta:string) => {
            const nota = respuesta
            this.evaluarNota(nota);
            this.cerrar();
        });
    }
    evaluarNota(numero: string): void {
        if (parseFloat(numero)>= 9 && parseFloat(numero) <= 10) {
            console.log("Exelente ");
        } else if (parseFloat(numero) >= 7 && parseFloat(numero) <= 8.9) {
            console.log("Bueno");
        } else if (parseFloat(numero)>= 6 && parseFloat(numero) <= 6.9) {
            console.log("Regular");
        } else if (parseFloat(numero) >= 0 && parseFloat(numero) < 6) {
            console.log("Reprobad@")
        } else {
            console.log("Nota no valida, Intentalo de nuevo");
            
        }
    }
    cerrar(): void {
        this.rl.close();
    }
}
const app = new Programa();
app.iniciar(); */

//Ejercicio Practico 2

import * as readline from "readline";
class Programa {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirUserAndpsw();
    }
   pedirUserAndpsw(): void {
        this.rl.question("Ingrese su usuario ", (usuario :string) => {
            this.rl.question("Ingrese su contraseña", (contraseña : string) =>{
            const user = usuario
            this.evaluarUser(user);
            this.cerrar();
        });
    });
    }
    evaluarUser(numero: string): void {
        if (parseFloat(numero)>= 9 && parseFloat(numero) <= 10) {
            console.log("Exelente ");
        } else if (parseFloat(numero) >= 7 && parseFloat(numero) <= 8.9) {
            console.log("Bueno");
        } else if (parseFloat(numero)>= 6 && parseFloat(numero) <= 6.9) {
            console.log("Regular");
        } else if (parseFloat(numero) >= 0 && parseFloat(numero) < 6) {
            console.log("Reprobad@")
        } else {
            console.log("Nota no valida, Intentalo de nuevo");
            
        }
    }
    cerrar(): void {
        this.rl.close();
    }
}
const app = new Programa();
app.iniciar();
