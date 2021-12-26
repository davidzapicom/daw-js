const arrayMinDescendientes = [
  [1, 2400],
  [2, 2700],
  [3, 4000],
  [4, 4500],
];

let minimo = 0;
function minimoFamiliar(descendientes) {
  let ultimo = arrayMinDescendientes.length - 1;
  for (var i = 0; i <= ultimo && descendientes >= arrayMinDescendientes[i][0]; i++) {
    minimo = minimo + arrayMinDescendientes[i][1];

  }

  if (i > ultimo) {
    console.log(i);
    console.log(arrayMinDescendientes[i-1]);
  }
  return minimo;
}

for (i=1; i<=10; i++){
  console.log(`Número de descendientes: ${i} es: ${minimoFamiliar(i)}`);
}