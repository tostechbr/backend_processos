const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json'); // Caminho para o banco de dados falso
const db = low(adapter);

// Inicializa a estrutura padrão, se estiver vazia
db.defaults({ usuarios: [] }).write();

module.exports = db;
