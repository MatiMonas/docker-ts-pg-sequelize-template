const request = require('supertest');
const { server } = require('../../api');

describe('Test Routes', () => {
  describe('/test', () => {
    it('should return status 200 and "Hello World" string', async () => {
      const res = await request(server).get('/test');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ message: 'Hello World!' });
    });
  });
});
