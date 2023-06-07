 type DadosConta ={
  nome: string
  numero: string
  endereco: string
 }

// É um modelo de classe/métodos para serem seguidos ao extender outras classes.
 abstract class ContaBanco{
  abstract abrirConta(dados: DadosConta): boolean
 }

 class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    console.log("=================")
    console.log(`Nova conta pessoa física criada com sucesso: ${dados.nome}`)
    console.log("=================")
    return true
  }
 }

 const joana = new PessoaFisica();
 joana.abrirConta({
  nome: "Joana Silva",
  numero: "1020-x",
  endereco: "Rua 15, Centro"
 })
