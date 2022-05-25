class Clinica {
    constructor(nombre) {
        this.nombre = nombre;
        this.tiposMacotas = [];
        this.mascotas = [];
        document.title = this.nombre;

        this.clinicaHTML = document.createElement('div');
        this.clinicaHTML.setAttribute('id', 'contenedor');

        this.headerHTML = document.createElement('header');
        this.headerHTML.setAttribute('id', 'header');
        this.clinicaHTML.append(this.headerHTML);

        this.logoHTML = document.createElement('div');
        this.logoHTML.setAttribute('id', 'logo');
        this.headerHTML.append(this.logoHTML);

        this.tituloHTML = document.createElement('h1');
        this.tituloHTML.append("Clinica Veterinaria");
        this.logoHTML.append(this.tituloHTML);


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
        this.botonVacunar.onclick = (e) => this.();

        this.botonBaja = document.createElement('button');
        this.botonBaja.append('Baja');
        this.botonBaja.onclick = (e) => Mascota.vacunar();

        this.spanraya = document.createElement('span');
        this.spanraya.setAttribute('class', 'line');

        this.navHTML.append(this.botonAlta, this.botonListar, this.botonVacunar, this.botonBaja, this.spanraya);

        this.sectionHTML = document.createElement('section');
        this.sectionHTML.setAttribute('id', 'section');
        this.clinicaHTML.append(this.sectionHTML);

        this.tablaHTML = document.createElement('table');
        this.tablaHTML.setAttribute('id', 'tabla');
        this.sectionHTML.append(this.tablaHTML);

        document.body.append(this.clinicaHTML);
    }

    nuevaMascota(nombreMascota, nombrePropietario, edad, peso) {


    
        this.mascotas.push(new Mascota(nombreMascota, nombrePropietario, edad, peso));
    }
    listadoMascotas(botonAccion) {
        this.mascotas.forEach(mas => {

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
    vacunar(nombre, edad, peso) {
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