const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Deploy automático funcionando com sucesso e testada!');
});

// Este 'if' evita que o app inicie durante os testes
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
  });
}

module.exports = app; // Exporta o app para os testes