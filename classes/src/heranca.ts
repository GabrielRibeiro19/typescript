// Herança > quando nós temos uma classe que herda outra classe.
// Classe PAI tem seus atributos e a classe FILHA  vai herdar todos os atributos do pai, alem dos seus próprios atributos.

class Usuario {
  nome: string
  email: string

  constructor(nome: string, email: string) {

    this.nome = nome
    this.email = email

  }
}

// Supor que essa classe ADMIN irá herdar tudo que o usuário tem
class Admin extends Usuario {
  cargo: string;
  nivel: number;

  constructor(nome: string, email: string, cargo: string, nivel: number){
    // Chamando o contrutor da classe pai. (tem que ser o primeiro item do contrutor)
    super(nome, email)

    this.cargo = cargo;
    this.nivel = nivel;
  }
}

const usuario1 = new Admin("Gabriel", "gabriel@teste.com", "Programador", 10)

console.log(usuario1)
console.log(usuario1.nome)
