const startBtn = document.getElementById('start-btn')
const messageEl = document.getElementById('message-el')
const cardsEl = document.getElementById('cards-el')
const sumEl = document.getElementById("sum-el")
const nextCardBtn = document.getElementById('next-card-btn')

const firstCard = Math.floor((Math.random() * 11)+1)
const secondCard = Math.floor((Math.random() * 11)+1)
const cardsArr = [firstCard,secondCard]

let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ''

startBtn.addEventListener('click',startGame)
nextCardBtn.addEventListener('click', newCard)

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = 'Cards: '
    cardsArr.forEach(card =>{
        cardsEl.textContent += `${card} `
    })
    // cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
    if(sum === 21){
        message = 'Blackjack!'
        hasBlackjack = true
    } else if(sum <= 21){
        message = 'Do you want draw another card?'
        nextCardBtn.style.display = 'block'
    } else {
        message = 'You lose!!!'
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    const nCard = Math.floor((Math.random() * 11)+1)
    sum += nCard 
    cardsArr.push(nCard)
    console.log(cardsArr)
    startGame()
}

