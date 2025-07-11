const robo = {
    nome: "Boberto",
    modelo: "Elmore",
    anoDeFabricacao: 1945,
    escola: "Senac",
    apresentar: function() {
        console.log(`Olá meu nome é ${this.nome}, meu modelo é ${this.modelo}, eu fui criado em ${this.anoDeFabricacao}!`)
    },
    falar: function() {
        console.log("Não confie em átomos… eles inventam tudo!")
    }
}
robo.apresentar()
robo.falar()