$('.dropdown').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('show');
});

$('.play-now-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: false
});

$('.top-free-pokies-slider').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    // items: 5,
    loop: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    responsive: {0: {items: 1}, 490: {items: 2}, 720: {items: 3}, 965: {items: 5}}
});

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();