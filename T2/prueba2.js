//OBJETOS
//Sintáxis literal

let objetos{};

let cochePaula {

}


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

