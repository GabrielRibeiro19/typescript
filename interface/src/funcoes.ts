interface CursoProps{
  id: string
  nome: string
  preco: number

  // Definir apenas a função e definir oque ela deve esperar e retornar
  promocao: (preco: number) => void
}

function mostraPromocao(preco: number): void{
  console.log(`Promoção no curso por apenas: R$ ${preco}`)
}

const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso teste",
  preco: 100,
  //promocao: mostraPromocao - Pode ser assim, com uma função externa ou fazer a própria função aqui mesmo como abaixo:
  promocao: (preco: number): void =>{
    console.log(`Promoção no curso por apenas: R$ ${preco}`)
  }
}
console.log(novoCurso)
console.log(novoCurso.promocao(90))

////////////////////////////////////////////////
