const empleadosObj = [
    {
        nombre: "Ander da Silva",
        fechaNacimiento: "2002-08-06T22:00:00.000Z",
        codigo: "A033",
        fechaIncorporacion: "2022-01-23T23:00:00.000Z",
        salario: 16000,
        categoriaProfesional: "A",
        vacacionesPendientes: 24,
        fechaBaja: null,
        historial: [{ operacion: "alta", fecha: "2022-01-23T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }]
    },
    { nombre: "Casilda Alarcos González", fechaNacimiento: "2003-08-31T22:00:00.000Z", codigo: "A047", fechaIncorporacion: "2022-02-08T23:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2022-02-08T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Cristina Torralba Goñi", fechaNacimiento: "2000-12-04T23:00:00.000Z", codigo: "A034", fechaIncorporacion: "2022-01-23T23:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2022-01-23T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Elena Alonso Alonso", fechaNacimiento: "2000-02-04T23:00:00.000Z", codigo: "A028", fechaIncorporacion: "2022-01-18T23:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2022-01-18T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Estefanía Cerdán Suárez", fechaNacimiento: "2000-01-26T23:00:00.000Z", codigo: "A036", fechaIncorporacion: "2022-01-23T23:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2022-01-23T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Evelina Santiago Miras", fechaNacimiento: "2001-06-05T22:00:00.000Z", codigo: "A009", fechaIncorporacion: "2021-06-28T22:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2021-06-28T22:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Felipa Cachón Chacón", fechaNacimiento: "2002-08-07T22:00:00.000Z", codigo: "A043", fechaIncorporacion: "2022-02-08T23:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2022-02-08T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Fermín López Amigo", fechaNacimiento: "2003-09-01T22:00:00.000Z", codigo: "A029", fechaIncorporacion: "2022-01-20T23:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2022-01-20T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Fernando Marrón Fins", fechaNacimiento: "2000-12-05T23:00:00.000Z", codigo: "A010", fechaIncorporacion: "2021-06-28T22:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2021-06-28T22:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Genaro Zanco Suárez", fechaNacimiento: "2000-02-05T23:00:00.000Z", codigo: "A012", fechaIncorporacion: "2021-07-13T22:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2021-07-13T22:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "Gustavo Lucena Martín", fechaNacimiento: "2001-06-06T22:00:00.000Z", codigo: "A038", fechaIncorporacion: "2022-01-29T23:00:00.000Z", salario: 16000, categoriaProfesional: "A", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2022-01-29T23:00:00.000Z", categoriaProfesional: "A", salario: 16000 }] },
    { nombre: "María Rodríguez Pérez", fechaNacimiento: "1972-12-06T23:00:00.000Z", codigo: "A001", fechaIncorporacion: "2020-12-30T23:00:00.000Z", salario: 30000, categoriaProfesional: "D", vacacionesPendientes: 24, fechaBaja: null, historial: [{ operacion: "alta", fecha: "2020-12-30T23:00:00.000Z", categoriaProfesional: "D", salario: 30000 }] }
]

const cabecera = [
    { elemento: "codigo", etiqueta: "Código" },
    { elemento: "nombre", etiqueta: "Nombre" },
    { elemento: "fechaNacimiento", etiqueta: "Fecha de nacimiento" },
    { elemento: "fechaIncorporacion", etiqueta: "Fecha de incorporación" },
    { elemento: "categoriaProfesional", etiqueta: "Categoría" },
    { elemento: "vacacionesPendientes", etiqueta: "Vacaciones" }
];

const botonera = [
    { accion: 'Salario', eventoClick: (e, fila) => mostrarSalario(e, fila) },
    { accion: 'Bloquear', eventoClick: (e, fila) => bloquear(e, fila) },
    { accion: 'Seleccionar', eventoClick: (e, fila) => seleccionar(e, fila) }
];

const tablaHTML = generarTablaHTML(empleadosObj, cabecera, botonera);

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


function mostrarSalario(eve, empleado) {
    let td = document.createElement('td');
    td.append(empleado.salario);
    eve.target.parentElement.append(td);

    let tempo = setTimeout(function () {
        td.remove();
    }, 3000);
}

function bloquear(e, empleado) {
    empleado.botonesHTML.forEach(boton => boton.disabled = true);
    empleado.activo =   false;
}

function seleccionar(e, empleado) {
    empleado.filaElementoHTML.style.backgroundColor = 'red';
}