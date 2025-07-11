//criando o inventario do herói//
//o herói começara sua aventura com alguns itens básicos. vamos armazenar esses itens em um array//

let inventario = ["espada de madeira", "Botas da agilidade 3", "escudo da coragem 3", "elixir da sabedoria 5", "amuleto do guardião 15", "shuriken 6"]
console.log(inventario)
inventario.push("arco das variaveis: 5")
console.log(inventario)
console.log(inventario.length)

console.log("UM goblin apareceu!!! Prepare-se para a batalha!!! Dano: 13")

let itemUsado1 = inventario[5]
console.log(`você ataca o goblin com seu ${itemUsado1}`)

let itemUsado2 = inventario[1]
console.log(`Você finaliza o goblin com ${itemUsado2}`)

let itemUsado3 = inventario[4]
console.log(`você revida com ${itemUsado3}`)

let recursosResistencia = [inventario[0],  inventario[3],  inventario[6]]
console.log(`Meus recursos de resistencia: ${recursosResistencia}`)

let itemUsado4 = inventario[2]
console.log(`o herói finaliza sua aventura com um golpe, utilizando ${itemUsado4}`)