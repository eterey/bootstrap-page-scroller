$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('[data-role="to-top-scroller"]').fadeIn();
        } else {
            $('[data-role="to-top-scroller"]').fadeOut();
        }
    });

    $('[data-role="to-top-scroller"]').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });
});