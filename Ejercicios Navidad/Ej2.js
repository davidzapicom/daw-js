const tarjetas = [
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
    [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
];
const entidades = [
    [3, "Amex (American Express)"],
    [4, "Visa"],
    [5, "Mastercard"],
    [6, "Otra"]
];
const arrayTarjetas = [];
const final = [
    [3, 0, 0, ""],
    [4, 0, 0, ""],
    [5, 0, 0, ""],
    [6, 0, 0, ""]
];
var msg = "TARJETAS\n";
function tarjetaValida(tarjeta) {
    var sumaimpar = 0;
    var sumapar = 0;
    var total;
    var impar;
    var valido = false;
    for (let x = 0; x < tarjeta.length; x++) {
        if ((x + 1) % 2 != 0) {
            impar = tarjeta[x] * 2;
            if (impar > 9) {
                impar = impar - 9;
            }
            sumaimpar += impar;
        }
        else {
            sumapar += tarjeta[x];
        }
    }
    total = sumaimpar + sumapar;
    if (total % 10 == 0) {
        valido = true;
    }
    return valido;
}
ValidacionTodasTarjetas(tarjetas);
function ValidacionTodasTarjetas(tarjetas) {
    for (let y = 0; y < tarjetas.length; y++) {
        var tarjeta = tarjetas[y];
        var validar = tarjetaValida(tarjetas[y]);
        var entidad = tarjeta[0];
        var tarjetatexto = "";
        for (let j = 0; j < entidades.length; j++) {
            if (entidades[j][0] == entidad) {
                tarjetatexto = entidades[j][1];
            }
        }
        let datos = [entidad, tarjetatexto, validar];
        // arrayTarjetas[y][0] = entidad;
        // arrayTarjetas[y][1] = tarjeta.join('');
        // arrayTarjetas[y][2] = validar;
        arrayTarjetas.push(datos);
    }
    arrayTarjetas.forEach(element => {
        msg += element + "\n";
    });
    return arrayTarjetas;
}
Entidades(arrayTarjetas);
function Entidades(arrayTarjetas) {
    for (let x = 0; x < arrayTarjetas.length; x++) {
        for (let i = 0; i < final.length; i++) {
            if (arrayTarjetas[x][0] == final[i][0]) {
                final[i][1]++;
                if (!arrayTarjetas[x][2]) {
                    final[i][2]++;
                }
            }
        }
    }
    for (let x = 0; x < final.length; x++) {
        if (final[x][2] == 0) {
            final[x][3] = 0 + " %";
        }
        else {
            final[x][3] = (final[x][2] / final[x][1]) * 100 + "%";
        }
    }
    msg += "\nTARJETAS POR ENTIDAD \n";
    final.forEach(element => {
        msg += element + "\n";
    });
}
alert(msg);