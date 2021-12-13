function calculadoraDeSalario(req, res) {
	const inss = calcInss(req.body.salarioBruto)
	const impRenda = calcImpRenda(req.body.salarioBruto)
	const salarioLiquido = calcSalarioLiquido(req.body, inss, impRenda )
	res.json(salarioLiquido)
}

function calcSalarioLiquido(obj, calcInss, calcImpRenda) {
	console.log(calcInss)
	console.log(calcImpRenda)
	const valorSalarioLiquido = obj.salarioBruto - calcInss - calcImpRenda
	return valorSalarioLiquido
}


function calcImpRenda(obj) {
	let valorFinal = 0
	if (obj <= '1903.98') valorFinal
	else if (obj >= '1903.99' & obj < '2826.65') valorFinal = desImpRenda1(obj)
	else if (obj >= '2826.66' & obj < '3751.05') valorFinal = desImpRenda2(obj)
	else if (obj >= '3751.06' & obj < '4664.68') valorFinal = desImpRenda3(obj)
	else if (obj > '4664.68') valorFinal = desImpRenda4(obj)
	else {
		return "Algo está errado..."
	}
	return valorFinal
}

function calcInss(obj) {
	let valorFinal = 0
	if (obj <= '1100') valorFinal = faixa1(obj)
	else if (obj >= '1100.01' & obj < '2203.48') valorFinal = faixa2(obj)
	else if (obj >= '2203.49' & obj < '3305.22') valorFinal = faixa3(obj)
	else if (obj >= '3305.23' & obj < '6433.57') valorFinal = faixa4(obj)
	else {
		return "Algo está errado..."
	}
	return valorFinal
}

function faixa1(obj) {
	const descontoInss = obj * 0.075
	return descontoInss
}

function faixa2(obj) {
	const descontoInss = obj * 0.09
	return descontoInss
}

function faixa3(obj) {
	const descontoInss = obj * 0.12
	return descontoInss
}

function faixa4(obj) {
	const descontoInss = obj * 0.14
	return descontoInss
}

function desImpRenda1(obj) {
	const descontoImpRenda = obj * 0.075
	return descontoImpRenda
}

function desImpRenda2(obj) {
	const descontoImpRenda = obj * 0.15
	return descontoImpRenda
}

function desImpRenda3(obj) {
	const descontoImpRenda = obj * 0.225
	return descontoImpRenda
}

function desImpRenda4(obj) {
	const descontoImpRenda = obj * 0.275
	return descontoImpRenda
}
module.exports = {
	calculadoraDeSalario
};