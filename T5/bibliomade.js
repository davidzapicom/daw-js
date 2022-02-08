function Biblioteca(nombre) {
    this.nombre = nombre;
    this.ejemplares = [];
    this.publicaciones = [];
    this.lectores = [];
    this.prestamos = [];

    this.nuevaPublicacion = function (isbn, titulo) {
        let nuevaPublicacion = new Publicacion (isbn, titulo);
        this.publicaciones.push(nuevaPublicacion);
        console.log('Publicacion ', titulo, ' añadida a la colección.');
        return nuevaPublicacion;
    }

    this.nuevoEjemplar = (signatura, publicacion, ubicacion) => {
        let nuevoEjemplar = new Ejemplar(signatura, publicacion, ubicacion);
        this.ejemplares.push(nuevoEjemplar);
        console.log('Ejemplar ', signatura, ' de ', publicacion.titulo, ' añadido a la biblioteca.');
        return nuevaPublicacion;
    }

}



function Publicacion (isbn, titulo) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autores =  [];
    this.nuevoAutor = (numero, nombre) => {
        let autor = new Autor (numero,nombre);
        this.autores.push(autor);
        console.log('Autor: ', numero, ' ', nombre);
        // console.log(`Autor ${numero}`);
        return autor;
    }
}

// let senor = new Publicacion ('ED22', 'El seño de los anillos');


function Autor (id, nombre) {
    this.id = id;
    this.nombre = nombre;
}

let cervantes = new Autor ('AU1', 'Miguel de Cervantes');




const miBiblioteca = new Biblioteca('David');

let elsda = miBiblioteca.nuevaPublicacion('ED22', 'El seño de los anillos');

elsda.nuevoAutor(1, 'J.R. Tolkien');


miBiblioteca.nuevoEjemplar();