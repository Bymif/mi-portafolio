console.log("Bienvenido al portafolio de [Tu Nombre y Primer Apellido]");
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        alert('Has seleccionado un proyecto.');
    });
});