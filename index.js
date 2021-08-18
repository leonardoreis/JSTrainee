const express = require('express');

const server = express();

server.use(express.json());
const array1 = ['posição0', 'posição1', 'posição2'];

var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
  };


//retornar um curso por INDEX (posição)
server.get('/teste/:index', (req, res) => {
    const { index } = req.params;

    return res.json(array1[index]);
});

server.get('/',(req, res)=>{
    return res.json(array1);
});

server.get('/json/',(req, res)=>{
    return res.json(pessoa);
});




server.listen(3000);