$(".popup__close-btn").on("click", function () {
  $(".overlay, .popup").fadeOut("slow");
});

$(".filter-style").styler();

$("input[name=phone]").mask("+375 (99) 999-99-99");

$("#email-enter").on("click", function (e) {
  e.preventDefault();
  $(this)
    .children()
    .text(
      $(this).text() == "Войти через email"
        ? "Войти по номеру телефона"
        : "Войти через email"
    );
  $(".enter-popup__phone-enter").toggleClass("enter-popup__phone-enter--hide");
  $(".enter-popup__email-enter").toggleClass("enter-popup__email-enter--show");
});

/* @@include("../blocks/modules/hamburger/hamburger.js")

  @@include("tabs.js")

  @@include("../blocks/modules/directions/directions.js")

  @@include("../blocks/modules/calculator/calculator.js")

  @@include("../blocks/modules/clients/clients.js")

  @@include("../blocks/modules/media/media.js")

  @@include("../blocks/modules/start/start.js")

  @@include("../blocks/modules/questions/questions.js")

  @@include("scroll.js")

  @@include("../blocks/modules/popups/popups.js") */
