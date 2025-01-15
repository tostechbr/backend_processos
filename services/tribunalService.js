const axios = require('axios');
const { TRIBUNAIS_URLS } = require('../utils/apiConfig');

// Consulta a um tribunal específico
async function consultarTribunal(url, numeroProcesso) {
  try {
    const requestBody = {
      query: {
        match: {
          numeroProcesso: numeroProcesso.replace(/[^\d]/g, ''), // Remove caracteres especiais
        },
      },
    };

    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: `APIKey ${process.env.API_KEY || 'SUA_API_KEY_AQUI'}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data; // Retorna os dados da API
  } catch (error) {
    console.error(`Erro ao consultar ${url}:`, error.response?.data || error.message);
    return null; // Retorna nulo em caso de erro
  }
}

// Consulta todos os tribunais em paralelo
async function consultarTodosTribunais(numeroProcesso) {
  const promessas = Object.entries(TRIBUNAIS_URLS).map(async ([tribunal, url]) => {
    const resultado = await consultarTribunal(url, numeroProcesso);
    return { tribunal, resultado };
  });

  return Promise.all(promessas);
}

module.exports = { consultarTodosTribunais };
