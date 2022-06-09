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
    // Código a desarrollar

}


function mostrarSalario(eve, empleado) {
   
}

function bloquear(e, empleado) {
   
}

function seleccionar(e, empleado) {
   
}