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
    // super refers to the parent class. super.speaks() calls speaks method in parent class
    // super must be used before this is used as this refers to the instance of the parent class 
    // and super instantiates the attibutes of the parent class
    super.speaks();
    return (this.name + ' Screeches');
  }
}

var Orangutang = new Monkey('Orangutang');
console.log(Orangutang.speaks()); //Orangutang Screeches
