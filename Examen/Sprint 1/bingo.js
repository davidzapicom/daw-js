const layoutHTMLCarton = {
	tipo: "section",
	atributos: {
		name: "carton",
	},
	estilos: {
		backgroundColor: "lightgrey",
		width: "600px",
		height: "240px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
};

const layoutHTMLLinea = {
	tipo: "div",
	atributos: {
		name: "linea",
	},
	estilos: {
		width: "600px",
		height: "70px",
		backgroundColor: "dodgerblue",
		border: "1px solid white",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
};

const layoutHTMLCelda = {
	tipo: "div",
	atributos: {
		name: "celda",
	},
	estilos: {
		height: "50px",
		width: "50px",
		backgroundColor: "whitesmoke",
		border: "1px solid snow",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "2em",
		fontFamily: "Arial",
		fontWeight: "bold",
	},
};

function generarElementoHTML(layout) {
	if (layout != undefined) {
		let elementoHTML = document.createElement(layout.tipo);
		for (let atributo in layout.atributos) {
			elementoHTML.setAttribute(atributo, layout.atributos[atributo]);
		}
		for (let estilo in layout.estilos) {
			elementoHTML.style[estilo] = layout.estilos[estilo];
		}
		return elementoHTML;
	}
	return null;
}

class Carton {
	constructor(numeroBolasJuego = 90, numerosPorCarton = 15, numeroDeLineas = 3, numeroDeColumnas = 9) {
		this.numeroBolasJuego = numeroBolasJuego;
		this.numerosPorCarton = numerosPorCarton;
		this.numeroDeLineas = numeroDeLineas;
		this.numeroDeColumnas = numeroDeColumnas;

		this.ElementoHTML = generarElementoHTML(layoutHTMLCarton);
		this.numeros = [];
		this.lineas = [];

		this.generarLineas();
		document.body.insertAdjacentElement("beforeend", this.ElementoHTML);
	}

	generarLineas() {
		for (let i = 1; i <= 3; i++) {
			let desde = i * 9 - 8;
			let hasta = i * 9;
			let linea = new Linea(this, desde, hasta);
			this.lineas.push(linea);
		}
	}
}

class Linea {
	constructor(carton, desde, hasta) {
		this.carton = carton;
		this.desde = desde;
		this.hasta = hasta;

		this.ElementoHTML = generarElementoHTML(layoutHTMLLinea);
		this.numeros = [];
		this.celdas = [];

		this.generarCeldas();
		this.carton.ElementoHTML.insertAdjacentElement("beforeend", this.ElementoHTML);
	}

	generarCeldas() {
		for (let i = this.desde; i <= this.hasta; i++) {
			let celda = new Celda(this, i);

			this.celdas.push(celda);
			this.carton.numeros.push(i),
			this.numeros.push(i);
		}
	}
}

class Celda {
	constructor(linea, numero) {
		this.linea = linea;
		this.numero = numero;

		this.ElementoHTML = generarElementoHTML(layoutHTMLCelda);
		this.ElementoHTML.innerHTML = this.numero;
		this.linea.ElementoHTML.insertAdjacentElement("beforeend", this.ElementoHTML);
	}
}

let miCarton1 = new Carton(90,15,3,9); 
let miCarton2 = new Carton(90,15,3,9); 
let miCarton3 = new Carton();