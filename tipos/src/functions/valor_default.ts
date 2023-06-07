// Como deixar um valor por default ou deixar ele opcional.

function cadastro(email: string, senha: string, nome?: string): void {
  let data ={
    email,
    senha,
    nome,
  }

  console.log(data)
}

cadastro("gabriel@gmail.com", "1234")
