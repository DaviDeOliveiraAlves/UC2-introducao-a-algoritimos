/*  let NF = 6
let NR = 8
let t1 = 7
let t2 = 9
let t3 = 5

let trabalhosAprovados =(t1 > 6) + (t2 > 6) + (t3 > 6)

let aprovado = (NF > 7) || (NR >= 8 && trabalhosAprovados >= 2)

console.log(aprovado)*/

/*let temSenha = true
let estanoAlcance = true

let podeAcessarWifi = (temSenha == true) && (estanoAlcance == true)
console.log(podeAcessarWifi)*/

/*let renda = 2001
let nomeLimpo = true

let emprestimo = (renda > 2000) && (nomeLimpo == true)

console.log(emprestimo)*/

/*const nome = "mika"
const idade = 27
const frase = `meu nome é ${nome} e tenho ${idade}  anos`

console.log(frase)*/

/*const nome = "davi"
const cor = "azul"
const filme = "star wars"
const time = "grêmio"
const frase = `Meu nome é ${nome}, minha cor favorita é ${cor}. Gosto muito de estudar no SENAC e curto o filme ${filme}. Além disso, meu time é o ${time}.`
const frase1 = ("Meu nome é " + nome + ", minha cor favorita é " + cor + ". Gosto muito de estudar no SENAC e curto o filme " + filme + ". Além disso, meu time é o " + time + "." )
console.log(frase)
console.log(frase1) */

/*const nome = "davi de oliveira alves"
const comidaFavorita = "bolo de carne"
console.log(comidaFavorita.length)
console.log(nome.length)*/

/*const frase = "OieEeEee!"
const fraseMinuscula = frase.toLowerCase()
const fraseMaiuscula = frase.toUpperCase()
console.log(fraseMaiuscula)*/

/*const email = "   mika@gmail.com   "
console.log(email.trim())*/

/*const frase = "hoje comi cenoura"

console.log(frase.includes("cenoura"))
console.log(frase.includes("batata"))*/

const frase = "hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura", "batata")
console.log(novaFrase)