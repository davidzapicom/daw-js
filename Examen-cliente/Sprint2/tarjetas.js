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
};

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
const municipios = [
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
function numeroAleatorio(desde, hasta) {
	return Math.floor(Math.random() * (hasta - desde + 1) + desde);
}
class Tarjeta {
	constructor(numeroDeLineas = 5, numeroDeColumnas = 5, alto = 50, ancho = 50, contenido) {
		this.numeroDeLineas = numeroDeLineas;
		this.numeroDeColumnas = numeroDeColumnas;
		this.alto = alto;
		this.ancho = ancho;
		this.contenido = contenido;
		this.palabras = [];
		this.anchoTarjeta = this.numeroDeColumnas * this.ancho;
		this.altoTarjeta = this.numeroDeLineas * this.alto;
		this.elementoHTML = generarElementoHTML(layoutHTMLTarjeta);
		this.lineas = [];
		this.selecionarContenido();
		this.generarLineas(alto, ancho);
		document.body.insertAdjacentElement("beforeend", this.elementoHTML);
	}
	selecionarContenido() {
		while (this.palabras.length < this.numeroDeColumnas) {
			let n = numeroAleatorio(0, this.contenido.length - 1);
			if (this.palabras.indexOf(this.contenido[n]) == -1) {
				this.palabras.push(this.contenido[n]);
			}
		}
	}
	generarLineas(alto, ancho) {
		for (let i = 0; i < this.numeroDeLineas; i++) {
			let datosLinea = [];
			for (let j = 0; j < this.palabras.length; j++) {
				if (this.palabras[j].length > i) {
					datosLinea.push(this.palabras[j].charAt(i));
				}
				else {
					datosLinea.push(" ");
				}
			}
			let linea = new Linea(this, i * this.numeroDeColumnas + 1, (i + 1) * this.numeroDeColumnas, ancho, alto, datosLinea);
			this.lineas.push(linea);
		}
	}
}

class Linea {
	constructor(tarjeta, desde, hasta, alto, ancho, datos) {
		this.tarjeta = tarjeta;
		this.desde = desde;
		this.hasta = hasta;
		this.alto = alto;
		this.ancho = ancho;
		this.altoLinea = this.alto;
		this.anchoLinea = this.ancho * (this.hasta - this.desde + 1);
		this.datos = datos;
		this.elementoHTML = generarElementoHTML(layoutHTMLLinea, this.altoLinea, this.anchoLinea);
		this.celdas = [];
		this.generarCeldas(alto, ancho);
		document.body.insertAdjacentElement("beforeend", this.elementoHTML);
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

let miTarjeta3 = new Tarjeta(15, 5, 50, 50, municipios);
let miTarjeta1 = new Tarjeta(8, 12, 60, 80, municipios);