export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {
      throw new Error('`Тип должен быть одним из следующих: ${types.join(', ')}`');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    }
    if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
    if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень мертвого персонажа');
    }

    this.level += 1;
    this.attack = Math.floor(this.attack * 1.2);
    this.defence = Math.floor(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    this.health = Math.max(this.health - points * (1 - this.defence / 100), 0);
  }
}
