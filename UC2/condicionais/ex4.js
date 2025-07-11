function escolherRoupa() {
    if (temperatura >= 30){
        alert("vista roupas leves está muito quente")
    } else if (temperatura >= 20) {
        alert("Use algo confortavel como camiseta e calça")
    } else if (temperatura >= 10) {
        alert("coloque um casaco está fresquinho")
    } else if (temperatura <= 9) {
        alert("vista um casaco bem quente está frio")
    }
}

let temperatura = Number(prompt('informe qual a temperatura atual em graus celsius'))

escolherRoupa()