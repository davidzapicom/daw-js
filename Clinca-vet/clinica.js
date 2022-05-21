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


function alta(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var peso = parseInt(document.getElementById("peso").value);

    if ((nombre != "") && (nombre != null) && (edad != "") && (edad != null) && (peso != "") && (peso != null)) {
        for(var i = 0; i < mascotas.length; i++) {
            if(mascotas[i].nombre == nombre) {
                return "Ya existe una mascota con ese nombre";
            }
        }
        mascotas.push(new mascota(nombre, edad, peso));
        vacunas.push(new vacuna(nombre, "", ""));
    } else {
        window.alert("Faltan datos");
        window.location.reload();
    }
    if (mascotas.length == 0) {
        resultado.innerHTML = "No hay ninguna mascota.";
    } else  if (mascotas.length == 1) {
        resultado.innerHTML += "Hay " +mascotas.length+ " mascota.";
    } else {
        resultado.innerHTML = "Hay " +mascotas.length+ " mascotas.";
    }
}


function vacunar() {
    resultado.innerHTML = "";
    formulario.style.display = 'none';
    for (var i = 0; i < vacunas.length; i++) {
        if (mascotas[i].activo == "Active") {
            resultado.innerHTML += "<input type='button' class='vacunar' value='Registrar Vacuna' onclick='registrar(" + i + ")' /> " + vacunas[i].nombre + "-" + vacunas[i].nombreVacuna + "-" + vacunas[i].fechaVacuna + "<br />";
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
    resultado.innerHTML = "";
    for (var i=0; i<mascotas.length; i++) {
        if (mascotas[i].activo == "Active") {
            resultado.innerHTML += "<input type='button' value='Dar de baja' onclick='darBaja(" + i + ")' /> " + mascotas[i].nombre + "<br />";
        }
    }
    console.table(mascotas);
}


function darBaja(animal) {
    mascotas[animal].activo = "Inactive";
    baja();
}