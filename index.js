// Code your solutions in this file

function writeCards(cards, event) {
    let thankYou = []
    for (let i = 0; i < cards.length; i++) {
        thankYou.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
      }
      return thankYou
    }

function countDown(countdown) {
    while (countdown > 0) {
    console.log(countdown);
    countdown -= 1;
    }
    console.log(countdown)
}

