const mascotasOBJ = [
    { nombreMascota: "Lola", nombrePropietario: "Casilda Alarcos González", fechaNacimiento: "2003-08-31T22:00:00.000Z", codigo: "A047", fechaIncorporacion: "2022-02-08T23:00:00.000Z", edad: 12, peso: 11},
    { nombreMascota: "Xixo", nombrePropietario: "Casilda Alarcos González", fechaNacimiento: "2000-12-04T23:00:00.000Z", codigo: "A034", fechaIncorporacion: "2022-01-23T23:00:00.000Z", edad: 1, peso: 1},
    { nombreMascota: "Cohete", nombrePropietario: "Casilda Alarcos González", fechaNacimiento: "1972-12-06T23:00:00.000Z", codigo: "A001", fechaIncorporacion: "2020-12-30T23:00:00.000Z", edad: 42, peso: 42},
]

const cabecera = [
    { elemento: "codigo", etiqueta: "Código" },
    { elemento: "nombreMascota", etiqueta: "Nombre mascota" },
    { elemento: "nombrePropietario", etiqueta: "Nombre propietario" },
    { elemento: "fechaNacimiento", etiqueta: "Fecha de nacimiento" },
    { elemento: "edad", etiqueta: "Edad" },
    { elemento: "peso", etiqueta: "Peso" },
];

const botonera = [
    { accion: 'Vacunar', eventoClick: (e, fila) => vacunar(e, fila) },
    { accion: 'Baja', eventoClick: (e, fila) => baja(e, fila) }
];

const tablaHTML = generarTablaHTML(mascotasOBJ, cabecera, botonera);

document.body.insertAdjacentElement('beforeend', tablaHTML);

function generarTablaHTML(tabla, cabeceras, botones) {
    let tablaHTML = document.createElement('table');

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


function vacunar(eve, mascota) {
    let td = document.createElement('td');
    td.append(mascota.salario);
    eve.target.parentElement.append(td);


}

function baja(e, mascota) {



}