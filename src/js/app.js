$(document).foundation();
$('select').styler();
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

    $('.news_list .news_block').each(function () {
        var textSelect = $(this).find('.text p');
        textBlock = $(textSelect).text();
        text = textBlock;
        moreText = '...';
        link = $(this).attr('href');
        more = '<a href=' + link + '>[...]</a>';

        if (text.length > 200) {
            text = text.substr(0, 200);
            $(textSelect).html(text + moreText);
        } else {
            text = text.substr(0, 200);
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

    if ($('.carousel_features').length) {
        $('.carousel_features').owlCarousel({
            loop: false, 
            margin: 0, 
            nav: true,
            dots: false,
            navText : [
                "<i class='i-arrow-left'></i>", "<i class='i-arrow-right'></i>"
            ],
             items: 1
        })
    }
    
 })

 // Burger
 $(document).ready(function() {
    $(".burger").click(function() {
      $(".stick").toggleClass(function () {
        return $(this).is('.open, .close') ? 'open close' : 'open';
      });
      $('.header_mobile').toggleClass('is-active');
    });
  });

  // Input
  $(document).ready(function(){
      $('.form_item-radiobox input').click(function(){
          $(".form_item-radiobox").removeClass('is-checked');
          $(this).parents(".form_item-radiobox").addClass('is-checked');
      })
  })

$(window).ready(function () {
    $('body').css('opacity', '1');
 })