const qtdMessages = document.getElementById("qtd_messages");
const messageLi = document.getElementsByClassName("message")[0];

const fecharAviso = document.getElementById("fechar-aviso-subscribe");
const subscribe = document.getElementById("subscribe");
const aviso = document.getElementsByClassName("aviso-subscribe")[0];

const imgPerfil = document.getElementById("img-perfil-switch");

messageLi.addEventListener('click', () => {
    if (isNaN(parseInt(qtdMessages.textContent))) qtdMessages.innerHTML = 1;
    else qtdMessages.innerHTML = parseInt(qtdMessages.textContent) + 1;
});

fecharAviso.addEventListener('click', () => {
    exibirAviso();
});

subscribe.addEventListener('click', () => {
    exibirAviso();
});

imgPerfil.addEventListener('click', () => {
    if (imgPerfil.getAttribute('src').includes('mulher')) imgPerfil.src = './images/homem-1.jpg';
    else imgPerfil.src = './images/mulher1.jpg'
});







function exibirAviso() {
    let estilos = window.getComputedStyle(aviso);
    let display = estilos.getPropertyValue("display");

    if (display == "none") aviso.style.display = 'flex';
    else aviso.style.display = 'none';
}