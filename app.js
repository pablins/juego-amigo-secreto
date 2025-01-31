// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = function() {
    let inputNombre = document.getElementById("amigo");
    let nombreIngresado = inputNombre.value;

    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "";
    
    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre.");
        
    } else {
        amigos.push(nombreIngresado);
        inputNombre.value = "";
        actualizarVistaListaAmigos();

    }

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

const sortearAmigo = function() {
    if (amigos.length === 0) {
        alert("Primero debes añadir nombres a la lista");

    } else {
        let nombreSorteado = amigos[generarIndiceAleatorio()];
        let elementoResultado = document.getElementById("resultado");

        elementoResultado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
        // Limpiamos la lista
        amigos.splice(0, amigos.length);
        actualizarVistaListaAmigos();

    }
}

const generarIndiceAleatorio = function() {
    return Math.floor(Math.random() * amigos.length);
}
