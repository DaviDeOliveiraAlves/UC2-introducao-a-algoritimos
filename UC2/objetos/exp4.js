const usuario = {
    nome: "Prof",
    idade: 25,
    email: "prof@senacrs.com.br",
    cidade: "São Paulo"
}

const novoUsuario = {
    ...usuario,
    nome: "joão",
    idade:28,
    endereco: "Rua Algoritimos",
    cpf: 51385354790
}

const usuario1 = {
    ...novoUsuario,
    endereco: "Rua Java",
    cpf: 85376286590
}
console.log(usuario1)