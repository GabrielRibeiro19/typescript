"use strict";
// Vamos supor que temos um jogo e esse jogo pode ter uma DLC
var left4dead = {
    id: "123",
    nome: "Left For Dead 2",
    descricao: "Jogo de ação e tiro",
    plataforma: ["PS5", "PC"]
};
var left4deadDLC = {
    id: "90",
    nome: "Left For Dead novos mapas",
    descricao: "4 novos mapas para jogar",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "Medalhas"],
    jogoOriginal: left4dead
};
console.log(left4deadDLC);
