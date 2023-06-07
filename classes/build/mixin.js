"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("Automóvel ligado com sucesso");
    }
    desligar() {
        console.log("Desligando automóvel");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol 1.6");
gol.ligar();
gol.descricao = "Modelo completo, 4 portas";
console.log(gol);
gol.desligar();
