//Constructores
//1. Primera letra en mayúscula
//La invocamos con new

function Coche(matricula,marca,modelo) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.mostrarCoche = function() {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }
}

const cochePaula = new Coche("0000", "Opel", "Meriva");
cochePaula.mostrarCoche();

