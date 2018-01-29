alert("connected");

var splashBox = $('.splash-box').height();

$(window).scroll(function(){

  var scroll = $(this).scrollTop();

  // Picture Boca Raton opacity
  if (scroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (scroll - $('.large-window').offset().top) +'px'});

    var opacity = (scroll - $('.large-window').offset().top + 400) / (scroll / 5);

    $('.window-tint').css({'opacity': opacity});
  }

  // Technology and Experience Floating Elements

  if (scroll > $('.tech-exp').offset().top - $(window).height()){

    var offset = (Math.min(0, scroll - $('.tech-exp').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }
});
