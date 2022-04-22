$(function () {
  var scroll_start = 0;
  var startchange = $("#main");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar").css("background-color", "#f0f0f0");
        $(".navbar").css("transition", "500ms linear");
        $("#mainLogo").attr("src", "./img/MECELLEM-logo.svg");
        $(".navbar .nav-link").attr("style", "color: gray !important");
        $('.inline-choice > span').attr("style", "color: #5C605F; border: thin solid #5C605F;")
        $('.inline-choice.active > span').attr("style", "border: thin solid #5C605F;")
        $('.inline-choice > span::after').attr('style', "border-color: #000 transparent")
        $('.inline-choice.active ul').attr("style", "border-left: 1px solid #5C605F; border-right: 1px solid #5C605F; border-bottom: 1px solid #5C605F");
        $('.inline-choice li a').attr("style", "color: #5C605F");
        $(".navbar-toggler-icon").removeClass("light");
        $(".navbar-toggler-icon").addClass("dark");
      } else {
        $(".navbar").css("background-color", "transparent");
        $("#mainLogo").attr("src", "./img/MECELLEM-logo-white-01.svg");
        $(".navbar .nav-link").attr("style", "color: white !important");
        $('.inline-choice li a').attr("style", "color: #fff");
        $('.inline-choice > span').attr("style", "color: white; border: thin solid #fff");
        $('.inline-choice.active ul').attr("style", "border-left: 1px solid #fff; border-right: 1px solid #fff; border-bottom: 1px solid #fff");
        $(".navbar-toggler-icon").removeClass("dark");
        $(".navbar-toggler-icon").addClass("light");
      }
    });
  }
});


// $(function() {
//   $(".navbar-toggler").on('click',function() {
//     if ($(".collapse").css('display') == 'block') {
//       $('.section1').css('margin-top', function (index, curValue) {
//         return parseInt(curValue, 10) - 120 + 'px';
//     });
//       $('.section1').css({
//         'transition' : '.5s'
//       })
//     } else if ($(".collapse").css('display') == 'none') {
//       $('.section1').css('margin-top', function (index, curValue) {
//         return parseInt(curValue, 10) + 120 + 'px';
//     });
//       $('.section1').css({
//         'transition' : '.5s'
//       })
//     }
//   })
// })

$(document).scroll(function(e){
  var scrollTop = $(document).scrollTop();
  if(scrollTop > 0){
      $('.navbar').removeClass('static-top').addClass('fixed-top');
  } else {
      $('.navbar').removeClass('fixed-top').addClass('static-top');
  }
});

$(function() {
  if ($(window).width() < 990) {
    $(".navbar-toggler-icon").removeClass("dark");
    $(".navbar-toggler-icon").addClass("light");
  } else {
    $(".navbar-toggler-icon").removeClass("light");
    $(".navbar-toggler-icon").addClass("light");
  }
})

$(function() {
  if ($(window).width() > 990) {
  var $el,
    leftPos,
    newWidth,
    $mainNav = $(".navbar-nav");

  $mainNav.append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");

  $magicLine
    .width($(".one").width())
    .css("left", $(".one a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

  $(".navbar-nav li a").hover(
    function() {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width();
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
    function() {
      $magicLine.stop().animate({
        left: $magicLine.data("origLeft"),
        width: $magicLine.data("origWidth")
      });
    }
  );
  } else {
    $("#magic-line").remove();
  }
});

// Credit: https://css-tricks.com/jquery-magicline-navigation


$(window).resize(function () {
  $("#magic-line").remove();
  if ($(window).width() > 990) {
    var $el,
      leftPos,
      newWidth,
      $mainNav = $(".navbar-nav");
  
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
  
    $magicLine
      .width($(".one").width())
      .css("left", $(".one a").position().left)
      .data("origLeft", $magicLine.position().left)
      .data("origWidth", $magicLine.width());
  
    $(".navbar-nav li a").hover(
      function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
          left: leftPos,
          width: newWidth
        });
      },
      function() {
        $magicLine.stop().animate({
          left: $magicLine.data("origLeft"),
          width: $magicLine.data("origWidth")
        });
      }
    );
    } else {
      $("#magic-line").remove();
    }
});

$(function() {
  if (!$(".navbar-toggler-icon").hasClass("light")) {
    //GRI
    $('.inline-choice > span').removeClass('lightLanguage')
    $('.inline-choice > span').addClass('darkLanguage')
      $('.inline-choice > span').attr("style", "color: #5C605F; border: thin solid #5C605F;")
      $('.inline-choice.active > span').attr("style", "border: thin solid #5C605F;")
      $('.inline-choice > span::after').attr('style', "border-color: #000 transparent")
      $('.inline-choice.active ul').attr("style", "border-left: 1px solid #5C605F; border-right: 1px solid #5C605F; border-bottom: 1px solid #5C605F");
      $('.inline-choice li a').attr("style", "color: #5C605F");
  } else if (!$(".navbar-toggler-icon").hasClass("dark")) {
    $('.inline-choice > span').removeClass('darkLanguage')
    $('.inline-choice > span').addClass('lightLanguage')
    $('.inline-choice li a').attr("style", "color: #fff");
    $('.inline-choice > span').attr("style", "color: white; border: thin solid #fff");
    $('.inline-choice.active ul').attr("style", "border-left: 1px solid #fff; border-right: 1px solid #fff; border-bottom: 1px solid #fff");
  }
$('.inline-choice.active ul').attr("style", "border-bottom: 1px solid #fff");
})

$(function() {
  $( ".inline-choice" ).hover(function() {
    $('.inline-choice').addClass('active');
      if (!$(".navbar-toggler-icon").hasClass("light")) {
        $('.inline-choice > span').removeClass('lightLanguage')
        $('.inline-choice > span').addClass('darkLanguage')
          $('.inline-choice > span').attr("style", "color: #5C605F; border: thin solid #5C605F;")
          $('.inline-choice.active > span').attr("style", "border: thin solid #5C605F;")
          $('.inline-choice > span::after').attr('style', "border-color: #000 transparent")
          $('.inline-choice.active ul').attr("style", "border-left: 1px solid #5C605F; border-right: 1px solid #5C605F; border-bottom: 1px solid #5C605F");
          $('.inline-choice li a').attr("style", "color: #5C605F");
      } else if (!$(".navbar-toggler-icon").hasClass("dark")) {
        $('.inline-choice > span').removeClass('darkLanguage')
        $('.inline-choice > span').addClass('lightLanguage')
        $('.inline-choice li a').attr("style", "color: #fff");
        $('.inline-choice > span').attr("style", "color: white; border: thin solid #fff");
        $('.inline-choice.active ul').attr("style", "border-left: 1px solid #fff; border-right: 1px solid #fff; border-bottom: 1px solid #fff");
      }
    $('.inline-choice.active ul').attr("style", "border-bottom: 1px solid #fff");
  }, function(e) {
    if(!$(e.target).parents('.inline-choice .active').length)
       $('.inline-choice').removeClass('active');
       $('.inline-choice ul').attr("style", "border-bottom: none;")
  });
})

$(document).mouseup(function(e) 
{
    var container = $(".inline-choice");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $('.inline-choice').removeClass('active');
      $('.inline-choice ul').attr("style", "border-bottom: none;")
    } else {
      $('.inline-choice').addClass('active');
      $('.inline-choice.active ul').attr("style", "border-bottom: 1px solid #fff");
    }
});

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  allowSlideNext: true,
  spaceBetween: 150,
  slideShadows: false,
  breakpointsBase: 'container',
  autoplay: {
      delay: 20000,
  },
  loop: true,
  slidesPerView: '3',
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1,
  },
  breakpoints: {
      1450: {
          slidesPerView: 3,
          spaceBetween: 100,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      },
      1250: {
          slidesPerView: 2,
          spaceBetween: 0,
      },
      900: {
          slidesPerView: 2,
          spaceBetween: 0
      },
      600: {
          slidesPerView: 1,
          spaceBetween: 0
      },
      300: {
          slidesPerView: 1,
          spaceBetween: 0
      }
  }
});
$("#main").bgswitcher({
  images: ["img/background/gorsel1.png", "img/background/gorsel2.jpg", "img/background/gorsel4.jpg", "img/background/gorsel5.jpg", "img/background/gorsel6.jpg", "img/background/gorsel7.jpg", "img/background/gorsel8.jpg"],
  interval: 20000,
  loop: true
});

$("#main").on("click", function () {
  $('#main').bgswitcher("next");
});