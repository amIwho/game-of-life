const gridMap = require('./grid');

let arrayOfPlayers = [];

module.exports = function(ws) {
  ws.send(gridMap.grid);
  ws.on('echo', function(message) {
    ws.send(message);
  });
  ws.on('disconnect', onDisconnect);
  ws.on('new player', onNewPlayer);
  ws.on('new creature', onNewCreature);

  let gamePlayInterval = setInterval(gamePlay, 1000);

  function gamePlay() {
    if (!arrayOfPlayers.length) {
      clearInterval(gamePlayInterval);
    }
  }

  function onDisconnect(playerID) {
    console.log('Player disconnected' + playerID);
  }

  function onNewPlayer() {
    //generate userid
    //send it to user and put to array of users
    console.log('Add user to game')
  }

  function onNewCreature(playerID) {
    console.log('Added new creature of player' + playerID)
  }
};