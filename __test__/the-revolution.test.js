import { Character } from '../src/the-revolution.js';

describe('Character', () => {
  
  test('should correctly create an animal instance', () => {
    const pig = new Character("pig");
    expect(pig).toMatchObject({type: "pig"});
  });

  test('should assign different properties for different types', () => {
    const chicken = new Character("chicken");
    chicken.checkCharacterType();
    expect(chicken.charm).toEqual(3);
  });

  // test('should compare stats for tastiness', () => {
  //   const chicken = new Character();
  //   const human = new Character();
  //   expect(chicken.checkTastiness(human)).toBe(true)
  // })
});

