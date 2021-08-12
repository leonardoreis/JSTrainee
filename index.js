const express = require('express');

const server = express();

server.use(express.json());
const array1 = ['posição0', 'posição1', 'posição2'];

//retornar um curso por INDEX (posição)
server.get('/teste/:index', (req, res) => {
    const { index } = req.params;

    return res.json(array1[index]);
});

server.get('/',(req, res)=>{
    return res.json(array1);
});




server.listen(3000);