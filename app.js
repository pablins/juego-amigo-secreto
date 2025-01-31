// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = function() {
    let inputNombre = document.getElementById("amigo");
    let nombreIngresado = inputNombre.value;
    
    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre.");
        
    } else {
        amigos.push(nombreIngresado);
        inputNombre.value = "";
        actualizarVistaListaAmigos();

    }

}

const actualizarVistaListaAmigos = function () {
    let elementoListaAmigos = document.querySelector("#listaAmigos");
    //limpiamos para asegurarnos de no duplicar registros cada vez que se agregan amigos
    elementoListaAmigos.innerHTML = "";

    amigos.forEach(function(name, index, arr) {
        let newItemList = document.createElement("li");
        newItemList.textContent = name;
        elementoListaAmigos.appendChild(newItemList);
        
    });
}
