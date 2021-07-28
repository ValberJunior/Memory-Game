let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let back = document.getElementById('back');

// Botão NOVO JOGO
back.addEventListener('click', ()=> {
    audio2.play();
    setTimeout(()=>{
    window.location.replace('../index.html');},1000);
})