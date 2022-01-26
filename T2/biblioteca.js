/* Modelo de Biblioteca .
Una Biblioteca contiene una colección de ejemplares (libros):
1. Cada ejemplar tiene una signatura en la biblioteca que permite su identificación
2. Cada ejemplar tiene una ubicación (por ejemplo, zona, librería, estantería)
3. Cada ejemplar es de una Publicación.
4. Cada Publicación tiene un código ISBN, un título y un conjunto de autores (1 ó más).
5. Los autores de identifican por un número y un nombre.
6. La Biblioteca tiene un conjunto de Lectores, que identificamos por DNI y nombre.
7. Se registran los préstamos de ejemplares de Los lectores.
8. Se registran las devoluciones de los préstamos.

Objetos
Biblioteca
Publicaciones
Autores
Ejemplares
Lectores
Préstamos
El objeto Biblioteca mantiene las siguientes colecciones (arrays):
publicaciones => Todas las publicaciones que maneja la biblioteca.
ejemplares => Los ejemplares referenciados catalogados por su signatura
lectores => Los lectores que toman a préstamo los ejemplares de la biblioteca
prestamos => Cada uno de los préstamos realizados por cada lector.


Métodos: Actualización
=============

procesaPrestamo(ejemplar, lector) => busca si el ejemplar está disponible y si lo está ejecuta nuevoPrestamo
devuelvePrestamo(signatura) => procesa la devolución del ejemplar.
Consultas y listados
====================
ejemplaresTitulo(titulo) => devuelve array con todos los ejemplares correspondiente al título de la publicación
ejemplaresDisponiblesTitulo(titulo) => igual que el anterior, pero devuelve sólo los disponibles.
seleccionarEjemplar(signatura) => devuelve el ejemplar correspondiente a la signatura
listarEjemplares(coleccion o array) => lista todos los ejemplares del array por consola, por defecto, todos los ejemplares de la biblioteca.
listarLectores => lista por consola todos los lectores de la bibilioteca.
listarPrestamos(ejemplar) => lista por consola todos los préstamos de un ejemplar
El objeto Ejemplar, tiene el método  Ficha() que muestra por consola la ficha del mismo.
El objeto Publicación, mantiene un array con los autores de cada publicación
*/

// Ejemplo de uso:
/*  // Creamos un objeto biblioteca en este caso la llamamos Gijón
let publicacion = biblioGijon.nuevaPublicacion('0131103628', 'The C Programming Language'); // añadimos una publicación
publicacion.nuevoAutor(1, 'Briwan W. Kernighan'); // Añadimos un autor a la publicación
publicacion.nuevoAutor(2, 'Dennis M. Ritchie');   // Añadimos un segundo autor.



biblioGijon.listarEjemplares();  // Listamos todos los ejemplares de la biblioteca
biblioGijon.listarEjemplares(biblioGijon.ejemplaresDisponiblesTitulo('The C Programming Language')); // Listamos los ejemplares disponibles del título
let ejemplar = biblioGijon.seleccionarEjemplar('C/12'); // Seleccionamos un ejemplar por su signatura
ejemplar.ficha(); // Mostramos la ficha del ejemplar
biblioGijon.listarLectores();  // Listamos todos los lectores
biblioGijon.procesaPrestamo('The C Programming Language', maria); // Prestamos 1 libro a la lectora maria
biblioGijon.listarPrestamos(ejemplar); // listamos los préstamos de un ejemplar (en este caso coincide con el prestado a maria)

biblioGijon.procesaPrestamo('The C Programming Language', juan); // Añadimos más préstamos
biblioGijon.procesaPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', juan);
biblioGijon.procesaPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', luisa);
biblioGijon.procesaPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', pedro);
biblioGijon.procesaPrestamo('The C Programming Language', pedro);
biblioGijon.devuelvePrestamo('C/14'); //Devolvemos préstamos
biblioGijon.devuelvePrestamo('C/15');
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

    function Prestamo(ejemplar,lector) {
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

const biblioGijon = new Biblioteca("Gijón");

Biblioteca.nuevoEjemplar("A/08", publicacion, "a08-x");
Biblioteca.nuevoEjemplar("C/09", publicacion, "a09-z");
Biblioteca.nuevoEjemplar("C/12", publicacion, "b12-n"); 
Biblioteca.nuevoEjemplar("C/13", publicacion, "b13-n");
Biblioteca.nuevoEjemplar("C/14", publicacion, "b14-n");
Biblioteca.nuevoEjemplar("C/15", publicacion, "b15-n");

const maria = new Lector("aaaaaaaaa", 'María Garrido');
const pedro = new Lector("bbbbbbbbb", 'Pedro Pérez');
const juan = new Lector("ccccccccc", 'Juan Gómez');
const luisa = new Lector("dddddddd", 'Luisa Fernández');

let publicacion = new Titulos("2549655545", "Don Quijote de la Mancha", "Miguel Cervantes");
publicacion = Biblioteca.nuevaPublicacion('97818479411007','Scrum: The Art of Doing Twice the Work in Half the Time',['Jeff Shuterland']);


let autor = new Autores("MC23", "Miguel Cervantes");

publicacion.mostrarPublicaciones();
autor.mostrarAutores();
Ejemplar.mostrarEjemplares();