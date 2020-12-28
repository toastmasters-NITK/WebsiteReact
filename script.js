(function ($) {
    'use strict';



    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
            document.getElementById('nav-img').src='images/navLogo.png'; 
            document.getElementById('dropdownNavMenu').style.backgroundColor="#772432";  
        } else {
            $('.navigation').removeClass('nav-bg');
            document.getElementById('nav-img').src='images/logo.png';
            document.getElementById('dropdownNavMenu').style.backgroundColor="#004165"; 
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    //cards
    $( ".card" ).hover(
        function() {
          $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
        }, function() {
          $(this).removeClass('shadow-lg');
        }
      );

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });
})(jQuery);
