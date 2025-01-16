const { consultarTodosTribunais } = require('../services/tribunalService');

async function buscarProcessos(req, res) {
  const { numeroProcesso } = req.body;

  if (!numeroProcesso || typeof numeroProcesso !== 'string' || numeroProcesso.trim() === '') {
    return res.status(400).json({ error: 'Número do processo é obrigatório e deve ser uma string válida.' });
  }

  try {
    const resultados = await consultarTodosTribunais(numeroProcesso);

    if (!Array.isArray(resultados) || resultados.length === 0) {
      return res.status(500).json({ error: 'Erro ao processar os resultados dos tribunais.' });
    }

    const respostasRelevantes = resultados.filter(
      (item) => item.resultado && item.resultado.hits?.total?.value > 0
    );

    if (respostasRelevantes.length === 0) {
      return res.status(404).json({ message: 'Processo não encontrado em nenhum tribunal.' });
    }

    res.status(200).json({
      totalResultados: respostasRelevantes.length,
      dados: respostasRelevantes,
    });
  } catch (error) {
    console.error('Erro no controlador:', error.message);
    res.status(500).json({ error: 'Erro interno ao processar a busca.' });
  }
}

module.exports = { buscarProcessos };
