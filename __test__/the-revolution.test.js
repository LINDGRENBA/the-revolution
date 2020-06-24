import { Animal } from '../src/the-revolution.js';

describe('Animal', () => {
  
  test('should correctly create an animal object with properties assigned', () => {
    const pig = new Animal(5, 7, 3, 9, 1, "food");
    expect(pig.charm).toEqual(5);
    expect(pig.wisdom).toEqual(7);
    expect(pig.snark).toEqual(3);
    expect(pig.tastiness).toEqual(9);
    expect(pig.level).toEqual(1);
    expect(pig.title).toEqual("food");
  });

  // test('should return the correct assigned property for a human object', () => {
  //   let human = new Animal()
  //   // addHumanChar().charm;
  //   expect(addHumanChar().charm).toEqual(0);
  // });


  //human object should exist if animal object has been made
});