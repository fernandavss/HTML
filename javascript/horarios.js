document.addEventListener('DOMContentLoaded', function() {
    h1 = document.querySelector('.mudar')
    h1.innerHTML = localStorage.getItem('maquina')
})


document.addEventListener('DOMContentLoaded', function() {
    var podes = document.querySelectorAll('.pode');

    podes.forEach(function(pode) {
        pode.addEventListener('click', function(event) {
            var nav = pode.querySelector('nav');
            var ul = nav.querySelector('ul');
            var lis = ul.querySelectorAll('li');

            lis.forEach(function(li) {
                if (li.classList.contains('hidden')) {
                    li.classList.remove('hidden');
                } else {
                    li.classList.add('hidden');
                }
            });
        });

        var li = pode.nextElementSibling;
        li.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

