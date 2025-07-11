const aluno = {
    nome: "Carlos",
    idade: 17,
    escola: "Senac",
    apresentar: function() {
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos, e sou da escola ${this.escola}`)
    }
}
aluno.apresentar()
delete aluno.idade
console.log(aluno)