//Objeto GAME, com todas propriedades e métodos.

let game = {

 lockMode : false,                      //Modo inicial da carta, caso ela ainda não esteja com seu par, ela não será bloqueada.
 
 firstCard : null,                      //A primeira e a segunda carta, ao iniciar a jogada serão vazias, após viradas caso derem par ficarão preenchidas, se não, voltarão ao estado inicial;

 secondCard : null,

 items : ['image1','image2','image3','image4', 'image5', 'image6', 'image7','image8', 'image9', 'image10'],  //Minhas imagens

 cards : null,   

 setCard : function(id){    //Função para setar a carta.

 let card = this.cards.filter(card => card.id === id)[0];  //Card recebe o resultado do filtro da carta selecionada(identificada pelo Id), retornará um array de um elemento.
 console.log(card);   

 if(card.flipped || this.lockMode){              //Se a codição de carta virada ou lockMode for verdadeiro, retornará o valor FALSE.
     return false;
 }

 if(!this.firstCard){                          //Se ainda Não tivermos valor para primeira carta, a carta virada será atribuida a primeira carta 
     this.firstCard = card;
     this.firstCard.flipped = true;
     return true;
 } else{
     this.secondCard = card;                   //Se não, será atribuido a segunda carta..
     this.secondCard.flipped = true;
     this.lockMode = true;
     return true;
 }

 },

 checkMatch : function (){                   //Checagem de PAR
     if (!this.firstCard || !this.secondCard){
         return false;
     }
    return this.firstCard.icon === this.secondCard.icon;
 },

 clearCards : function(){                //Redefinindo valores caso não encontre o par
     this.firstCard = null;
     this.secondCard = null;
     this.lockMode = false;
 },

 unflipCards : function (){                    //desvirar as cartas 
     this.firstCard.flipped = false;
     this.secondCard.flipped = false;
     this.clearCards();
 },
 
 checkGameOver : function (){              //Checar se houve fim de jogo ou não.
     
    return this.cards.filter(card => !card.flipped).length == 0;   //Um filtro retornará se o valor de cartas não viradas for zero, definirá o fim do jogo.
 
},


createCards: function (items){     //Função para criar as cartas
    this.cards = [];

    this.items.forEach((item) => {               //transformar cada elemento do meu ITEMS em um ITEM, adicionar no array CARDS e criar seu par na função CreatePair
        this.cards.push(this.createPair(item));
    });

    this.cards = (this.cards.flatMap(pair => pair));   //O flatMAP irá me retornar 2 arrays juntos, caso fizesse apenas o MAP, ele retornaria 10 arrays com 2 cartas (as pares), e não as 20 em um array só.
    this.shuffleCards();                                // Função para embaralhar as cartas
    return this.cards;                                   //Retorno as cartas.
},

createPair :  function (item){                   //Função de criação do par.

    return[{
        id: this.createId(item),               //Retornará um ID, Um Icone e um valor para Flipped, em 2 objetos (os Pares)
        icon: item,
        flipped: false,
    },{
        id: this.createId(item),
        icon: item,
        flipped: false,
    }]

},

createId :  function (item){                                //Criar o id para a carta
    return item + parseInt(Math.random() * 1000);           //ParseInt define um número inteiro fruto do resultado de um número aleatório entre 0 e 1000.
},

shuffleCards: function (cards){                            //Função para embaralhar as cartas.
    let currentIndex = this.cards.length;                  //CurrentIndex receberá o tamanho do meu array CARDS
    let randomIndex = 0;                                   //RandomIndex começará valendo 0;
 
    while(currentIndex !== 0){                                    //Enquanto eu não percorrer todos os elementos do meu array CARDS:
        randomIndex = Math.floor(Math.random() * currentIndex);   //RandomIndex recebe um número aleatório.
        currentIndex-- ;                                          //Então ao passar por cada elemento do array, este é decrementado do currentIndex
 
        [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex],this.cards[randomIndex]];  //Para embaralhar, inverto os valores cada vez que passar pelo WHILE.
     };
 },

}