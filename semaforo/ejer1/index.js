const personas = [];
let personasNonormales = [];
class Datos {
    constructor(nombre, peso, altura) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.activa = true;
    }
}

class resultadosImc {
    constructor(nombre, imc) {
        this.nombre = nombre;
        this.imc = imc;

    }
}

function mostrarFormularioAltaPersona() {
    let contenedor = document.getElementById("cont_formulario_personas");
    contenedor.style.display = "block";
    let contenedor2 = document.getElementById("cont_formulario_modificar");
    contenedor2.style.display = "none";
}

function altaPersona() {
    // obtener los valores que el usuario ha introducido
    let controlNombre = document.getElementById("nombre");
    let nombre = controlNombre.value;

    let controlPeso = document.getElementById("peso");
    let peso = controlPeso.value;

    let controlAltura = document.getElementById("altura");
    let altura = controlAltura.value;

    // Crear un objeto de clase Datos
    let d = new Datos(nombre, peso, altura);

    // Guardar el objeto en el array
    personas.push(d);

    mostrar();
}

function mostrarFormularioModificar() {
    let contenedor3 = document.getElementById("cont_formulario_modificar");
    contenedor3.style.display = "block";
    let contenedor4 = document.getElementById("cont_formulario_personas");
    contenedor4.style.display = "none";


    let selectPersona = document.getElementById("nombre_persona");
    while (selectPersona.options.length > 0) {
        selectPersona.remove(0);
    }
    let opcion = document.createElement("OPTION");
    opcion.innerHTML = "(Seleccionar)";
    selectPersona.options.add(opcion);
    for (let i = 0; i < personas.length; i++) {
        let opcion = document.createElement("OPTION");
        opcion.innerHTML = personas[i].nombre;
        selectPersona.options.add(opcion);
    }
}


function modificarPersona() {
    let controlNombrePersona = document.getElementById("nombre_persona");
    let nombrePersona = controlNombrePersona.selectedIndex - 1;

    let controlPesoPersona = document.getElementById("peso_modificar");
    let pesoPersona = controlPesoPersona.value;

    let controlAlturaPersona = document.getElementById("altura_modificar");
    let alturaPersona = controlAlturaPersona.value;

    if (nombrePersona >= 0) {
        personas[nombrePersona].peso = pesoPersona;
        personas[nombrePersona].altura = alturaPersona;
    }
    mostrar();
}

function mostrarImc() {
    let contenedor5 = document.getElementById("cont_formulario_personas");
    contenedor5.style.display = "none";
    let contenedor6 = document.getElementById("cont_formulario_modificar");
    contenedor6.style.display = "none";
}

function mostrar() {
    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla_personas");

    let fila = document.createElement("tr");

    celda = document.createElement("td");
    texto = document.createTextNode("Nombre");
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    texto = document.createTextNode("Altura");
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    texto = document.createTextNode("Peso");
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    texto = document.createTextNode("imc");
    celda.appendChild(texto);
    fila.appendChild(celda);

    tabla.appendChild(fila);

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        if (persona.activa) {
            fila = document.createElement("tr");
            celda = document.createElement("td");
            texto = document.createTextNode(persona.nombre);
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda = document.createElement("td");
            texto = document.createTextNode(persona.peso);
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda = document.createElement("td");
            texto = document.createTextNode(persona.altura);
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda.appendChild(texto);
            fila.appendChild(celda);

            tabla.appendChild(fila);
        }

        let contenedor_personas = document.getElementById("contenedor_personas");
        let tablaExistente = contenedor_personas.firstElementChild;
        if (tablaExistente != null) {
            tablaExistente.remove();
        }
        contenedor_personas.appendChild(tabla);
    }
}

function mostrarPeso() {
    tabla_personas.style.display = "none";
    let tabla = document.createElement("table");

    let fila = document.createElement("tr");

    celda = document.createElement("td");
    texto = document.createTextNode("Nombre");
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    texto = document.createTextNode("Altura");
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    texto = document.createTextNode("Peso");
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    texto = document.createTextNode("imc");
    celda.appendChild(texto);
    fila.appendChild(celda);

    tabla.appendChild(fila);

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        persona.imc = 0;
        if (persona.activa) {
            fila = document.createElement("tr");
            celda = document.createElement("td");
            texto = document.createTextNode(persona.nombre);
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda = document.createElement("td");
            texto = document.createTextNode(persona.peso);
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda = document.createElement("td");
            texto = document.createTextNode(persona.altura);
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda = document.createElement("td");
            let imc = persona.peso / (persona.altura * persona.altura);
            texto = document.createTextNode(imc);
            
            celda.appendChild(texto);
            fila.appendChild(celda);

            tabla.appendChild(fila);
            persona.imc = imc;

            if (persona.imc < 18.5 || persona.imc > 25.00) {
                personasNonormales.push(persona);
            }
        }

        let contenedor_personas = document.getElementById("contenedor_personas_calculadas");
        let tablaExistente = contenedor_personas_calculadas.firstElementChild;
        if (tablaExistente != null) {
            tablaExistente.remove();
        }
        contenedor_personas.appendChild(tabla);
    }
}