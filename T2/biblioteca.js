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

Métodos:
Actualización
=============
nuevaPublicacion(isbn, titulo
nuevoEjemplar(signatura, publicacion, ubicacion)
nuevoLector(dni, nombre)
nuevoPrestamo(ejemplar, lector)
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

// const biblioGijon = new Biblioteca("Gijón");  // Creamos un objeto biblioteca en este caso la llamamos Gijón
// let publicacion = biblioGijon.nuevaPublicacion('0131103628','The C Programming Language'); // añadimos una publicación
// publicacion.nuevoAutor(1, 'Briwan W. Kernighan'); // Añadimos un autor a la publicación
// publicacion.nuevoAutor(2, 'Dennis M. Ritchie');   // Añadimos un segundo autor.
// biblioGijon.nuevoEjemplar("C/12", publicacion, "b12-n"); // Añadimos 4 ejemplares de la publicación a la Biblioteca
// biblioGijon.nuevoEjemplar("C/13", publicacion, "b13-n");
// biblioGijon.nuevoEjemplar("C/14", publicacion, "b14-n");
// biblioGijon.nuevoEjemplar("C/15", publicacion, "b15-n");
// publicacion = biblioGijon.nuevaPublicacion('97818479411007',
//                                             'Scrum: The Art of Doing Twice the Work in Half the Time',
//                                              ['Jeff Shuterland']);  // Añadimos una segunda publicación

// biblioGijon.nuevoEjemplar("A/08", publicacion, "a08-x");    // Añadimos 2 ejemplares
// biblioGijon.nuevoEjemplar("C/09", publicacion, "a09-z");
// biblioGijon.listarEjemplares();  // Listamos todos los ejemplares de la biblioteca
// biblioGijon.listarEjemplares(biblioGijon.ejemplaresDisponiblesTitulo('The C Programming Language')); // Listamos los ejemplares disponibles del título
// let ejemplar = biblioGijon.seleccionarEjemplar('C/12'); // Seleccionamos un ejemplar por su signatura
// ejemplar.ficha(); // Mostramos la ficha del ejemplar
// const maria = biblioGijon.nuevoLector("aaaaaaaaa", 'María Garrido'); // Añadimos varios lectores
// const pedro = biblioGijon.nuevoLector("bbbbbbbbb", 'Pedro Pérez');
// const juan = biblioGijon.nuevoLector("ccccccccc", 'Juan Gómez');
// const luisa = biblioGijon.nuevoLector("dddddddd", 'Luisa Fernández');
// biblioGijon.listarLectores();  // Listamos todos los lectores
// biblioGijon.procesaPrestamo('The C Programming Language', maria); // Prestamos 1 libro a la lectora maria
// biblioGijon.listarPrestamos(ejemplar); // listamos los préstamos de un ejemplar (en este caso coincide con el prestado a maria)
// biblioGijon.listarEjemplares(); // Mostramos todos los ejemplares
// biblioGijon.procesaPrestamo('The C Programming Language', juan); // Añadimos más préstamos
// biblioGijon.procesaPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', juan);
// biblioGijon.procesaPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', luisa);
// biblioGijon.procesaPrestamo('Scrum: The Art of Doing Twice the Work in Half the Time', pedro);
// biblioGijon.procesaPrestamo('The C Programming Language', pedro);

// biblioGijon.devuelvePrestamo('C/14'); //Devolvemos préstamos
// biblioGijon.devuelvePrestamo('C/15');

Autores.crearAutor = function() {
    
}

let Lorca = new Autor('ID23','Lorca');

const c = new Publicacion('ISBN52','TheC Programming Language',autores = []);

function Publicacion(isbn,titulo,autor) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autores = autores;
    this.mostrarPublicaciones = function() {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }
}

function Autor(idautor,nombre) {
    this.idautor = idautor;
    this.nombre = nombre;
    this.mostrarAutores = function() {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }
}

function Ejemplar(idautor,nombre) {
    this.idautor = idautor;
    this.nombre = nombre;
    this.mostrarAutores = function() {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }
}