var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var semanas = [
    "Semana 1",
    ["06/09/2021, 12/09/2021"],
    [
        [1, 0],
        [2, 2500],
        [3, 4500],
        [4, 5000],
        [5, 3000],
        [6, 2500],
        [7, 8000]
    ]
    ,
    "Semana 2",
    ["13/09/2021, 19/09/2021"],
    [
        [1, 0],
        [2, 3500],
        [3, 5800],
        [4, 2000],
        [5, 2000],
        [6, 1500],
        [7, 3000]
    ],
    "Semana 3",
    ["20/09/2021, 26/09/2021"],
    [
        [1, 0],
        [2, 4500],
        [3, 3800],
        [4, 1000],
        [5, 2000],
        [6, 3500],
        [7, 3000]
    ],
    "Semana 4",
    ["27/09/2021, 03/10/2021"],
    [
        [1, 0],
        [2, 2500],
        [3, 1800],
        [4, 3000],
        [5, 4000],
        [6, 2500],
        [7, 1000]
    ],
    "Semana 5",
    ["04/10/2021, 10/10/2021"],
    [
        [1, 0],
        [2, 3500],
        [3, 2800],
        [4, 5000],
        [5, 1000],
        [6, 2500],
        [7, 1000]
    ]
];
function LanzarPrograma() {
    var result = [];
    result.push(maximoyminimosemana());
    result.push(ventasDomingoSuperiorMedia());
    result.push(ventastotalesymedia());
    result.push(rankingVentastotalesymedia());
    result.push(diferencial());
    var msg = "";
    msg += "Info 1 - Días de mayor y menor venta, \n";
    result[0].forEach(element => {
        msg += "\t[" + element + "]\n";
    });
    msg += "Info 2 - Domingo supera a media, \n";
    result[1].forEach(element => {
        msg += "\t[" + element + "]\n";
    });
    msg += "Info 3 - Ventas totales y medias diarias, \n";
    result[2].forEach(element => {
        msg += "\t[" + element + "]\n";
    });
    msg += "Info 4 - Ranking ventas semanales, \n";
    //alert(result[3]);
    result[3].forEach(element => {
        msg += "\t[" + element + "]\n";
    });
    msg += "Info 5 - Diferencial entre ventas media, \n";
    result[4].forEach(element => {
        msg += "\t[" + element + "]\n";
    });
    alert(msg);
}
function maximoyminimosemana() {
    var maximo = 0;
    var minimo = Infinity;
    var diaMaximo = 0;
    var diaMinimo = 0;
    var msg = '';
    var numerosSemana = [];
    var j = 0;
    for (let i = 2; i < semanas.length; i = i + 3) {
        for (let k = 0; k < semanas[2].length; k++) {
            if (semanas[i][k][0] != 1) {
                if (maximo < semanas[i][k][1]) {
                    maximo = semanas[i][k][1];
                    diaMaximo = semanas[i][k][0];
                }
                if (minimo > semanas[i][k][1]) {
                    minimo = semanas[i][k][1];
                    diaMinimo = semanas[i][k][0];
                }
            }
        }
        var datos = [diaMaximo, maximo, diaMinimo, minimo, semanas[j]];
        numerosSemana.push(datos);
        maximo = 0;
        minimo = Infinity;
        diaMaximo = 0;
        diaMinimo = 0;
        j += 3;
    }
    var cuentaDias = 0;
    var cuentasSemanas = 1;
    var datos = [];
    for (let l = 0; l < numerosSemana.length; l++) {
        var dato = [[semanas[cuentaDias], semanas[cuentasSemanas], [numerosSemana[l][0]], [numerosSemana[l][2]]]];
        datos.push(dato);
        cuentaDias += 3;
        cuentasSemanas += 3;
        // msg += numerosSemana[l][4] + '\n';
        // msg += "El dia que mas ha vendido es el " + diasSemana[numerosSemana[l][0] - 1] + " con un total de " + numerosSemana[l][1];
        // msg += "\nEl dia que menos ha vendido es el " + diasSemana[numerosSemana[l][2] - 1] + " con un total de " + numerosSemana[l][3] + "\n";
    }
    //alert(msg);
    return datos;
}
function ventasDomingoSuperiorMedia() {
    var sumatorio = 0;
    var isSuperior = false;
    var media = 0;
    var msg = '';
    var numerosSemana = [];
    var j = 0;
    for (let i = 2; i < semanas.length; i = i + 3) {
        for (let k = 0; k < semanas[2].length; k++) {
            if (semanas[i][k][0] != 1) {
                sumatorio += semanas[i][k][1];
            }
            if (semanas[i][k][0] == 7) {
                media = sumatorio / 7;
                if (media > semanas[i][k][1]) {
                    isSuperior = false;
                }
                else {
                    isSuperior = true;
                }
            }
        }
        var datos = [isSuperior, semanas[j]];
        numerosSemana.push(datos);
        isSuperior = false;
        sumatorio = 0;
        media = 0;
        j += 3;
    }
    var cuentaDias = 0;
    var cuentasSemanas = 1;
    var datos = [];
    for (let l = 0; l < numerosSemana.length; l++) {
        var dato = [[semanas[cuentaDias], semanas[cuentasSemanas], [numerosSemana[l][0]]]];
        datos.push(dato);
        cuentaDias += 3;
        cuentasSemanas += 3;
        // msg += "Para la " + numerosSemana[l][1] + " las ventas se superan: " + numerosSemana[l][0] + '\n';
    }
    //alert(msg);
    return datos;
}
function ventastotalesymedia() {
    var media = [0, 0, 0, 0, 0, 0, 0];
    var msg = '';
    var numerosSemana = [0, 0, 0, 0, 0, 0, 0];
    var j = 0;
    for (let i = 2; i < semanas.length; i = i + 3) {
        for (let k = 0; k < semanas[2].length; k++) {
            if (semanas[i][k][0] != 1) {
                numerosSemana[k] += semanas[i][k][1];
            }
        }
        j += 3;
    }
    for (let m = 0; m < media.length; m++) {
        media[m] = Math.round(numerosSemana[m] / 7);
    }
    var datos = [];
    for (let l = 0; l < numerosSemana.length; l++) {
        var dato = [l + 1, [numerosSemana[l], [media[l]]]];
        datos.push(dato);
        //msg += "Los " + diasSemana[l] + " las ventas han sido: " + numerosSemana[l] + '\n';
        //msg += "Los " + diasSemana[l] + " con la media siguiente fueron: " + media[l] + '\n';
    }
    //alert(msg);
    return datos;
}
function rankingVentastotalesymedia() {
    var media = [0, 0, 0, 0, 0, 0, 0];
    var msg = '';
    var numerosSemana = [0, 0, 0, 0, 0, 0, 0];
    var copiaNumeroSemanas = [];
    var diaMaximo = 0;
    var orden = []; //["a",ventas totales, ventas media]
    var ventasTotalesMaximo = 0;
    var j = 0;
    for (let i = 2; i < semanas.length; i = i + 3) {
        for (let k = 0; k < semanas[2].length; k++) {
            if (semanas[i][k][0] != 1) {
                numerosSemana[k] += semanas[i][k][1];
            }
        }
        j += 3;
    }
    copiaNumeroSemanas = numerosSemana;
    for (let m = 0; m < media.length; m++) {
        media[m] = Math.round(numerosSemana[m] / 7);
    }
    for (let i = 0; i < copiaNumeroSemanas.length; i++) {
        for (let m = 0; m < copiaNumeroSemanas.length; m++) {
            if (copiaNumeroSemanas[m] > ventasTotalesMaximo) {
                ventasTotalesMaximo = copiaNumeroSemanas[m];
                diaMaximo = m;
            }
        }
        var datos = [diasSemana[diaMaximo], numerosSemana[diaMaximo], media[diaMaximo]];
        orden.push(datos);
        copiaNumeroSemanas[diaMaximo] = 0;
        ventasTotalesMaximo = 0;
    }
    var datos = [];
    for (let i = 0; i < orden.length - 1; i++) {
        //msg += "En la " + (i + 1) + "ª posicion tenemos:\n";
        //msg += "    El dia " + orden[i][0] + " con un total de ventas de " + orden[i][1] + " y una media de " + orden[i][2] + ".\n";
        datos.push = orden[i];
    }
    return datos;
}
function diferencial() {
    var media = [0, 0, 0, 0, 0, 0, 0];
    var msg = '';
    var numerosSemana = [0, 0, 0, 0, 0, 0, 0];
    var sumatorio = 0;
    var mediaAux = 0;
    var mediaSemana = 0;
    var j = 0;
    for (let i = 2; i < semanas.length; i = i + 3) {
        for (let k = 0; k < semanas[2].length; k++) {
            if (semanas[i][k][0] != 1) {
                sumatorio += semanas[i][k][1];
            }
            if (semanas[i][k][0] == 7) {
                mediaAux = sumatorio / 7;
                if (mediaAux > mediaSemana) {
                    mediaSemana = mediaAux;
                }
            }
        }
        sumatorio = 0;
    }
    for (let i = 2; i < semanas.length; i = i + 3) {
        for (let k = 0; k < semanas[2].length; k++) {
            if (semanas[i][k][0] != 1) {
                numerosSemana[k] += semanas[i][k][1];
            }
        }
        j += 3;
    }
    for (let m = 0; m < media.length; m++) {
        media[m] = Math.round(numerosSemana[m] / 7);
    }
    mediaSemana = Math.round(mediaSemana);
    for (let l = 0; l < numerosSemana.length; l++) {
        var datos = [];
        var dato = ["Info 5 - diferencial", [semanas[j], semanas[3], [diasSemana[l]] - media[l]]];
        datos.push = (dato);
        //msg += "La media de ventas de los " + diasSemana[l] + " fue de : " + media[l] + '\n';
        //msg += "Con una diferencia respecto a la mejor media de las semanas de " + (mediaSemana - media[l]) + '\n';
    }
    return datos;
}