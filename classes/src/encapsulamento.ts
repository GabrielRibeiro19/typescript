// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)

/*
  >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da
  classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

  >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
  Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

  >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
  nao podemos alterar ele.
*/

class Usuario2 {
  protected id: number // Podemos chamar na classe usuario (pai) ou classes que extende a classe usuario (filhas)
   nome: string
   email: string

  constructor(id: number, nome: string, email: string) {

    this.id = id
    this.nome = nome
    this.email = email
  }
}

// Supor que essa classe ADMIN irá herdar tudo que o usuário tem
class Admin2 extends Usuario2 {
   cargo: string;
   nivel: number;

  constructor(id: number, nome: string, email: string, cargo: string, nivel: number){
    // Chamando o contrutor da classe pai. (tem que ser o primeiro item do contrutor)
    super(id, nome, email)

    this.cargo = cargo;
    this.nivel = nivel;
  }

  protected mudarCargo(cargo:  string): void{
    console.log("Alterando cargo para: ", cargo)
    console.log("Id do usuário: ", this.id)
  }

  acessarAdmin(){
    this.mudarCargo("Designer 2")
  }
}

const usuario2 = new Admin2(10, "Gabriel", "gabriel@teste.com", "Programador", 10)

usuario2.cargo = "Designer"

console.log(usuario2)

usuario2.acessarAdmin();
