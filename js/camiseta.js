var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //constructor(forma parte de funciones)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    ;
    //metodos (funciones o acciones que va a hacer el objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
;
var camiseta = new Camiseta("rojo", "manga larga", "adidas", "L", 10);
// camiseta.setColor("rojo");
// camiseta.modelo = "manga larga";
// camiseta.marca = "Adidas";
// camiseta.talla = "L";
// camiseta.precio = 10;
// var playera = new Camiseta();
// playera.setColor("azul");
// playera.modelo = "manga corta";
// playera.marca = "Adidas";
// playera.talla = "XL";
// playera.precio = 5;
// console.log(camiseta);
console.log(camiseta);
//Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera("rojo", "manga larga", "nike", "L", 80);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("negra");
console.log(sudadera_nike);
