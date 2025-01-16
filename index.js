const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const processRoutes = require('./routes/processRoutes');

const app = express();
const PORT = 3001;

// Configura o middleware de CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permite requisições do frontend local
  methods: ['GET', 'POST'],        // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
}));

app.use(express.json()); // Middleware para interpretar JSON
app.use('/api', processRoutes); // Define o prefixo de rotas

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
