// Vamos supor que temos um jogo e esse jogo pode ter uma DLC

interface JogoProps {
  readonly id: string;
  nome: string
  descricao: string
  plataforma: string[];
}

const left4dead: JogoProps = {
  id: "123",
  nome: "Left For Dead 2",
  descricao: "Jogo de ação e tiro",
  plataforma: ["PS5", "PC"]
}

//console.log(left4dead)

// interface DLC extends JogoProps {
//   novoConteudo: string[]
// }

// const left4deadDLC: DLC = {
//   id: "90",
//   nome: "Left For Dead novos mapas",
//   descricao: "4 novos mapas para jogar",
//   plataforma: ["PS5", "PC"],
//   novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "Medalhas"]
// }

// console.log(left4deadDLC)

interface DLC extends JogoProps {
  jogoOriginal: JogoProps
  novoConteudo: string[]
}

const left4deadDLC: DLC = {
  id: "90",
  nome: "Left For Dead novos mapas",
  descricao: "4 novos mapas para jogar",
  plataforma: ["PS5", "PC"],
  novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "Medalhas"],
  jogoOriginal: left4dead
}

console.log(left4deadDLC)
