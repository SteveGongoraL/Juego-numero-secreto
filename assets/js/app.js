let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let numeroDeJuegosPosiboles = 8;

function asignarTextoAlElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(intentos);
    //console.log(listaNumeroSorteados);

    if(numeroSecreto === numeroDeUsuario){
        asignarTextoAlElemento("p", `Acertaste el número en ${intentos} ${intentos > 1 ? "intentos" : "intento"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    // No ha acertado el numero.
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoAlElemento("p", "El número es menor");
        }else{
            asignarTextoAlElemento("p", "El número es mayor");
        }
        intentos ++;
        limpiarInput();
    }

    return; /* Buena practica poner el return */
}


function limpiarInput(){
    document.getElementById("valorUsuario").value = "";
    return;
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    // Verificar si ya se sortearon todos los números
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoAlElemento("p","Ya se sortearon todos los números posibles");
    }else if (listaNumeroSorteados.length >= numeroDeJuegosPosiboles){
        asignarTextoAlElemento("p",`Termino el juego, tus juegos posibles eran: ${numeroDeJuegosPosiboles}`);
    }else{
        // Si el numeroGenerado está incluido en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales(){
    asignarTextoAlElemento("h1","Juego del número secreto");
    asignarTextoAlElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}


function reiniciarJuego(){
    // Limpiar el input
    limpiarInput();
    // Poner los mensajes iniciales, Generar el número aleatorio, Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el bóton de 'nuevo juego'
    document.getElementById("reiniciar").setAttribute("disabled", true);
    return;
}


condicionesIniciales();
