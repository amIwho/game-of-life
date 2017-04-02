import Socket from './socket';

class Game {
  constructor() {
    const cellColor = genRandomColor();
    const io = new Socket('http://localhost:3000');

    io.on('connect', (data) => {
      this.grid = data;
    });

    io.emit({
      userColor: cellColor
    });

    return this;
  }

  render() {

  }
}

function genRandomColor() {
  let color = '#';
  for (let i = 0; i < 6; i += 1 ) { color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];}
  return color;
}

let gameOfLife = new Game();