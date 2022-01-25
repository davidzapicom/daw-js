function Autor(idautor,nombre) {
    this.idautor = idautor;
    this.nombre = nombre;
}

function Publicacion(isbn,titulo,autores = []) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autores = autores;
    this.nuevoAutor = (idautor,nombre) => this.autores.push(new Autor(idautor,nombre));

    // this.nuevoAutor = function(idautor,nombre) {
    //     let Autor = new Autor(idautor,nombre);
    //     this.autores.push(autor);
    // }
}

let Lorca = new Autor('ID1','Lorca');
let Cervantes = new Autor('ID2','Miguel de Cervantes');
let Jeff = new Autor('ID3','Jeff Shuterland');

let cProgramming = new Publicacion('ISBN1','TheC Programming Language',[Lorca]);
cProgramming.nuevoAutor('ID2','Miguel de Cervantes');


let scrum = new Publicacion('ISBN2','Scrum: The Art of Doing Twice the Work in Half the Time');
scrum.nuevoAutor('ID1','Lorca');

cProgramming.ficha();
scrum.ficha();