var body = $("#banner");
var backgrounds = [
  "url(./img/background/gorsel1.png)",
  "url(./img/background/gorsel2.jpg)",
  "url(./img/background/gorsel3.jpg)",
  "url(./img/background/gorsel4.jpg)",
  "url(./img/background/gorsel5.jpg)",
  "url(./img/background/gorsel6.jpg)",
  "url(./img/background/gorsel7.jpg)",
  "url(./img/background/gorsel8.jpg)",
];
var current = 0;

$(function () {
  var body = $("#banner");

  function nextBackground() {
    body.css({
      "background-image":
        "linear-gradient(to left, rgba(0, 0, 0, .6), transparent 27%), linear-gradient(to bottom, rgba(0, 0, 0, .6), transparent 27%), linear-gradient(to right, rgba(0, 0, 0, .6), transparent 27%)," +
        backgrounds[(current = ++current % backgrounds.length)],
    });

    setTimeout(nextBackground, 5000);
  }
  setTimeout(nextBackground, 5000);
  body.css({
    "background-image":
      "linear-gradient(to left, rgba(0, 0, 0, .6), transparent 27%), linear-gradient(to bottom, rgba(0, 0, 0, .6), transparent 27%), linear-gradient(to right, rgba(0, 0, 0, .6), transparent 27%)," +
      backgrounds[0],
  });
});

$(function () {
  $("#banner").click(function () {
    nextBackground();
  });
});

function nextBackground() {
  body.css({
    "background-image":
      "linear-gradient(to left, rgba(0, 0, 0, .6), transparent 27%), linear-gradient(to bottom, rgba(0, 0, 0, .6), transparent 27%), linear-gradient(to right, rgba(0, 0, 0, .6), transparent 27%)," +
      backgrounds[(current = ++current % backgrounds.length)],
  });
}

$(function () {
  var scroll_start = 0;
  var startchange = $("#banner");
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

$(function () {
  if ($(window).width() > 990) {
  var $el,
    leftPos,
    newWidth,
    $mainNav = $(".navMenuItems");

  $mainNav.append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");

  $magicLine
    .width($(".one").width() + 5)
    .css("left", $(".one").position().left + 13)
    .css("margin-left", "41px")
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

  $(".navMenuItems li a").hover(
    function () {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width() - 85;
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth,
      });
    },
    function () {
      $magicLine.stop().animate({
        left: $magicLine.data("origLeft"),
        width: $magicLine.data("origWidth"),
      });
    }
  );
  } else {
    $("#magic-line").remove();
  }
});

$(window).resize(function () {
  $("#magic-line").remove();
  if ($(window).width() > 990) {
    var $el,
      leftPos,
      newWidth,
      $mainNav = $(".navMenuItems");
  
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
  
    $magicLine
      .width($(".one").width() + 5)
      .css("left", $(".one").position().left)
      .css("margin-left", "41px")
      .data("origLeft", $magicLine.position().left)
      .data("origWidth", $magicLine.width());
  
    $(".navMenuItems li a").hover(
      function () {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width() - 85;
        $magicLine.stop().animate({
          left: leftPos,
          width: newWidth,
        });
      },
      function () {
        $magicLine.stop().animate({
          left: $magicLine.data("origLeft"),
          width: $magicLine.data("origWidth"),
        });
      }
    );
    } else {
      $("#magic-line").remove();
    }
});
