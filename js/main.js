// import {Camiseta} from './camiseta'
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("amarilla", "manga corta", "china", "M", 3);
    };
    return Main;
}());
var main = new Main();
