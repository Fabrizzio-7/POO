"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Ejercicio 1
class Estudiante {
    constructor(nombre, apellido, correo, telefono, codIdentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.codIdentificacion = codIdentificacion;
    }
}
let Est1 = new Estudiante("Hugo", "Gomez", "fab7@gmail.com", 39479374, "U0481");
console.log(Est1);
//Ejercicio2
class productos {
    constructor(producto, codigo, precio, iva) {
        this.producto = producto;
        this.codigo = codigo;
        this.precio = precio;
        this.iva = iva;
    }
    cobro(canProduct, descuento) {
        let porDesc = (this.precio * (descuento / 100)) * canProduct;
        let PIva = (this.iva / 100) * this.precio;
        console.log("Cantidad de producto: " + canProduct);
        console.log("Precio: $" + this.precio);
        console.log("Descuento: $" + porDesc);
        console.log("Iva: $" + PIva);
        console.log("Total a  pagar: $" + ((this.precio * canProduct) - porDesc + PIva));
    }
}
let producto = new productos("Laptop", 'NEP0L4', 399, 7);
console.log(producto.cobro(3, 30));
//# sourceMappingURL=Index.js.map