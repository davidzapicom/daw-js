class Clinica {
    constructor(nombre) {
        this.nombre = nombre;
        this.tiposMacotas = [];
        this.mascotas = [];
    }
    nuevaMascota(nombre, edad, peso) {

        this.mascotas.push(new Mascota(nombre, edad, peso));
    }
}

class Mascota {
    constructor(nombre, edad, peso) {
        this.nombreMascota = nombreMascota;
        this.nombrePropietario = nombrePropietario;
        this.edad = edad;
        this.peso = peso;
        this.vacunas = [];
        this.activo = "Active";    
    }

    vacunar(nombre, edad, peso) {
        this.mascotaHTML = document.createElement('div');
        let nombreHTML = document.createElement('span');
        if (mascotas.length == 0) {
            resultado.innerHTML = `No hay ninguna mascota.`;
        } else {
            for (var i = 0; i < miClinica.mascotas.length; i++) {
                if (mascotas[i].activo == "Active") {
                    nombreHTML.innerHTML = mascotas[i].nombre;
                    this.mascotaHTML.append(nombreHTML);
                    botonVacunar = document.createElement('button');
                    botonVacunar.innerHTML = 'Vacunar';
                    mascotaHTML.append(botonVacunar);
                    let pMascota = mascotas[i];
                    //! botonVacunar.onclick = (e) => registrarVacuna(e, pMascota);
                }
                resultado.append(mascotaHTML);
            }
        }
        this.Mascota.vacunas.push(new Vacuna(nombre, edad, peso));
    }
}


class Vacuna {
    constructor(nombreVacuna, fechaVacuna) {
        this.nombreVacuna = nombreVacuna;
        this.fechaVacuna = fechaVacuna;
    }
}




let miClinica = new Clinica('Clinica Veterinaria');