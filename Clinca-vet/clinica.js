//* CLINICA JS */
var arrayMascotas = [];
var arrayVacunas = [];


function mascotas(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.activo = "Active";
}


function vacunas(nombre, ultimavacuna, ultimafecha) {
    this.nombre = nombre;
    this.ultimavacuna = ultimavacuna;
    this.ultimafecha = ultimafecha;
}


function altas() {
    var nombre = prompt("Nombre:");
    var peso = prompt("Peso:");
    var edad = prompt("Edad:");
    if ((nombre != "") && (nombre != null) && (peso != "") && (peso != null) && (edad != "") && (edad != null)) {
        for(var i = 0; i < arrayMascotas.length; i++) {
            if(arrayMascotas[i].nombre == nombre) {
                return "EXISTE";
            }
        }
        arrayMascotas.push(new mascotas(nombre, edad, peso));
        arrayVacunas.push(new vacunas(nombre, "", ""));
    }
    if (arrayMascotas.length == 0) {
        miZona.innerHTML = "No hay ninguna mascota.";
    } else  if (arrayMascotas.length == 1) {
        miZona.innerHTML = "Hay " +arrayMascotas.length+ " mascota.";
    } else {
        miZona.innerHTML = "Hay " +arrayMascotas.length+ " mascotas.";
    }
    console.table(arrayMascotas);
}


function vacunar() {
    miZona.innerHTML = "";
    for (var i = 0; i < arrayVacunas.length; i++) {
        if (arrayMascotas[i].activo == "Active") {
            miZona.innerHTML += "<input type='button' value='Registrar Vacuna' onclick='registrar(" + i + ")' /> " + arrayVacunas[i].nombre + "-" + arrayVacunas[i].ultimavacuna + "-" + arrayVacunas[i].ultimafecha + "<br />";
        }
    }
}


function registrar(animal) {
    var vacuna = prompt("Nombre de la vacuna: ");
    if ((vacuna != "") && (vacuna != null)) {
        arrayVacunas[animal].ultimavacuna = vacuna;
        var f = new Date();
        arrayVacunas[animal].ultimafecha = f.getDate() + "/" + (f.getMonth()+1) + "/" + f.getFullYear();
    }
    console.table(arrayVacunas);
}


function bajas() {
    miZona.innerHTML = "";
    for (var i=0; i<arrayMascotas.length; i++) {
        if (arrayMascotas[i].activo == "Active") {
            miZona.innerHTML += "<input type='button' value='Dar de baja' onclick='darBaja(" + i + ")' /> " + arrayMascotas[i].nombre + "<br />";
        }
    }
    console.table(arrayMascotas);
}


function darBaja(animal) {
    arrayMascotas[animal].activo = "Inactive";
    bajas();
}