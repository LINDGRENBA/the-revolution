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

  test('should add amount to tastiness property for both characters in battle', () => {
    const chicken = new Character("chicken");
    const human = new Character("human");
    chicken.gorillaWarfare();
    human.gorillaWarfare();
    expect(chicken.tastiness).toBe(7);
    expect(human.tastiness).toBe(7);
  });

  test('should compare stats for tastiness', () => {
    const chicken = new Character("chicken");
    const human = new Character("human");
    chicken.checkCharacterType();
    human.checkCharacterType();
    expect(chicken.checkTastiness(human)).toBe(true);
  });

  test('should increase level by one once total of certain properties reaches given value', () => {
    const chicken = new Character("chicken");
    chicken.checkCharacterType();
    chicken.gorillaWarfare();
    chicken.levelUp();
    expect(chicken.level).toBe(1);
  });

  test('should update title once level increases by 1', () => {
    const chicken = new Character("chicken");
    chicken.checkCharacterType();
    chicken.gorillaWarfare();
    chicken.levelUp();
    chicken.updateTitle();
    expect(chicken.title).toBe("pet");
  });

  test('should return true if object level is a predefined value', () => {
    const human = new Character("human");
    human.level = 5;
    expect(human.checkLevel()).toBe(true);
  });

  test ('change title of battle winner to Queen of the Universe', () => {
    const human = new Character("human");
    const chicken = new Character("chicken");
    human.ultimateBattle();
    expect(human.ultimateBattle(chicken)).toBe("Queen of the Universe");
  });

  // test('should return the correct assigned property for a human object', () => {
  //   let human = new Animal()
  //   // addHumanChar().charm;
  //   expect(addHumanChar().charm).toEqual(0);
  // });


  //human object should exist if animal object has been made
});