const port = 3000;
const static = require('node-static');
const staticServer = new static.Server('./public', {cache: 3600, gzip: true});

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    staticServer.serve(request, response);
  }).resume();
}).listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
