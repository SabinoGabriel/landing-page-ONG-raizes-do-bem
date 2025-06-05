// javascript/script.js
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        // Opcional: Mudar o ícone do botão hamburguer para um "X" quando o menu está ativo
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
});