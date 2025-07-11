/*const racas = ["husky", "pastor alemão", "vira-lata", "dalmata", "golden"]
console.log(`o primeiro cachorro é ${racas[ 0 ]} e meu cachorro preferido é ${racas[4]}`)*/

/*const roupasDeCima = ["terno", "camisa de banda", "blusa preta", "camisa velha", "camisa xadrez"]
const roupasDeBaixo = ["calça social", "calça jeans preta", "calça jeans", "calça de moletom", "calça jeans com farrapos"]
const gaveta = ["meias pretas", "meias brancas", "meias cinzas", "cueca preta", "cueca branca", "cueca cinza"]
const organizadorDeSapatos = ["sapato social", "tenis preto", "tenis branco", "pantufa", "sapato"]

const lookParque = `para sair para o parque, eu usaria uma ${roupasDeCima[2]}, uma ${roupasDeBaixo[2]}, ${gaveta[1]}, ${gaveta[5]} e um ${organizadorDeSapatos[2]}` 
const lookEmprego = `para ir a uma entrevista de emprego, eu usaria uma ${roupasDeCima[0]}, uma ${roupasDeBaixo[0]}, ${gaveta[1]}, ${gaveta[3]} e um ${organizadorDeSapatos[0]}` 
const lookShow = `para me aventurar em um show, eu usaria uma ${roupasDeCima[1]}, uma ${roupasDeBaixo[1]}, ${gaveta[2]}, ${gaveta[4]} e um ${organizadorDeSapatos[1]}` 
const lookCasa = `para ficar em casa e assistir filmes, eu usaria uma ${roupasDeCima[3]}, uma ${roupasDeBaixo[3]}, ${gaveta[0]}, ${gaveta[3]} e uma ${organizadorDeSapatos[3]}` 
const lookJunina = `para me devertir em uma festa junina, eu usaria uma ${roupasDeCima[4]}, uma ${roupasDeBaixo[4]}, ${gaveta[2]}, ${gaveta[5]} e um ${organizadorDeSapatos[4]}` 

console.log(lookParque)*/

/*const pokemon = ["squirtle", "bulbasaur", "charmander"]
console.log(pokemon.length)*/

/*const lancheHomer = ["rosquinha","rosquinha","rosquinha"]
const lancheScooby = ["hamburguer", "batata frita", "milkshake", "biscoito scooby", "pizza"]
const lancheMagali = ["melancia", "maçã", "banana", "abacate"]
const lancheBob = ["hamburguer de siri", "refri", "batata", "sorvete", "molho secreto"]

console.log(lancheHomer.length)
console.log(lancheScooby.length)
console.log(lancheMagali.length)
console.log(lancheBob.length)*/

/*const pokemonsCapturados = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Wimpod"]
console.log(pokemonsCapturados.includes("Pikachu"))
console.log(pokemonsCapturados.includes("Meowth"))*/

/*const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros)

numeros.push(5, 6, 7, )
console.log(numeros)*/

/*const listaDeCompras = ["arroz", "feijão", "macarrão"]
listaDeCompras.push("leite", "farinha", "banana", "canela", "café", "frango", "margarina", "farofa")

console.log(listaDeCompras)*/

/*let listaIngredientes = ["ovo", "açúcar", "farinha", "óleo", "leite", "fermento", "baunilha", "leite cond", "doce leite", "goiabada"] 
let baseBolo = ["ovo", "açúcar", "farinha", "óleo", "leite", "fermento", "baunilha"] 
let recheio1 = ["leite cond"] 
let recheio2 = ["doce leite"] 
let recheio3 = ["goiabada"] 
let boloPronto = ["massa", recheio1, "massa", recheio2, "massa", recheio3, "massa"] 
console.log(`Para fazer a massa do bolo usamos ${listaIngredientes[0]}, ${listaIngredientes[1]}, ${listaIngredientes[2]}, ${listaIngredientes[3]}, ${listaIngredientes[4]}, ${listaIngredientes[5]}, ${listaIngredientes[6]}`)
console.log(`Por fim o bolo pronto ficou com ${boloPronto[0]}, ${boloPronto[1]}, ${boloPronto[2]}, ${boloPronto[3]}, ${boloPronto[4]}, ${boloPronto[5]}, ${boloPronto[6]}`) 
*/

/*let cores = ["azul", "verde"]
cores.unshift("vermelho")
console.log(cores)*/

/*let marcasCelular = ["Iphone", "Samsung", "Nokia"]
console.log(marcasCelular)
marcasCelular.unshift("Motorola")
console.log(marcasCelular)*/

/*let frutas = ["maçã", "banana", "laranja"]
frutas.shift()
console.log(frutas)*/

/*let cidades = ["sapucaia", "esteio", "porto alegre", "canoas"]
cidades.shift()
console.log(cidades)*/


/*const meusPeixes = ["palhaçho", "mandarim", "esturjão"]
console.log(meusPeixes)

meusPeixes.pop()

console.log(meusPeixes)*/

/*const tarefas = ["limpar a casa", "estudar", "passear", "cozinhar", "jogar"]
console.log(`suas tarefas não realizadas são ${tarefas}`)
console.log(`a tarefa ${tarefas[4]} foi realizada`)
tarefas.pop()
console.log(`suas tarefas não realizadas agora são ${tarefas}`)*/

/*let letras = ["a", "b", "c", "d", "e", "f", "g", "h"]
console.log(letras)

letras.splice(2, 1)
console.log(letras)
letras.splice(3, 2)
console.log(letras)*/

/*let deck = ["Pikachu", "Charmander", "Bulbasaur", "Pikachu", "Squirtle", "Meowth"]

deck.splice(3, 1)
deck.splice(3, 0, "Snorlax")
deck.splice(5, 1, "Eevee")
console.log(deck) */

let frutas2 = ["maçã", "banana"]
let legumes = ["cenoura", "batata"]

let alimentos = frutas2.concat(legumes)
console.log(alimentos)