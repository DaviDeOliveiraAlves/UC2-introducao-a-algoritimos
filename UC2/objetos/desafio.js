function adicionarDetalhesPessoa(pessoa){
    const novaPessoa = {
        ...pessoa,
        comidasPreferidas: ["Pizza", "Cachorro-Quente", "Churrasco"],
        melhorAmigo:{
            nome:"bob esponja",
            idade: 200
        }
    }

    console.log(`o nome da pessoa é ${novaPessoa.nome} e suas comidas
        preferidas são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e 
        ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome}
        e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}

const pessoaOriginal ={
    nome: "Kalléo Lindão de krypto",
    idade: 16,
    profissao: "passeador "
}

adicionarDetalhesPessoa(pessoaOriginal)