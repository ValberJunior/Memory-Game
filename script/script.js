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

let items = ['image1','image2','image3','image4', 'image5', 'image6', 'image7','image8', 'image9', 'image10'];

let cards = null;

startGame();

function startGame(){
 cards = createCards(items);
 shuffleCards(cards);
 initializeCards(cards);

};

function initializeCards(cards){
    let gameboard = document.getElementById('gameBoard');

    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        
        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);

        gameboard.appendChild(cardElement);

    })

}

function createCardContent(card, cardElement){
    
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}
 
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


function shuffleCards(cards){
   let currentIndex = cards.length;
   let randomIndex = 0;

   while(currentIndex !== 0){
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex-- ;

       [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex],cards[randomIndex]];
    };
};



function createCards(items){
    let cards = [];

    items.forEach((item) => {
        cards.push(createPair(item));
    });

    return (cards.flatMap(pair => pair));
}

function createPair(item){

    return[{
        id: createId(item),
        icon: item,
        flipped: false,
    },{
        id: createId(item),
        icon: item,
        flipped: false,
    }]

}

function createId(item){
    return item + parseInt(Math.random() * 1000);
}

function flipCard(){
 audio1.play();   
 this.classList.add('flip');
}