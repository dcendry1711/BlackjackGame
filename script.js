const firstCard = Math.floor((Math.random() * 11)+1)
const secondCard = Math.floor((Math.random() * 11)+1)
const sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ''

console.log(firstCard)
console.log(secondCard)
console.log(sum)

if(sum === 21){
    message = 'Blackjack!'
    hasBlackjack = true
} else if(sum <= 21){
    message = 'Do you want draw another card?'
} else {
    message = 'You lose!!!'
    isAlive = false
}