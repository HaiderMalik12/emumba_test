class Card {
    constructor(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }

}

class Deck {

    constructor(names, suits, cards) {
        this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        this.cards = [];
    }

    getCards() {
        for (let s = 0; s < this.suits.length; s++) {
            for (let n = 0; n < this.names.length; n++) {
                this.cards.push(new Card(n + 1, this.names[n], this.suits[s]));
            }
        }
        return this.cards;
    }
    getRandomCard(){
     return this.cards[Math.floor(Math.random() * 4)];
    }
}

const _d = new Deck();
console.log(_d.getCards());
console.log(_d.getRandomCard());