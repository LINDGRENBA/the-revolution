export class Character {
  constructor (type) {
    this.type = type;
    this.charm;
    this.wisdom;
    this.snark;
    this.tastiness;
    this.level;
    this.title;
  }

  

  checkCharacterType() {
    if(this.type === "chicken") {
      // const chicken = new Character("chicken", 3, 0, 0, 0, 0, "food");
      this.charm = 3;
    }
  }
  // checkTastiness(character) {
  //   // if (this.tastiness > character.tastiness) {
  //   //  return true
  //   //} else {
  //   //  return false
  // }
}




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