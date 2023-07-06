$(document).ready(function() {
    $(".button-contact").on("click", function() {
        $('.modal').fadeIn('fast');
        $('.modal__window').removeClass('modal__window_active');
        $('.modal__window_contact').addClass('modal__window_active');
    });

    $('.product-card__button').each(function(i) {
        $(this).on('click', function() {
            $('.modal').fadeIn('fast');
            $('.modal__window_buy .modal__subtitle').text($('.product-card__title').eq(i).text());
            $('.modal__window').removeClass('modal__window_active');
            $('.modal__window_buy').addClass('modal__window_active');
        });
    });

    $('.modal__background, .modal__close-btn').on("click", function() {
        $('.modal').fadeOut('fast');
    });
});