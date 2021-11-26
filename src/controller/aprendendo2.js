function main2(req, res) {
    const salarioLiquido = calcSalarioLiquido(req.params.opcao, req.body)
    const inss = calcInss(req.params.opcao, req.body)
    const impRenda = calcImpRenda(req.params.opcao, req.body)
    res.json(calcInss)
}

function calcInss(opcao, obj) {
    valorFinal = 0
    if(obj.salarioBruto == 'min') valorFinal = min(obj)
    else {
        return "Não funciona"
    }
}

function min(obj) {
    const valor = obj.salarioBruto * 0.75
    return(valor)
}
module.exports = {main2};