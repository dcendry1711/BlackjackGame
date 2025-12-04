const firstCard = Math.floor((Math.random() * 11)+1)
const secondCard = Math.floor((Math.random() * 11)+1)
const sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

console.log(firstCard)
console.log(secondCard)
console.log(sum)

if(sum === 21){
    console.log('Blackjack!')
    hasBlackjack = true
} else if(sum <= 21){
    console.log('Do you want draw another card?')
} else {
    console.log('You lose!!!')
    isAlive = false
}