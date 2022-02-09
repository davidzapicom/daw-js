function Autor(numero,nombre) {
    this.numero = numero;
    this.nombre = nombre;
    this.mostrar = function () {
        let atributo;
        for (let elemento in this) {
            console.log(`${elemento} :=> ${this[elemento]}`);
            atributo = Object.getOwnPropertyDescriptor(tolkien, 'elemento');
            for (let caracter in atributo) {
                console.log(`${caracter} :=> ${atributo[caracter]}`);
            }
        }
    }
}

/* numero
1. Valor
2. Writable -> si podemos actualizar el valor
3. Enumerable -> si podemos iterar sobre el
4. Configurable -> si podemos modificar la configuración
*/

let tolkien = new Autor(1, 'Tolkien');

let atributoNumero = Object.getOwnPropertyDescriptor(tolkien, 'numero');
let atributoNombre = Object.getOwnPropertyDescriptor(tolkien, 'nombre');

console.log(atributoNumero);
console.log(atributoNombre);


Object.defineProperty(tolkien,  "nacionalidad", {value: "Sudafricano"});

tolkien.mostrar();