var mascotas = [], vacunas = [];


function mascota(nombre, edad, peso) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.activo = "Active";
}


function vacuna(nombre, nombreVacuna, fechaVacuna) {
    this.nombre = nombre;
    this.nombreVacuna = nombreVacuna;
    this.fechaVacuna = fechaVacuna;
}


function alta() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var peso = parseInt(document.getElementById("peso").value);

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
            miZona.innerHTML += "<input type='button' class='vacunar' value='Registrar Vacuna' onclick='registrar(" + i + ")' /> " + vacunas[i].nombre + "-" + vacunas[i].nombreVacuna + "-" + vacunas[i].fechaVacuna + "<br />";
        }
    }
}


function registrar(animal) {
    var vacuna = prompt("Nombre de la vacuna: ");
    if ((vacuna != "") && (vacuna != null)) {
        vacunas[animal].nombreVacuna = vacuna;
        var f = new Date();
        vacunas[animal].fechaVacuna = f.getDate() + "/" + (f.getMonth()+1) + "/" + f.getFullYear();
    }
    console.table(vacunas);
}


function baja() {
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
    baja();
}