const axios = require('axios');
const { TRIBUNAIS_URLS } = require('./utils/api/config'); // Atualize o caminho se necessário

// Número do processo que será testado
const numeroProcesso = '0801611-34.2016.4.05.8401';

// Escolhendo a API do TRF5
const tribunalUrl = TRIBUNAIS_URLS.federal.trf5;

// Função para testar a busca no backend
async function testarBusca() {
  const requestBody = {
    query: {
      match: {
        numeroProcesso: numeroProcesso.replace(/[-.]/g, ''), // Removendo caracteres inválidos
      },
    },
  };

  try {
    console.log('Iniciando teste de busca no backend...');
    const response = await axios.post(tribunalUrl, requestBody, {
      headers: {
        Authorization: `APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Resposta da API:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Erro ao testar o backend:', error.response?.data || error.message);
  }
}

// Executa a função de teste
testarBusca();
