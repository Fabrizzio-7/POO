class POO {
    codigo:string;
    nombre:string;
    edad:number;
    laboratorio:number;
    parcial:number;

constructor(_codigo:string,_nombre:string,_edad:number,_laboratorio:number,_parcial:number ){
    this.codigo=_codigo;
    this.nombre=_nombre;
    this.edad=_edad;
    this.laboratorio=_laboratorio;
    this.parcial=_parcial;
}
public mostrarDatos(): void{
    console.log("El estudiante: "+this.nombre)
    console.log("Codigo: "+this.codigo)
    console.log("tiene las siguientes notas - Laboratorio: "
        +this.laboratorio+" Parcial: "+this.parcial);
}
}

class Redes{
    nombre:string;
    l1:number;
    l2:number;
    l3:number;
    p1:number;
    p2:number;
    p3:number;

constructor(_nombre:string,_l1:number,_l2:number,_l3:number,_p1:number,_p2:number,_p3:number){
    this.nombre=_nombre;
    this.l1=_l1;
    this.l2=_l2;
    this.l3=_l3;
    this.p1=_p1;
    this.p2=_p2;
    this.p3=_p3;
}
public mostrar (): void{
    let comp1=((this.l1*0.60)+(this.p1*0.40))/3;
    let comp2=((this.l2*0.60)+(this.p2*0.40))/3;
    let comp3=((this.l3*0.60)+(this.p3*0.40))/3;
    let notaF=comp1+comp2+comp3;
    
    console.log("La nota final de "+this.nombre+" es "+notaF)
}
}

//Objeto Iniciado en POO
let estudiante1 = new POO(`u20250481`,`Hugo Fabrizzio`, 10,10,10);
estudiante1.mostrarDatos();

//Objeto inicializado en Redes
let estudiante3 = new Redes("Hugo", 9, 8, 8, 9, 7, 8)