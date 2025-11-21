 const request = require('supertest');
const app = require('./app'); // Importa app

describe('API Test', () => {
  it('deve retornar "Deploy automático funcionando com sucesso e testada!" na rota principal', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Deploy automático funcionando com sucesso e testada!');
  });
});
