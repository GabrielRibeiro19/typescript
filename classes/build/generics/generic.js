"use strict";
// Generics
/*
  >>> Permite criar estruturas que serão adaptaveis a varios tipos de dados.
  ( Ajudanto a reaproveitar melhor nosso código e deixa-lo mais flexível )

  >> Podemos usar os generics:
  Funções | interfaces / type | classes
*/
/*
  Alguns padroes que você vai encontrar:
  S => State;
  T => Type;
  K => key;
  V => value;
  E => Element;
 */
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(15);
repo1.setDados("dw2d");
console.log(repo1.getDados());
