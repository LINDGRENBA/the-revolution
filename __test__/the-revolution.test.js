import { Character } from '../src/the-revolution.js';

describe('Character', () => {
  
  test('should correctly create an animal instance with properties assigned', () => {
    const pig = new Character("pig", 5, 7, 3, 9, 1, "food");
    expect(pig).toMatchObject({type: "pig", charm:0, wisdom:7, snark: 3, tastiness: 9, level: 1, title: "food"});
    // expect(pig.type).toEqual("pig");
    // expect(pig.charm).toEqual(0);
    // expect(pig.wisdom).toEqual(7);
    // expect(pig.snark).toEqual(3);
    // expect(pig.tastiness).toEqual(9);
    // expect(pig.level).toEqual(1);
    // expect(pig.title).toEqual("food");
  });
});