import Bowman from '../js/Bowman';

describe('Bowerman class tests', () => {
  test('should create a Bowerman character', () => {
    const bowman = new Bowman('John');
    const correct = {
      name: 'John',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(bowman).toEqual(correct);
  });

  test('levelUp increases level and resets health', () => {
    const bowman = new Bowman('John');
    const correct = {
      name: 'John',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    };
    bowman.levelUp();
    expect(bowman).toEqual(correct);
  });

  test('cannot level up a dead character', () => {
    const bowman = new Bowman('John');
    bowman.damage(150);
    expect(() => bowman.levelUp()).toThrow('Нельзя повысить уровень мертвого персонажа');
  });
});
