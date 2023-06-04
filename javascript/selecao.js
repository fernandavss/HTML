document.addEventListener('DOMContentLoaded', function() {
    dia = document.querySelector('.dia')
    dia.innerHTML = localStorage.getItem('Dia')
    semana = document.querySelector('.semana')
    semana.innerHTML = localStorage.getItem('Semana')
})

document.addEventListener('DOMContentLoaded', function() {
    var escolhas = document.querySelectorAll('.escolheu')
  
    escolhas.forEach(function(escolha) {
      escolha.addEventListener('click', function(event) {
        pessoaElemento = escolha.querySelector('.pessoa')
  
        if (pessoaElemento) {
          if (pessoaElemento.innerText === 'Carolina') {
            pessoaElemento.remove()
          }
        } else {
          nomeElemento = document.createElement('p')
          nomeElemento.classList.add('pessoa')
          nomeElemento.innerText = 'Carolina'
          escolha.appendChild(nomeElemento)
        }
      })
    })
  })
  
  
  
  