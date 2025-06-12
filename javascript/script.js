// javascript/script.js
$(document).ready(function() {
    // Menu mobile toggle
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        // Opcional: Mudar o ícone do botão hamburguer para um "X" quando o menu está ativo
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
    // Fechar menu ao clicar em um link
    $('.nav_item a').on('click', function() {
        if($('#mobile_menu').hasClass('active')) {
            $('#mobile_menu').removeClass('active');
            $('#mobile_btn').find('i').removeClass('fa-times').addClass('fa-bars');
        }
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    const imagemCarrossel = document.getElementById('imagemCarrossel');
    const prev = document.querySelector('.carrossel-control.prev');
    const next = document.querySelector('.carrossel-control.next');
    const dotsContainer = document.getElementById('imagemCarrosselDots');

    if (imagemCarrossel && prev && next && dotsContainer) {
        const imageItems = imagemCarrossel.querySelectorAll('.carrossel-imagem-item');
        const totalImagens = imageItems.length;
        let currentImagemIndex = 0;

        // Funções para controle do carrossel
        function updateImagemCarrossel() {
            const offset = -currentImagemIndex * (100 / totalImagens); // Ex: para 3 imagens, 0%, -100%, -200%
            imagemCarrossel.style.transform = `translateX(${offset}%)`;
            updateDots();
        }

        function showImagem(index) {
            currentImagemIndex = index;
            updateImagemCarrossel();
        }

        function showNextImagem() {
            currentImagemIndex = (currentImagemIndex + 1) % totalImagens;
            updateImagemCarrossel();
        }

        function showPrevImagem() {
            currentImagemIndex = (currentImagemIndex - 1 + totalImagens) % totalImagens;
            updateImagemCarrossel();
        }

        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index === currentImagemIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Event Listeners para os botões de navegação
        prev.addEventListener('click', () => {
            showPrevImagem();
        });

        next.addEventListener('click', () => {
            showNextImagem();
        });

        // Event Listener para os indicadores (bolinhas)
        dotsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('dot')) {
                const dotIndex = Array.from(dotsContainer.children).indexOf(event.target);
                showImagem(dotIndex);
            }
        });

        updateImagemCarrossel();

    } else {
        console.warn('Elementos do carrossel de imagens não encontrados.');
    }   
})

