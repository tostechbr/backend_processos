const express = require('express');
const processRoutes = require('./routes/processRoutes');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para interpretar JSON
app.use('/api', processRoutes); // Define o prefixo de rotas

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
