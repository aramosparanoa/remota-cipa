//Define os botoes acessar e consultar
/* const acessarBtn = document.getElementById("botao-acessar");
const consultarBtn = document.getElementById("botao-consultar"); */
//desabilita o botão no início
/* acessarBtn.setAttribute('disabled', '');

consultarBtn.addEventListener('click', () => {
    console.log("APERTADO");
    alert("APERTADO");
    acessarBtn.setAttribute('enabled', '');
})
 */
//teste de som para cada votação

function votar() {
    let somVotar = new Audio();
    somVotar.src = "audios/votar.mp3";
    somVotar.play();

}

function confirma() {
    let somVotar = new Audio();
    somVotar.src = "audios/confirma.mp3";
    somVotar.play();
    alerta();

}

function cancelar() {
    let somVotar = new Audio();
    somVotar.src = "audios/cancelar.mp3";
    somVotar.play();

}

function alerta() {
    alert('Voto contabilizado com sucesso!');
    time();


}
function time() {
    setTimeout(function () {
        window.location.href = "fim.html"
    }, 600);
}
 
