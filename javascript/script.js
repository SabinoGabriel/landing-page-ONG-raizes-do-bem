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

