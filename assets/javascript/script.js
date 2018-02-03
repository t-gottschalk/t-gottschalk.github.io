$(document).ready(function() {

var splashBox = $('.splash-box').height();

$(window).scroll(function() {
  var scroll = $(this).scrollTop();

  // Transparent to appearing navbar with hover
  if (scroll <= 540) {
    $('header').css('background', 'transparent');
    $('.nav-topics').css('color', 'white');
    $(".nav-topics").hover(function(){
      $(this).css("color", "#99badd");
    }, function() {
      $(this).css("color", "white");
    });
  } else if (scroll > 540) {
    $('header').css('background', 'black');
    $(".nav-topics").hover(function(){
      $(this).css("color", "#99badd");
    }, function() {
      $(this).css("color", "white");
    });
  }

  // SVG Logo image speed
  if (scroll <= splashBox) {
    $('.logo').css({
      'transform' : 'translate(0px, '+ scroll /1.3 +'%)'
  });
  }

  // Portfolio picture opacity
  if (scroll > $('.portfolio-pic').offset().top - $(window).height()) {
    $('.portfolio-pic').css({'background-position':'center '+ (scroll - $('.portfolio-pic').offset().top) +'px'});
    var opacity = (scroll - $('.portfolio-pic').offset().top + 400) / (scroll / 5);
    $('.portfolio-pic-opacity').css({'opacity': opacity});
  }

  // Technology and Experience floating elements
  if (scroll > $('.tech-exp').offset().top - $(window).height()) {
    var offset = (Math.min(0, scroll - $('.tech-exp').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }
});
});