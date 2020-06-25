import { Character } from '../src/the-revolution.js';

describe('Character', () => {
  
  test('should correctly create an animal instance with properties assigned', () => {
    const pig = new Character("pig", 5, 7, 3, 9, 1, "food");
    expect(pig).toMatchObject({type: "pig", charm: 5, wisdom:7, snark: 3, tastiness: 9, level: 1, title: "food"});
  });
});