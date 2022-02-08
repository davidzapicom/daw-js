function Publicacion(isbn, titulo, autores = []) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autores = autores;
    // this.nuevoAutor = (numero, nombre) => this.autores.push(new Autor(numero, nombre));
    this.nuevoAutor = function(numero, nombre) {
        let autor = new Autor(numero, nombre)
        this.autores.push(autor);
    }
    this.ficha = function() {
        console.log("ISBN: ", this.isbn);
        console.log("Título: ", this.titulo);
        console.log("Autores");
        this.autores.forEach(elem => console.log(elem.nombre));
    } 


    this.nuevoEjemplar = function() {
        this.ejemplares.push(ejemplar);
    } 

    this.mostrarPublicaciones = function () {
        for (let atributo in this) {
            console.log(`${atributo} => ${this[atributo]}`);
        }
    }


}


function Autor(numero, nombre) {
    this.numero = numero;
    this.nombre = nombre;
}


let brian = new Autor(1, 'Brian W. Kernighan');
let denis = new Autor(2, 'Dennis M. Ritchie');
let jeff = new Autor(3, 'Jeff Shuterland');

function Ejemplar(signatura, publicacion, ubicacion){
    this.signatura = signatura;
    this.publicacion = publicacion;
    this.ubicacion = ubicacion;
}
function Biblioteca(nombre) {
    this.nombre = nombre;
    this.ejemplares = [];
}



let cProgramming = new Publicacion('0131103628','The C Programming Language',[denis]);
cProgramming.nuevoAutor(1, 'Brian W. Kernighan');
let scrum = new Publicacion('97818479411007', 'Scrum: The Art of Doing Twice the Work in Half the Time');
scrum.nuevoAutor(3, 'Jeff Shuterland');
cProgramming.ficha();
scrum.ficha();
let ejemplar1 = new Ejemplar("cccc", scrum, "d1");
const miBiblio = new Biblioteca("David");
miBiblio.nuevoEjemplar(ejemplar1);