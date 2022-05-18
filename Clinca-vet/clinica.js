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
        for (var i = 0; i < arrayMascotas.length; i++)
            if (arrayMascotas[i].nombre == nombre)
                return "EXISTE";
        arrayMascotas.push(new mascotas(nombre, edad, peso));
        arrayVacunas.push(new vacunas(nombre, "", ""));
    }
    if (arrayMascotas.length == 0) {
        miZona.innerHTML = "No hay ninguna mascota.";
    } else  if (arrayMascotas.length == 1) {
        miZona.innerHTML = "Hay " + arrayMascotas.length + " mascota.";
    } else {
        miZona.innerHTML = "Hay " + arrayMascotas.length + " mascotas.";
    }
    console.table(arrayMascotas);
}


function vacunar() {
    miZona.innerHTML = "";
    for (var i = 0; i < arrayVacunas.length; i++)
        if (arrayMascotas[i].activo == "Active")
            miZona.innerHTML += "<br> <button type='submit' class='cssbuttons-io-button' value='Registrar Vacuna' onclick='registrar(" + i + ")'>Registrar vacuna<div class='icon'><svg height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M0 0h24v24H0z' fill='none'></path><path d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z' fill='currentColor'></path></svg></div></button>" + arrayVacunas[i].nombre + "-" + arrayVacunas[i].ultimafecha + "<br />";
}


function registrar(quien) {
    var queVacuna = prompt("Vçacuna: ");
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
        if (arrayMascotas[i].activo == "Active")
            miZona.innerHTML += "<input type='button' value='Dar de baja' onclick='darBaja(" + i + ")' /> " + arrayMascotas[i].nombre + "<br />";
    console.table(arrayMascotas);
}


function darBaja(quien) {
    arrayMascotas[quien].activo = "Inactive";
    bajas();
}