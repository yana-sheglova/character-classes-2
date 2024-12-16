import Swordsman from '../js/Swordsman';

describe('Swordsman class tests', () => {
  test('should create a Swordsman character', () => {
    const swordsman = new Swordsman('John');
    const correct = {
      name: 'John',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(swordsman).toEqual(correct);
  });

  test('levelUp increases level and resets health', () => {
    const swordsman = new Swordsman('John');
    const correct = {
      name: 'John',
      type: 'Swordsman',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    };
    swordsman.levelUp();

    expect(swordsman).toEqual(correct);
  });

  test('cannot level up a dead character', () => {
    const swordsman = new Swordsman('John');
    swordsman.damage(150);
    expect(() => swordsman.levelUp()).toThrow('Нельзя повысить уровень мертвого персонажа');
  });
});
