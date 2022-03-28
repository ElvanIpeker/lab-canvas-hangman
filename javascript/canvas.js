class HangmanCanvas {

   constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  
    this.secretWord=secretWord;

    this.hangmanShape=["Head","Body","RigthLeg","LeftLeg","RigthArm","LeftArm"];
  
  }

  /**
   * - the method that should clear the `canvas`, 
   * so every time we start the game we have a clean one. 
   * This method also should call the next one we will define, the _drawLines()_.
   */
  createBoard() {
    console.log("create Board Called");
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0,0,1200,800);
    /*
     the method that should draw one line for each letter of the secret word. At this point we know the secret word the user has to guess.

    */
  }

  /**
   *  the method that should draw one line for each letter of the secret word.
   *  At this point we know the secret word the user has to guess.
   */
  drawLines() {
    console.log("draw lines called");
    let starting_x=500;
    let starting_y=700;
    
    
    for (let i=0; i<this.secretWord.length;i++){
      this.ctx.beginPath();  
      this.ctx.moveTo(starting_x,starting_y);
      this.ctx.lineTo(starting_x+30,starting_y);  
      this.ctx.stroke();
      starting_x=starting_x+50;
    }

    
  }
  
  drawChar(index) { 
    
    console.log("draw lines called");
    let starting_x=500+(index*50);
    let starting_y=700;
    
      
      this.ctx.font="50px sans serif";
      this.ctx.strokeText(this.secretWord[index],starting_x,starting_y);

    
  }
  

  draw_Head(){
    let starting_x=300;
    let starting_y=200;
    
  
      this.ctx.beginPath();  
      this.ctx.arc(starting_x,starting_y,50,0,2*Math.PI);  
      this.ctx.stroke();
      
  }


  draw_Body(){
    console.log("Draw body called");
    
    let starting_x=300;
    let starting_y=200;
      this.ctx.beginPath();  
      this.ctx.moveTo(starting_x,starting_y+50);  
      this.ctx.lineTo(starting_x,starting_y+300);  
      this.ctx.stroke();
  }

  draw_legr(){
    console.log("Draw body called");
    
    let starting_x=300;
    let starting_y=200;
      this.ctx.beginPath();  
      this.ctx.moveTo(starting_x,starting_y+300);  
      this.ctx.lineTo(starting_x+50,starting_y+350);  
      this.ctx.stroke();
  }
  draw_legl(){
    console.log("Draw body called");
    
    let starting_x=300;
    let starting_y=200;
      this.ctx.beginPath();  
      this.ctx.moveTo(starting_x,starting_y+300);  
      this.ctx.lineTo(starting_x-50,starting_y+350);  
      this.ctx.stroke();
  }

  draw_armr(){
    console.log("Draw arm called");
    
    let starting_x=300;
    let starting_y=50;
      this.ctx.beginPath();  
      this.ctx.moveTo(starting_x,starting_y+300);  
      this.ctx.lineTo(starting_x+50,starting_y+350);  
      this.ctx.stroke();
  }
  draw_arml(){
    console.log("Draw armcalled");
    
    let starting_x=300;
    let starting_y=50;
      this.ctx.beginPath();  
      this.ctx.moveTo(starting_x,starting_y+300);  
      this.ctx.lineTo(starting_x-50,starting_y+350);  
      this.ctx.stroke();
  }
  /**
   * also for the wrong letter: 
   * the methods that should write the letter on which the user has just clicked, 
   * on the appropriate part of the canvas. After checking if the letter was not already clicked,
   *  we should write it on our board. If the secret word includes the letter,
   *  we should write it in the position where it belongs,
   *  and if the letter is not included in the secret word, we should write it on the top right corner, 
   * so that the user knows which letters were already clicked.} index 
   */
  writeCorrectLetter(index) {
    console.log("Correct Letter Index : "+index+ ", "+this.secretWord);
    this.drawChar(index);
  }

  writeWrongLetter(letter, errorsLeft) {
    
  }

  
  drawHangman(shape) {

      console.log(shape);

      if(shape=="Head"){
          this.draw_Head();
      } else if(shape=="Body"){
        this.draw_Body();
    } else if (shape=="RigthLeg"){
      this.draw_legr();
    }
    else if (shape=="LeftLeg"){
      this.draw_legl();
    }
    else if (shape=="RigthArm"){
      this.draw_armr();
    }
    else if (shape=="LeftArm"){
      this.draw_arml();
    }
    else {
        
    }
  }

  gameOver() {
      console.log("Game Over");
      let img = document.createElement("img");
      img.style.position="absolute";
      img.style.top="60%";
      img.style.left="30%";

      img.src="images/gameover.png";
      document.body.appendChild(img);

  }

  winner() {
      console.log("Winner");
      let image = document.createElement("img");
      image.style.position="absolute";
      image.style.top="80%";
      image.style.left="20%";
      image.src = "images/awesome.png";
      document.body.appendChild(image)
  }

}