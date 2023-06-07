

interface ProdutoProps{
  readonly id: string
  nome: string
  descricao: string
}

let produto1: ProdutoProps = {
  id: "Produto1",
  nome: "Tenis Nike",
  descricao: "Super tenis"
}

produto1.nome = "123"

console.log(produto1)
