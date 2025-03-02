//Funcion de los botones de la pagina
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-principal").style.display = "none";
    document.querySelectorAll(".contenedor").forEach(seccion => seccion.style.display = "none");
    document.getElementById("imagen-principal").style.display = "none";
});
//Validar usuario y contraseña
function validarLogin() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    //Usuarios:
    const usua = {
        "Capi": "11",
        "NiñoDuro69": "Churris69",
        "Viborajack": "emili",
        "Vapurru": "33",
        "Chapu": "44",
        "Vector": "55"
    };

    //Contraseña y Usuario
    if (usua[usuario] && usua[usuario] == contrasena) {
        document.getElementById("login").style.display = "none";
        document.getElementById("menu-principal").style.display = "flex";
        document.getElementById("imagen-principal").style.display = "flex"; 
    } else {
        //Excepcion si se introducen datos incorrectos:
        alert("Usuario o contraseña incorrectos");
    }
}
//Ocultar imagen menu principal
function mostrarSeccion(id) {
    document.getElementById("imagen-principal").style.display = "none";

    document.querySelectorAll(".contenedor").forEach(seccion => seccion.style.display = "none");
    
    document.getElementById(id).style.display = "block";
}

// Funcion para regresar al menu principal:
function regreso() {
    document.querySelectorAll(".contenedor").forEach(seccion => seccion.style.display = "none");
    document.getElementById("imagen-principal").style.display = "flex";
    document.getElementById("menu-principal").style.display = "flex";
}