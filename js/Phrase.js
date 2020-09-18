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
        const ul = document.querySelector('#phrase ul')
        phrase = game.activePhrase;
        console.log(phrase.phrase)

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

    //  checkLetter();

    //  showMatchedLetter();
 } 