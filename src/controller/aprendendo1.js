function main(req, res) {

    // CHAMA A FUNCAO QUE VERIFICA O TIPO E ESSA FUNCAO CHAMA OUTRA DE ACORDO COM O TIPO
    const valor = verificaTipo(req.params.tipo, req.body)
    
    // RETORNA O VALOR
    res.json(valor)
}

function verificaTipo(tipo, obj){

    // Declarando uma variavel no qual ela vai receber algum valor
    let valorFinal = 0

    // Se o usuario quiser fazer uma soma, atribui a variavel acima ao retorna da funcao soma
    if(tipo == 'soma') valorFinal = soma(obj)

    // Se o usuario quiser fazer uma subtracao, atribui a variavel acima ao retorna da funcao menos
    else if(tipo == 'menos') valorFinal = menos(obj)

    // Se o usuario quiser fazer uma multiplicacao, atribui a variavel acima ao retorna da funcao multiplica
    else if(tipo == 'multiplica') valorFinal = multiplica(obj)

    // Se o usuario quiser fazer uma divisao, atribui a variavel acima ao retorna da funcao divide
    else if(tipo == 'divide') valorFinal = divide(obj)

    // Caso nao seja nenhum dos tipos declarado, informa o usuario que nao existe esse tipo
    else
    {
        return "Operacao nao existe"
    }

    // Retorno de uma das funcoes acima
    return valorFinal
}


// Funcao que faz soma, e recebe um obj como paramentro, o obj vem no body da req
function soma(obj) {
    const soma = obj.valor1 + obj.valor2;
    return soma
}

// Funcao que subtrai, e recebe um obj como paramentro, o obj vem no body da req
function menos(obj) {
    const menos = obj.valor1 - obj.valor2;
    return menos
}

// Funcao que faz multiplicacao, e recebe um obj como paramentro, o obj vem no body da req
function multiplica(obj) {
    const multiplica = obj.valor1 * obj.valor2;
    return multiplica
}

// Funcao que divide, e recebe um obj como paramentro, o obj vem no body da req
function divide(obj) {
    const divide = obj.valor1 / obj.valor2;
    return divide
}


module.exports = {main};