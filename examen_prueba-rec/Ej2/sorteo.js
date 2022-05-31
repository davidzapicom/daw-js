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
        botonPreparar.append("PREPARAR");
        botonPreparar.onclick = (e) => asignarPersonas(e);
        this.nav.append(this.btnPreparar);

        //* SECTION RESULTADOS
        this.section = document.createElement('section');
        this.sorteo.append(this.section);


        this.ol = document.createElement('ol');
        this.section.append(this.ol);


        this.personas.forEach(persona => {
            this.li = document.createElement('li');
            this.li.append(persona);
            this.ol.append(this.li);
        });




        //* DIV RESULTADOS
        this.resultados = document.createElement('div');
        this.resultados.setAttribute('id', 'resultados');
        this.section.append(this.resultados);

        this.resultado = document.createElement('p');
        this.resultado.setAttribute('id', 'resultado');

        this.anotacion = document.createElement('p');
        this.anotacion.setAttribute('id', 'anotacion');
        this.resultados.append(this.resultado, this.anotacion);

        this.mascotas.forEach(mascota => {
            this.option = document.createElement('option');
            this.option.setAttribute('value', 'mascota.nombre');
            this.option.append(mascota.nombre);

            this.selectBaja.append(this.option);
        });


        //* INSERCCION SORTEO EN EL BODY 
        document.body.append(this.sorteo);
    }

    asignarPersonas(e) {
        mensaje.innerHTML = "SORTEANDO";
        // personas.sort();
    
        // var cantidadNumeros = personas.length;
        // var myArray = [];
        // while (myArray.length < cantidadNumeros) {
        //     var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
        //     var existe = false;
        //     for (var i = 0; i < myArray.length; i++) {
        //         if (myArray[i] == numeroAleatorio) {
        //             existe = true;
        //             break;
        //         }
        //     }
        //     if (!existe) {
        //         myArray[myArray.length] = numeroAleatorio;
        //     }
    
        // }
        // mensaje.innerHTML = `${myArray.length} nums.`;
    }
}

let miSorteo = new Sorteo('Sorteos Divinos');