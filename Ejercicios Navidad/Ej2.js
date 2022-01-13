tarjetas = [
    [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8],
    [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9],
    [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6],
    [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5],
    [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3],
    [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
    [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4],
    [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4],
    [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8],
    [3, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4],
    [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4],
    [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9],
    [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],
    [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5],
    [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3],
    [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6],
    [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3],
  ];
  entidades = [
    [3, "Amex (American Express)"],
    [4, "Visa"],
    [5, "Mastercard"],
    [6, "Otra"],
  ];
  // Validación con lectura del array de atrás hacia adelante
  function tarjetaValida(tarjeta) {
    let luhnSum = 0;
    let j = 1;
    for (i = tarjeta.length - 1; i >= 0; i--) {
      if (j % 2 != 0) luhnSum += tarjeta[i];
      else {
        let number = tarjeta[i] * 2;
        number = number - (number > 9 ? 9 : 0);
        luhnSum += number;
      }
      j++;
    }
    return luhnSum % 10 === 0;
  }
  // Validación con lectura del array en orden normal
  function tarjetaValidaSinInvertir(tarjeta) {
    let luhnSum = 0;
    let ultimo = tarjeta.length;
    for (i = 0; i <= ultimo; i++) {
      if ((ultimo - i) % 2 != 0) luhnSum += tarjeta[i];
      else {
        let number = tarjeta[i] * 2;
        number = number - (number > 9 ? 9 : 0);
        luhnSum += number;
      }
    }
    return luhnSum % 10 === 0;
  }
  // Validación utilizando el método reduceRight, que lee el array en secuencia inversa
  const tarjetaValidaReduce = (tarjeta) => {
    let funcionLuhnSum = (acumulador, elemento, indice) =>
      acumulador +
      (indice % 2 == 0
        ? elemento * 2 > 9
          ? elemento * 2 - 9
          : elemento * 2
        : elemento);
    let luhnSum = tarjeta.reduceRight(funcionLuhnSum, 0);
    return luhnSum % 10 === 0;
  };
  // Validación utilizando el método reduce, con lectura en orden normal
  const tarjetaValidaReduceLecturaDirecta = (tarjeta) => {
    let funcionLuhnSum = (acumulador, elemento, indice, lote) =>
      acumulador +
      ((lote.length - indice) % 2 == 0
        ? elemento * 2 > 9
          ? elemento * 2 - 9
          : elemento * 2
        : elemento);
    let luhnSum = tarjeta.reduce(funcionLuhnSum, 0);
    return luhnSum % 10 === 0;
  };
  
  function procesaTarjetas(loteTarjetas) {
    let tarjetasProcesadas = [];
    for (let tarjeta of loteTarjetas) {
      // Buscamos entidad (primer dígito de la tarjeta)
      let nombreEntidad = nombreEntidadTarjeta(tarjeta[0]);
      // Añadimos elemento:
      tarjetasProcesadas.push([
        nombreEntidad,
        tarjeta.join(""),
        tarjetaValida(tarjeta),
      ]);
    }
    return tarjetasProcesadas;
  }
  function a(elemento, idxEntidad) {
    return elemento[0] === idxEntidad;
  }
  function nombreEntidadTarjeta(idxEntidad) {
      let idEntidad = entidades.findIndex(
          (elemento) => elemento[0] === idxEntidad
        );
        // Si la entidad no existe 
        let nombreEntidad = (idEntidad == -1) ? "Error: inexistente"
                                         : entidades[idEntidad][1];
      return nombreEntidad; 
  }
  const consolidadoPorEntidad = (tarjetasProcesadas) => {
    //tarjetas procesadas contiene [[nombreEntidad, tarjeta, tarjetaValida], ...]
    //El consolidado tiene que contener [[nombreEntidad, número de tarjetas procesadas, número de tarjetas erróneas, porcentaje de tarjetas erróneas]]
    let datosConsolidados = [];
    for (tarjeta of tarjetasProcesadas) {
      //Buscamos en el array de datosConsolidados la entidad de la tarjeta.
      indice = datosConsolidados.findIndex((elem) => elem[0] === tarjeta[0]);
      //Si no existe la entidad en el consolidado, tenemos que crear un elemento.
      if (indice === -1) {
        let noValida = tarjeta[2] ? 1 : 0;
        elementoConsolidado = [tarjeta[0], 1, noValida, noValida];
        datosConsolidados.push(elementoConsolidado);
      } else {
        let noValida = tarjeta[2] ? 1 : 0;
        datosConsolidados[indice][1] ++; //añadimos una tarjeta procesada a la entidad.
        datosConsolidados[indice][2] += noValida; // si es noValida acumulamos una no válida.
        datosConsolidados[indice][3] = datosConsolidados[indice][2] / datosConsolidados[indice][1]; //recalculamos el porcentaje
      }
    }
    return datosConsolidados;
  };
  // Función para filtrar tarjetas no válidas
  const tarjetasInvalidas = (loteTarjetas) => loteTarjetas.filter((tarjeta) => !tarjetaValida(tarjeta));
//   const tarjetasPorNumero = (loteTarjetas) => loteTarjetas.filter((tarjeta) => tarjeta[0] === '4');
  
  // Ejemplos:
  // 1. Obtenemos todas las tarjetas procesadas según la especificación.
  tarjetasProcesadas = procesaTarjetas(tarjetas);
  // 2. Consolidamos los datos por entidad
  tarjetasPorEntidad = consolidadoPorEntidad(tarjetasProcesadas);
  // 3. Bonus track. Tarjetas inválidas
  tarjetasADevolver = tarjetasInvalidas(tarjetas);
  console.log(tarjetasProcesadas);
  console.log(tarjetasPorEntidad);
  console.log(tarjetasADevolver);
  console.log(tarjetasPorNumero(tarjetas));