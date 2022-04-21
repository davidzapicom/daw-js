function obtenerDiasMes(anio, mes) {
    const dias = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if (mes == 1) {
        if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
            return dias[1] + 1;
        } else {
            return dias[1];
        }
    } else {
        return dias[mes];
    }
}




function generarCalendario(mes, anio) {
    const dias = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
    let fecha = new Date(anio, mes, 1);
    let diaSemana = fecha.getDay();
    let aSemana = [];
    let aCalendario = [];
    diaSemana = (diaSemana == 0) ? 7 : diaSemana;
    let i = 1 
    while (i < diaSemana) {
        i++;
        aSemana.push(" "); 

    }

    for (let j = 1; j <= dias.length; j++) {
        aSemana.push(i);
        if (i == 7) {
            aCalendario.push(aSemana);
            aSemana = [];
            i=0;
        }
        i++;
    }


    if (aSemana.length > 0) {
        let i = aSemana.length;
        while (i < 7) {
            i++;
            aSemana.push(" ");

        }
        aCalendario.push(aSemana);
    }
    return aCalendario;
}

function cargarCalendario(evento, objeto) {
    const anio = objeto.anio;
    const mes = objeto.mes;
    calendario_abril.elementoHTML.remove();

    let arrayCalendario = obtenerCalendario(anio, mes);

    console.log(arrayCalendario);
    calendario = new Calendario(arrayCalendario, anio, mes);

}


let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");