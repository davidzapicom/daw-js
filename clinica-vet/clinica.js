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
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.vacunas = [];
        this.activo = "Active";
    }
    vacunar(nombre, edad, peso) {

        this.vacunas.push(new Mascota(nombre, edad, peso));
    }

}

class Vacuna {
    constructor(nombre, nombreVacuna, fechaVacuna) {
        this.nombre = nombre;
        this.nombreVacuna = nombreVacuna;
        this.fechaVacuna = fechaVacuna;
    }
}