function processarArray(numeros) {
    let primeiroDividido = numeros[0] / 2;
    let ultimo = numeros[3] / 2;
    return [primeiroDividido, ultimo ];
  }
  
  let numeros = [8, 6, 4, 10];
  let resultado = processarArray(numeros);
  
  console.log(resultado);
  