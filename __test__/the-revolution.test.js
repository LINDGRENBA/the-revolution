import { Character } from '../src/the-revolution.js';

describe('Character', () => {
  
  test('should correctly create an animal instance', () => {
    const pig = new Character("pig", 5, 7, 3, 9, 1, "food");
    expect(pig).toMatchObject({type: "pig", charm: 5, wisdom:7, snark: 3, tastiness: 9, level: 1, title: "food"});
  });

  test('should assign different properties for different types', () => {

    const chicken = new Character("chicken");
    chicken.checkCharacterType();
    expect(chicken.charm).toEqual(5);
  });

  // test('should compare stats for tastiness', () => {
  //   const chicken = new Character();
  //   const human = new Character();
  //   expect(chicken.checkTastiness(human)).toBe(true)
  // })
});

