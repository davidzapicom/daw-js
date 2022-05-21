var mascotas = [], vacunas = [];


function mascota(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.activo = "Active";
}


function vacuna(nombre, ultimavacuna, ultimafecha) {
    this.nombre = nombre;
    this.ultimavacuna = ultimavacuna;
    this.ultimafecha = ultimafecha;
}


function altas() {
    var nombre = prompt("Nombre:");
    var peso = prompt("Peso:");
    var edad = prompt("Edad:");
    if ((nombre != "") && (nombre != null) && (peso != "") && (peso != null) && (edad != "") && (edad != null)) {
        for(var i = 0; i < mascotas.length; i++) {
            if(mascotas[i].nombre == nombre) {
                return "EXISTE";
            }
        }
        mascotas.push(new mascota(nombre, edad, peso));
        vacunas.push(new vacunas(nombre, "", ""));
    }
    if (mascotas.length == 0) {
        miZona.innerHTML = "No hay ninguna mascota.";
    } else  if (mascotas.length == 1) {
        miZona.innerHTML = "Hay " +mascotas.length+ " mascota.";
    } else {
        miZona.innerHTML = "Hay " +mascotas.length+ " mascotas.";
    }
    console.table(mascotas);
}


function vacunar() {
    miZona.innerHTML = "";
    for (var i = 0; i < vacunas.length; i++) {
        if (mascotas[i].activo == "Active") {
            miZona.innerHTML += "<input type='button' value='Registrar Vacuna' onclick='registrar(" + i + ")' /> " + vacunas[i].nombre + "-" + vacunas[i].ultimavacuna + "-" + vacunas[i].ultimafecha + "<br />";
        }
    }
}


function registrar(animal) {
    var vacuna = prompt("Nombre de la vacuna: ");
    if ((vacuna != "") && (vacuna != null)) {
        vacunas[animal].ultimavacuna = vacuna;
        var f = new Date();
        vacunas[animal].ultimafecha = f.getDate() + "/" + (f.getMonth()+1) + "/" + f.getFullYear();
    }
    console.table(vacunas);
}


function bajas() {
    miZona.innerHTML = "";
    for (var i=0; i<mascotas.length; i++) {
        if (mascotas[i].activo == "Active") {
            miZona.innerHTML += "<input type='button' value='Dar de baja' onclick='darBaja(" + i + ")' /> " + mascotas[i].nombre + "<br />";
        }
    }
    console.table(mascotas);
}


function darBaja(animal) {
    mascotas[animal].activo = "Inactive";
    bajas();
}