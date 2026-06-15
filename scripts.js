const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    formulario.classList.add("ativo");
    mascara.classList.add("ativa");
}

function esconderForm() {
    formulario.classList.remove("ativo");
    mascara.classList.remove("ativa");
}

function exibirForm() {
    formulario.classList.add("ativo");
    mascara.classList.add("ativa");
}

mascara.addEventListener("click", () => {
    esconderForm();
});