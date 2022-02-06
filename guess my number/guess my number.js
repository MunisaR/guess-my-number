'use strict'


let secretNumber = Math.trunc(Math.random(Math.round())*20) + 1
let score = 20
let highscore = 0

const message = function (message) {
    document.querySelector('.message').textContent = message
    
}

message()


//When the button "check" is clicked
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    let highscore = Number(document.querySelector('.highscore').textContent)


    //When there is no input

    if (!guess) {
        document.querySelector('.message').textContent = '❗❗❗ Input a Number'
    }
    //When the input number is greater than the secret number
    else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'My number is smaller than yours 😕 '
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.message').textContent = '☠☠☠ You lost the game'
            document.querySelector('.score').textContent = 0
            
        }
        document.querySelector('.message').textContent = 'My number is smaller than yours 😕 '
        
    }
    //When the input number is smaller than the secret number 
    else if (guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'My number is greater than your guess 😖'
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.message').textContent = '☠☠☠ You lost the game'
            document.querySelector('.score').textContent = 0
        }
    }
    //When the input number is equal to the secret number
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉😎 You nailed it BOY'
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        if (highscore < score) {
            document.querySelector('.highscore').textContent = score
        }
    }
    
    //Have no idea, in case if there are also some cases🤦‍♀️🤦‍♀️😉
    else {
        document.querySelector('.message').textContent = 'You\'re wrong'
    }
    
})

document.querySelector('.again').addEventListener('click', function() {
    
    secretNumber = Math.trunc(Math.random(Math.round())*20) + 1
    score = 20
    
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = 'Start guessing ...'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
})