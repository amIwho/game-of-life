import Vector from './vector';

export default class Grid {
  constructor(width, height) {
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

    this.$grid = this.generateDomMap(this.grid);
  }

  generateDomMap(grid) {
    let fragment = document.createDocumentFragment();
    let game = document.querySelector('#game-of-life');
    let cell;

    for (let x = 0; x < this.width; x += 1) {
      for (let y = 0; y < this.height; y += 1) {
        cell = document.createElement('div');
        cell.id = x + _ + y;
        cell.className = this.get(new Vector(x, y)) === 'X' ? 'creature' : 'jungle';

        cell.onclick((e) => {
          // some click logic
        });
        fragment.appendChild(cell);
      }
    }

    game.appendChild(fragment);

    return game;
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

