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
console.log(camiseta);
