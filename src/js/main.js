/* Main Menu Toggle */
$(function(){
    $('.sib__main__menu').on('click', function(){
        $('.sb__header .wrapper').addClass('show');
    })
    $('.sib__mainmenu__close').on('click', function(){
        $('.sb__header .wrapper').removeClass('show');
    })
})

/* Hero Section Parallax Effect */
$(function() {
    if ($(window).width() > 767) {
      $('.sib__hero__section').each(function() {
          $(this).data('initialPosition', { left: 0, top: 0 });
      });

      $('.sib__hero__section').on('mousemove', function(event) {
          var moveX = (event.pageX - $(this).offset().left) / $(this).width() - 0.5;
          var moveY = (event.pageY - $(this).offset().top) / $(this).height() - 0.5;

          $(this).find('.parallax__effect1').css({
              'transform': 'translate(' + moveX * -20 + 'px, ' + moveY * -20 + 'px)'
          });

          $(this).find('.parallax__effect2').css({
            'transform': 'translate(' + moveX * -5 + 'px, ' + moveY * -5 + 'px)'
          });
          
          $(this).find('.parallax__effect3').css({
            'transform': 'translate(' + moveX * -9 + 'px, ' + moveY * -9 + 'px)'
          });

          $(this).find('.parallax__effect4').css({
            'transform': 'translate(' + moveX * -5 + 'px, ' + moveY * -5 + 'px)'
          });

          $(this).find('.parallax__effect5').css({
            'transform': 'translate(' + moveX * -7 + 'px, ' + moveY * -7 + 'px)'
          });

        }).on('mouseleave', function() {
            // Retrieve initial position and reset the image
            var initialPosition = $(this).data('initialPosition');
            $(this).find('.parallax__effect').css({
                'transform': 'translate(0, 0)'
            });
        });
    }
});