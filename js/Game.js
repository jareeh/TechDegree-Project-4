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
        //Phase 1
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    newGame(){
        //Phase 2
        //remove all li elements from ul
        const ul = document.querySelector('#phrase ul');
        const list = document.querySelectorAll('#phrase ul li');
        if(list){
            for (let i = 0; i < list.length; i++){
                ul.removeChild(list[i]);
            }
        }

        //enable all onscreen keyboard buttons
        const keys = document.querySelectorAll('.key')
        for (let i = 0; i < keys.length; i++){
            keys[i].disabled = false;
        }

        //update button classes to only 'key'
        for (let i = 0; i < keys.length; i++){
            keys[i].className = 'key';
        }
        //reset heart images
        const hearts = document.querySelectorAll('.tries');
        for (let i = 0; i < hearts.length; i++){
            hearts[i].children[0].src = 'images/liveHeart.png';
        }
    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin(){
        const hidden = document.querySelectorAll('.hide');
        if(hidden.length === 0){
            return true;
        } else {
            return false;
        }
    };


    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife(){
        if (this.missed < 4){
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

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element */
    handleInteraction(button){        
        button.disabled = true;
        if(!this.activePhrase.phrase.includes(button.textContent)){
            this.removeLife();
            button.classList.add('wrong');
        } else if (this.activePhrase.phrase.includes(button.textContent)){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
                this.gameOver(true)
            }
        }
    };

 }