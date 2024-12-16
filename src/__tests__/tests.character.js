import Character from '../js/Character';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

describe('Character class tests', () => {
  test('should create a valid character', () => {
    const character = new Character('Ben', 'Bowman');
    expect(character.name).toBe('Ben');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
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

describe('Bowerman class tests', () => {
  test('should create a Bowerman character', () => {
    const bowman = new Bowman('John');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('levelUp increases level and resets health', () => {
    const bowman = new Bowman('John');
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30);
    expect(bowman.defence).toBe(30);
  });

  test('cannot level up a dead character', () => {
    const bowman = new Bowman('John');
    bowman.damage(150);
    expect(() => bowman.levelUp()).toThrow('Нельзя повысить уровень мертвого персонажа');
  });
});

describe('Swordsman class tests', () => {
  test('should create a Swordsman character', () => {
    const swordsman = new Swordsman('John');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('levelUp increases level and resets health', () => {
    const swordsman = new Swordsman('John');
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
    expect(swordsman.attack).toBe(48);
    expect(swordsman.defence).toBe(12);
  });

  test('cannot level up a dead character', () => {
    const swordsman = new Swordsman('John');
    swordsman.damage(150);
    expect(() => swordsman.levelUp()).toThrow('Нельзя повысить уровень мертвого персонажа');
  });
});

describe('Magician class tests', () => {
  test('should create a Magician character', () => {
    const magician = new Magician('John');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

describe('Daemon class tests', () => {
  test('should create a Daemon character', () => {
    const daemon = new Daemon('John');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});

describe('Undead class tests', () => {
  test('should create a Undead character', () => {
    const undead = new Undead('John');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe('Zombie class tests', () => {
  test('should create a Zombie character', () => {
    const zombie = new Zombie('John');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
