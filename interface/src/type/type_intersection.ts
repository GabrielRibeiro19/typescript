

// Type Alias conseguimos criar tipos mais poderosos, com mais informações do que tipos primitivos

type Info = {
  id: number;
  nome: string;
  descricao?: string
}

const produtoInfo: Info = {
  id: 123,
  nome: "Placa de vídeo",
  descricao: "Placa GTX 2090"
}

type Categoria = {
  slug: string;
  quantidadeProduto: number
}

const categoria1: Categoria = {
  slug: "hardware",
  quantidadeProduto: 2
}

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a interseção (união) entre info e categoria

const novoProduto: ProdutoInfo = {
  id: 1234,
  nome: "Teclado RGB",
  slug: "teclado-mecanico",
  quantidadeProduto: 10
}

console.log(novoProduto)
