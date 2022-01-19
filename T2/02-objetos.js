let cochePaula = {
    marca : "Opel",
    modelo : "Corsa",
    matricula : "U-000-NOSE",
    color : "blanco perlado",
    kilometros : 154256,
    fechaMatriculacion : 2007,
};


//Copiar objeto
let cocheNuria = cochePaula;
cocheNuria.color = "plata";
console.log("Color coche de Nuria ", cocheNuria.color);
console.log("Color coche de Paula ", cochePaula.color);

let array1 = [2,3,4];
let array2 = array1;

array2[2] = 10;
console.log(array1[2]);

console.log(cocheNuria === cochePaula);

cocheNuria = {};

for (propiedad in cochePaula) {
    cocheNuria[propiedad] = cochePaula[propiedad];
}

//Utilizando el método assign para copiar propiedades
Object.assign(cocheNuria, cochePaula);

//Creamos un motor
let motorOpelCorsa2000 = {
    combustible : 'Gasolina',
    centimetrosCubicos : 2000,
    cilindros : 4,
    turbo : false,
};

cochePaula.motor = motorOpelCorsa2000;
let cocheVictor = {};
//El metodo no copialos datos de los objetos incluidos
Object.assign(cocheVictor, cochePaula);

cocheVictor.motor.centimetrosCubicos = 3000;
cocheVictor.motor.turbo = true;
cocheVictor.color = 'negro';

//Método para mostrar coche
cochePaula.mostrarCoche = function() { 
    for (propiedad in this) {
        console.log(this[propiedad]);
    }
}

//Método para actualizar km
cochePaula.actualizarKm = function(nuevoKilometraje) {
    this.kilometros = nuevoKilometraje;
}

cochePaula.mostrarCoche();
cocheSara.actualizarKm(90000);
let cocheSara = {};

Object.assign(cocheSara,cochePaula);

cocheSara.color = 'Rojo';
cocheSara.mostrarCoche();