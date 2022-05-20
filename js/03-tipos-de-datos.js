// string
var cadena = "Edgar Rodriguez";
//number
var numero = 24;
//boolean
var verdadero_falso = true;
//any
var cualquiera = "hola";
var cualquiera1 = 23;
var cualquiera2 = true;
//arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [1, 2, 3, 4, 5, 6];
//multiples tipos de datos en la misma variable,usar pipe
var prueba = 12;
var prueba2 = 23;
//let vs var
//let actua a nivel de bloque, var a nivel general.
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44; //este solo cambiaria mientras esta dentro del bloque,al salir del bloque,sera numero1 con el var.
    var numero2 = 55; //este cambiaria el numero2 que esta fuera
}
console.log(cadena, numero, verdadero_falso, cualquiera, cualquiera1, cualquiera2, lenguajes, years);
