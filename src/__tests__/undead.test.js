import Undead from '../js/Undead';

describe('Undead class tests', () => {
  test('should create a Undead character', () => {
    const undead = new Undead('John');
    const correct = {
      name: 'John',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(undead).toEqual(correct);
  });
});
