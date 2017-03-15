/**
 * ES6 Classes introduced to provide simpler syntax to deal with proptotypical inheritance.
 * Classes are special functions
 */

// Class declaration
class Polygon {
  constructor(height, width) {
    // Here, this refers to the future instance of the class Polygon to be created
    // Meaning that all instances of Polygons will have height and width attributes
    this.height = height;
    this.width = width;
  }
}

var Rectangle = new Polygon();
Rectangle.height = 10;
Rectangle.width = 20;
console.log(Rectangle); //Polygon { height: 10, width: 20 }

// Class expression
// Named
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// unnamed
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
