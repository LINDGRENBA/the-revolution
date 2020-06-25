import { Character } from '../src/the-revolution.js';

describe('Character', () => {
  
  test('should correctly create an animal instance', () => {
    const pig = new Character("pig");
    expect(pig).toMatchObject({type: "pig"});
  });

  test('should assign different properties for different types', () => {
    const chicken = new Character("chicken");
    chicken.checkCharacterType();
    expect(chicken.charm).toEqual(5);
  });

  test('should compare stats for tastiness', () => {
    const chicken = new Character("chicken");
    const human = new Character("human");
    chicken.checkCharacterType();
    human.checkCharacterType();
    expect(chicken.checkTastiness(human)).toBe(true);
  });
});

