import Vector from './vector';

export default class Grid {
  constructor(width, height) {
    this.grid = new Array(width * height); // It is one-dimensional array where (x, y) value you can find by getting [x + width * y]
    this.width = width;
    this.height = height;
    this.directions = {
      n: new Vector(0, -1),
      ne: new Vector(1, -1),
      e: new Vector(1, 0),
      se: new Vector(1, 1),
      s: new Vector(0, 1),
      sw: new Vector(-1, 1),
      w: new Vector(-1, 0),
      nw: new Vector(-1, -1),
    };
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

