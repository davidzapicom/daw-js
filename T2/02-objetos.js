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