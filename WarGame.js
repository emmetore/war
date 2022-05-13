/*

Deal 26 Cards to two Players from a Deck. 
Iterate through the turns where each Player plays a Card
The Player who played the higher card is awarded a point
Ties result in zero points for either Player
After all cards have been played, display the score.
Write a Unit Test using Mocha and Chai for at least one of the functions you write.

*/




//CREATING THE DECK

alert("press ok to begin playing war.")

const fullDeck = [];

function newDeck() {

    const cardSuits = ["♥", "♧", "♢", "♤"];
    const cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


    //smash the suits, numbers, and values together into a single array we can access later
    for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j < cardNumbers.length; j++) {
            fullDeck.push([cardValues[j], cardNumbers[j] + cardSuits[i],]);
            
        }
    }
    console.log(fullDeck);//sanity check
    return fullDeck;
}

// console.log(newDeck()); just checking our work


//we want to shuffle our deck by replacing the first card with a card at a random index
function shuffle(deck) {
    for (let i = 0; i < fullDeck.length; i++) {
        let randomCard = deck[i];
        let randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = randomCard;
    }
}

//create a new deck from our newDeck function and shuffle it
var deck1 = newDeck();

shuffle(deck1);
console.log(deck1);
//here's our randomized deck.



//create players
let player1 = prompt('Enter player1 name');
let player2 = prompt('Enter player2 name');

//create a variable to store the score and set each player's score to zero to start.
let player1score = 0;
let player2score = 0;

// console.log(player1score, player2score);

//Now we need to deal the cards to the two players.

let player1deck = deck1.splice(0, 26);
let player2deck = deck1.splice(0, 26);

// console.log(player1deck, player2deck);


//RUNNING THE GAME
//loop through each players hands and compare each player's current index
for (let i = 0; i < player2deck.length; i++) {
    console.log(`${player1} score is ${player1score} and ${player2} score is ${player2score}`);

    if (player1deck[i] > player2deck[i]) {
        player1score++;
        console.log(`${player1} gets 1 point`);

    } else if (player2deck[i] > player1deck[i]) {
        player2score++;
        console.log(`${player2} gets 1 point`);

        //if it's a tie, no one gets a point.
    } else {
        console.log("Tie! No points to either player");
    }
}

//Display results
if (player1score > player2score) {
    console.log(`${player1} wins.`);
    alert(`${player1} wins.`);
} else if (player2score > player1score) {
    console.log(`${player2} wins.`);
    alert(`${player2} wins.`);
} else {
    console.log(`Tie Game. Play again.`);
    alert(`Tie Game. Play again.`);
}

