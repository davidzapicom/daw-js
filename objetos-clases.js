//Literal
const objetoPaula = {};


//Función constructura
function ObjetoGeneral(nombre) {
    this.nombre = nombre;
    this.mostrar = function() {
        console.log("Nombre: ", this.nombre);
    }
}

const objetoDani = new ObjetoMiguel("Daniel");


//Método
const objetoObject = new Object();


//Clase
class PersonalSanitario {
    constructor(nombre, tipo) {
        this._nombre = nombre;
        this._tipo = tipo;
    }
    
    //Método de la clase
    mostrar() {
        console.log("Nombre: ", this.nombre);
    }

    //Getters y Setters
    set tipo(valor) {
        switch(valor)  {
            case 'enfermera':
            case 'medico':
            case 'auxiliar':
                this._tipo = tipo;
                break;
            default: 
                this._tipo = undefined;
        }
    }

    get tipo() {
        return this._tipo;
    }

    set nombre(valor) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }
}

const medic = new PersonalSanitario("Maria");


class Medico extends PersonalSanitario {
    static especialidades = ['Cardiología','Hematología','Nefrología', 'General'];
    constructor (nombre,especialidad) {
        super(nombre, "medico");
        this.especialidad = especialidad;
    }

    set especialidad(valor) {
        this._especialidad = valor;
    }

    get especialidad() {
        return this.especialidad;
    }
}

nuria  = new Medico('Nuria','Hematología');