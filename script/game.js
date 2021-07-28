let game = {

 lockMode : false,

 firstCard : null,

 secondCard : null,

 setCard : function(id){

 let card = this.cards.filter(card => card.id === id)[0];

 if(card.flipped || this.lockMode){
     return false;
 }

 if(!this.firstCard){
     this.firstCard = card;
     return true;
 } else{
     this.secondCard = card;
     this.lockMode = true;
     return true;
 }

 },

 checkMatch : function (){
    return this.firstCard.icon === this.secondCard.icon;
 },

 clearCards : function(){
     this.firstCard = null;
     this.secondCard = null;
     this.lockMode = false;
 },


 items : ['image1','image2','image3','image4', 'image5', 'image6', 'image7','image8', 'image9', 'image10'],

 cards : null,

createCards: function (items){
    this.cards = [];

    this.items.forEach((item) => {
        this.cards.push(this.createPair(item));
    });

    this.cards = (this.cards.flatMap(pair => pair));
    this.shuffleCards();
    return this.cards;
},

createPair :  function (item){

    return[{
        id: this.createId(item),
        icon: item,
        flipped: false,
    },{
        id: this.createId(item),
        icon: item,
        flipped: false,
    }]

},

createId :  function (item){
    return item + parseInt(Math.random() * 1000);
},

shuffleCards: function (cards){
    let currentIndex = this.cards.length;
    let randomIndex = 0;
 
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex-- ;
 
        [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex],this.cards[randomIndex]];
     };
 },

}