var contador = 0;
var suma = 0;
var media = 0;

do {
    var num = parseInt(prompt("Introduce un número hasta un negativo para salir", 0));
    
    if(isNaN(num)){
        num = 0;
    } else if (num > 0) {
        suma += num;
        contador++;
    }

    media = suma / contador; 

}while(num >= 0);

console.log("La suma de los números es: " + suma + " y la media es: " + media);