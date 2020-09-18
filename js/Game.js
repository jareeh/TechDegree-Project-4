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
        const phrase2 = new Phrase('javacsript');
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
 }