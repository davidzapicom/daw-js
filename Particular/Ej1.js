// var i = 0; // declaramos el valor de i fuera
// var totalCount = 0; // necesitamos crear una variable para que vaya pisandose su valor cada vez que i sea numero par
// while (i <= 100) {
//     i++;
//     if (i % 2 == 0) {
//         console.log(i); // tenemos por consola el valor de i cuando es numero par
//         totalCount += i; // vamos sumando lo que cale i y pisando el valor de totalCount
//     }
// }
// document.write(`El valor total de los numeros pares del o al 100 es ${totalCount}`);


// var i = 0;
// var totalCount = 0;
// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//         totalCount += i;
//     }
// }
// document.write(`El valor total de los numeros pares del o al 100 es ${totalCount}`);


// for (let j = 200; j >= 50; j--){
//     console.log(j);
// }


/* Imagine que la variable num_hijos contiene la cantidad de hijos que tiene un matrimonio. 
Si dicha cantidad es 1 sacaremos por pantalla “No le corresponde bonificación”; 
Si es 2, 3 o 4 sacaremos por pantalla “Bonificación especial del 30 %”; y 
Si es 5 o más sacaremos por pantalla el mensaje “Bonificación especial del 60 %”. 
Realizar dicha codificación con una estructura switch */

// function bonificacion() {
// let num_hijos = document.getElementById('num_hijos').value;
// let resultado = document.getElementById('resultado');
// console.log(resultado);
// num_hijos = parseInt(num_hijos);

//     switch(num_hijos){
//         case 1:
//             resultado.write('No le corresponde bonificación');
//         break;
    
//         case 2:
//             document.write('Bonificación especial del 30 %');
//         break;
    
//         case 3:
//             document.write('Bonificación especial del 30 %');
//         break;
        
//         case 4:
//             document.write(`Por ${num_hijos} le corresponde.....`);
//         break;
//     }
// }

// Implemente la función que convierta grados centígrados en grados Fahrenheit.
//         Para convertir de grados centígrados se deberán realizar los siguientes pasos:
//         •	Multiplicar los grados Centígrados por 9/5.
//         •	Súmarle 32º para adaptar el equivalente en la escala Fahrenheit

function grados() {
    let grados = 20;
    let resultado;
    resultado = (grados * 9)/5 + 32;
    console.log(resultado);
}

grados();