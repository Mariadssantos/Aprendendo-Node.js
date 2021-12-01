function calculadoraDeSalario(req, res) {
    const salarioLiquido = calcSalarioLiquido(req.body)
    const inss = calcInss(req.body)
    const impRenda = calcImpRenda(req.body)
    res.json(salarioLiquido)
}

function calcSalarioLiquido(obj, calcImpRenda, calcInss) {
	const valorSalarioLiquido = obj.salarioBruto - calcImpRenda - calcInss
	return valorSalarioLiquido
}

function calcImpRenda(obj) {
	let valorFinal = 0
	if(obj.salarioBruto <= '1903.98') valorFinal
	else if (obj.salarioBruto >= '1903.99' &  obj.salarioBruto < '2826.65') valorFinal = desImpRenda1(obj)
	else if (obj.salarioBruto >= '2826.66' &  obj.salarioBruto < '3751.05') valorFinal = desImpRenda2(obj)
	else if (obj.salarioBruto >= '3751.06' &  obj.salarioBruto < '4664.68') valorFinal = desImpRenda3(obj)
	else if (obj.salarioBruto > '4664.68') valorFinal = desImpRenda4(obj)
    else {
        return "Algo está errado..."
    }
		return valorFinal
}

function calcInss(obj) {
  let valorFinal = 0
	if(obj.salarioBruto <= '1100') valorFinal = faixa1(obj)
	else if (obj.salarioBruto >= '1100.01' &  obj.salarioBruto < '2203.48') valorFinal = faixa2(obj)
	else if (obj.salarioBruto >= '2203.49' &  obj.salarioBruto < '3305.22') valorFinal = faixa3(obj)
	else if (obj.salarioBruto >= '3305.23' &  obj.salarioBruto < '6433.57') valorFinal = faixa4(obj)
    else {
        return "Algo está errado..."
    }
		return valorFinal
}

function faixa1(obj) {
    const valor = obj.salarioBruto * 0.075
    const descontoInss = obj.salarioBruto - valor
    return descontoInss
}
function faixa2(obj) {
    const valor = obj.salarioBruto * 0.09
    const descontoInss = obj.salarioBruto - valor
    return descontoInss
}
function faixa3(obj) {
    const valor = obj.salarioBruto * 0.12
    const descontoInss = obj.salarioBruto - valor
    return descontoInss
}
function faixa4(obj) {
    const valor = obj.salarioBruto * 0.14
    const descontoInss = obj.salarioBruto - valor
    return descontoInss
}

function desImpRenda1(obj) {
	const valor = obj.salarioBruto * 0.075
	const descontoImpRenda = obj.salarioBruto - valor
	return descontoImpRenda
}
function desImpRenda2(obj) {
	const valor = obj.salarioBruto * 0.15
	const descontoImpRenda = obj.salarioBruto - valor
	return descontoImpRenda
}
function desImpRenda3(obj) {
	const valor = obj.salarioBruto * 0.225
	const descontoImpRenda = obj.salarioBruto - valor
	return descontoImpRenda
}
function desImpRenda4(obj) {
	const valor = obj.salarioBruto * 0.275
	const descontoImpRenda = obj.salarioBruto - valor
	return descontoImpRenda
}
module.exports = {calculadoraDeSalario};