const db = require('./db'); // Certifique-se de que o caminho está correto

// Adiciona um novo usuário
function adicionarUsuario(email, processo) {
  // Verifica se o usuário já existe
  const usuarioExistente = db.get('usuarios').find({ email }).value();

  if (usuarioExistente) {
    // Se o processo já estiver associado ao usuário, não adiciona
    if (!usuarioExistente.processos.includes(processo)) {
      db.get('usuarios')
        .find({ email })
        .get('processos')
        .push(processo)
        .write();
    }
  } else {
    // Adiciona um novo usuário com o processo
    const novoId = db.get('usuarios').size().value() + 1;
    db.get('usuarios')
      .push({ id: novoId, email, processos: [processo] })
      .write();
  }
}

// Exemplo de uso
adicionarUsuario('usuario1@example.com', 'processo3');
adicionarUsuario('usuario3@example.com', 'processo1');
