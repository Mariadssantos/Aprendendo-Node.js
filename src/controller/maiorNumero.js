// Escreva uma função que recebe dois números e retorna o maior deles
function maiorNumero(req, res) {
    const maiorValor = verificaNumeros(req.body)
    res.json(maiorValor)
}

function verificaNumeros(obj) {
    if (obj.valor1 < obj.valor2) {
        return "valor 2 é maior"
    } else {
        return "valor 1 é maior"
    }
}

module.exports = {maiorNumero}