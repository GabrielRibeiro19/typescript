// Afirmando algum tipo

let statusAtual: unknown = 1

let alteraStatus: number = 3

// Estou afirmando que o statusAtual é de fato um numero.
alteraStatus = statusAtual as number

// Outra maneira de afirmar o tipo
alteraStatus = <number>statusAtual

console.log(alteraStatus)
