
// function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
//   const total = venda1 + venda2 + venda3 + venda4

//   console.log(total)

//   return total
// }

// totalVendas(10, 20, 40, 50)

function totalVendas(...vendas: number[]): void {
  const quantidadeVendas = vendas.length

  console.log(`Você fez ${quantidadeVendas} vendas hoje`)
}

//totalVendas(323, 434, 32423, 34234, 234)

function totalNome(...nomes: string[]): void{

  console.log(nomes.length)
  nomes.map((nome) => {
    console.log(nome)
  })
}

totalNome("Gabriel", "Macsuel", "Natan", "Gabriel2", "Eugenio")
