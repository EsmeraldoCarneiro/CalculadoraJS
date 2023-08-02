const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  if (!expression || !isValidExpression(expression)) {
    res.status(400).json({ error: 'Expressão inválida.' });
  } else {
    try {
      const result = eval(expression);
      res.json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao calcular a expressão.' });
    }
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

function isValidExpression(expression) {
  // Implemente aqui alguma lógica de validação da expressão, se necessário
  return true;
}
