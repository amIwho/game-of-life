import Grid from './grid';

export default class Game {
  constructor(canvas, options) {
    const defaults = {
      width: 100,
      height: 100,
      gridColor: '#eee',
      cellColor: '#ccc',
    };
    this.canvas = canvas;
    this.options = Object.assign(defaults, options);

    this.ctx = canvas.getContext('2d');
    this.step = 0;
    this.grid = new Grid(100, 100);
  }

  start() {

  }

  nextGeneration() {

  }
}
