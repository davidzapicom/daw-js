/* Función constructorta
    function Autor(numero, nombre) {
        this.numero = numero;
        this.nombre = nombre
    };
*/
// Objeto literal "parecido" al que genera la función constructora Autor
let tolkien = {
    numero: 1,
    nombre: "Tolkien",
};
// Objeto generado por la función constructora.
let cervantes  = new Autor(2, "Cervantes");

let rowling = {
    _numero: 3,
    _nombre: "Rowling",
    // Propiedad Nombre
    get nombre() {
        return this._nombre;
    },
    set nombre(value) {
        this._nombre = value;
    },
    
    // Propiedad numero
    set numero(valor) {       
        this._numero = valor;
    },
    get numero() {
        return this._numero;
    }
}
// Diferencias entre las propiedades de acceso y las normales
// ver en debug.
let dato_numero = Object.getOwnPropertyDescriptor(rowling, "_numero");
let dato_numero_acceso = Object.getOwnPropertyDescriptor(rowling, "numero");
// Propiedes de acceso (accessors) en la función constructora Autor.
function Autor(numero, nombre) {
    this._numero = numero;
    this._nombre = nombre;
    // Propiedad numero
    Object.defineProperty(this, 'numero',
        {
            get() {
                return this._numero;
            },
            set(valor) {
                this._numero = valor;
            }
        }
    );
    // Propiedad nombre
    Object.defineProperty(this, 'nombre',
        {
            get() {
                return this._nombre;
            },
            set(valor) {
                this._nombre = valor;
            }
        }
    ) 
};

let orwell = new Autor(23, 'Orwell');