document.addEventListener('DOMContentLoaded', function() {
    h2s = document.querySelectorAll('h2')
  
    h2s.forEach(function(h2) {
      h2.addEventListener('click', function(event) {
        ul = event.target.nextElementSibling
  
        if (ul.classList.contains('hidden')) {
            ul.classList.remove('hidden')
        } else {
            ul.classList.add('hidden')
        }
      })
    })
  })


 document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('regra')
    var botao = document.getElementById('botao')
  
    botao.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      var regra = input.value.trim()
      localStorage.setItem('regra', regra)
  
      window.location.href = 'pesquisa.html'
    })
  })
  


  