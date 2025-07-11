function escolherPersonagem() {
    let classe = prompt('Escolha uma classe: ');
    let nivel = Number(prompt('Informe seu nível atual'));
  
    if (classe === "guerreiro" && nivel >= 50) {
      alert("Você é um guerreiro lendário!");
    } else if (classe === "mago" && nivel >= 50) {
      alert("Você domina a magia suprema!");
    } else if (classe === "arqueiro" && nivel >= 50) {
      alert("Você é o mestre das flechas!");
    } else {
      alert("Continue treinando, herói iniciante.");
    }
  }
  

escolherPersonagem()