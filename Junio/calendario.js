function obtenerDiasMes(anio, mes) {
    const dias = [31, ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400) == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return dias[mes];
}

function generarCalendario(anio, mes) {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
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
            i = 0;
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

    let arrayCalendario = generarCalendario(anio, mes);

    console.log(arrayCalendario);
    calendario = new Calendario(arrayCalendario, anio, mes);
}

function preparaControlCalendario() {
    const fecha = new Date();
    const mesDefecto = fecha.getMonth();
    const anioDefecto = fecha.getFullYear();
    const arrayCalendario = generarCalendario(anioDefecto, mesDefecto);
    const arrayMeses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    const arrayAnios = Array.from(Array(1800)).map((e, i) => i + 400);
    const control = document.getElementById('calendarControl');
    const formulario = document.createElement('form');
    const controlAnio = document.createElement('select');
    const controlMes = document.createElement('select');

    arrayAnios.forEach(anio => {
        let opcion = document.createElement('option');
        opcion.value = anio;
        opcion.text = anio;
        opcion.selected = anio === anioDefecto;
        controlAnio.append(opcion);
    });

    controlAnio.setAttribute('name', 'anio');
    arrayMeses.forEach((mes, i) => {
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.text = mes;
        opcion.selected = i === mesDefecto;
        controlMes.append(opcion);
    });

    controlMes.setAttribute('name', 'mes');
    formulario.append(controlAnio);
    formulario.append(controlMes);
    control.append(formulario);
    control.addEventListener('change', (e) => cargaCalendario(e, formulario));
    calendario = new Tarjeta(arrayCalendario, 80, 80);
}

preparaControlCalendario();