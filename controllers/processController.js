const { consultarTodosTribunais } = require('../services/tribunalService');

// Função para formatar os dados relevantes
function formatarDados(rawData) {
  return rawData.map((item) => {
    const processos = item.resultado.hits.hits.map((hit) => ({
      tribunal: hit._source.tribunal || 'Não especificado',
      numeroProcesso: hit._source.numeroProcesso,
      classe: hit._source.classe?.nome || 'Não especificado',
      assuntos: hit._source.assuntos?.map((assunto) => assunto.nome) || [],
      dataAjuizamento: hit._source.dataAjuizamento,
      ultimaAtualizacao: hit._source.dataHoraUltimaAtualizacao,
      orgaoJulgador: hit._source.orgaoJulgador?.nome || 'Não especificado',
      resumo: `Processo nº ${hit._source.numeroProcesso} - ${hit._source.classe?.nome || ''}. 
               Ajuizado em ${new Date(hit._source.dataAjuizamento).toLocaleDateString()}. 
               Última atualização: ${new Date(hit._source.dataHoraUltimaAtualizacao).toLocaleDateString()}.`,
    }));
    return processos;
  }).flat(); // Une os arrays para criar uma lista única
}


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

    // Filtrar somente os tribunais com resultados relevantes
    const respostasRelevantes = resultados.filter(
      (item) => item.resultado && item.resultado.hits?.total?.value > 0
    );

    if (respostasRelevantes.length === 0) {
      return res.status(404).json({ message: 'Processo não encontrado em nenhum tribunal.' });
    }

    // Formatar os dados para retornar apenas as informações relevantes
    const dadosFormatados = formatarDados(respostasRelevantes);

    res.status(200).json({
      totalResultados: dadosFormatados.length,
      processos: dadosFormatados,
    });
  } catch (error) {
    console.error('Erro no controlador:', error.message);
    res.status(500).json({ error: 'Erro interno ao processar a busca.' });
  }
}

module.exports = { buscarProcessos };
