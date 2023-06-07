// Funções

// function login(username: string): boolean | string{
//   let message = "Bem Vindo " + username
//   console.log(message)

//   return username
// }

// const retornoFuncao = login("gabrielribeiro")

// console.log(retornoFuncao)

let n1: number = 10
let n2: number = 15

function soma(valor1: number, valor2: number): string {
  let soma = valor1 + valor2

  if (soma > 40) {
    return "SOMA MAIOR DE 40"
  } else {
    return "MENOR QUE 40"

  }
}
