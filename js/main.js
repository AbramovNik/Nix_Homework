$(document).ready(function () {

    $(".nav-btn").on("click", function () {
        $("body").toggleClass("menu_active");
    });

    if ($('body').width() <= 1023) {
        $(".service-wrapp").slick({
            arrows: false,
            dots: true,
        });

    }
})