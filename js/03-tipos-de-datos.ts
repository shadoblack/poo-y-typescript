


// string
let cadena: string = "Edgar Rodriguez";

//number
let numero: number = 24;

//boolean

let verdadero_falso: boolean = true;

//any

let cualquiera: any = "hola";
let cualquiera1: any = 23;
let cualquiera2: any = true;

//arrays

var lenguajes: Array<string> = ["PHP","JS","CSS"];

let years: number[] = [1,2,3,4,5,6];

//multiples tipos de datos en la misma variable,usar pipe

let prueba : string | number = 12

//otra forma de hacerlo
type letrasonumeros = string | number;

let prueba2 : letrasonumeros = 23;

//let vs var
//let actua a nivel de bloque, var a nivel general.
var numero1 = 10;
var numero2 = 12;
if(numero1 == 10){
    let numero1 = 44;//este solo cambiaria mientras esta dentro del bloque,al salir del bloque,sera numero1 con el var.
    var numero2 = 55;//este cambiaria el numero2 que esta fuera
}


console.log(cadena,numero,verdadero_falso,cualquiera,cualquiera1,cualquiera2,lenguajes,years);


