const abrir = document.getElementById("abrirMenu");
const cerrar = document.getElementById("cerrarMenu");
const navMenu = document.getElementById("menuNav");

abrir.addEventListener("click", () => {
    navMenu.classList.add("visible");
    navMenu.classList.remove("oculto");
    console.log(navMenu);
})

cerrar.addEventListener("click", () => {
    navMenu.classList.remove("visible");
    navMenu.classList.add("oculto");
    console.log(navMenu);
})