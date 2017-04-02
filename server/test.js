const should = require('should');
const io = require('socket.io-client');

const socketUrl = 'http://localhost:3000';

const options = {
  transports: ['websocket'],
  'force new connection': true
};

describe('Game server', () => {
  it('should broadcast map to all new users', (done) => {
    const client = io.connect(socketUrl, options);

    client.on('connect', (data) => {
      console.log(data);
      data.should.be.an('object');
      data.should.have.property('map');
    })
  });
});