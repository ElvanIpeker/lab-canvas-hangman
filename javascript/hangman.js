class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = ""
    this.guessedLetters=""
    this.errorsLeft=10
    this.letters=[]
  }

  pickWord() {
   var index = Math.floor( Math.random() * this.words.length)
   this.secretWord = this.words[index]
  return this.secretWord
  }

  checkIfLetter(keyCode) {
    return keyCode>=65 && keyCode<=90

  }

  checkClickedLetters(letter) {
    
    var hasLetter = this.letters.includes(letter)
    if (!hasLetter) {
      this.letters.push(letter)
    }
    return !hasLetter
  }

  addCorrectLetter(letter) {
    this.guessedLetters=this.guessedLetters+letter
  }

  addWrongLetter(letter) {
    this.errorsLeft=this.errorsLeft-1
    if (!this.letters.includes(letter)){
      this.letters.push(letter)
    }

    

    
  }

  checkGameOver() {
    const gameOver = this.errorsLeft === 0
    if (gameOver) setTimeout(() => canvas.gameOver(), 1000)
    return gameOver
    

    
  }

  checkWinner() {
    const checkWinner = this.secretWord.length == this.guessedLetters.length
    console.log(checkWinner, this.secretWord, this.guessedLetters)
if(checkWinner) setTimeout(()=> canvas.winner(), 1000)
return checkWinner
 
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman(["ironhack","code","academy"]);
  canvas = new HangmanCanvas(hangman.pickWord())
  canvas.createBoard()
  canvas.drawLines()
};

document.onkeydown = function (e) {
  if (!hangman.checkGameOver() && !hangman.checkWinner()) {
    if (hangman.checkIfLetter(e.which)) {
      if (hangman.checkClickedLetters(e.key)) {
        if (hangman.secretWord.includes(e.key)) {
          // correct letter
          const indexes = [];
          //ironhacki
          for(let i = 0; i < hangman.secretWord.length; i++) {
            if (hangman.secretWord[i] === e.key) indexes.push(i);
          }

          indexes.map(index => {
            hangman.addCorrectLetter(index);
            canvas.writeCorrectLetter(index);
          })

        } else {
          // wrong letter
          hangman.addWrongLetter();
          canvas.writeWrongLetter(e.key, hangman.errorsLeft);
          canvas.drawHangman(canvas.hangmanShape[5-hangman.errorsLeft]);
        }

      } else {
        alert('Repeated letter. Enter a diferent letter.')
      }
    }
  }
};