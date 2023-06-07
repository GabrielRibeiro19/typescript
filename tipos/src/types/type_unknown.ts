// Tipo desconhecido > quando voc~e não sabe o typo que vai receber

let total: unknown;

total = 123

total = "cmxwemd"

total = {
  total: 100
}

let idPedido: any
let totalPedido: unknown

let entregador: number = idPedido

// valor do tipo unknown só pode ser atribuido ao mesmo tipo ou a any.
let totalEntregador2: any = totalPedido
let totalEntregador3: unknown = totalPedido
