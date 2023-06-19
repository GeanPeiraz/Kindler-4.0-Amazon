const express = require('express');
const routesCategorias = require('../route/routesCategorias');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('teste de github')

app.use('/', routesCategorias);

app.get('/', function (req, res) {
 res.send('RESPOSTA DA ROTA RAIZ DA APLICAÇÃO');
});

app.get('/teste', function (req, res) {
  res.send('RESPOSTA DA ROTA TESTE DA APLICAÇÃO');
});


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});