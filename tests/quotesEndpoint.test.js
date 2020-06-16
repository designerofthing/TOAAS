const app = require("../app");
const supertest = require("supertest");
const expect = require("chai").expect;
const jsonResponse = require('./jsonResponse')

let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

describe('GET /quotes', () => {

  before(async () =>{
    response = await request.get('/quotes')
  })

  it('responds with status 200', () => {
    expect(response.status).to.equal(200)
  });

  it('responds with a collection of quotes', () => {
    const expectedBody = { quotes: [{quote: 'Low hanging fruit!'}, {quote: 'Amen Brother!'}]}
    expect(jsonResponse(response)).to.equal(JSON.stringify(expectedBody))
  });
})
