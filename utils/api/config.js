const TRIBUNAIS_URLS = {
  // Tribunais Superiores
  superiores: {
    tst: 'https://api-publica.datajud.cnj.jus.br/api_publica_tst/_search', // Tribunal Superior do Trabalho
    tse: 'https://api-publica.datajud.cnj.jus.br/api_publica_tse/_search', // Tribunal Superior Eleitoral
    stj: 'https://api-publica.datajud.cnj.jus.br/api_publica_stj/_search', // Tribunal Superior de Justiça
    stm: 'https://api-publica.datajud.cnj.jus.br/api_publica_stm/_search', // Tribunal Superior Militar
  },

  // Justiça Federal
  federal: {
    trf1: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf1/_search', // TRF 1ª Região
    trf2: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf2/_search', // TRF 2ª Região
    trf3: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf3/_search', // TRF 3ª Região
    trf4: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf4/_search', // TRF 4ª Região
    trf5: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf5/_search', // TRF 5ª Região
    trf6: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf6/_search', // TRF 6ª Região
  },

  // Justiça Estadual
  estadual: {
    tjac: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjac/_search', // Acre
    tjal: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjal/_search', // Alagoas
    tjam: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjam/_search', // Amazonas
    tjap: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjap/_search', // Amapá
    tjba: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjba/_search', // Bahia
    tjce: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjce/_search', // Ceará
    tjdft: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjdft/_search', // Distrito Federal e Territórios
    tjes: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjes/_search', // Espírito Santo
    tjgo: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjgo/_search', // Goiás
    tjma: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjma/_search', // Maranhão
    tjmg: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmg/_search', // Minas Gerais
    tjms: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjms/_search', // Mato Grosso do Sul
    tjmt: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmt/_search', // Mato Grosso
    tjpa: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpa/_search', // Pará
    tjpb: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpb/_search', // Paraíba
    tjpe: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpe/_search', // Pernambuco
    tjpi: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpi/_search', // Piauí
    tjpr: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpr/_search', // Paraná
    tjrj: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrj/_search', // Rio de Janeiro
    tjrn: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrn/_search', // Rio Grande do Norte
    tjro: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjro/_search', // Rondônia
    tjrr: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrr/_search', // Roraima
    tjrs: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrs/_search', // Rio Grande do Sul
    tjsc: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjsc/_search', // Santa Catarina
    tjse: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjse/_search', // Sergipe
    tjsp: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjsp/_search', // São Paulo
    tjto: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjto/_search', // Tocantins
  },

  // Justiça do Trabalho
  trabalho: {
    trt1: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt1/_search', // TRT 1ª Região
    trt2: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt2/_search', // TRT 2ª Região
    trt3: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt3/_search', // TRT 3ª Região
    trt4: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt4/_search', // TRT 4ª Região
    trt5: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt5/_search', // TRT 5ª Região
    trt6: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt6/_search', // TRT 6ª Região
    trt7: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt7/_search', // TRT 7ª Região
    trt8: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt8/_search', // TRT 8ª Região
    trt9: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt9/_search', // TRT 9ª Região
    trt10: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt10/_search', // TRT 10ª Região
    trt11: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt11/_search', // TRT 11ª Região
    trt12: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt12/_search', // TRT 12ª Região
    trt13: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt13/_search', // TRT 13ª Região
    trt14: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt14/_search', // TRT 14ª Região
    trt15: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt15/_search', // TRT 15ª Região
    trt16: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt16/_search', // TRT 16ª Região
    trt17: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt17/_search', // TRT 17ª Região
    trt18: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt18/_search', // TRT 18ª Região
    trt19: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt19/_search', // TRT 19ª Região
    trt20: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt20/_search', // TRT 20ª Região
    trt21: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt21/_search', // TRT 21ª Região
    trt22: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt22/_search', // TRT 22ª Região
    trt23: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt23/_search', // TRT 23ª Região
    trt24: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt24/_search', // TRT 24ª Região
  },

  // Justiça Eleitoral
  eleitoral: {
    tre_ac: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ac/_search', // TRE Acre
    tre_al: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-al/_search', // TRE Alagoas
    tre_am: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-am/_search', // TRE Amazonas
    tre_ap: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ap/_search', // TRE Amapá
    tre_ce: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ce/_search', // TRE Ceará
    tre_es: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-es/_search', // TRE Espírito Santo
    tre_go: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-go/_search', // TRE Goiás
    tre_ma: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ma/_search', // TRE Maranhão
    tre_mg: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-mg/_search', // TRE Minas Gerais
    tre_pa: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pa/_search', // TRE Pará
    tre_pb: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pb/_search', // TRE Paraíba
    tre_pe: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pe/_search', // TRE Pernambuco
    tre_pr: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pr/_search', // TRE Paraná
    tre_rj: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-rj/_search', // TRE Rio de Janeiro
    tre_rs: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-rs/_search', // TRE Rio Grande do Sul
    tre_sc: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-sc/_search', // TRE Santa Catarina
    tre_se: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-se/_search', // TRE Sergipe
    tre_sp: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-sp/_search', // TRE São Paulo
    tre_to: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-to/_search', // TRE Tocantins
  },

  // Justiça Militar
  militar: {
    tjmmg: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmmg/_search', // Justiça Militar Minas Gerais
    tjmrs: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmrs/_search', // Justiça Militar Rio Grande do Sul
    tjmsp: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmsp/_search', // Justiça Militar São Paulo
  },
};

module.exports = { TRIBUNAIS_URLS };
