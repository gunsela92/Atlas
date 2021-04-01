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
        $('.inline-choice.active > span').attr("style", "border: thin solid #5C605F; border-bottom: none;")
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
        $('.inline-choice.active > span').attr("style", "border-bottom: none;")
        $('.inline-choice.active ul').attr("style", "border-left: 1px solid #fff; border-right: 1px solid #fff; border-bottom: 1px solid #fff");
        $(".navbar-toggler-icon").removeClass("dark");
        $(".navbar-toggler-icon").addClass("light");
      }
    });
  }
});


$(function() {
  $(".navbar-toggler").on('click',function() {
    if ($(".collapse").css('display') == 'block') {
      $('.section1').css('margin-top', function (index, curValue) {
        return parseInt(curValue, 10) - 120 + 'px';
    });
      $('.section1').css({
        'transition' : '.5s'
      })
    } else if ($(".collapse").css('display') == 'none') {
      $('.section1').css('margin-top', function (index, curValue) {
        return parseInt(curValue, 10) + 120 + 'px';
    });
      $('.section1').css({
        'transition' : '.5s'
      })
    }
  })


})

$(function() {
  if ($(window).width() < 990) {
    $(".navbar-toggler-icon").removeClass("dark");
    $(".navbar-toggler-icon").addClass("light");
  } else {
    $(".navbar-toggler-icon").removeClass("light");
    $(".navbar-toggler-icon").addClass("dark");
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
  $('.inline-choice').on('click',function() {
    $('.inline-choice').addClass('active');
  })

  $( ".inline-choice" ).hover(function() {
    $('.inline-choice').addClass('active');
  }, function(e) {
    if(!$(e.target).parents('.inline-choice .active').length)
       $('.inline-choice').removeClass('active');
  });
})

$(document).mouseup(function(e) 
{
    var container = $(".inline-choice");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $('.inline-choice').removeClass('active');
    }
});