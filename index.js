// Importa o Express
const express = require('express');

// Cria a aplicação
const app = express();

// Define a porta
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo à minha página!</h1><p>Esta é uma página simples feita com Node.js e Express.</p>');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

