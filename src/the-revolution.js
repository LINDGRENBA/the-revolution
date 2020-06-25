export class Character {
  constructor (type) {
    this.type = type;
    this.charm = 2;
    this.wisdom = 1;
    this.snark = 4;
    this.tastiness = 2;
    this.level = 0;
    this.title = "food";
  }

  checkCharacterType() {
    if(this.type === "chicken") {
      this.charm += 3;
      this.tastiness +=1;
    } else if (this.type === "human") {
      this.charm += 10
    }    
  }

  gorillaWarfare() {
    this.tastiness += 5;
  }
  
  checkTastiness(character) {
    if (this.tastiness > character.tastiness) {
      return true;
    } else {
      return false;
    }
  }

  levelUp() {
  if (this.charm + this.wisdom + this.tastiness + this.snark > 16) {
    this.level +=1
    }
  }

  updateTitle(){
    if(this.level === 1) {
      this.title = "pet";
    }
  }


  checkLevel(){

  }

  // ultimateBattle(){

  // }

}
  


// Gorilla Warfare(tastiness), Dance Off(charm), War of Wits(snark), Debate Battle(wisdom)


//One test suite per BDD spec
// You don't have to test 100% of your test behaviors.
//***DON'T FORGET TO PASS PARAMATERS AND RUN WHATEVER FUNCTIONS/METHODS YOU NEED IN ORDER TO HAVE ALL THE INFORMATION FOR THAT TEST */



