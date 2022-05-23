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
    resultado.innerHTML = "";
    anotacion.innerHTML = "";
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var peso = parseInt(document.getElementById("peso").value);

    if ((nombre != "") && (nombre != null) && (edad != "") && (edad != null) && (peso != "") && (peso != null)) {
        for (var i = 0; i < mascotas.length; i++) {
            if (mascotas[i].nombre == nombre) {
                resultado.innerHTML = `Ya existe una mascota con el nombre ${nombre} .`;
                var existe = true;
            }
        }
        if (!existe) {
            mascotas.push(new mascota(nombre, edad, peso));
            vacunas.push(new vacuna(nombre, "", ""));
            resultado.innerHTML = `Mascota ${nombre} dada de alta.`;
        }

        if (mascotas.length == 0) {
            anotacion.innerHTML = `No hay ninguna mascota.`;
        } else if (mascotas.length == 1) {
            anotacion.innerHTML = `Hay ${mascotas.length} mascota.`;
        } else {
            anotacion.innerHTML = `Hay ${mascotas.length} mascotas.`;
        }
        document.getElementById('form_alta').reset();
        form_alta.style.display = 'none';
    } else {
        window.alert("Faltan datos");
        window.location.reload();
    }
}


function vacunar() {
    resultado.innerHTML = "";
    anotacion.innerHTML = "";
    if (mascotas.length == 0) {
        resultado.innerHTML = `No hay ninguna mascota.`;
    } else {
        for (var i = 0; i < vacunas.length; i++) {
            if (mascotas[i].activo == "Active") {
                resultado.innerHTML += "<div class='cap'><input type='button' class='vacunar' value='Vacunar' onclick='registrarVacuna(" + i + ")' />" + vacunas[i].nombre + "</div><br />";
            }
        }
    }
}


function registrarVacuna(animal, event) {
    form_vacunar.style.display = 'block';
    event.preventDefault();
    var vacuna = document.getElementById("vacuna").value;



    if ((vacuna != "") && (vacuna != null)) {
        vacunas[animal].nombreVacuna = vacuna;
        var f = new Date();
        vacunas[animal].fechaVacuna = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
        anotacion.innerHTML = `vacunas[i].nombre + "-" + vacunas[i].nombreVacuna + "-" + vacunas[i].fechaVacuna`;
    } else {
        alert("Faltan datos");
        window.location.reload();
    }
}


function baja() {
    resultado.innerHTML = "";
    anotacion.innerHTML = "";
    if (mascotas.length == 0) {
        resultado.innerHTML = `No hay ninguna mascota.`;
    } else {
        for (var i = 0; i < mascotas.length; i++) {
            if (mascotas[i].activo == "Active") {
                resultado.innerHTML += "<div class='cap'><button class='baja tooltip' value='Dar de baja' onclick='darBaja(" + i + ")'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' height='25' width='25'><path fill='#6361D9' d='M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z' clip-rule='evenodd' fill-rule='evenodd'></path></svg><span class='tooltiptext'>Eliminar</span></button>" + mascotas[i].nombre + "</div><br />";
            }
        }
    }
}


function darBaja(animal) {
    mascotas[animal].activo = "Inactive";
    baja();
}



function listar() {
    resultado.innerHTML = "";
    anotacion.innerHTML = "";
    if (mascotas.length == 0) {
        anotacion.innerHTML = `No hay ninguna mascota.`;
    } else {
       //! anotacion.innerHTML = `Hay alguna mascota.`;
    }
}