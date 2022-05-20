//clase (molde del objeto)
class Camiseta{
    //propiedades (caracteristicas del objeto)
    private color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //metodos (funciones o acciones que va a hacer el objeto)

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color
    }
}





var camiseta = new Camiseta();

camiseta.setColor("rojo");
camiseta.modelo ="manga larga";
camiseta.marca = "Adidas";
camiseta.talla = "L";
camiseta.precio = 10;

var playera = new Camiseta();

playera.setColor("azul");
playera.modelo ="manga corta";
playera.marca = "Adidas";
playera.talla = "XL";
playera.precio = 5;

console.log(camiseta,playera);