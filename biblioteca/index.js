const biblioteca = [
    { titulo: "Lola", autor: "Casilda Alarcos González", fechaPrestamo: "2003-08-31", isbn: "A047", fechaDevolucion: "2003-08-31", referencia: 33, estado: "Prestado" },
    { titulo: "Xixo", autor: "Casilda Alarcos González", fechaPrestamo: "2000-12-04", isbn: "A034", fechaDevolucion: "2003-08-31", referencia: 52, estado: "Prestado" },
    { titulo: "Cohete", autor: "Casilda Alarcos González", fechaPrestamo: "1972-12-06", isbn: "A001", fechaDevolucion: "2003-08-31", referencia: 12, estado: "Prestado" },
]

const cabecera = [
    { elemento: "titulo", etiqueta: "Titulo" },
    { elemento: "autor", etiqueta: "Autor" },
    { elemento: "isbn", etiqueta: "ISBN" },
    { elemento: "fechaPrestamo", etiqueta: "Fecha de prestamo" },
    { elemento: "fechaDevolucion", etiqueta: "Fecha de devolución" },
    { elemento: "estado", etiqueta: "Estado" },
];

const botonera = [
    {accion: 'Prestar', setAttribute: 'id' ,eventoClick: (e, fila) => prestar(e, fila) },
    {accion: 'Devolver', eventoClick: (e, fila) => devolver(e, fila) },
];


var tablaHTML = undefined;
tablaHTML = listarLibros(biblioteca, cabecera, botonera);
document.body.insertAdjacentElement('beforeend', tablaHTML);

class Libro {
    constructor(titulo, autor, isbn, referencia, fechaPrestamo, fechaDevolucion, usuario) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.referencia = referencia;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.usuario = usuario;
        document.title = 'MI BIBLIOTECA';

        //* DIV CONTENEDOR
        this.bibliotecaHTML = document.createElement('div');
        this.bibliotecaHTML.setAttribute('id', 'contenedor');

        //* HEADER
        this.headerHTML = document.createElement('header');
        this.headerHTML.setAttribute('id', 'header');
        this.bibliotecaHTML.append(this.headerHTML);

        //* DIV LOGO
        this.logoHTML = document.createElement('div');
        this.logoHTML.setAttribute('id', 'logo');
        this.headerHTML.append(this.logoHTML);

        //* TITULO
        this.tituloHTML = document.createElement('h1');
        this.tituloHTML.append(`${document.title}`);
        this.logoHTML.append(this.tituloHTML);

        //* NAV
        this.navHTML = document.createElement('nav');
        this.navHTML.setAttribute('class', 'links');
        this.navHTML.setAttribute('style', '--items: 2;');
        this.headerHTML.append(this.navHTML);

        this.botonAltaLibro = document.createElement('button');
        this.botonAltaLibro.append('Alta libro');
        this.botonAltaLibro.onclick = (e) => nuevoLibro();

        this.botonAltaUsuario = document.createElement('button');
        this.botonAltaUsuario.append('Alta usuario');
        this.botonAltaUsuario.onclick = (e) => nuevoUsuario();

        this.navHTML.append(this.botonAltaLibro, this.botonAltaUsuario);

        //* INSERCCION CLINICA EN EL BODY 
        document.body.insertAdjacentElement('afterBegin', this.bibliotecaHTML);
    }
    prestar() {

    }
    devolver() {

    }
}


class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


function listarLibros(tabla, cabeceras, botones) {
    tablaHTML = document.createElement('table');
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
            // if (fila.estado === 'Prestado') {

            // } else if () {

            // }
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

function nuevoLibro(e) {
    let divContenido = document.createElement('div');
    divContenido.setAttribute('id', 'contenido');
    document.body.append(divContenido);

    let form = document.createElement('form');
    form.setAttribute('id', 'formulario');
    divContenido.append(form);

    let inputTitulo = document.createElement('input');
    inputTitulo.setAttribute('type', 'text');
    inputTitulo.setAttribute('id', 'titulo');
    inputTitulo.setAttribute('placeholder', 'Titulo');
    form.append(inputTitulo);

    let br1 = document.createElement('br');
    form.append(br1);

    let inputAutor = document.createElement('input');
    inputAutor.setAttribute('type', 'text');
    inputAutor.setAttribute('id', 'autor');
    inputAutor.setAttribute('placeholder', 'Autor');
    form.append(inputAutor);

    let br2 = document.createElement('br');
    form.append(br2);

    let inputISBN = document.createElement('input');
    inputISBN.setAttribute('type', 'text');
    inputISBN.setAttribute('id', 'ISBN');
    inputISBN.setAttribute('placeholder', 'ISBN');
    form.append(inputISBN);

    let br3 = document.createElement('br');
    form.append(br3);

    let buttonConfirm = document.createElement('button');
    buttonConfirm.setAttribute('id', 'btn-confirm');
    buttonConfirm.append('Confirmar');

    buttonConfirm.addEventListener('click', (e) => {
        // e.preventDefault();
        // let nombre = document.getElementById('titulo').value;
        // let nombre = document.getElementById('autor').value;
        // let nombre = document.getElementById('isbn').value;
        // let libro = new Libro('titulo', 'autor', 'isbn');
        // biblioteca.push(libro);
        // console.log(biblioteca);
        
    })

    let buttonCancel = document.createElement('button');
    buttonCancel.setAttribute('id', 'btn-cancel');
    buttonCancel.append('Cancelar');
    buttonCancel.onclick = (e) => { divContenido.remove(); }
    form.append(buttonConfirm, buttonCancel);
}

function calcularReferencia() {
        var refAl = Math.ceil(Math.random() * this.personas.length);
        var existe = false;
        for (var i = 0; i < this.numsAl.length; i++) {
            if (this.numsAl[i] == refAl) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            this.numsAl[this.numsAl.length] = refAl;
        }

    this.ol = document.createElement('ol');
    this.resultado.replaceWith(this.ol);
    for (i = 0; i < this.personas.length; i++) {
        this.li = document.createElement('li');

        let persona = this.personasOrdenado[i];
        let element = this.numsAl[i];

        this.li.append(`${persona}. Número aleatorio asignado:  ${element}`);
        liElementoHTML.push(this.li);
        this.ol.append(this.li);
    }
    



}


function nuevoUsuario() {
    let divContenido = document.createElement('div');
    divContenido.setAttribute('id', 'contenido');
    document.body.append(divContenido);

    let form = document.createElement('form');
    form.setAttribute('id', 'formulario');
    divContenido.append(form);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'nombre');
    input.setAttribute('placeholder', 'Nombre');
    form.append(input);

    let buttonConfirm = document.createElement('button');
    buttonConfirm.setAttribute('id', 'btn-confirm');
    buttonConfirm.append('Confirmar');

    buttonConfirm.addEventListener('click', (e) => {
        // e.preventDefault();
        // let nombre = document.getElementById('nombre').value;
        // let usuario = new Usuario(nombre);
        // biblioteca.push(usuario);

    })



    let buttonCancel = document.createElement('button');
    buttonCancel.setAttribute('id', 'btn-cancel');
    buttonCancel.append('Cancelar');
    buttonCancel.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.removeChild(divContenido);
    })
    form.append(buttonConfirm, buttonCancel);
}



let ultLibro = new Libro('Arcangel', 'Jesé', 'A047', '69', '01/01/2022', '01/01/2020', 'Prestado');