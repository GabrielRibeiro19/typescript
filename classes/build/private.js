"use strict";
class Conta {
    constructor() {
        // Private: ele não pode ser acessado ou modificado fora da classe que ele é criado
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é ${this.limite}, aproveite :)`);
        }
        else {
            console.log("Limite não autorizado :(");
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(950);
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 400);
console.log("=======================");
// console.log(fulano)
const gabriel = new BancoAfiliado();
gabriel.limiteAfiliado();
console.log(gabriel);
