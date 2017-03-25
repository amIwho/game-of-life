import Vector from './vector';
import Grid from './grid';

export default class Game {
  constructor(canvas, options) {

    const defaults = {
      width: 100,
      height: 100,
      cellSize: 10,
      rules: '23/3',
      gridColor: "#eee",
      cellColor: '#ccc',
    };
    this.canvas = canvas;
    this.options = options;
    this.ctx = canvas.getContext('2d');
    this.step = 0;
    this.options = Object.assign(defaults, options);

    this.grid = new Grid(100, 100);
  }

  step() {
    // get all alive cells
    // calculate next step
    // update grid
  }

}
