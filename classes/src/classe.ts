
/*
  ### Oque é uma classe? ###

  >> Uma classe armazena as características e as ações que esse objeto deve possuir.
  >> Ou seja conjunto de atributos e métodos.
*/

type Status = "ABERTO" | "FECHADO"

class Loja {
  //Atributos da nossa classe.
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }

  criarLoja(): void {
    console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
  }

  emitirPedido(mesa: number, ...pedidos: string[]): string {

    pedidos.map((pedido) => {
      console.log(`Saindo novo pedido: ${pedido}`)
    })

    return `Pedido na mesa: ${mesa}`
  }

  mudarStatus(status: Status): void {
    if (status === "ABERTO") {
      console.log("Loja aberta com sucesso !")
    } else {

      console.log("Loja fechada.")
    }
  }

}

const redBurguer = new Loja("redBurguer", "Hamburguer");

// redBurguer.criarLoja()

// const retornoLoja = redBurguer.emitirPedido(12, "Suco Gelado", "Hamburguer duplo", "Cola 2L")
// console.log(retornoLoja)

redBurguer.mudarStatus("FECHADO")
