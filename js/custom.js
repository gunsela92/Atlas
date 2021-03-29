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

    setTimeout(nextBackground, 20000);
  }
  setTimeout(nextBackground, 20000);
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

$(document).ready(function () {
  $(".switchInner").on("click", function (e) {
    $(".switchInner").css("bottom", "25px");
  });
});
