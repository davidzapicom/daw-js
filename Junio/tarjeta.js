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

const contenido = [
	['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
	['', '', '', '', '1', '2', '3'],
	['4', '5', '6', '7', '8', '9', '10'],
	['11', '12', '13', '14', '15', '16', '17'],
	['18', '19', '20', '21', '22', '23', '24'],
	['25', '26', '27', '28', '29', '30', '']
];

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
		for (let i = 1; i <= this.numeroDeLineas; i++) {
			let linea = new Linea(this, ancho, alto, this.contenido[i - 1]);
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

let calendario_abril = new Tarjeta(contenido);