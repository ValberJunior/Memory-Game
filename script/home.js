let start = document.getElementById('start');
let menu = document.getElementsByClassName('menu')[0];
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');


//Botão START

start.addEventListener('click', ()=>{
     
    audio2.play();
    setTimeout(()=>{
    start.style.display = 'none';
    menu.style.display = 'block';;},1000);
})




//MENU

// Botão NOVO JOGO
opt1.addEventListener('click', ()=> {
    audio2.play();
    setTimeout(()=>{
    window.location.replace('../game.html');},1000);
})

// Botão NOVO JOGO
opt1.addEventListener('click', ()=> {
    audio2.play();
    setTimeout(()=>{
    window.location.replace('../game.html');},1000);
})

// Botão SOM ON:OFF

let click = 0;
opt2.addEventListener('click',()=>{
        audio2.play();
        setTimeout(()=>{
    if (click==0){
    audio1.play();
    audio1.loop = true;
    audio1.autoplay=true;
    opt2.innerText = 'SOM:ON';

    return click = 1;}
    else{

        audio1.pause();
        audio1.currentTime = 0;
        audio1.loop = false;
        audio1.autoplay = false;
        opt2.innerText = 'SOM:OFF';
        return click = 0;
    };},1000);
    
})

//Opção Sobre

opt3.addEventListener('click', ()=> {
    audio2.play();
    setTimeout(()=>{
    window.location.replace('../about.html');},1000);
})


//Botão Voltar

opt4.addEventListener('click', ()=> {
    audio2.play();
    setTimeout(()=>{
    menu.style.display = 'none';
    start.style.display = 'block';},1000);
})
