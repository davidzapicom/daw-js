/* CLASES

Las clases de JavaScript, proporcionan características adicionales para
el tratamiento de objetos.

Hasta ahora, hemos visto cómo crear objetos de forma literal, o mediante 
una función constructora.

objeto = {
    nombre: 'creado literalmente';
}  // literal

function Objeto(nombre) {
    this.nombre = nombre;
} // función constructora

objeto_2 = new Objeto('creado con función constructora'); 

*/

class Vertebrado {
    constructor(familia, genero, especie, nombreComun) {
        this.familia = familia;
        this.genero = genero;
        this.especie = especie;
        this.nombreComun = nombreComun;
    } // función constructora
    mostrar() {
        console.log(
            'Nombre común: ', this.nombreComun, '\n',
            'Familia: ', this.familia, '\n',
            'Género: ', this.genero, '\n',
            'Especie: ', this.especie
        );
    }
}

let mamifero = new Vertebrado('mamifero');

mamifero.mostrar();

/*
     Getters y Setters

Es un convenio establecido que para "protejer" las propiedades internas de los objetos, 
se les añada un guión bajo como prefijo. 

Para acceder a los mismos, debemos utilizar los getters y los setters. En el caso de las
funciones constructoras los creábamos añadiendo la propiedad mediante:
Object.defineProperty()

En el caso de las clases lo hacemos en la propia definición de la misma.

*/

class PersonalSanitario {
    constructor(nombre, tipo, especialidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.especialidad = especialidad;
    } // función constructora
    mostrar() {
        console.log(
            'Nombre:', this.nombre,
            'Tipo: ', this.tipo, '\n',
            'Especialidad: ', this.especialidad, '\n'            
        ); // está accediendo al getter de nombre, tipo y especialidad
    }

    // Tipo de personal sanitario

    get tipo() {
        return this._tipo;  // la propiedad interna lleva _
    }
    set tipo(valor) { // ejemplo de utilización del setter para validar.
        switch (valor){
            case 'enfermero':
            case 'enfermera':
            case 'médico':
            case 'médica':
            case 'auxiliar':
                this._tipo = valor; 
                break;
            default:
                this._tipo = undefined;
        }
    }

    // Especialidad del personal sanitario

    get especialidad() {
        return this._especialidad;
    }

    set especialidad(valor) {
        // validaciones y demás
        this._especialidad = valor;
    }
    
    // Nombre de la persona

    get nombre() {
        return this._nombre;
    }

    set nombre(valor) {
        this._nombre = valor;
    }
}


doctoraNuria = new PersonalSanitario();

// Al debugar las siguiente sentencias observamos que
// se ejecuta el código correspondiente a los setters establecidos
// en la clase para lasa distintas propiedades, por ejemplo
// set nombre(valor), la propiedad _nombre se iguala al valor
// en este caso 'Nuria Alvarez'

doctoraNuria.nombre = 'Nuria Alvarez';
doctoraNuria.tipo = 'médica';
doctoraNuria.especialidad = 'hematología'

console.log(doctoraNuria.nombre); // Accede al getter de la propiedad...




