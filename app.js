// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const establecerFocusEnInputNombre = function() {
    document.getElementById("amigo").focus();
}

const eventoEnterAgregaAmigo = function() {
    document.getElementById("amigo").addEventListener("keydown", function (event) {
       if(event.key === "Enter") {
            agregarAmigo();
       } 
    });
}

const init = function() {
    establecerFocusEnInputNombre();
    eventoEnterAgregaAmigo();
}

const asignarTextoElemento = function(selectorElemento, nuevoTexto) {
    let elemento = document.querySelector(selectorElemento);
    elemento.innerHTML = nuevoTexto;
}

const actualizarVistaListaAmigos = function() {
    let elementoListaAmigos = document.querySelector("#listaAmigos");
    //limpiamos para asegurarnos de no duplicar registros cada vez que se agregan amigos
    elementoListaAmigos.innerHTML = "";

    amigos.forEach(function(name) {
        let newItemList = document.createElement("li");
        newItemList.textContent = name;
        elementoListaAmigos.appendChild(newItemList);
        
    });
}

const mayusculaPrimeraLetra = function(texto) {
    return String(texto).charAt(0).toUpperCase() + String(texto).toLowerCase().slice(1);
}

const agregarAmigo = function() {
    let inputNombre = document.getElementById("amigo");
    let nombreIngresado = String(inputNombre.value).trim();

    //limpiamos el resultado en caso que exista información
    asignarTextoElemento("#resultado", "");
    
    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre.");

    } else if (amigos.includes(mayusculaPrimeraLetra(nombreIngresado))) {
        alert(`En la lista ya tenías el nombre "${nombreIngresado}". No deberías repetir personas`);
        inputNombre.value = "";

    } else if (!isNaN(nombreIngresado)) {
        alert(`Ingresaste el número ${nombreIngresado}. Verifica e ingresa un nombre`);
        inputNombre.value = "";

    } else {
        amigos.push(mayusculaPrimeraLetra(nombreIngresado));
        inputNombre.value = "";
        actualizarVistaListaAmigos();

    }

    establecerFocusEnInputNombre();

}

const cumpleRequisitosParaSorteo = function () {
    const MENSAJES_ERROR = {
        LISTA_VACIA: "Primero debes añadir nombres a la lista",
        MINIMO_NOMBRES: "Debes ingresar por lo menos 2 nombres para iniciar el sorteo"
    };

    if (amigos.length === 0) {
        alert(MENSAJES_ERROR.LISTA_VACIA);
        return false;
    }

    if (amigos.length < 2) {
        alert(MENSAJES_ERROR.MINIMO_NOMBRES);
        return false;
    }

    return true;
}

const sortearAmigo = function() {

    if (!cumpleRequisitosParaSorteo()) 
        return;
    
    let nombreSorteado = amigos[generarIndiceAleatorio()];
    //Mostramos mensaje de nombre sorteado
    asignarTextoElemento("#resultado", `El amigo secreto sorteado es: ${nombreSorteado}`);
    
    // Limpiamos la lista
    amigos = [];
    actualizarVistaListaAmigos();


}

const generarIndiceAleatorio = function() {
    return Math.floor(Math.random() * amigos.length);
}

init();