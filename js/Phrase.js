/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }

     /**
     * Display phrase on game board
     */
     addPhraseToDisplay(){
        const ul = document.querySelector('#phrase ul');
        phrase = game.activePhrase;

        for (let i = 0; i < phrase.phrase.length; i++){
            const li = document.createElement('li');

            if(phrase.phrase.charAt(i) === ' '){
                li.className = `space`;
                ul.appendChild(li);
            } else {
                li.className = `hide letter ${phrase.phrase.charAt(i)}`;
                li.textContent = `${phrase.phrase.charAt(i)}`;
                ul.appendChild(li);
            }
        }
    };

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check */
    checkLetter(letter){
        if(game.activePhrase.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    };

    /**
    * Displays passed letter on screen after a match is found * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        const li = document.querySelectorAll(`.hide.letter.${letter}`);
        for (let i = 0; i < li.length; i++){
            if(this.checkLetter(letter)){
            li[i].className = `show letter ${letter}`
            }
        }
    };
 } 