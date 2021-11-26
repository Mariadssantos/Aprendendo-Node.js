// IMPORTANDO O EXPRESS QUE E O SERVIDOR DA APLICACAO
const express = require('express');

// IMPORTANDO O BODYPARSER QUE E O RESPONSAVEL PARA PEGAR OS DADOS DAS REQS
const bodyParser = require('body-parser');

// IMPORTANDOS OS ENDPOINTS QUE CRIOU NA PASTA ROUTES
const routes = require('./routes/index');

// CRIANDO O SERVIDOR E ATRIBUINDO A VARIAVEL "APP"
const app = express();

// USANDO AS FUNFIONALIDADES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.listen(8080);
