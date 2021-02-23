$('.popup__close-btn').on('click', function () {
    $('.overlay, .popup').fadeOut('slow');
});

$('.filter-style').styler();

$('input[name=phone]').mask("+375 (99) 999-99-99");

$('#email-enter').on('click', function () {
    $(this).css('display', 'none');
    $('.enter-popup__phone-enter').css('display', 'none');
    $('.enter-popup__email-enter').css('display', 'block');
});