const request = require('supertest');
const app = require('./app');

describe('Requests to the root path', () => {
  it('Returns 200 status code', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('Returns html format', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

  it('Returns and index file with items', (done) => {
    request(app)
      .get('/items')
      .expect(/items/i, done);
  });
});

describe('Listing items on /items', () => {
  it('Returns 200 status code', (done) => {
    request(app)
      .get('/items')
      .expect(200, done);
  });
  it('Returns 404 status code', (done) => {
    request(app)
      .get('/klahsdflkianvfpolrueipqoiwvnz')
      .expect(404, done);
  });

  it('Returns json format', (done) => {
    request(app)
      .get('/items')
      .expect('Content-Type', /json/, done);
  });

  it('Returns initial items', (done) => {
    request(app)
      .get('/items')
      .expect(JSON.stringify({
        items: [0, 0, 0, 0, 1, 1, 1, 0],
      }), done);
  });
});
