

// interface TecnologiaProps{
//   id: string
//   nome: string
//   slug: string[]
// }

// let tecnologia1: TecnologiaProps = {
//   id: "123",
//   nome: "React",
//   slug: ["php", "asp"]
// }

interface TecnologiaProps {
  id: string
  nome: string
  descricao?: string
}

interface NomesProps {
  tecnologia: TecnologiaProps[]
}

let frontend: NomesProps = {
  tecnologia: [
    {
      id: "123",
      nome: "React",
    },
    {
      id: "123",
      nome: "React",
      descricao: "Tecnologia nova"
    }
  ]
}

console.log(frontend.tecnologia)
