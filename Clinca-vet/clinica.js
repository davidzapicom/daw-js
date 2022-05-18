var arrayMascotas = [];
var arrayVacunas = [];

function mascotas(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.activo = "S";
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
        for (var i = 0; i < arrayMascotas.length; i++)
            if (arrayMascotas[i].nombre == nombre)
                return "EXISTE";
        arrayMascotas.push(new mascotas(nombre, edad, peso));
        arrayVacunas.push(new vacunas(nombre, "", ""));
    }
    miZona.innerHTML = "Hay " + arrayMascotas.length + " mascotas";
    console.table(arrayMascotas);
}


function vacunar() {
    miZona.innerHTML = "";
    for (var i = 0; i < arrayVacunas.length; i++)
        if (arrayMascotas[i].activo == "S")
            miZona.innerHTML += "<input type='button' value='Registrar Vacuna' onclick='registrar(" + i + ")' /> " + arrayVacunas[i].nombre + "-" + arrayVacunas[i].ultimafecha + "<br />";
}


function registrar(quien) {
    var queVacuna = prompt("Nombre de la vacuna: ");
    if ((queVacuna != "") && (queVacuna != null)) {
        arrayVacunas[quien].ultimavacuna = queVacuna;
        var f = new Date();
        arrayVacunas[quien].ultimafecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    }
    console.table(arrayVacunas);
}


function bajas() {
    miZona.innerHTML = "";
    for (var i = 0; i < arrayMascotas.length; i++)
        if (arrayMascotas[i].activo == "S")
            miZona.innerHTML += "<input type='button' value='Dar de baja' onclick='darBaja(" + i + ")' /> " + arrayMascotas[i].nombre + "<br />";
    console.table(arrayMascotas);
}


function darBaja(quien) {
    arrayMascotas[quien].activo = "N";
    bajas();
}