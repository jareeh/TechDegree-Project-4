/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.newGame();
    game.startGame();
})

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (e) => {
    if (e.target.className === 'key'){
        game.handleInteraction(e.target);
    }
})

document.addEventListener('keydown', (e) => {
    const buttons = document.querySelectorAll('.key');
    for (let i = 0; i < buttons.length; i++){
        if(buttons[i].textContent === e.key){
            game.handleInteraction(buttons[i]);
        }
    }

})