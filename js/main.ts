// import {Camiseta} from './camiseta'



class Main{
    constructor(){
        console.log("Aplicación JS cargada");
    }
    getCamiseta(){
        return new Camiseta("amarilla","manga corta","china","M",3);
    }
}

var main = new Main();