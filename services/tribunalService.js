const axios = require('axios');
const { TRIBUNAIS_URLS } = require('../utils/api/apiConfig');

const API_KEY = 'cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

async function consultarTribunal(url, numeroProcesso) {
  try {
    console.log(`Consultando URL: ${url} com número do processo: ${numeroProcesso}`);
    const requestBody = {
      query: {
        match: {
          numeroProcesso: numeroProcesso.replace(/[^\d]/g, ''), // Remove caracteres especiais
        },
      },
    };

    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: `APIKey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return { tribunal: url, resultado: response.data };
  } catch (error) {
    console.error(`Erro ao consultar ${url}:`, error?.response?.data || error.message);
    return { tribunal: url, resultado: null }; // Retorna null como resultado em caso de erro
  }
}

async function consultarTodosTribunais(numeroProcesso) {
  const promessas = Object.entries(TRIBUNAIS_URLS).flatMap(([categoria, tribunais]) =>
    Object.entries(tribunais).map(async ([sigla, url]) => {
      return consultarTribunal(url, numeroProcesso);
    })
  );

  return Promise.all(promessas); // Garante que retorna sempre um array
}

module.exports = { consultarTodosTribunais };
