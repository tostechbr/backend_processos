
# Backend de Consulta de Processos

Este projeto é um backend robusto para consulta de processos judiciais utilizando as APIs públicas fornecidas pelo CNJ. Ele permite realizar buscas por números de processos em tribunais específicos e retornar os metadados associados.

## 📋 Funcionalidades

- Consulta a processos por número único.
- Suporte para múltiplos tribunais (federais, estaduais, trabalhistas, eleitorais, etc.).
- Integração com APIs públicas do CNJ (DataJud).
- Logs detalhados para facilitar depuração.
- Arquitetura modular e extensível.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript para backend.
- **Express**: Framework para criar APIs REST.
- **Axios**: Cliente HTTP para consumir as APIs externas.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **nodemon**: Para desenvolvimento com recarregamento automático.

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente**:  
   Crie um arquivo `.env` na raiz do projeto e configure sua chave de API:  
   ```
   API_KEY=cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==
   PORT=3000
   ```

4. **Executar o Servidor**:
   ```bash
   npm start
   ```

5. **Testar a Aplicação**:  
   Use ferramentas como **Postman** ou **cURL** para realizar requisições para o backend. Por exemplo:
   ```bash
   curl -X POST http://localhost:3000/processos \
        -H "Authorization: APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==" \
        -H "Content-Type: application/json" \
        -d '{"numeroProcesso": "0801611-34.2016.4.05.8401"}'
   ```

## 📂 Estrutura de Diretórios

```
├── utils/
│   ├── api/
│   │   ├── config.js        # Configuração de URLs e integração com APIs.
│   │   ├── fetcher.js       # Funções auxiliares para chamadas HTTP.
├── routes/
│   ├── processos.js         # Rotas relacionadas a processos.
├── testBackend.js           # Script para testes manuais.
├── server.js                # Arquivo principal para iniciar o servidor.
└── package.json             # Configurações do projeto e dependências.
```

## 🚀 Endpoints Disponíveis

### POST `/processos`

**Descrição**: Consulta processos por número único em todos os tribunais configurados.

**Exemplo de Requisição**:
```json
{
    "numeroProcesso": "0801611-34.2016.4.05.8401"
}
```

**Resposta de Sucesso**:
```json
{
    "numeroProcesso": "0801611-34.2016.4.05.8401",
    "classe": "Execução de Título Extrajudicial",
    "tribunal": "TRF5",
    "grau": "G1",
    "assuntos": ["Expropriação de Bens"],
    "movimentos": [
        { "codigo": 60, "nome": "Expedição de documento", "dataHora": "2021-11-09T15:04:44.000Z" }
    ]
}
```

**Resposta de Erro**:
```json
{
    "error": "Processo não encontrado."
}
```

## 🧪 Testes

- Execute o script `testBackend.js` para realizar testes diretos:
   ```bash
   node testBackend.js
   ```

- Configure o número de processo diretamente no script para validar.

## 🌟 Contribuição

Sinta-se à vontade para abrir issues ou pull requests! Todas as contribuições são bem-vindas.

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
```
