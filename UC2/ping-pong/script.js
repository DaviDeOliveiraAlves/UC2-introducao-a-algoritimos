const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')
const scoreDisplay = document.getElementById('score')

const raquete = {
    x: 10,
    y: canvas.height / 2 - 40,
    largura: 10,
    altura: 80,
    velocidade: 12
}

const bola = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    raio: 10,
    dx: 12,
    dy: 12
}

let pontuacao = 0
let jogoAcabou = false

const teclas = {
    ArrowUp: false,
    ArrowDown: false
}

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowUp') teclas.ArrowUp = true
    if (evento.key === 'ArrowDown') teclas.ArrowDown = true
})

document.addEventListener('keyup', (evento) => {
    if (evento.key === 'ArrowUp') teclas.ArrowUp = false
    if (evento.key === 'ArrowDown') teclas.ArrowDown = false
})

function atualizar() {
    if (jogoAcabou) return

    if (teclas.ArrowUp) raquete.y -= raquete.velocidade
    if (teclas.ArrowDown) raquete.y += raquete.velocidade

    if (raquete.y < 0) raquete.y = 0
    if (raquete.y + raquete.altura > canvas.height) {
        raquete.y = canvas.height - raquete.altura
    }

    bola.x += bola.dx
    bola.y += bola.dy

    if (bola.y - bola.raio < 0) bola.dy *= -1
    if (bola.y + bola.raio > canvas.height) bola.dy *= -1

    if (
        bola.x - bola.raio < raquete.x + raquete.largura &&
        bola.y > raquete.y &&
        bola.y < raquete.y + raquete.altura
    ) {
        bola.dx *= -1
        pontuacao++
        scoreDisplay.textContent = pontuacao
    }

    if (bola.x - bola.raio < 0) {
        jogoAcabou = true
        setTimeout(() => {
            alert(`Fim de jogo! Perdeu cara. Sua pontuação foi: ${pontuacao}`)
            document.location.reload()
        }, 100)
    }

    if (bola.x + bola.raio > canvas.width) {
        bola.dx *= -1
    }
}

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white'
    ctx.fillRect(raquete.x, raquete.y, raquete.largura, raquete.altura)
    ctx.beginPath()
    ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.closePath()
}

function loopDoJogo() {
    atualizar()
    desenhar()
    requestAnimationFrame(loopDoJogo)
}

loopDoJogo()
