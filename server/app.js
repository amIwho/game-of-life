const static = require('node-static');
const file = new static.Server('./public');


const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const cfg = require('./config.json');

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

function handler(req, res) {
  req.addListener('end', () => {
    file.serve(req, res);
  }).resume();
}

io.on('connection', function (socket) {
  socket.send('Hello');

  socket.on('message', (message) => {
    console.log(message);
  });

  socket.on('user:register', () => {
    console.log(arguments);
  })
});
