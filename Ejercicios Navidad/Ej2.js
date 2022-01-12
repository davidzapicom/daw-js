var datos = [];

var tarjetas = [
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

var entidades = [
    [3, 'Amex (American Express)'],
    [4, 'Visa'],
    [5, 'Mastercard'],
    [6, 'Otra']
];

const final = [
    [3, 0, 0, ""],
    [4, 0, 0, ""],
    [5, 0, 0, ""],
    [6, 0, 0, ""],
];

function tarjetavalida(tarjeta) {
    var j = 0;
    var suma = 0;
    for (var i = tarjeta.length-1; i >= 0; i--) {
        if (j % 2 == 0) {
            suma += tarjeta[i];
        } else {
            let multiplicador =  tarjeta[i] * 2;
            suma += (multiplicador > 9)? multiplicador-9: tarjeta[i];
        }
        console.log(tarjeta[i]);
        j++;
    }
    return (suma % 10 == 0);
}

tarjetavalida(tarjetas[1]);
function val_tarjetas(tarjetas) {
    let tarjetasProcesadas = [];
    for (var i = 0; i < tarjetas.length; i++) {
        var tarjeta = tarjetas[i];
        var validacion = tarjetavalida(tarjeta);
        let indice = entidades.findIndex(elemento => elemento[0] === tarjeta[0]);
        let nombreEntidad = (indice == -1)?"Error: no existe entidad":entidades[indice][1];
        tarjetasProcesadas.push([nombreEntidad, tarjeta.join(''), validacion]);
    }
    return tarjetasProcesadas;
}

function infoent(tarjetas) {
    for (let i = 0; i < tarjetas.length; i++) {
        switch (datos[i][0]) {
            case 3:
                final[0][1]++;
                if (!datos[i][2]) {
                    final[0][2]++;
                }
                break;
            case 4:
                final[1][1]++;
                if (!datos[i][2]) {
                    final[1][2]++;
                }
                break;
            case 5:
                final[2][1]++;
                if (!datos[i][2]) {
                    final[2][2]++;
                }
                break;
            case 6:
                final[3][1]++;
                if (!datos[i][2]) {
                    final[3][2]++;
                }
                break;
        }
    }
    for (let i = 0; i < final.length; i++) {
        if (final[i][2] == 0) {
            final[i][3] = 0 + " %";
        } else {
            final[i][3] = (final[i][2] / final[i][1] * 100) + "%";
        }
    }
    console.log(final);
}

infoent(tarjetas);