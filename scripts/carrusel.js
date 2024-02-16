
let imagenes = [
    document.getElementById("imagen0"),
    document.getElementById("imagen1"),
    document.getElementById("imagen2"),
    document.getElementById("imagen3")
]

let btnPausa = document.getElementById("btn-pausa");

function autoSiguiente() {
    if (pausa == false){
    siguiente();
}
    setTimeout(autoSiguiente, VELOCIDAD)
}

function pausarCarrusel(){
    if (pausa=== false){
        pausa=true;
        btnPausa.innerHTML="Reproducir"
    } else {
        pause = false;
        btnPausa.innerHTML = "Pausa";
    }
}

   

let imagenActual = 0;
let pausa= false;

const VELOCIDAD= 1000;

function anterior(){
  
    imagenes[imagenActual].style.display = "none";

   
    if (imagenActual == 0) {        
        imagenes[3].style.display = "inline-block";
        imagenActual = 3;
    } else {
        
        imagenes[imagenActual - 1].style.display = "inline-block";
        imagenActual = imagenActual - 1;
    }
}


function siguiente() {
   
    imagenes[imagenActual].style.display = "none";

    if (imagenActual == 3) {        
        imagenes[0].style.display = "inline-block";
        imagenActual = 0;
    } else {
        
        imagenes[imagenActual + 1].style.display = "inline-block";
        imagenActual = imagenActual + 1;
    }
}

setTimeout(autoSiguiente, VELOCIDAD);