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

  $(document).on('ready', function() {
    $(".photoBoxSP").slick({
      arrows: false,
      autoplay: true,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "15%",
      dots: false,
      arrows:true,
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