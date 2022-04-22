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

function numeroAleatorio(desde, hasta) {
	return Math.floor(Math.random() * (hasta - desde + 1) + desde);
}

class Carton {
	constructor(numeroBolasJuego = 90, numerosPorCarton = 15, numeroDeLineas = 3, numeroDeColumnas = 9) {
		this.numeroBolasJuego = numeroBolasJuego;
		this.numerosPorCarton = numerosPorCarton;
		this.numeroDeLineas = numeroDeLineas;
		this.numeroDeColumnas = numeroDeColumnas;

		this.numerosPorLinea = 5;
		this.huecosPorLinea = 4;

		this.ElementoHTML = generarElementoHTML(layoutHTMLCarton);
		this.numeros = [];
		this.lineas = [];

		this.generarLineas();
		document.body.insertAdjacentElement("beforeend", this.ElementoHTML);
	}

	generarLineas() {
		for (let i = 1; i <= this.numeroDeLineas; i++) {
			let desde = i * this.numeroDeColumnas - (this.numeroDeColumnas - 1);
			let hasta = i * this.numeroDeColumnas;
			let linea = new Linea(this, desde, hasta, this.huecosPorLinea, this.numeroDeColumnas);
			this.lineas.push(linea);
		}
	}
}

class Linea {
	constructor(carton, desde, hasta, numeroHuecos, numeroDeColumnas) {
		this.carton = carton;
		this.desde = desde;
		this.hasta = hasta;
		this.numeroHuecos = numeroHuecos;
		this.numeroDeColumnas = numeroDeColumnas;

		this.ElementoHTML = generarElementoHTML(layoutHTMLLinea);
		this.numeros = [];
		this.celdas = [];

		this.huecos = [];

		this.generarCeldas();
		this.carton.ElementoHTML.insertAdjacentElement("beforeend", this.ElementoHTML);
	}

	generarCeldas() {
		let huecos = this.generarHuecos();
		for (let i = 1; i <= this.numeroDeColumnas; i++) {
			let celda;
			if (huecos.includes(i)) {
				celda = new Celda(this, 0);
			} else {
				let repetido = false;
				do {
					var numero = numeroAleatorio(i * 10 - 9, i * 10);
					if (this.carton.numeros.find((element) => element == numero) !== undefined) {
						repetido = true;
					} else {
						this.carton.numeros.push(numero);
						repetido = false;
					}
				} while (repetido);

				celda = new Celda(this, numero);
			}
			this.celdas.push(celda);
		}
	}

	generarHuecos() {
		this.huecos = [];
		for (let i = 1; i <= this.numeroHuecos; i++) {
			let repetido = false;
			do {
				let hueco = numeroAleatorio(1, this.numeroDeColumnas);
				if (this.huecos.find((element) => element == hueco) !== undefined) {
					repetido = true;
				} else {
					this.huecos.push(hueco);
					repetido = false;
				}
			} while (repetido);
		}
		return this.huecos;
	}
}

class Celda {
	constructor(linea, numero) {
		this.linea = linea;
		this.numero = numero;

		this.ElementoHTML = generarElementoHTML(layoutHTMLCelda);
		if (this.numero == 0) {
			this.ElementoHTML.innerHTML = "";
		} else {
			this.ElementoHTML.innerHTML = this.numero;
		}
		this.linea.ElementoHTML.insertAdjacentElement("beforeend", this.ElementoHTML);
	}
}

let miCarton1 = new Carton(90, 15, 3, 9);
let miCarton2 = new Carton(90, 15, 4, 5);
let miCarton3 = new Carton();
