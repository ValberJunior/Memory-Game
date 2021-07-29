//Botão de Som/Home e opções de audio
let home = document.getElementById('home');
let sound = document.getElementById('sound');
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let audio3 = document.getElementById('audio3');

//voltar para página HOME
home.addEventListener('click', ()=> {
    audio1.play();
    setTimeout(()=>{
    window.location.replace('../index.html');},1000);
})




//2 constantes para definir o estado da minha carta;
const FRONT = 'card_front';
const BACK = 'card_back';
const CARD = 'card';
const ICON = 'icon';




//Função para iniciar o Jogo
startGame();

function startGame(){
 initializeCards(game.createCards());
};

function initializeCards(cards){
    let gameboard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    game.cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        
        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);

        gameboard.appendChild(cardElement);

    })

}

//Criar Conteúdo para as cartas:

function createCardContent(card, cardElement){
    
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}
 
//Criar a face das cartas (O LADO, FRONT OU BACK)
function createCardFace (face, card, element){

   let cardElementFace = document.createElement('div');
   cardElementFace.classList.add(face);

   if(face === FRONT){
       let iconElement = document.createElement('img');
       iconElement.classList.add(ICON);
       iconElement.src = '../assets/' + card.icon + '.png';
       cardElementFace.appendChild(iconElement);

   }else{
       cardElementFace.innerHTML = '<img src="../assets/back.png">'
   }
   
   element.appendChild(cardElementFace);

}

//Função de virar a carta;

function flipCard(){
 audio1.play();   

 if (game.setCard(this.id)){

 this.classList.add('flip');

 if (game.secondCard){

  if(game.checkMatch()){
      game.clearCards();
      audio2.play();
      if (game.checkGameOver()){
        audio3.play();
        let gameOverLayer = document.getElementById('gameOver');
        gameOverLayer.style.display = 'flex';
      };
  }else{
      setTimeout(() => {
        
      let firstCardView = document.getElementById(game.firstCard.id);
      let secondCardView = document.getElementById(game.secondCard.id);
     
      firstCardView.classList.remove('flip');
      secondCardView.classList.remove('flip');

      game.unflipCards();
    }, 1000);

  }
 }
}

}

//Restartar o Jogo.

function restart(){
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById('gameOver');
        gameOverLayer.style.display = 'none';

}
