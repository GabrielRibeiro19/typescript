"use strict";
// É um modelo de classe/métodos para serem seguidos ao extender outras classes.
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=================");
        console.log(`Nova conta pessoa física criada com sucesso: ${dados.nome}`);
        console.log("=================");
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "1020-x",
    endereco: "Rua 15, Centro"
});
