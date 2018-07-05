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

$(window).ready(function () {
    $('body').css('opacity', '1');
 })