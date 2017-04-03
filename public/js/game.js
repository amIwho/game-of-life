
class Game {
  constructor() {
    const cellColor = genRandomColor();

    var ws = new WebSocket('ws://' + window.document.location.host.replace(/:.*/, '') + ':3001');
    ws.onmessage = function (event) {
      alert(event.data);
    };

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