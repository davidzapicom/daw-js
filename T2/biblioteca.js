/*
Cada ejemplar tiene una ubicación (por ejemplo, zona, librería, estantería)
Se registran los préstamos de ejemplares de Los lectores.


El objeto Biblioteca mantiene las siguientes colecciones (arrays):
publicaciones => Todas las publicaciones que maneja la biblioteca.
ejemplares => Los ejemplares referenciados catalogados por su signatura
lectores => Los lectores que toman a préstamo los ejemplares de la biblioteca
prestamos => Cada uno de los préstamos realizados por cada lector. 

*/

function Publicacion(isbn, titulo, autores) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autores = autores;
    this.mostrarPublicaciones = function () {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }
}

function Autor(numero, nombre) {
    this.numero = numero;
    this.nombre = nombre;
    this.mostrarAutores = function () {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }
}

function Ejemplar(signatura, publicacion, ubicacion) {
    this.signatura = signatura;    
    this.publicacion = publicacion;
    this.ubicacion = ubicacion;
    this.mostrarEjemplares = function () {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }
}

function Biblioteca(ejemplares, lectores, titulos, prestamos) {
    this.ejemplares = ejemplares;
    this.titulos = titulos;
    this.prestamos = prestamos;
    this.lectores = lectores;

    this.mostrarBiblioteca = function () {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }

    this.nuevaPublicacion = function (isbn, titulo) {
        var titulo = new Publicacion(isbn, titulo);
        titulos.push(titulo);
    }

    this.nuevoEjemplar = function (signatura, publicacion, ubicacion) {
        var ejemplar = new Ejemplar(signatura, publicacion, ubicacion);
        ejemplares.push(ejemplar);
    }

    this.nuevoLector = function (dni, nombre) {
        var lector = new Lector(dni, nombre);
        lectores.push(lector);
    }

    this.nuevoPrestamo = function (ejemplar, lector) {
        var prestamo = new Prestamo(ejemplar, lector);
        prestamos.push(prestamo);
    }

    this.devolverPrestamo = function () {

    }

    this.mostrarLectores = function () {
        for (let atributo in lectores) {
            console.log(`${atributo} => ${lectores[atributo]}`);
        }
    }

    this.mostrarPrestamos = function () {
        for (let atributo in prestamos) {
            console.log(`${atributo} => ${prestamos[atributo]}`);
        }
    }

    function Prestamo(ejemplar,lector,devoluciones) {
        this.ejemplar = ejemplar;
        this.lector = lector;
        this.mostrarPrestamo = function () {
            for (let atributo in this) {
                console.log(`${atributo} => ${this[atributo]}`);
            }
        }
    }

    function Lector(dni,nombre) {
        this.dni = dni;
        this.nombre = nombre;
        this.mostrarLectores = function () {
            for (let atributo in this) {
                console.log(`${atributo} => ${this[atributo]}`);
            }
        }
    }
}

const bibliotecaGijon = new Biblioteca("Gijón");
const bibliotecaAviles = new Biblioteca("Avilés");

bibliotecaGijon.nuevoEjemplar("A/08", publicacion, "a08-x");
bibliotecaGijon.nuevoEjemplar("C/09", publicacion, "a09-z");
bibliotecaGijon.nuevoEjemplar("C/12", publicacion, "b12-n"); 
bibliotecaGijon.nuevoEjemplar("C/13", publicacion, "b13-n");
bibliotecaGijon.nuevoEjemplar("C/14", publicacion, "b14-n");
bibliotecaGijon.nuevoEjemplar("C/15", publicacion, "b15-n");

const maria = new Lector("aaaaaaaaa", 'María Garrido');
const pedro = new Lector("bbbbbbbbb", 'Pedro Pérez');
const juan = new Lector("ccccccccc", 'Juan Gómez');
const luisa = new Lector("dddddddd", 'Luisa Fernández');

publicacion = new Titulos("2549655545", "Don Quijote de la Mancha", "Miguel Cervantes");
publicacion = Biblioteca.nuevaPublicacion('97818479411007','Scrum: The Art of Doing Twice the Work in Half the Time',['Jeff Shuterland']);

let cervantes = new Autor("MC23", "Miguel Cervantes");

Publicacion.nuevoAutor(1, 'Briwan W. Kernighan');
Publicacion.nuevoAutor(2, 'Dennis M. Ritchie');

bibliotecaGijon.nuevoPrestamo('The C Programming Language', maria);
bibliotecaGijon.nuevoPrestamo('The C Programming Language', juan);
bibliotecaGijon.nuevoPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', juan);
bibliotecaGijon.nuevoPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', luisa);
bibliotecaGijon.nuevoPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', pedro);
bibliotecaGijon.nuevoPrestamo('The C Programming Language', pedro);

bibliotecaGijon.devolverPrestamo('C/14');
bibliotecaGijon.devolverPrestamo('C/15');


mostrarPrestamos();

Publicacion.mostrarPublicaciones();
Autor.mostrarAutores();
mostrarEjemplares();
bibliotecaGijon.listarPrestamos(ejemplar);
bibliotecaGijon.listarLectores();
ejemplar.ficha();