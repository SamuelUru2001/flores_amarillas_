document.getElementById("BVer").addEventListener('click', function () {
    document.getElementById("resultado").style.display = "block";
})
document.getElementById("BotonCerrar").addEventListener('click', function () {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
    document.body.style.backgroundImage = "url('../img/mibebe1.jpg')";
    document.body.style.backgroundRepeat = 'repeat'; // Repetir la imagen de fondo
    document.body.style.backgroundSize = "auto"; // Mantener el tamaño original de la imagen
})