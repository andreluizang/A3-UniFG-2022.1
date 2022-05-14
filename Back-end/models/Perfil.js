const mongoose = require('mongoose');

const Perfil = mongoose.model('Perfil', {
    nome: String,
    email: String,
    senha: String
});

module.exports = Perfil;