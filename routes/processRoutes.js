const express = require('express');
const { buscarProcessos } = require('../controllers/processController');

const router = express.Router();

// Rota para buscar processos em múltiplos tribunais
router.post('/processos', buscarProcessos);

module.exports = router;
