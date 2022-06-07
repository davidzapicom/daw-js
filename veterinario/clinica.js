const mascotasOBJ = [
    { nombreMascota: "Lola", nombrePropietario: "Casilda Alarcos González", fechaNacimiento: "2003-08-31", codigo: "A047", edad: 12, peso: 11, ultimaVacuna: 'no registrada' },
    { nombreMascota: "Xixo", nombrePropietario: "Casilda Alarcos González", fechaNacimiento: "2000-12-04", codigo: "A034", edad: 1, peso: 1, ultimaVacuna: 'no registrada' },
    { nombreMascota: "Cohete", nombrePropietario: "Casilda Alarcos González", fechaNacimiento: "1972-12-06", codigo: "A001", edad: 42, peso: 42, ultimaVacuna: 'no registrada' },
]

const cabecera = [
    { elemento: "codigo", etiqueta: "Código" },
    { elemento: "nombreMascota", etiqueta: "Nombre mascota" },
    { elemento: "nombrePropietario", etiqueta: "Nombre propietario" },
    { elemento: "fechaNacimiento", etiqueta: "Fecha de nacimiento" },
    { elemento: "edad", etiqueta: "Edad" },
    { elemento: "peso", etiqueta: "Peso" },
    { elemento: "ultimaVacuna", etiqueta: "Última vacuna" },
];

const botonera = [
    { accion: 'Vacunar', eventoClick: (e, fila) => vacunar(e, fila) },
    { accion: 'Baja', eventoClick: (e, fila) => baja(e, fila) }
];

const tablaHTML = generarTablaHTML(mascotasOBJ, cabecera, botonera);

document.body.insertAdjacentElement('beforeend', tablaHTML);

function generarTablaHTML(tabla, cabeceras, botones) {
    let tablaHTML = document.createElement('table');
    tablaHTML.setAttribute('class', 'table-striped');

    //* Cabecera
    let trcabecera = document.createElement('tr');
    cabeceras.forEach(cabecera => {
        let th = document.createElement('th');
        th.append(cabecera.etiqueta);
        trcabecera.append(th);
    })
    tablaHTML.append(trcabecera);

    //* Contenido
    tabla.forEach(fila => {
        let trfilas = document.createElement('tr');
        cabecera.forEach(cabecera => {
            let td = document.createElement('td');
            td.append(fila[cabecera.elemento]);
            trfilas.append(td);
        })

        fila.botonesHTML = [];
        //* Botones
        let divBotonera = document.createElement('div');
        botones.forEach(boton => {
            let btn = document.createElement('button');
            btn.append(boton.accion);
            btn.addEventListener('click', (e) => {
                boton.eventoClick(e, fila);
            });
            divBotonera.append(btn);
            fila.botonesHTML.push(btn);
        })
        fila.filaElementoHTML = trfilas;
        fila.botoneraHTML = divBotonera;

        trfilas.append(divBotonera);
        tablaHTML.append(trfilas);
    })
    return tablaHTML;
}



function alta() {
    let nombreMascota = prompt('Nombre de la mascota');
    let nombrePropietario = prompt('Nombre del propietario');
    let fechaNacimiento = prompt('Fecha de nacimiento');
    let codigo = prompt('Código');
    let edad = prompt('Edad');
    let peso = prompt('Peso');
    let ultimaVacuna = prompt('Última vacuna');

    let nuevaMascota = {
        nombreMascota: nombreMascota,
        nombrePropietario: nombrePropietario,
        fechaNacimiento: fechaNacimiento,
        codigo: codigo,
        edad: edad,
        peso: peso,
        ultimaVacuna: ultimaVacuna
    }
    mascotasOBJ.push(nuevaMascota);

    tablaHTML.append(nuevaMascota.filaElementoHTML);
}


function vacunar(eve, mascota) {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Nombre vacuna');
    let button = document.createElement('button');
    button.append('Agregar');
    button.addEventListener('click', (e) => {
        let nombreVacuna = input.value;
        mascota.ultimaVacuna = nombreVacuna;

    });
    let td = document.createElement('td');
    td.append(input, button);
    eve.target.parentElement.append(td);


}



function baja(e, mascota) {
    let confirmacion = confirm(`¿Está seguro de eliminar a ${mascota.nombreMascota}?`);
    if (confirmacion) {
        mascota.filaElementoHTML.remove();
        mascota.botoneraHTML.remove();
    }

}




class Clinica {
    constructor(nombre) {
        this.nombre = nombre;
        this.tiposMacotas = [];
        this.mascotas = [];
        document.title = this.nombre;

        //* DIV CONTENEDOR
        this.clinicaHTML = document.createElement('div');
        this.clinicaHTML.setAttribute('id', 'contenedor');

        //* HEADER
        this.headerHTML = document.createElement('header');
        this.headerHTML.setAttribute('id', 'header');
        this.clinicaHTML.append(this.headerHTML);

        //* DIV LOGO
        this.logoHTML = document.createElement('div');
        this.logoHTML.setAttribute('id', 'logo');
        this.headerHTML.append(this.logoHTML);

        //* TITULO
        this.tituloHTML = document.createElement('h1');
        this.tituloHTML.append(`${this.nombre}`);
        this.logoHTML.append(this.tituloHTML);

        //* NAV
        this.navHTML = document.createElement('nav');
        this.navHTML.setAttribute('class', 'links');
        this.navHTML.setAttribute('style', '--items: 1;');
        this.headerHTML.append(this.navHTML);

        this.botonAlta = document.createElement('button');
        this.botonAlta.append('Alta');
        this.botonAlta.onclick = (e) => alta();

        this.navHTML.append(this.botonAlta);


        //* INSERCCION CLINICA EN EL BODY 
        document.body.insertAdjacentElement('afterBegin', this.clinicaHTML);
    }





}


class Mascota {
    constructor(nombreMascota, nombrePropietario, edad, peso) {
        this.nombreMascota = nombreMascota;
        this.nombrePropietario = nombrePropietario;
        this.edad = edad;
        this.peso = peso;
        this.vacunas = [];
        this.activo = "Active";
        this.mascotaHTML = document.createElement('tr');
        this.mascotaHTML.innerHTML = `<td>${this.nombre}</td>`
    }
}


class Vacuna {
    constructor(nombreMascota, nombreVacuna, fechaVacuna) {
        this.nombreMascota = nombreMascota;
        this.nombreVacuna = nombreVacuna;
        this.fechaVacuna = fechaVacuna;
    }
}


let miClinica = new Clinica('Clinica Veterinaria');