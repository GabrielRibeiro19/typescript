"use strict";
function mostraPromocao(preco) {
    console.log("Promo\u00E7\u00E3o no curso por apenas: R$ ".concat(preco));
}
var novoCurso = {
    id: "1",
    nome: "Curso teste",
    preco: 100,
    //promocao: mostraPromocao - Pode ser assim, com uma função externa ou fazer a própria função aqui mesmo como abaixo:
    promocao: function (preco) {
        console.log("Promo\u00E7\u00E3o no curso por apenas: R$ ".concat(preco));
    }
};
console.log(novoCurso);
console.log(novoCurso.promocao(90));
////////////////////////////////////////////////
