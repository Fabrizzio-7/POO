/* class Estudiante{
    public nombre:string;
    public apellido:string;
    public correo:String;
    public telefono:number;
    private codIdentificacion:string;

    constructor(nombre:string, apellido:string, correo:string, telefono:number, codIdentificacion:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.correo=correo;
        this.telefono=telefono;
        this.codIdentificacion=codIdentificacion;
    }

}
let Est1 = new Estudiante("Hugo","Gomez","fab7@gmail.com",39479374,"U0481");
console.log(Est1) */

//Ejercicio2
/* class productos{
    producto:string;
    codigo:string;
    precio:number;
    iva: number;

    constructor(producto:string, codigo:string, precio:number, iva:number){
        this.producto=producto;
        this.codigo=codigo;
        this.precio=precio;
        this.iva=iva;
    }
        cobro(canProduct:number, descuento:number):void{
            let porDesc = (this.precio*(descuento/100))* canProduct ;
            let PIva = (this.iva / 100) * this.precio ;

            console.log("Cantidad de producto: " + canProduct);
            console.log("Precio: $"+ this.precio);
            console.log("Descuento: $"+ porDesc);
            console.log("Iva: $"+ PIva)
            console.log("Total a  pagar: $"+ ((this.precio*canProduct)-porDesc+PIva))
        }
}
let producto = new productos("Laptop",'NEP0L4',399,7);
console.log(producto.cobro(3,30)) */

//Ejercico3

class Persona {
    nombre: string;
    fechaNacimiento: Date;

    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }

    calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    obtenerEstado(): string {
        const edad = this.calcularEdad();
        if (edad >= 0 && edad <= 2) {
            return "bebé";
        } else if (edad > 2 && edad <= 10) {
            return "niño/niña";
        } else if (edad > 10 && edad <= 14) {
            return "pre adolescente";
        } else if (edad > 14 && edad < 18) {
            return "adolescente";
        } else if (edad >= 18 && edad < 30) {
            return "joven";
        } else if (edad >= 30 && edad < 50) {
            return "adulto";
        } else if (edad >= 50) {
            return "adulto mayor";
        } else {
            return "Edad no válida";
        }
    }

}
let cris = new Persona("cristian", new Date(1978, 10, 23));

