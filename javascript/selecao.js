document.addEventListener('DOMContentLoaded', function() {
    dia = document.querySelector('.dia')
    dia.innerHTML = localStorage.getItem('Dia')
    semana = document.querySelector('.semana')
    semana.innerHTML = localStorage.getItem('Semana')
})