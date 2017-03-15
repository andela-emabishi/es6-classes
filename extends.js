class SuperHero {
  constructor(power, birth_planet) {
    this.power = power;
    this.birth_planet = birth_planet;
  }
}

class SuperMan extends SuperHero {
  constructor(power, birth_planet) {
    // Calls parent class constructor with power and birth_planet
    // i.e. it inherits the power and birth_planet attributes from the parent class SuperHero
    // when the Superman subclass is created
    super(power, birth_planet);
    this.name = 'Superman';
    this.romanticInterest = 'Lois Lane';
    this.main_villain = 'Lex Luthor';
  }

  getRomanticInterest() {
    return (this.name + '\'s romanticInterest is ' + this.romanticInterest);
  }

  getPower() {
    return (this.name + '\'s power is ' + this.power);
  }

  getMainVillain() {
    return (this.name + '\'s main antagonist is ' + this.main_villain);
  }
}

let ClarkKent = new SuperMan('X-Ray Vision', 'Krypton');
console.log(ClarkKent.getPower()); //Superman's power is X-Ray Vision
console.log(ClarkKent.getMainVillain()); //Superman's main antagonist is Lex Luthor
console.log(ClarkKent.getRomanticInterest()); //Superman's main antagonist is Lex Luthor
