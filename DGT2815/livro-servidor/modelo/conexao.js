const mongoose = require('mongoose');

const banco = mongoose;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

// Efetuar a conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livros', options)
    .then(() => {
        console.log('Conectado ao MongoDB com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error);
    });

module.exports = banco;
