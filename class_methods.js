class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width
  }

  area() {
    return this.height * this.width
  }
}

// let square = new Rectangle(100,100);
let square = new Rectangle();
// square.height = 100;
// square.width = 100;
console.log(square.area()); //10000
