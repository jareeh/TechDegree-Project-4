/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases()
        this.activePhrase = null;
    }


    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        const phrase1 = new Phrase('Hi there');
        const phrase2 = new Phrase('javascript');
        const phrase3 = new Phrase('I Love you');
        const phrase4 = new Phrase('How are you');
        const phrase5 = new Phrase('Austin Texas');
        return [phrase1,
                phrase2,
                phrase3,
                phrase4,
                phrase5];
    }


    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase(){
        const random = Math.floor(Math.random() * 5);
        return this.phrases[random]
    }


    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };


    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin(){
        const hidden = document.querySelectorAll('.hide');
        console.log(hidden);
        if(hidden.length === 0){
            return true;
        } else {
            return false;
        }
    }


    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife(){
        if (this.missed < 5){
            document.querySelectorAll('.tries')[this.missed].firstElementChild.src = 'images/lostHeart.png';
            this.missed++;
        } else {
            this.gameOver();
        }
    };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game 
    */
    gameOver(gameWon){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        const h1 = document.getElementById('game-over-message');
        if(gameWon){
            h1.textContent = 'Congratulations!';
            overlay.className = 'win';
        } else {
            h1.textContent = 'Try again';
            overlay.className = 'lose';
        }
    };
 }