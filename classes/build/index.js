"use strict";
// Buscar o meu arquivo que conecta com o banco de dados.
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
function acessarSistema() {
    (0, connection_1.connection)({ ip: "192.168.54.10", name: "mysql" });
}
acessarSistema();
(0, connection_1.statusConnection)();
