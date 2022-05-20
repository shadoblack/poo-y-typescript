//clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //metodos (funciones o acciones que va a hacer el objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("rojo");
camiseta.modelo = "manga larga";
camiseta.marca = "Adidas";
camiseta.talla = "L";
camiseta.precio = 10;
var playera = new Camiseta();
playera.setColor("azul");
playera.modelo = "manga corta";
playera.marca = "Adidas";
playera.talla = "XL";
playera.precio = 5;
console.log(camiseta, playera);
