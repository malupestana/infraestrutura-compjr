 const request = require('supertest');
const app = require('./app'); // Importa app

describe('API Test', () => {
  it('deve retornar "Desafio de infraestrutura concluído" na rota principal', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Desafio de infraestrutura concluído');
  });
});
