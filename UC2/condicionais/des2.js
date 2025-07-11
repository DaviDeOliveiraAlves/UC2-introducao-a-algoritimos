function chapelSeletor() {
    let casa = prompt('qual qualidade mais define você: (coragem, ambição, amizade ou sabedoria)')
  
    if (casa == "coragem") {
      alert("Você foi escolhido para Grifinória!");
    } else if (casa == "ambição") {
      alert("Você foi escolhido para Sonserina!");
    } else if (casa == "amizade") {
      alert("Você foi escolhido para Lufa-Lufa!");
    } else if (casa == "sabedoria") {
        alert("Você foi escolhido para Corvinal!")
    } else {
        alert("essa casa ainda não existe!")
    }
  }

  chapelSeletor()