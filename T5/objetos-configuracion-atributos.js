function Autor(numero, nombre) {
    this.numero = numero;
    this.nombre = nombre;
    this.mostrar = function () {
        console.log("Propiedades de: ", this.nombre);        
        let atributo;
        for (let elemento in this) {
            console.error(`${elemento} :=> ${this[elemento]}`);
            atributo = Object.getOwnPropertyDescriptor(tolkien, elemento)
            console.log("Propiedades del atributo: ", elemento);
            for (let caracter in atributo) {
                console.log(`${caracter} :=> ${atributo[caracter]}`);
            }         
        }
    }
}
/* propiedades del  numero
1. Valor
2. Writable --- si podemos actualizar su valor
3. Enumerable --- si podemos iterar
4. Configurable -- si podemos modificar la configuración
*/
let tolkien = new Autor(1, "Tolkien");
/*
The Object.getOwnPropertyDescriptor() method returns an object describing
the configuration of a specific property on a given object (that is, one
directly present on an object and not in the object's prototype chain). 
== The object returned is mutable but mutating it has no effect on the original property's configuration ==
*/
let atributoNumero = Object.getOwnPropertyDescriptor(tolkien, 'numero');
let atributoNombre = Object.getOwnPropertyDescriptor(tolkien, 'nombre');
console.log(atributoNumero);    // Salida: {value: 1, writable: true, enumerable: true, configurable: true}
console.log(atributoNombre);    // Salida: {value: 'Tolkien', writable: true, enumerable: true, configurable: true} 
/* 
Object.defineProperty()
The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing 
property on an object, and returns the object.
*/
// Modificamos la propiedad 'writable' de "numero", para que no se pueda modificar.
Object.defineProperty(tolkien, "numero", {writable: false});
// Intentamos modificar "numero".
tolkien.numero = 10; // No lo tiene
console.log(tolkien.numero);  //Salida: 1
Object.defineProperty(tolkien, "nacionalidad", {value: "Sudafricano"});
tolkien.mostrar();  // Muestra todas las propiedades de cada atributo (con el bucle for...in)
console.clear(); // borra la consola
Object.defineProperty(tolkien, "mostrar", {enumerable: false}); // quitamos la propiedad enumerable del método mostrar
                                                                // de esta forma no aparecerá en el bucle for...in
tolkien.mostrar();  // Muestra todas las propiedades, menos el método mostrar que ya no es enumerable.