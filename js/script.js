$(document).ready(function () {
    $('.button-next-page').click(function () {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;

        $('html,body').animate({
            scrollTop: destination
        }, 1200);
        return false;
    });
});
