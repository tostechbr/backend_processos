const { consultarTodosTribunais } = require('../services/tribunalService');

// Controller para buscar processos
async function buscarProcessos(req, res) {
  const { numeroProcesso } = req.body;

  if (!numeroProcesso) {
    return res.status(400).json({ error: 'Número do processo é obrigatório.' });
  }

  try {
    // Consulta as APIs dos tribunais
    const resultados = await consultarTodosTribunais(numeroProcesso);

    // Filtrar resultados relevantes
    const respostasRelevantes = resultados.filter(
      (item) => item.resultado && item.resultado.hits.total.value > 0
    );

    if (respostasRelevantes.length === 0) {
      return res.status(404).json({ message: 'Processo não encontrado em nenhum tribunal.' });
    }

    // Retorna os resultados organizados
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
