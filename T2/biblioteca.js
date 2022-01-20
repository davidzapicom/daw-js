function Biblioteca(nombre, direccion, correoElectronico, telefono, socios) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.correoElectronico = correoElectronico;
    this.telefono = telefono;
    this.socios = socios;
}

const biblioteca1 = new Biblioteca("Biblioteca de Avilés", "Plaza Domingo Álvarez Acebal, 2, 33402. Avilés", "bibliotecabances@aviles.es", 985510439, 25216);

function Libro(autor,titulo, editorial, prestados, cantidad, fecha, ) {

} 

function Autor(nombre, fechaNacimiento, , ) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
}

const miguelCervantes = new Autor("Miguel Cervantes", "1547");
const victorHugo = new Autor("Victor Hugo", "1547");