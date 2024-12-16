import Magician from '../js/Magician';

describe('Magician class tests', () => {
  test('should create a Magician character', () => {
    const magician = new Magician('John');
    const correct = {
      name: 'John',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(magician).toEqual(correct);
  });
});
