$(document).on('ready', function() {
    $(".mainMenu").slick({
      fade:true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed:1000,
      dots: false,
      arrows: false,
    });
  });

$(function () {
    $('#jsOpen').click(function () {
      $('#overlayBox, .modalWindow').fadeIn();
    });
    $('.jsClose').click(function(){
      $('#overlayBox, .modalWindow').fadeOut();
    });
  });

$(function() {
    $('.hamburgerMenu').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.hamburgerMenuSP').addClass('active');
        } else {
            $('.hamburgerMenuSP').removeClass('active');
        }
    });
  });

  $(function() {
    $('.hamburgerMeosnuClose').click(function() {
        $(this).toggleClass('hamburgerMeosnuClick');

        if ($(this).hasClass('hamburgerMeosnuClick')) {
            $('.hamburgerMeosnuClose').addClass('hamburgerMeosnuClick');
        } else {
            $('.hamburgerMeosnuClose').removeClass('hamburgerMeosnuClick');
        }
    });
  });