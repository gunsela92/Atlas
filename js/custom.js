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
        $(".language").attr(
          "style",
          "border: 1px solid #5C605F !important; color: #5C605F !important"
        );
        $(".dropdown-item").attr("style", "color: #5C605F !important");
        $(".dropdown-menu").attr(
          "style",
          "border: 1px solid #5C605F !important"
        );
        $(".navbar-toggler-icon").removeClass("light");
        $(".navbar-toggler-icon").addClass("dark");
      } else {
        $(".navbar").css("background-color", "transparent");
        $("#mainLogo").attr("src", "./img/MECELLEM-logo-white-01.svg");
        $(".navbar .nav-link").attr("style", "color: white !important");
        $(".language").attr(
          "style",
          "border: 1px solid white !important; color: white !important"
        );
        $(".dropdown-item").attr("style", "color: white !important");
        $(".dropdown-menu").attr("style", "border: 1px solid white !important");
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