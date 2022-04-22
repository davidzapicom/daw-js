const layoutHTMLTarjeta = {
	tipo: 'section',
	atributos: {
		name: "tarjeta",
	},
	estilos: {
		backgroundColor: 'lightgrey',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}
}

const layoutHTMLLinea = {
	tipo: 'div',
	atributos: {
		name: "linea"
	},
	estilos: {
		backgroundColor: 'dodgerblue',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
}

const layoutHTMLCelda = {
	tipo: 'div',
	atributos: {
		name: 'celda'
	},
	estilos: {
		backgroundColor: 'whitesmoke',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		placeContent: 'center',
		fontSize: '2em',
		fontFamily: 'Arial',
		fontWeight: 'bold',
		margin: 'auto'
	}
}

function generarElementoHTML(layout, altura, anchura) {
	if (layout != undefined) {
		let elementoHTML = document.createElement(layout.tipo);
		for (let atributo in layout.atributos) {
			elementoHTML.setAttribute(atributo, layout.atributos[atributo]);
		}
		for (let estilo in layout.estilos) {
			elementoHTML.style[estilo] = layout.estilos[estilo];
		}
		elementoHTML.style["height"] = altura + "px";
		elementoHTML.style["width"] = anchura + "px";
		return elementoHTML;
	}
	return null;
}

class Tarjeta {
	constructor(contenido, alto = 50, ancho = 50) {
		this.numeroDeLineas = contenido.length;
		this.numeroDeColumnas = 7;
		this.alto = alto;
		this.ancho = ancho;
		this.contenido = contenido;
		this.anchoTarjeta = this.numeroDeColumnas * this.ancho;
		this.altoTarjeta = this.numeroDeLineas * this.alto;
		this.elementoHTML = generarElementoHTML(layoutHTMLTarjeta, this.altoTarjeta, this.anchoTarjeta);
		this.lineas = [];


		this.generarLineas(alto, ancho);
		document.body.insertAdjacentElement("beforeend", this.elementoHTML);
	}

	generarLineas(alto, ancho) {
		for (let i = 0; i < this.numeroDeLineas; i++) {
			let linea = new Linea(this, ancho, alto, this.contenido[i]);
			this.lineas.push(linea);
		}
	}
}

class Linea {
	constructor(tarjeta, alto, ancho, datos) {
		this.tarjeta = tarjeta;
		this.alto = alto;
		this.ancho = ancho;
		this.altoLinea = this.alto;
		this.anchoLinea = this.ancho * (this.hasta - this.desde + 1);
		this.datos = datos;
		this.elementoHTML = generarElementoHTML(layoutHTMLLinea, this.altoLinea, this.anchoLinea);
		this.celdas = [];
		this.generarCeldas(alto, ancho);
		this.tarjeta.elementoHTML.insertAdjacentElement("beforeend", this.elementoHTML);
	}
	generarCeldas(alto, ancho) {
		for (let i = 0; i < this.datos.length; i++) {
			let celda = new Celda(this, this.datos[i], alto, ancho);
			this.celdas.push(celda);
		}
	}
}

class Celda {
	constructor(linea, numero, alto, ancho) {
		this.linea = linea;
		this.numero = numero;
		this.alto = alto;
		this.ancho = ancho;
		this.elementoHTML = generarElementoHTML(layoutHTMLCelda, alto, ancho);
		this.elementoHTML.innerHTML = this.numero;
		this.linea.elementoHTML.insertAdjacentElement("beforeend", this.elementoHTML);
	}
}

function obtenerDiaMes(annum, mes) {
	const diaMes = [31,((annum % 4 == 0) && ((annum % 100 != 0) || (annum % 400) == 0)) ? 29 : 28,31,30,31,30,31,31,30,31,30,31];
	return diaMes[mes];
}

function obtenerCalendario(annum, mes) {
	let fecha = new Date(annum, mes, 1);
	let diaSemana = fecha.getDay();
	let calendario = [['Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab', 'Dom']];
	let semana = [];
	let diasMes = obtenerDiaMes(annum, mes);
	diaSemana = (diaSemana == 0) ? 7 : diaSemana;
	let i = 1;
	while (i < diaSemana) {
		i++;
		semana.push(" ");
	};
	for (j = 1; j <= diasMes; j++) {
		semana.push(j);
		if (i == 7) {
			calendario.push(semana);
			semana = [];
			i = 0;
		}
		i++;
	}
	if (semana.length > 0) {
		let i = semana.length;
		while (i < 7) {
			i++;
			semana.push(" ");
		}
		calendario.push(semana);
	}
	return calendario;
}

function preparaControlCalendario() {
	const fecha = new Date();
	const mesDefecto = fecha.getMonth();
	const anoDefecto = fecha.getFullYear();
	const arrayCalendario = obtenerCalendario(anoDefecto, mesDefecto);
	const arrayMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
	const arrayAnos = Array.from(Array(1800)).map((e, i) => i + 400);
	const control = document.getElementById('calendarControl');
	const formulario = document.createElement('form');
	const controlAno = document.createElement('select');
	const controlMes = document.createElement('select');

	arrayAnos.forEach(ano => {
		let opcion = document.createElement('option');
		opcion.value = ano;
		opcion.text = ano;
		opcion.selected = ano === anoDefecto;
		controlAno.append(opcion);
	});
	
	controlAno.setAttribute('name', 'anno');
	
	arrayMeses.forEach((mes, i) => {
		let opcion = document.createElement('option');
		opcion.value = i;
		opcion.text = mes;
		opcion.selected = i === mesDefecto;
		controlMes.append(opcion);
	});
	
	controlMes.setAttribute('name', 'mes');
	formulario.append(controlAno);
	formulario.append(controlMes);
	control.append(formulario);
	control.addEventListener('change', (e) => cargaCalendario(e, formulario));
	calendario = new Tarjeta(arrayCalendario, 80, 80);
}

function cargaCalendario(evento, objeto) {
	const anno = objeto.anno.value;
	const mes = objeto.mes.value;
	calendario.elementoHTML.remove();
	let arrayCalendario = obtenerCalendario(anno, mes);
	console.log(arrayCalendario);
	calendario = new Tarjeta(arrayCalendario, 80, 80);
}


preparaControlCalendario();