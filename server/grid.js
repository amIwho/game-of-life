const Vector = require('./vector');

let instance = null;

class Grid {
  constructor(width, height) {
    if (!instance) instance = this;

    this.grid = new Array(width * height); // It is one-dimensional array where (x, y) value you can find by getting [x + width * y]
    this.width = width;
    this.height = height;
    this.directions = {
      u: new Vector(0, -1),
      ur: new Vector(1, -1),
      r: new Vector(1, 0),
      rd: new Vector(1, 1),
      d: new Vector(0, 1),
      dl: new Vector(-1, 1),
      l: new Vector(-1, 0),
      ul: new Vector(-1, -1),
    };

    return instance;
  }

  get(vector) {
    return this.grid[vector.x + (this.width * vector.y)];
  }

  set(vector, value) {
    this.grid[vector.x + (this.width * vector.y)] = value;
  }

  forEach(fn, context) {
    for (let y = 0; y < this.height; y += 1) {
      for (let x = 0; x < this.width; x += 1) {
        const value = this.grid[x + (y * this.width)];
        if (value != null) {
          fn.call(context, value, new Vector(x, y));
        }
      }
    }
  }

  free(x, y) {
    return !this.directions.some(vector => this.get((new Vector(x, y)).add(vector)) === 'X');
  }

}

module.exports = new Grid(100, 100);