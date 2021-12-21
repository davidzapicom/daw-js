/*
CÁLCULO DE RETENCIONES
*/

// ================= CONSTANTES GLOBALES ==============================================

/*
  Array condiciones mínimas de retención
  Situación 1 - Soltero viudo, divorciado, separado
  Situación 2 - Cónyuge con rentas inferiores
  Situación 3 - Otras
  
  Filas
  [Situación,[[[Rango hijos],Salario máximo],...,[[Rango hijos n], Salario máximo n]]
*/
const arrayCondicionesMinimos = [
  [
    1,
    "1. Soltero viudo, divorciado, separado",
    [
      [[0, 0], 0],
      [[1, 1], 15497],
      [[2, Infinity], 17100],
    ],
  ],
  [
    2,
    "2. Cónyuge con rentas inferiores",
    [
      [[0, 0], 15456],
      [[1, 1], 16481],
      [[2, Infinity], 17634],
    ],
  ],
  [
    3,
    "3. Otras situaciones",
    [
      [[0, 0], 14000],
      [[1, 1], 14516],
      [[2, Infinity], 15093],
    ],
  ],
];

/*
  Array retenciones
  Filas
  [[[Rango1], tipo1],[[Rango2], tipo2],...[[RangoN], tipoN]]
*/

const arrayRetenciones = [
  [[0, 12450.0], 19.0],
  [[12450, 20200.0], 24.0],
  [[20200, 35200.0], 30.0],
  [[35200, 60000.0], 37.0],
  [[60000, 300000.0], 45.0],
  [[300000, Infinity], 47.0],
];

/*
  Array mínimos por descendientes
  Es acumulativa para cada hijo,
*/

const arrayMinDescendientes = [
  [1, 2400],
  [2, 2700],
  [3, 4000],
  [4, 4500],
];

const importeMinimoPersonal = 5550;


// ================= FUNCIONES DE CÁLCULO =============================================
function minimoFamiliar(descendientes) {
  for (var i = descendientes; i < arrayMinDescendientes[i].length; i++) {
    minimo = arrayMinDescendientes[i][1];
  }
  return minimo;
}

function situacionFamiliar(familiar) {
  for (var i = familiar; i < arrayCondicionesMinimos[i].length; i++) {
    situacion = arrayCondicionesMinimos[i];
    condiciones = arrayCondicionesMinimos[i][2];
  }
  return [situacion, condiciones];
}

function esRetencionAplicable(salario, condiciones, hijos) {
  for (var i = hijos; i < arrayRetenciones[i].length; i++) {
      while (i < arrayRetenciones.length - 1 && arrayRetenciones[i][0] === salario && arrayRetenciones[i][1] <= salario) { i++ }
      if (i === primerElemento) {
        i = primerElemento;
      } else if (i === arrayRetenciones.length - 1 && arrayRetenciones[i][1] < salario) {
        i = arrayRetenciones.length - 1;
      } else i = i - 1;
      salario = arrayRetenciones[i][2];
    }
  return salario > valorRango[1];
}
function determinaRetencion(base) {
  for (var i = 0; i < arrayRetenciones[i].length; i++) {

  }

  // Recorre el array y calcula la retención hasta la base más, si procede,
  // la retención del resto del siguiente tramo.
  // Una vez acumulada, se devuelve el porcentaje de retención sobre la base
  // de cálculo

  return Math.round((retencion / base) * 10000) / 100;
}



// ================= FUNCIONES DE PROCESO =============================================
//
// Ejemplo de salida del proceso.

function procesaRetencion(datos) {
  let base = 0;
  let retencion = 0;
  let cuota = 0;
  let minimoPer = 0;
  let minimoFam = 0;
  let minimoTotal = 0;

  let salario = parseFloat(datos.salario.value);
  let familiar = parseInt(datos.familiar.value);
  let hijos = parseInt(datos.hijos.value);


  let salida = document.getElementById("salida");

  let situacion = situacionFamiliar(familiar);
  let situacionFam = situacion[0];
  let condiciones = situacion[1];

  salida.innerHTML = "";

  minimoPer = minimoPersonal();
  minimoFam = minimoFamiliar(hijos);
  minimoTotal = minimoPer + minimoFam;

  if (esRetencionAplicable(salario, condiciones, hijos)) {
    base = salario > minimoTotal ? salario - minimoTotal : 0;
    retencion = base != 0 ? determinaRetencion(base) : 0;
    cuota = (base * retencion) / 100;
  }
  salida.innerHTML = `
            <h3>Parámetros introducidos</h3>
             <p>Salario: ${salario.toLocaleString(undefined)}</p>
             <p>Situación familiar: ${situacionFam}</p>
             <p>Hijos: ${hijos}</p>
             <br>
             <h3>Cálculos realizados</h3>
             <p>Mínimo personal: ${minimoPer.toLocaleString(undefined)} </p>
             <p>Mínimo familiar: ${minimoFam.toLocaleString(undefined)} </p>
             <p>Base: ${base.toLocaleString(undefined)} </p>
             <p>Retención: ${retencion.toLocaleString(undefined)}% </p>
             <p>Cuota: ${cuota.toLocaleString(undefined)} </p>
             `;
}