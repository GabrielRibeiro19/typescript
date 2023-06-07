"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje`);
}
function totalNome(...nomes) {
    console.log(nomes.length);
    nomes.map((nome) => {
        console.log(nome);
    });
}
totalNome("Gabriel", "Macsuel", "Natan", "Gabriel2", "Eugenio");
