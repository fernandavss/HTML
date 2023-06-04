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
        var possuiPessoa = escolha.classList.contains('pessoa')
        var pessoaElemento = escolha.querySelector('.pessoa')
  
        if (!possuiPessoa) {
          var outrasEscolhas = document.querySelectorAll('.escolheu.pessoa')
  
          if (outrasEscolhas.length > 0) {
            outrasEscolhas.forEach(function(outraEscolha) {
              outraEscolha.classList.remove('pessoa')
              pessoaElemento = outraEscolha.querySelector('.pessoa')
              if (pessoaElemento) {
                pessoaElemento.remove()
              }
            })
          }
  
          novaPessoaElemento = document.createElement('p')
          novaPessoaElemento.classList.add('pessoa')
          novaPessoaElemento.innerHTML = 'carolina'
          escolha.appendChild(novaPessoaElemento)
          escolha.classList.add('pessoa')
        } else {
          pessoaElemento.remove();
          escolha.classList.remove('pessoa')
        }
      })
    })
  })
  