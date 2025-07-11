function mostrarNotificacao() {
  var alerta = document.getElementById("alerta");
  
  // Exibe a notificação
  alerta.classList.add("show");

  // Depois de 3 segundos, esconde a notificação
  setTimeout(function() {
    alerta.classList.remove("show");
  }, 3000);  // Tempo em milissegundos (3 segundos)
}


      