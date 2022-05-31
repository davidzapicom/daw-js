class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
        this.numsAl = [];
        this.personas = [
            'Tania Lloret Sonsol',
            'Thiago Sintra Sintra',
            'Tomás Porras Puerta',
            'Violeta Ahmed',
            'Yanira Domínguez Campoy',
            'Yassine Paez Polito',
            'Ana Marín Morán',
            'Carolina Domínguez Domínguez',
            'Gerardo Serra Clemente',
            'Laura Postergado Plinto',
            'Lucía Álvarez Álvarez',
            'María Rosa Sinpar Parece',
            'Noemí García García',
            'Omar Terreros Marinos',
            'Sebastián Coto Cotelo',
            'Umer Mers Sian',
            'Vanessa Domingo Nieves',
            'África Martín Martín',
            'Domingo Bono Cinco',
            'Javier González Suárez',
            'Juan Jonil Juanco',
            'Miguel Fernández Morán',
            'Paloma Cerco Del Monte',
            'Raúl Lomas Lomas',
            'Susana Tomás Martínez',
            'Abraham Benevente García',
            'María Rodríguez Pérez'
        ];
        document.title = this.nombre;

        //* DIV CONTENEDOR
        this.sorteo = document.createElement('div');
        this.sorteo.setAttribute('id', 'contenedor');

        //* HEADER
        this.header = document.createElement('header');
        this.header.setAttribute('id', 'header');
        this.sorteo.append(this.header);

        //* DIV LOGO
        this.logo = document.createElement('div');
        this.header.append(this.logo);

        //* TITULO
        this.tituloHTML = document.createElement('h1');
        this.tituloHTML.append(`${this.nombre}`);
        this.logo.append(this.tituloHTML);

        //* NAV
        this.nav = document.createElement('nav');
        this.header.append(this.nav);

        this.btnPreparar = document.createElement('button');
        this.btnPreparar.append("PREPARAR");
        this.btnPreparar.onclick = (e) => this.asignarPersonas(e);
        this.nav.append(this.btnPreparar);

        this.btnSortear = document.createElement('button');
        this.btnSortear.setAttribute('style', 'display: none');
        this.btnSortear.append("SORTEAR");
        this.btnSortear.onclick = (e) => this.sortear(e);
        this.nav.append(this.btnSortear);

        //* SECTION RESULTADOS
        this.section = document.createElement('section');
        this.sorteo.append(this.section);

        //* DIV RESULTADOS
        this.resultados = document.createElement('div');
        this.resultados.setAttribute('id', 'resultados');
        this.section.append(this.resultados);

        this.resultado = document.createElement('p');
        this.resultado.setAttribute('id', 'resultado');

        this.anotacion = document.createElement('p');
        this.anotacion.setAttribute('id', 'anotacion');
        this.resultados.append(this.resultado, this.anotacion);

        this.ol = document.createElement('ol');
        this.resultado.append(this.ol);


        this.personas.forEach(persona => {
            this.li = document.createElement('li');
            this.li.append(persona);
            this.ol.append(this.li);
        });

        //* INSERCCION SORTEO EN EL BODY 
        document.body.append(this.sorteo);
    }

    asignarPersonas(e) {
        this.btnPreparar.disabled = true;

        while (this.numsAl.length < this.personas.length) {
            var numeroAleatorio = Math.ceil(Math.random() * this.personas.length);
            var existe = false;
            for (var i = 0; i < this.numsAl.length; i++) {
                if (this.numsAl[i] == numeroAleatorio) {
                    existe = true;
                    break;
                }
            }
            if (!existe) {
                this.numsAl[this.numsAl.length] = numeroAleatorio;
            }
        }

        this.personasOrdenado = this.personas.sort();
        this.ol = document.createElement('ol');
        this.resultado.append(this.ol);
        for (i = 0; i < this.personas.length; i++) {
            this.li = document.createElement('li');

            let persona = this.personasOrdenado[i];
            let element = this.numsAl[i];

            this.li.append(`${persona}. Número aleatorio asignado:  ${element}`);
            this.ol.append(this.li);
        }
        this.btnSortear.style.display = 'block';
    }


    sortear(e) {
        this.resultado.innerHTML = "SORTEANDO";
        let tempo = setTimeout(function () {
            this.resultado.innerHTML = "";
            let numPremiado = Math.floor(Math.random() * (27 - 1)) + 1;
            this.anotacion.innerHTML = `${numPremiado}`;
        }, 3000);            
    }
}

let miSorteo = new Sorteo('Sorteos Divinos');