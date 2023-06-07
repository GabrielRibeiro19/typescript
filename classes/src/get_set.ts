

// Cso de uso de um jogo

class Jogo{
  private servidor: string
  private id: string = "1234"

  constructor(servidor: string){
    this.servidor = servidor
  }

  // Metodo GET = Para pegar o valor ao inves de acessar diretamente a propriedade
  get getServidorIP(){
    console.log("== METODO GET ==")
    return this.servidor
  }

  // Método SET = passar / alterar algum atributo
  set setServidorIP(novoIp: string){
    if(this.servidor === novoIp){
      throw new Error("O novo ip deve ser diferente do ip antigo")
    }
    this.servidor = novoIp
  }
}

const gta5 = new Jogo("192.200.0.9")


try{
  gta5.setServidorIP = "192.200.02.9"
}catch(error: any){
  console.log("ERROR:", error.message)
}

console.log(gta5.getServidorIP)

// console.log(gta5)
