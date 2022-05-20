var bicicleta = {
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color
        this.color = nuevo_color;
        console.log(this);
    }
};

console.log(bicicleta);
bicicleta.cambiaColor("azul");
