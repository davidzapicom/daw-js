const layoutHTMLTarjeta = {
    tipo: 'section',
    atributos: { name: "tarjeta", },
    estilos: {
        backgroundColor: '',
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
        elementoHTML.style.height = altura + "px";
        elementoHTML.style.width = anchura + "px";
        return elementoHTML;
    }
    return null;
}

function numeroAleatorio(desde, hasta) {
    return Math.floor(Math.random() * (hasta - desde + 1) + desde);
}


class Tarjeta {
    constructor(numeroDeLineas = 5, numeroDeColumnas = 5, alto = 50, ancho = 50) {
        this.numeroDeLineas = numeroDeLineas;
        this.numeroDeColumnas = numeroDeColumnas;
        this.alto = alto;
        this.ancho = ancho;
        let altoTarjeta = alto * numeroDeLineas;
        let anchoTarjeta = ancho * numeroDeColumnas;
        this.ElementoHTML = generarElementoHTML(layoutHTMLTarjeta, altoTarjeta, anchoTarjeta);
        this.lineas = [];

        this.generarLineas(alto, ancho);
        document.body.insertAdjacentElement("beforeend", this.ElementoHTML);
    }

    generarLineas(alto, ancho) {
        for (let i = 1; i <= this.numeroDeLineas; i++) {
            let desde = i * this.numeroDeColumnas - (this.numeroDeColumnas - 1);
            let hasta = i * this.numeroDeColumnas;
            let linea = new Linea(this, desde, hasta, alto, ancho, alto, this.numeroDeColumnas * ancho);
            this.lineas.push(linea);
        }
    }
}


class Linea {
    constructor(tarjeta, desde, hasta, alto, ancho, altoLinea, anchoLinea) {
        this.tarjeta = tarjeta;
        this.desde = desde;
        this.hasta = hasta;
        this.alto = alto;
        this.ancho = ancho;
        this.altoLinea = altoLinea;
        this.anchoLinea = anchoLinea;
        this.ElementoHTML = generarElementoHTML(layoutHTMLLinea, altoLinea, anchoLinea);
        this.celdas = [];

        this.generarCeldas(alto, ancho);
        this.tarjeta.ElementoHTML.insertAdjacentElement("beforeend", this.ElementoHTML);
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


let miTarjeta1 = new Tarjeta(5, 12, 60, 80);
let miTarjeta2 = new Tarjeta(1, 2, 150, 150);
let miTarjeta3 = new Tarjeta();