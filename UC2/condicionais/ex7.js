function tipoEvento() {
    let evento = prompt("qual evento você deseja organizar")
    switch(evento){
        case "aniversário":
            alert("Salão de festas ou espaço kids")
            break
            case "formatura":
            alert("Buffet com pista de dança")
            break
            case "casamento":
            alert("Jardim ou igreja charmosa")
            break
            case "festa surpresa":
            alert("Casa de amigos ou rooftop")
            break
            case "churrasco":
            alert("Área externa ou parque")
            break
            default:
                alert("insira um evento valído")
    }
}

tipoEvento()