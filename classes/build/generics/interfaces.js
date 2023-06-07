"use strict";
// interface NovoProduto<V extends number>{
//   nome: string;
//   preco: V
// }
const arroz = {
    nome: "Arros Branco",
    preco: 1500,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(1500));
