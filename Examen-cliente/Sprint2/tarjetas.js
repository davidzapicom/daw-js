const municipios =
	[
		'Allande',
		'Aller',
		'Amieva',
		'Avilés',
		'Belmonte de Miranda',
		'Bimenes',
		'Boal',
		'Cabrales',
		'Cabranes',
		'Candamo',
		'Cangas de Onís',
		'Cangas del Narcea',
		'Caravia',
		'Carreño',
		'Caso',
		'Castrillón',
		'Castropol',
		'Coaña',
		'Colunga',
		'Corvera de Asturias',
		'Cudillero',
		'Degaña',
		'Franco, El',
		'Gijón',
		'Gozón',
		'Grado',
		'Grandas de Salime',
		'Ibias',
		'Illano',
		'Illas',
		'Langreo',
		'Laviana',
		'Lena',
		'Llanera',
		'Llanes',
		'Mieres',
		'Morcín',
		'Muros de Nalón',
		'Nava',
		'Navia',
		'Noreña',
		'Onís',
		'Oviedo',
		'Parres',
		'Peñamellera Alta',
		'Peñamellera Baja',
		'Pesoz',
		'Piloña',
		'Ponga',
		'Pravia',
		'Proaza',
		'Quirós',
		'Regueras, Las',
		'Ribadedeva',
		'Ribadesella',
		'Ribera de Arriba',
		'Riosa',
		'Salas',
		'San Martín de Oscos',
		'San Martín del Rey Aurelio',
		'San Tirso de Abres',
		'Santa Eulalia de Oscos',
		'Santo Adriano',
		'Sariego',
		'Siero',
		'Sobrescobio',
		'Somiedo',
		'Soto del Barco',
		'Tapia de Casariego',
		'Taramundi',
		'Teverga',
		'Tineo',
		'Valdés',
		'Vegadeo',
		'Villanueva de Oscos',
		'Villaviciosa',
		'Villayón',
		'Yernes y Tameza']

const layoutHTMLTarjeta = {
	tipo: 'section',
	atributos: { name: "tarjeta", },
	estilos: {
		backgroundColor: 'lightgrey',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}
};
const layoutHTMLLinea = {
	tipo: 'div',
	atributos: { name: "linea" },
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
	atributos: { name: 'celda' },
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
		elementoHTML.style.height = altura / 5 + "px";
		elementoHTML.style.width = anchura / 2 + "px";
		return elementoHTML;
	}
	return null;
}


function numeroAleatorio(desde, hasta) {
	return Math.floor(Math.random() * (hasta - desde + 1) + desde);
}


class Tarjeta {
	constructor(numeroDeLineas = 5, numeroDeColumnas = 5, alto = 50, ancho = 50, contenido) {
		this.numeroDeLineas = numeroDeLineas;
		this.numeroDeColumnas = numeroDeColumnas;
		this.alto = alto;
		this.ancho = ancho;
		let altoTarjeta = alto * numeroDeLineas;
        let anchoTarjeta = ancho * numeroDeColumnas;
		this.ElementoHTML = generarElementoHTML(layoutHTMLTarjeta, altoTarjeta, anchoTarjeta);
		this.lineas = [];
		this.contenido = [];
		this.palabras = [];
		
		this.generarLineas(alto, ancho);
		document.body.insertAdjacentElement("beforeend", this.ElementoHTML);
		seleccionarContenido();
	}

	// seleccionarContenido() {

	// }

	generarLineas(alto, ancho) {
		for (let i = 1; i <= this.numeroDeLineas; i++) {
			let desde = i * this.numeroDeColumnas - (this.numeroDeColumnas - 1);
			let hasta = i * this.numeroDeColumnas;
			let linea = new Linea(this, desde, hasta, alto, ancho, this.numeroDeColumnas * ancho, alto);
			this.lineas.push(linea);
		}
	}
}


class Linea {
	constructor(tarjeta, desde, hasta, alto, ancho, altoLinea, anchoLinea, datos) {
		this.tarjeta = tarjeta;
		this.desde = desde;
		this.hasta = hasta;
		this.alto = alto;
		this.ancho = ancho;
		this.altoLinea = altoLinea;
		this.anchoLinea = anchoLinea;
		this.ElementoHTML = generarElementoHTML(layoutHTMLLinea, altoLinea, anchoLinea);
		this.celdas = [];
		this.datos = [];

		this.generarCeldas(alto, ancho);
		document.body.insertAdjacentElement("beforeend", this.ElementoHTML);
	}

	generarCeldas(alto, ancho) {
		for (let i = this.desde; i <= this.hasta; i++) {
			let celdas = new Celda(this, i, alto, ancho);
			this.celdas.push(celdas);
		}
	}
}


class Celda {
	constructor(linea, numero, alto, ancho) {
		this.linea = linea;
		this.numero = numero;
		this.alto = alto;
		this.ancho = ancho;

		this.ElementoHTML = generarElementoHTML(layoutHTMLCelda, alto, ancho);
		if (this.numero == 0) {
			this.ElementoHTML.innerHTML = "";
		} else {
			this.ElementoHTML.innerHTML = this.numero;
		}
		this.linea.ElementoHTML.insertAdjacentElement("beforeend", this.ElementoHTML);
	}
}


let miTarjeta3 = new Tarjeta(15, 5, 50, 50, municipios);
let miTarjeta1 = new Tarjeta(8, 12, 60, 80, municipios);