document.addEventListener('DOMContentLoaded', function() {
    // Esperar 3 segundos antes de exibir o alerta
    setTimeout(function() {
      var siteAlert = document.getElementById('site-alert');
  
      // Verificar se o alerta já foi fechado
      if (localStorage.getItem('siteAlertClosed') !== 'true') {
        // Adicionar a classe 'show' para exibir o alerta
        siteAlert.classList.add('show');
      }
    }, 5000);
  });
  
  function closeAlert() {
    var siteAlert = document.getElementById('site-alert');
    
    // Esconder o alerta
    siteAlert.style.display = 'none';
  
    // Armazenar o fechamento do alerta no armazenamento local
    localStorage.setItem('siteAlertClosed', 'true');
  }
