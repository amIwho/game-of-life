class Game {
  constructor() {
    const cellColor = genRandomColor();

    let ws = new WebSocket('ws://' + window.document.location.host.replace(/:.*/, '') + ':3001');
    ws.onmessage = this.parseWSData;

    return this;
  }

  /**
   * Generate HTML of given grid
   * @param grid - array [100*100]
   * @returns {Element}
   */
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

  /**
   * Getting data from WS
   * @param event
   */
  parseWSData(event) {
    const map = event.data && event.data.map;
    if (!map) alert('Проверьте интернет-соединение, нет связи с сервером');

    this.generateDomMap(map);

  }
}

function genRandomColor() {
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
  }
  return color;
}

let gameOfLife = new Game();