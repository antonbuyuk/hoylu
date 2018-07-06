$(document).foundation();

// Text
$(document).ready(function () {
    $('.news_block').each(function () {
        var textSelect = $(this).find('.text p');
            textBlock = $(textSelect).text();
            text = textBlock;
            moreText = '...';
            link = $(this).attr('href');
            more = '<a href=' + link + '>[...]</a>';

        if (text.length > 150) {
            text = text.substr(0, 150);
            $(textSelect).html(text + moreText);
        } else {
            text = text.substr(0, 150);
            $(textSelect).html(text);
        }
    });
});

// Carousel
$(document).ready(function () { 
    if ($('.carousel_main').length) {
        $('.carousel_main').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            items: 1
        })
    }
 })

$(window).ready(function () {
    $('body').css('opacity', '1');
 })