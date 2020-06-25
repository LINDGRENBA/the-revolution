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

  checkTastiness(character) {
    if (this.tastiness > character.tastiness) {
      return true;
    } else {
      return false;
    }
  }
}


//One test suite per BDD spec
// You don't have to test 100% of your test behaviors.
//***DON'T FORGET TO PASS PARAMATERS AND RUN WHATEVER FUNCTIONS/METHODS YOU NEED IN ORDER TO HAVE ALL THE INFORMATION FOR THAT TEST */

//  switch case 1: let chicken = new Animal (5,2,4,level 1, food)

// switch case 2: let pig = new Animal (1, 2, 3, 4, )
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block


    // switch(charType) {
    //   case charType = "chicken":
    //     const chicken = new Character("chicken", 3, 0, 0, 0, 0, "food");
    // }