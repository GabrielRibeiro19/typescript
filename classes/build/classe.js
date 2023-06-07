"use strict";
/*
  ### Oque é uma classe? ###

  >> Uma classe armazena as características e as ações que esse objeto deve possuir.
  >> Ou seja conjunto de atributos e métodos.
*/
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("Loja aberta com sucesso !");
        }
        else {
            console.log("Loja fechada.");
        }
    }
}
const redBurguer = new Loja("redBurguer", "Hamburguer");
// redBurguer.criarLoja()
// const retornoLoja = redBurguer.emitirPedido(12, "Suco Gelado", "Hamburguer duplo", "Cola 2L")
// console.log(retornoLoja)
redBurguer.mudarStatus("FECHADO");
