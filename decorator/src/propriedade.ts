// Propriedade Decorator.


function validaNome(tamanho: number) {
  // target = construtor da nossa classe
  // key = nossa propriedade
  return (target: any, key: string) => {
    let valor = target[key]

    const getter = () => valor;

    const setter = (value: string) => {
      if (value === "") {
        console.log("Você não pode deixar em branco")
      } else if (value.length < tamanho) {
        // Se for menor
        console.log("Você não pode criar com esse tamanho")
      } else {
        valor = value;
      }
    }
    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Jogo {

  @validaNome(5)
  nome: string
  descricao: string

  constructor(nome: string, descricao: string) {
    this.nome = nome,
    this.descricao = descricao
  }
}

const jogo1 = new Jogo("Red Dead Redemption 2", "Jodo de faroeste")

console.log(jogo1.descricao)
