interface CadastroProps {
  nome?: string
  email: string
  status: boolean
}

const novoUsuario: CadastroProps = {
  email: "gabriel@gmail.com",
  status: true
}

console.log(novoUsuario)
