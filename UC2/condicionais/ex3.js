function podeEntrar() {
    if(idade >= 16) {
        alert("Você pode entrar no cinema")
    } else {
        alert("Voce não pode entrar no cinema")
    }
}

let idade = Number(prompt("informe sua idade: "))

podeEntrar()