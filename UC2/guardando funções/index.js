function dancar() {
    alert("você ganhou uma dancinha virtual 💃🕺!");
  }
  
  function chamarHeroi() {
    let nomeHeroi = prompt("Informe o nome do herói");
    alert(nomeHeroi.toUpperCase() + "!!!");
  }
  
  function criarApelido() {
    let nome = prompt("Informe o seu nome");
    let animal = prompt("Informe um animal");
    alert(`Seu novo apelido é ${nome} ${animal}`);
  }
  
  function moedasTotais() {
    let pequenas = prompt("Insira o número de moedas pequenas: ");
    let grandes = prompt("Insira o número de moedas grandes: ");
    let total = (Number(pequenas) * 1) + (Number(grandes) * 5);
    alert(`A pontuação total foi ${total}`);
  }
  
  function codinomeSecreto() {
    let objeto = prompt("Informe um objeto");
    let numero = prompt("Informe seu número da sorte");
    alert(`Seu codinome é ${objeto}${numero}🕵️`);
  }
  
  function mostrarChocolate() {
    let reais = Number(prompt("Informe quantos reais você possui"));
    const preco = 2.50;
    let total = (reais / preco).toFixed(0);
    alert(`Você pode comprar ${total} chocolates!`);
  }
  