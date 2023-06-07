class Conta{
  // Private: ele não pode ser acessado ou modificado fora da classe que ele é criado
  private limite: number = 450;

  private aumentarLimite(quantidade: number) {
    if(quantidade < 1000){
      this.limite = quantidade;

      console.log(`Agora seu limite é ${this.limite}, aproveite :)`)
    }else{
      console.log("Limite não autorizado :(")
    }
  }

  protected solicitarLimite(quantidade: number){
    return this.aumentarLimite(quantidade);
  }

  solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean{
    if(estaAutenticado){
      this.aumentarLimite(quantidade);
    }else{
      return false
    }
  }
}

class BancoAfiliado extends Conta{
  limiteAfiliado(){
    return this.solicitarLimite(950)
  }
}

const fulano = new Conta();

fulano.solicitarLimiteApp(true, 400)

console.log("=======================")

// console.log(fulano)

const gabriel = new BancoAfiliado()

gabriel.limiteAfiliado()

console.log(gabriel)
