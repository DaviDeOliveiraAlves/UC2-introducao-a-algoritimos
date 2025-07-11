let formulario = {
    nome: "Maria José",
    email: "",
    cidade: ""
}

for(let campo in formulario){
    if(formulario[campo] === ""){
        console.log(`o campo ${campo} está vazio! Por favor, preencha!`)
    }
}