document.addEventListener('DOMContentLoaded', function() {
    function after() {
        opcaos = document.querySelector('.opcaos')
        lis = opcaos.querySelectorAll('li') 
        for (li of lis) {
            if (li.classList.contains('hidden')) {
                li.classList.remove('hidden')
                li.classList.add('op')
            } else {
                li.classList.add('hidden')
                li.classList.remove('op')
            }
        }
    }
    horario = document.querySelector('.opcao.marcar')
    horario.addEventListener('click', function() {
        after()
    })
})








