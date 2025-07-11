/*verificando = (12 !== 3)
console.log(verificando);*/

/*verificando = (7 >= 7)
console.log(verificando);*/

/*verificando = ( 'gato' == 'Gato')
console.log(verificando);*/

/*verificando = ( 'maria' === 'marea')
console.log(verificando);*/

/*verificando = ( 7 <= 9)
console.log(verificando);

verificando = ( 10 !== 10)
console.log(verificando);*/

/*verificando = ( 5 < 3)
console.log(verificando);

verificando = ( 2 < 1)
console.log(verificando);*/

/*verificando = ( true !== true)
console.log(verificando);
*/

/*const nome = "pedro"
const anoNas = 2005
const anoAt = 2025
const ano = 2050 - anoNas
const idade = anoAt-anoNas
const maior = (idade >= 18)
console.log("nome:", nome)
console.log("Idade:", idade)
console.log("é maior de idade?", maior)
console.log("Idade em 2050:", ano)*/

const readline = require("readline");

const idades = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Teste de idades")

idades.question("informe seu ano de nascimento: ", (anoNas) => {
    idades.question("informe o ano atual: ", (anoAt) => {
        idades.question("informe seu nome: ", (nome) => {
            const idade = anoAt - anoNas
            
        })
    })
})