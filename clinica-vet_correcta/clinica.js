class Clinica {
    constructor(nombre) {
        this.nombre = nombre;
        this.tiposMacotas = [];
        this.mascotas = [];
        document.title = this.nombre;

        //* DIV CONTENEDOR
        this.clinicaHTML = document.createElement('div');
        this.clinicaHTML.setAttribute('id', 'contenedor');

        //* HEADER
        this.headerHTML = document.createElement('header');
        this.headerHTML.setAttribute('id', 'header');
        this.clinicaHTML.append(this.headerHTML);

        //* DIV LOGO
        this.logoHTML = document.createElement('div');
        this.logoHTML.setAttribute('id', 'logo');
        this.headerHTML.append(this.logoHTML);

        //* TITULO
        this.tituloHTML = document.createElement('h1');
        this.tituloHTML.append(`${this.nombre}`);
        this.logoHTML.append(this.tituloHTML);

        //* NAV
        this.navHTML = document.createElement('nav');
        this.navHTML.setAttribute('class', 'links');
        this.navHTML.setAttribute('style', '--items: 4;');
        this.headerHTML.append(this.navHTML);

        this.botonAlta = document.createElement('button');
        this.botonAlta.append('Alta');
        this.botonAlta.onclick = (e) => this.formAlta.setAttribute('style', 'display: block;');

        this.botonListar = document.createElement('button');
        this.botonListar.append('Listar');
        this.botonListar.onclick = (e) => this.listadoMascotas();

        this.botonVacunar = document.createElement('button');
        this.botonVacunar.append('Vacunar');
        this.botonVacunar.onclick = (e) => this.Mascota.vacunar();

        this.botonBaja = document.createElement('button');
        this.botonBaja.append('Baja');
        this.botonBaja.onclick = (e) => Mascota.baja();

        this.spanraya = document.createElement('span');
        this.spanraya.setAttribute('class', 'line');

        this.navHTML.append(this.botonAlta, this.botonListar, this.botonVacunar, this.botonBaja, this.spanraya);


        //* SECTION RESULTADOS
        this.sectionHTML = document.createElement('section');
        this.sectionHTML.setAttribute('id', 'section');
        this.clinicaHTML.append(this.sectionHTML);


        //* DIV RESULTADOS
        this.resultados = document.createElement('div');
        this.resultados.setAttribute('id', 'resultados');
        this.sectionHTML.append(this.resultados);

        this.resultado = document.createElement('p');
        this.resultado.append('Aún no se ha ejecutado ninguna acción.');
        this.resultado.setAttribute('id', 'resultado');

        this.anotacion = document.createElement('p');
        this.anotacion.append('Para comenzar elija una opción en el menú.');
        this.anotacion.setAttribute('id', 'anotacion');

        this.resultados.append(this.resultado, this.anotacion);


        //* TABLA
        this.tablaHTML = document.createElement('table');
        this.tablaHTML.setAttribute('id', 'tabla');
        this.tablaHTML.setAttribute('class', 'rwd-table');
        this.tablaHTML.setAttribute('style', 'display: none;');
        this.sectionHTML.append(this.tablaHTML);


        //* FORM ALTA
        this.formAlta = document.createElement('form');
        this.formAlta.setAttribute('id', 'form_alta');
        this.formAlta.setAttribute('style', 'display: none;');
        this.sectionHTML.append(this.formAlta);


        //* INPUT NOMBRE MASCOTA
        this.inputGroup1 = document.createElement('div');
        this.inputGroup1.setAttribute('class', 'input-group');

        this.inputNombreMascota = document.createElement('input');
        this.inputNombreMascota.setAttribute('type', 'text');
        this.inputNombreMascota.setAttribute('class', 'input');
        this.inputNombreMascota.setAttribute('id', 'nombreMascota');
        this.inputNombreMascota.setAttribute('value', '');
        this.inputGroup1.append(this.inputNombreMascota);

        this.label1 = document.createElement('label');
        this.label1.setAttribute('class', 'label');
        this.label1.append('Nombre mascota');
        this.inputGroup1.append(this.label1);


        //* INPUT NOMBRE PROPIETARIO
        this.inputGroup2 = document.createElement('div');
        this.inputGroup2.setAttribute('class', 'input-group');

        this.inputNombrePropietario = document.createElement('input');
        this.inputNombrePropietario.setAttribute('type', 'text');
        this.inputNombrePropietario.setAttribute('class', 'input');
        this.inputNombrePropietario.setAttribute('id', 'nombrePropietario');
        this.inputNombrePropietario.setAttribute('value', '');
        this.inputGroup2.append(this.inputNombrePropietario);

        this.label2 = document.createElement('label');
        this.label2.setAttribute('class', 'label');
        this.label2.append('Nombre propietario');
        this.inputGroup2.append(this.label2);


        //* INPUT EDAD
        this.inputGroup3 = document.createElement('div');
        this.inputGroup3.setAttribute('class', 'input-group');

        this.inputEdad = document.createElement('input');
        this.inputEdad.setAttribute('type', 'number');
        this.inputEdad.setAttribute('class', 'input');
        this.inputEdad.setAttribute('id', 'edad');
        this.inputEdad.setAttribute('value', '');
        this.inputGroup3.append(this.inputEdad);

        this.label3 = document.createElement('label');
        this.label3.setAttribute('class', 'label');
        this.label3.append('Edad');
        this.inputGroup3.append(this.label3);


        //* INPUT PESO
        this.inputGroup4 = document.createElement('div');
        this.inputGroup4.setAttribute('class', 'input-group');

        this.inputPeso = document.createElement('input');
        this.inputPeso.setAttribute('type', 'number');
        this.inputPeso.setAttribute('class', 'input');
        this.inputPeso.setAttribute('id', 'peso');
        this.inputPeso.setAttribute('value', '');
        this.inputGroup4.append(this.inputPeso);

        this.label4 = document.createElement('label');
        this.label4.setAttribute('class', 'label');
        this.label4.append('Peso');
        this.inputGroup4.append(this.label4);


        //* BOTON ALTA
        this.botonAlta = document.createElement('button');
        this.botonAlta.setAttribute('class', 'insertar');
        this.botonAlta.append('Alta');
        this.botonAlta.onclick = (e) => this.nuevaMascota(e);

        this.br = document.createElement('br');
        this.br2 = document.createElement('br');
        this.br3 = document.createElement('br');
        this.br4 = document.createElement('br');

        this.formAlta.append(this.inputGroup1, this.br, this.inputGroup2, this.br2, this.inputGroup3, this.br3, this.inputGroup4, this.br4, this.botonAlta);


        //* FORM VACUNAR
        this.formVacunar = document.createElement('form');
        this.formVacunar.setAttribute('id', 'form_vacunar');
        this.formVacunar.setAttribute('style', 'display: none;');
        this.sectionHTML.append(this.formVacunar);

        this.selectVacunar = document.createElement('select');
        this.formVacunar.append(this.selectVacunar);


        //* INSERCCION CLINICA EN EL BODY 
        document.body.append(this.clinicaHTML);
    }

    nuevaMascota(e) {
        e.preventDefault();
        let mascota = new Mascota(
            this.inputNombreMascota.value,
            this.inputNombrePropietario.value,
            this.inputEdad.value,
            this.inputPeso.value);
        this.mascotas.push(mascota);
        this.formAlta.setAttribute('style', 'display: none;');

        this.resultado.innerHTML = `Mascota ${this.inputNombreMascota.value} dada de alta.`;
        if (this.mascotas.length == 0) {
            this.anotacion.innerHTML = `No hay ninguna mascota.`;
        } else if (this.mascotas.length == 1) {
            this.anotacion.innerHTML = `Hay ${this.mascotas.length} mascota.`;
        } else {
            this.anotacion.innerHTML = `Hay ${this.mascotas.length} mascotas.`;
        }
    }

    listadoMascotas() {
        this.resultado.innerHTML = `Listado de mascotas:`;
        this.anotacion.innerHTML = `${this.mascotas.length} mascotas.`;

        this.thNombre = document.createElement('th');
        this.thPropietario = document.createElement('th');
        this.thEdad = document.createElement('th');
        this.thPeso = document.createElement('th');

        this.thNombre.append('Nombre');
        this.thPropietario.append('Propietario');
        this.thEdad.append('Edad');
        this.thPeso.append('Peso');

        this.tr = document.createElement('tr');
        this.tr.append(thNombre, thPropietario, thEdad, thPeso);
        this.tablaHTML.append(tr);

        this.mascotas.forEach(mascota => {
            this.tr2 = document.createElement('tr');
            this.tdNombre = document.createElement('td');
            this.tdNombre.setAttribute('data-th', 'Nombre');
            this.tdPropietario = document.createElement('td');
            this.tdNombre.setAttribute('data-th', 'Propietario');
            this.tdEdad = document.createElement('td');
            this.tdNombre.setAttribute('data-th', 'Edad');
            this.tdPeso = document.createElement('td');
            this.tdNombre.setAttribute('data-th', 'Peso');

            this.tdNombre.append(mascota.nombreMascota);
            this.tdPropietario.append(mascota.nombrePropietario);
            this.tdEdad.append(mascota.edad);
            this.tdPeso.append(mascota.peso);

            this.tr2.append(tdNombre, tdPropietario, tdEdad, tdPeso);
            this.tablaHTML.append(tr2);
        })
        this.tablaHTML.setAttribute('style', 'display: block;');
    }
}


class Mascota {
    constructor(nombreMascota, nombrePropietario, edad, peso) {
        this.nombreMascota = nombreMascota;
        this.nombrePropietario = nombrePropietario;
        this.edad = edad;
        this.peso = peso;
        this.vacunas = [];
        this.activo = "Active";
        this.mascotaHTML = document.createElement('tr');
        this.mascotaHTML.innerHTML = `<td>${this.nombre}</td>`
    }

    vacunar(nombreMascota, nombrePropietario, edad, peso) {
        this.mascotaHTML = document.createElement('div');
        let nombreHTML = document.createElement('span');
        if (Clinica.mascotas.length == 0) {
            resultado.innerHTML = `No hay ninguna mascota.`;
        } else {
            for (var i = 0; i < Clinica.mascotas.length; i++) {
                if (Clinica.mascotas[i].activo == "Active") {
                    nombreHTML.innerHTML = Clinica.mascotas[i].nombre;
                    this.mascotaHTML.append(nombreHTML);
                    botonVacunar = document.createElement('button');
                    botonVacunar.innerHTML = 'Vacunar';
                    mascotaHTML.append(botonVacunar);
                    let pMascota = Clinica.mascotas[i];
                    botonVacunar.onclick = (e) => this.Mascota.vacunas.push(new Vacuna(nombreMascota, nombrePropietario, edad, peso));
                }
                resultado.append(mascotaHTML);
            }
        }
    }

    baja() {
        //!
    }
}


class Vacuna {
    constructor(nombreVacuna, fechaVacuna) {
        this.nombreVacuna = nombreVacuna;
        this.fechaVacuna = fechaVacuna;
    }
}

let miClinica = new Clinica('Clinica Milagritos');