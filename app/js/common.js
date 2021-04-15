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
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {0: {items: 1}, 490: {items: 2}, 720: {items: 3}, 965: {items: 5}}
});

$('.news-slider').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    loop: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {0: {items: 1}, 490: {items: 2}, 720: {items: 3}, 965: {items: 4}, 1200: {items: 5}}
});

$('.owl-casino').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {0: {items: 1}}
});

$('.casino-page-partners-slider').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {0: {items: 4}, 490: {items: 4}, 720: {items: 4}, 965: {items: 4}}
});

$('.casino-page-games-slider').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {0: {items: 4}, 490: {items: 4}, 720: {items: 4}, 965: {items: 5}}
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

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.btn-load-text').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.text-hidden').fadeIn();
});

$('.btn-load-card').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.card-load-wrapper').find('.card-load:hidden').slice(0, 5).slideDown();
});

$('.view-section__head').on('click', function () {
    $(this).toggleClass('click').siblings('.view-section__body').fadeToggle();
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.view-section').addClass('fixed');
    } else {
        $('.view-section').removeClass('fixed');
    }
});