import { Animal } from '../src/the-revolution.js';

describe('Animal', () => {
  
  test('should correctly create an animal instance with properties assigned', () => {
    const pig = new Animal(5, 7, 3, 9, 1, "food");
    expect(pig.charm).toEqual(5);
    expect(pig.wisdom).toEqual(7);
    expect(pig.snark).toEqual(3);
    expect(pig.tastiness).toEqual(9);
    expect(pig.level).toEqual(1);
    expect(pig.title).toEqual("food");
  });
});