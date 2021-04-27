'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API SERVER TESTING:', () => {

  it('should respond with a 404 on route not found', async () => {
    const response = await mockRequest.get('/no-thing')
    expect(response.status).toBe(404);
    });

    it('should respond with a 404 on bad method', async () => {
      return mockRequest.patch('/signup').then(data => {
        expect(data.status).toBe(404);
      });
    });

  // CREATE Database Tests =================================================

  // it('should create a new record in the db', async () => {
  //   const response = await mockRequest.post('/signup').send({username: 'test_subject', password: 'test_password'});
  //   expect(response.status).toBe(200);
  //   expect(response.body.username).toEqual('test_subject');
  //   expect(response.body.password).toEqual('test_password');
  // });


  // READ ONE Database Tests ================================================= 

  // it('should retieve an item from the db', async () => {
  //   let newUserFromDB = await mockRequest.post('/signup').send({username: 'test_subject002', password: 'test_password'});
  //   let id = newUserFromDB.body._id;
  //   const response = await mockRequest.get(`/clothes/${id}`)
  //   expect(response.status).toBe(200);
  //   expect(response.body.name).toEqual('test_skirt');
  // });

});
