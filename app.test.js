 const request = require('supertest');
const app = require('./app'); // Importa seu app

describe('API Test', () => {
  it('deve retornar "Olá, Mundo!" na rota principal', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Olá, Mundo!');
  });
});
