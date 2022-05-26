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
        this.botonAlta.onclick = (e) => this.nuevaMascota();

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

        //* TABLA
        this.tablaHTML = document.createElement('table');
        this.tablaHTML.setAttribute('id', 'tabla');
        this.tablaHTML.setAttribute('style', 'display: none;');
        this.sectionHTML.append(this.tablaHTML);

        //* FORM ALTA
        this.formAlta = document.createElement('form');
        this.formAlta.setAttribute('id', 'form_alta');
        this.formAlta.setAttribute('style', 'display: none;');
        this.sectionHTML.append(this.formAlta);

        //* INPUT NOMBRE MASCOTA
        this.inputGroup1 = document.createElement('div');
        this.inputGroup1.setAttribute('class','input-group');
        this.formAlta.append(this.inputGroup1);

        this.inputNombreMascota = document.createElement('input');
        this.inputNombreMascota.setAttribute('type', 'text');
        this.inputNombreMascota.setAttribute('class', 'input');
        this.inputNombreMascota.setAttribute('id', 'nombreMascota');
        this.inputNombreMascota.setAttribute('value', '');
        this.inputGroup1.append(this.inputNombreMascota);

        this.label1 = document.createElement('label');
        this.label1.setAttribute('class', 'label');
        this.label1.append('Nombre Mascota');
        this.inputGroup1.append(this.label1); 


        //* INPUT NOMBRE PROPIETARIO
        this.inputGroup2 = document.createElement('div');
        this.inputGroup2.setAttribute('class','input-group');
        this.formAlta.append(this.inputGroup2);

        this.inputNombrePropietario = document.createElement('input');
        this.inputNombrePropietario.setAttribute('type', 'text');
        this.inputNombrePropietario.setAttribute('class', 'input');
        this.inputNombrePropietario.setAttribute('id', 'nombrePropietario');
        this.inputNombrePropietario.setAttribute('value', '');

        this.label2 = document.createElement('label');
        this.label2.setAttribute('class', 'label');
        this.label2.append('Nombre Mascota');
        this.inputGroup2.append(this.label1); 

        this.inputEdad = document.createElement('input');
        this.inputEdad.setAttribute('type', 'number');
        this.inputEdad.setAttribute('class', 'input');
        this.inputEdad.setAttribute('id', 'edad');
        this.inputEdad.setAttribute('value', '');

        this.inputPeso = document.createElement('input');
        this.inputPeso.setAttribute('type', 'number');
        this.inputPeso.setAttribute('class', 'input');
        this.inputPeso.setAttribute('id', 'peso');
        this.inputPeso.setAttribute('value', '');

        this.botonAlta = document.createElement('button');
        this.botonAlta.setAttribute('class', 'insertar');
        this.botonAlta.append('Alta');
        this.botonAlta.onclick = (e) => this.nuevaMascota();

        this.br = document.createElement('br');
        this.br2 = document.createElement('br');
        this.br3 = document.createElement('br');
        this.br4 = document.createElement('br');

        this.formAlta.append(this.inputGroup1, this.br, this.inputNombrePropietario, this.br2, this.inputEdad, this.br3, this.inputPeso, this.br4, this.botonAlta);



        //* FORM VACUNAR
        this.formVacunar = document.createElement('form');
        this.formVacunar.setAttribute('id', 'form_vacunar');
        this.formVacunar.setAttribute('style', 'display: none;');
        this.sectionHTML.append(this.formVacunar);





        document.body.append(this.clinicaHTML);
    }

    nuevaMascota(nombreMascota, nombrePropietario, edad, peso) {
        this.formAlta.setAttribute('style', 'display: block;');


        let mascota = new Mascota(nombreMascota, nombrePropietario, edad, peso);
        this.mascotas.push(mascota);
    }

    listadoMascotas(botonAccion) {
        this.mascotas.forEach(mas => {
            let tr = document.createElement('tr');
            let tdNombre = document.createElement('td');
            let tdPropietario = document.createElement('td');
            let tdEdad = document.createElement('td');
            let tdPeso = document.createElement('td');
            let tdAccion = document.createElement('td');

            tdNombre.append(mas.nombre);
            tdPropietario.append(mas.propietario);
            tdEdad.append(mas.edad);
            tdPeso.append(mas.peso);

            tdAccion.append(mas.botonAccion);

            tr.append(tdNombre, tdPropietario, tdEdad, tdPeso, tdAccion);
            this.tablaHTML.append(tr);
        })
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
        //!this.activo = "Inactive";
    }
}


class Vacuna {
    constructor(nombreVacuna, fechaVacuna) {
        this.nombreVacuna = nombreVacuna;
        this.fechaVacuna = fechaVacuna;
    }
}

let miClinica = new Clinica('Clinica Veterinaria');