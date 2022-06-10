var contenedor = document.getElementById('contenedor');
var img = document.createElement('img');
var imgColor = document.createElement('img');
img.setAttribute("src", "imagenes/semaforo.png");

//luegos metes img en el contenedor
contenedor.appendChild(img);

let boton = document.createElement('button');
boton.append("Iniciar");
boton.onclick = (e) => iniciar();
contenedor.appendChild(boton);

function parar() {
     {
        clearInterval(tempo);
        imgColor.removeAttribute("src");
        boton.textContent = "Iniciar";
        boton.onclick = (e) => iniciar();
    }
}


var tempo;
function iniciar() {
    boton.textContent = "Parar";
    boton.onclick = (e) => parar();    
    imgColor.setAttribute("src", "imagenes/verde.png");
    imgColor.setAttribute("id", "imgverde");
    contenedor.appendChild(imgColor);

    tempo = setInterval((function () {
        if (imgColor.src.includes("verde")) {
            imgColor.src = "imagenes/ambar.png";
            imgColor.setAttribute("id", "imgambar");
        } else if (imgColor.src.includes("ambar")) {
            imgColor.src = "imagenes/rojo.png";
            imgColor.setAttribute("id", "imgrojo");
        } else if (imgColor.src.includes("rojo")) {
            imgColor.src = "imagenes/verde.png";
            imgColor.setAttribute("id", "imgverde");
        }
    }), 3000);

}