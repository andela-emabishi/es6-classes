class Animal {
  constructor(name) {
    this.name = name;
  }

  speaks() {
    return (this.name + 'has a voice');
  }

  breathes() {
    return (this.name + 'breathes air');
  }
}

class Monkey extends Animal {
  speaks() {
    super.speaks(); // super refers to the parent class. super.speaks() calls speaks method in parent class
    return (this.name + ' Screeches');
  }
}

var Orangutang = new Monkey('Orangutang');
console.log(Orangutang.speaks()); //Orangutang Screeches
