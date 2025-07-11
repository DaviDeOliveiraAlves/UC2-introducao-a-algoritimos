function modoTransporte() {
    let deslocamento = prompt("Qual modo de locomoção você irá utilizar? ").toLowerCase()

switch(deslocamento){
    case "carro":
        alert("Não esqueça de revisar o combustivel")
        break
        case "onibus":
        alert("Fique de olho no ponto e na carteira")
        break
        case "bicicleta":
        alert("Use capacete e respeite as regras de trânsito")
        break
        case "metro":
        alert("Evite horários de pico para viajar tranquilo")
        break
        case "andar a pé":
        alert("Aproveite para escutar música e relaxar")
        break
        default: 
        alert("insira um metódo de transporte valido")
}
}
modoTransporte()