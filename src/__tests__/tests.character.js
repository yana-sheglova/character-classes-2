import Character from '../js/Character';

describe('Character class tests', () => {
  test('should create a valid character', () => {
    const character = new Character('Ben', 'Bowman');
    const correct = {
      name: 'Ben',
      type: 'Bowman',
      health: 100,
      level: 1,
    };

    expect(character).toEqual(correct);
  });

  test('should throw an error if name is invalid', () => {
    expect(() => new Character('A', 'Bowman')).toThrow(Error);
    expect(() => new Character('', 'Bowman')).toThrow(Error);
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow(Error);
  });

  test('should throw an error if type is invalid', () => {
    expect(() => new Character('Ben', 'Zombee')).toThrow(Error);
  });
});
