// IMPORTANDO O EXPRESS QUE E O SERVIDOR DA APLICACAO
const express = require('express');

// CHAMANDO AS FUNCOES DO CONTROLLER
const { main } = require('../controller/calculadora');
const { calculadoraDeSalario } = require('../controller/calculaSalario');
const { maiorNumero } = require('../controller/maiorNumero');

// CHAMANDO O METODO ROUTER DO EXPRESS E ATRIBUINDO A VARIAVEL
const routes = express.Router();

// DEFININDO UM ENDPOINT DO TIPO GET QUE VAI RECEBER UM VALOR NO PARAMENTRO E USAR A FUNCAO QUE VEM DO CONTROLLER
routes.get('/calculadora/:tipo', main)
routes.get('/calculaSalario', calculadoraDeSalario)
routes.get('/maiorNumero', maiorNumero)


module.exports = routes;
