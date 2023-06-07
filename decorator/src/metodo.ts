// Decorator Método, ele só é chamado quando nosso método for chamado em algum local.

import { verificaPessoa } from "./decorators/verificaPessoa"



class Pessoa{
  nome: string

  constructor(nome: string){
    this.nome = nome
  }

  @verificaPessoa(17)
  cadastrarPessoa(){
    console.log(`Bem vindo ${this.nome} ao sistema`)
  }
}

const pessoa1 = new Pessoa("Gabriel Henrique")

pessoa1.cadastrarPessoa()
