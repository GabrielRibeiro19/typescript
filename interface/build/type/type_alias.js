"use strict";
function acessar(uuid, nome) {
    console.log("ID: ".concat(uuid, " - Bem vindo ").concat(nome));
}
function logUsuario(uuid) {
    console.log("Conta referente ao UUID: ".concat(uuid));
}
function comprarItem(moeda) {
    console.log("Comprando com a moeda: ".concat(moeda));
}
comprarItem("EUR");
