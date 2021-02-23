$(function () {
    $(".popup__close-btn").on("click", function () {
        $(".overlay, .popup").fadeOut("slow");
    });

    $(".filter-style").styler();

    $("input[name=phone]").mask("+375 (99) 999-99-99");

    $("#email-enter").on("click", function () {
        $(this).children().text($(this).text() == "Войти через email" ? "Войти по номеру телефона" : "Войти через email");
        $(".enter-popup__phone-enter").toggleClass("enter-popup__phone-enter--hide");
        $(".enter-popup__email-enter").toggleClass("enter-popup__email-enter--show");
    });
});