const botoes = document.querySelectorAll(".choices button");

const textoJ1 = document.getElementById("player1-choice");
const textoJ2 = document.getElementById("player2-choice");
const textoResultado = document.getElementById("winner");

const healthJ1 = document.getElementById("health-j1");
const healthJ2 = document.getElementById("health-j2");

let jogada1 = null;
let jogada2 = null;

let vidaJ1 = 100;
let vidaJ2 = 100;

function verificarVencedor(j1, j2) {
  if (j1 === j2) {
    return "Empate!";
  }
  if (
    (j1 === "pedra" && j2 === "tesoura") ||
    (j1 === "papel" && j2 === "pedra") ||
    (j1 === "tesoura" && j2 === "papel")
  ) {
    return "Jogador 1 venceu ! 🐈";
  } else {
    return "Jogador 2 venceu ! 🐕";
  }
}

function atualizarBarraDeVida() {
  healthJ1.style.width = vidaJ1 + "%";
  healthJ2.style.width = vidaJ2 + "%";

  healthJ1.style.backgroundColor = vidaJ1 > 50 ? "#0f0" : vidaJ1 > 20 ? "#ff0" : "#f00";
  healthJ2.style.backgroundColor = vidaJ2 > 50 ? "#0f0" : vidaJ2 > 20 ? "#ff0" : "#f00";
}

function setBotoesAtivos(ativo) {
  botoes.forEach(botao => {
    botao.disabled = !ativo;
    botao.style.cursor = ativo ? "pointer" : "not-allowed";
    botao.style.opacity = ativo ? "1" : "0.5";
  });
}

function novoJogo() {
  jogada1 = null;
  jogada2 = null;
  textoJ1.textContent = "Jogador 1: escolha";
  textoJ2.textContent = "Jogador 2: escolha";
  textoResultado.textContent = "";

  vidaJ1 = 100;
  vidaJ2 = 100;
  atualizarBarraDeVida();

  setBotoesAtivos(true);
}

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const escolha = botao.getAttribute("data-choice");

    if (jogada1 === null) {
      jogada1 = escolha;
      textoJ1.textContent = "Jogador 1 já escolheu";
      textoResultado.textContent = "Vez do Jogador 2!";
    } else if (jogada2 === null) {
      jogada2 = escolha;
      textoJ2.textContent = "Jogador 2 já escolheu";

      const resultado = verificarVencedor(jogada1, jogada2);

      if (resultado === "Jogador 1 venceu ! 🐈") {
        vidaJ2 -= 20;
        if (vidaJ2 < 0) vidaJ2 = 0;
      } else if (resultado === "Jogador 2 venceu ! 🐕") {
        vidaJ1 -= 20;
        if (vidaJ1 < 0) vidaJ1 = 0;
      }

      atualizarBarraDeVida();

      textoResultado.textContent = `${resultado} (J1: ${jogada1} | J2: ${jogada2})`;

      if (vidaJ1 === 0 || vidaJ2 === 0) {
        textoResultado.textContent += vidaJ1 === 0 ? " — Jogador 2 venceu o jogo! 🎉" : " — Jogador 1 venceu o jogo! 🎉";
        setBotoesAtivos(false);

        setTimeout(() => {
          novoJogo();
        }, 3000);
      } else {
        // Preparar para a próxima rodada:
        jogada1 = null;
        jogada2 = null;
        textoJ1.textContent = "Jogador 1: escolha";
        textoJ2.textContent = "Jogador 2: escolha";
        textoResultado.textContent += " - Próxima rodada!";
      }
    }
  });
});

novoJogo();
