import Daemon from '../js/Daemon';

describe('Daemon class tests', () => {
  test('should create a Daemon character', () => {
    const daemon = new Daemon('John');
    const correct = {
      name: 'John',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(daemon).toEqual(correct);
  });
});
