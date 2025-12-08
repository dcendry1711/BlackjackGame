const startBtn = document.getElementById('start-btn')
const messageEl = document.getElementById('message-el')
const cardsEl = document.getElementById('cards-el')
const sumEl = document.getElementById("sum-el")
const nextCardBtn = document.getElementById('next-card-btn')

let sum = 0
let cardsArr = []

let hasBlackjack = false
let isAlive = true
let message = ''

startBtn.addEventListener('click',startGame)
nextCardBtn.addEventListener('click', newCard)

function getRandomCard(){
    const randomNumber = Math.floor((Math.random() * 13)+1)
    if(randomNumber === 1){
        return 11
    } else if (randomNumber >= 11){
        return 10
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsArr = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsEl.textContent = 'Cards: '

    cardsArr.forEach(card =>{
        cardsEl.textContent += `${card} `
    })

    sumEl.textContent = `Sum: ${sum}`

    if(sum === 21){
        message = 'Blackjack!'
        hasBlackjack = true
    } else if(sum <= 21){
        message = 'Do you want draw another card?'
        startBtn.style.visibility = 'hidden'
        nextCardBtn.style.display = 'block'
        nextCardBtn.style.position = 'relative'
        nextCardBtn.style.top = '-130px'
    } else {
        message = 'You lose!!!'
        nextCardBtn.style.display = 'none'
        startBtn.style.visibility = 'visible'
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackjack){
        const nCard = getRandomCard()
        sum += nCard 
        cardsArr.push(nCard)
        renderGame()
    } 
}

