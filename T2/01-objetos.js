//OBJETOS
//Sintáxis literal
let objetos = {};

//definicion de los atributos del coche de paula
let cochePaula = {
    marca : "Opel",
    modelo : "Corsa",
    matricula : "U-000-NOSE",
    color : "blanco perlado",
    kilometros : 154256,
    fechaMatriculacion : 2007,
};

console.log(cochePaula.matricula);
cochePaula.combustible = "Gasolina";
cochePaula.caballos = undefined;
console.log(cochePaula.motorizacion); //undefined
console.log(cochePaula.combustible);
console.log(cochePaula.caballos);

//¿Existe la propiedad?
console.log("Caballos " in cochePaula);
console.log("Motorizacion" in cochePaula);

//Añadiendo propiedades con corchetes...
cochePaula["motorizacion"] = "TI 2000CC";

//Propiedades "variables"...
let nuevaPropiedad = "numero de puertas";
cochePaula[nuevaPropiedad] = 5;

//Obtener propiedades de un objeto
for (propiedad in cochePaula) {
    console.log(`propiedad ${propiedad} es: ${cochePaula[propiedad]}`);
}

//Hacer objetos a partir de una función
function nuevoCoche(nombrePropietario, matricula, marca, modelo) {
    return {
        nombrePropietario,
        matricula,
        marca,
        modelo
    };
};

let cocheDani = nuevoCoche("Dani", "O-234-BB", "Seat", "Ibiza");