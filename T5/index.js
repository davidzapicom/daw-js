// Getters y Setters de propiedad

/*

Conocemos las propiedades de datos:

this.id = id;
this.tipo = tipo;

Las propiedades de acceso se construyen con dos métodos que están disponibles para los
objetos:

get() => método getter, permite obtener el valor de una propiedad
set() => método setter, nos permite establecer el valor de una propiedad

Desde el punto de vista externo al objeto, aparecen como una propiedad de datos más.

*/

const TIPOS_INMUEBLE = ['vivienda', 'local', 'urbana', 'rústica'];

let miInmueble = {
    _tipo: "vivienda",
    _superficie: 80,

    // Propiedad tipo
    get tipo() { // devuelve el valor de _tipo
        return this._tipo;
    },
    set tipo(nuevoTipo) { // establece el valor de _tipo
        this._tipo = nuevoTipo;
    },

    // Propiedad superficie
    get superficie() { // devuelve el valor de _superficie
        return this._superficie;
    },
    set superficie(nuevaSuperficie) { // establece el valor de superficie
        this._superficie = nuevaSuperficie;
    }
}

// Ahora los utilizamos como una propiedad de datos más

// get

console.log(miInmueble.tipo);        // Accede al método get tipo()  (ver en debugger)
console.log(miInmueble.superficie);  // Accede al método get superficie() (ver en debugger)

// set

miInmueble.tipo = "local";      // esta expresión accede al método set tipo()  (ver en debugger)
miInmueble.superficie = 280;    // y esta al método set superficie() (ver en debugger)

console.log(miInmueble.tipo, miInmueble.superficie) // Comprobamos el cambio.

// ¿Qué es lo que ha pasado?

/*
Hemos visto que las propiedades de datos tienen 4 atributos:

1. value (su valor)
2. writable.
3. enumerable. 
4. configurable.

*/
// Propiedad de datos
//
//  Por ejemplo: miCasa._tipo 

let dato_tipo = Object.getOwnPropertyDescriptor(miInmueble, "_tipo");
console.log(dato_tipo); // {value: 'pareado', writable: true, enumerable: true, configurable: true}

//  Sin embargo las propiedades de acceso se configuran de forma diferente:
//
// Propiedad de acceso
//
//  Por ejemplo: miCasa.tipo
//
let acceso_tipo = Object.getOwnPropertyDescriptor(miInmueble, "tipo");
console.log(acceso_tipo);  //{get: ƒ, set: ƒ, enumerable: true, configurable: true}

/*
    Las propiedades siguen siendo 4:
    
    1. get - una función sin parámetros, que se utilice para leer una propiedad,
    2. set - una función con 1 argumento, que se utiliza para asignar valor a una propiedad
    3. enumerable. igual que para las propiedades de datos
    4. configurable. igual que para las propiedades de datos.

*/

/* 

'tipo' y 'superficie', son, de esta forma, unas propiedades especiales (accessor) que van a encapsular el
contenido y actualización de otras propiedades de datos, en este caso '_tipo' y '_superficie'

Esto facilita, por ejemplo, construir "propiedades calculadas", establecer validaciones o transformaciones en el método
set() a la hora de tomar el valor.

Encapsular y enmascarar los datos (valores de las propiedade) del comportamiento o funcionalidad derivada del objeto, 
facilita  la gestión.

Por convección, las propiedades de datos se les establece el prefijo _ '_tipo' o '_superficie'

*/

let miInmueble2 = {
    _tipo: "vivienda",
    _superficie: 80,

    // Propiedad tipo
    get tipo() { // devuelve el valor de _tipo
        return this._tipo;
    },
    set tipo(nuevoTipo) { // Ejemplo de validación en el setter.
        if (TIPOS_INMUEBLE.includes(nuevoTipo)) {
            this._tipo = nuevoTipo;
        }
    },

    // Propiedad superficie
    get superficie() { // devuelve el valor de _superficie
        return this._superficie;
    },
    set superficie(nuevaSuperficie) { // establece el valor de superficie
        this._superficie = nuevaSuperficie;
    }
}


/*

USANDO EL CONSTRUCTOR.

Cuando utlizamos el constructor, debemos definir las propiedades con el método
Object.defineProperty.

*/


function Inmueble(tipo, direccion) {

    this._tipo = tipo;
    this._direccion = direccion;

    // Propiedad tipo 
    Object.defineProperty(this, 'tipo',
        {
            get() {
                return this._tipo;
            },

            set(tipo) {
                if (TIPOS_INMUEBLE.includes(nuevoTipo)) {
                    this._tipo = tipo;
                }
            }
        }
    );
    Object.defineProperty(this, "direccion",
        {
            get() {
                return this._direccion;
            },

            set(id) {
                this._direccion = direccion;
            }
        }
    );

    // Propiedad _tipo 
    Object.defineProperty(this, '_tipo',
        {
            enumerable: false
        });
    // Propiedad tipo 
    Object.defineProperty(this, 'tipo',
        {
            enumerable: true
        });
    // Propiedad _direccion
    Object.defineProperty(this, '_direccion',
        {
            enumerable: false
        });
    // Propiedad direccion
    Object.defineProperty(this, 'direccion',
        {
            enumerable: true
        });

    this.mostrarVivienda = function () {
        for (let inmueble in this) {
            console.log(`${inmueble} :: ${this[inmueble]}`);
        }
    }

}

miCasa = new Inmueble("vivienda", "aquí mismo");

let descriptor = Object.getOwnPropertyDescriptor(miCasa, 'tipo');
alert(JSON.stringify(descriptor, null, 2));

miCasa.mostrarVivienda();