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

$(function() {     
  var scroll_start = 0;
  var startchange = $('#banner');
  var offset = startchange.offset();
   if (startchange.length){
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $(".navbar").css('background-color', '#f0f0f0');
         $(".navbar").css('transition', '500ms linear');
         $("#mainLogo").attr("src","./img/MECELLEM-logo.svg");
         $('.navbar .nav-link').attr('style', 'color: gray !important');
         $('.language').attr('style', 'border: 1px solid #5C605F !important; color: #5C605F !important');
         $('.dropdown-item').attr('style', 'color: #5C605F !important');
         $('.dropdown-menu').attr('style', 'border: 1px solid #5C605F !important');
         $('.navbar-toggler-icon').removeClass('light');
         $('.navbar-toggler-icon').addClass('dark');
      } else {
         $('.navbar').css('background-color', 'transparent');
         $("#mainLogo").attr("src","./img/MECELLEM-logo-white-01.svg");
         $('.navbar .nav-link').attr('style', 'color: white !important');
         $('.language').attr('style', 'border: 1px solid white !important; color: white !important');
         $('.dropdown-item').attr('style', 'color: white !important');
         $('.dropdown-menu').attr('style', 'border: 1px solid white !important');
         $('.navbar-toggler-icon').removeClass('dark');
         $('.navbar-toggler-icon').addClass('light');
      }
  });
   }

});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    autoplay: true,
    interval: 20000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: true,
    autoWidth: true,
    trimSpace: false,
    gap: 205,
    padding: {
      left : '8rem',
      right: '8rem',
    },
    throttle: 100,
    breakpoints: {
      1440: {
        perPage: 2,
        padding: {
          left : '8rem',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
      1300: {
        perPage: 2,
        padding: {
          left : '9rem',
          right: '0',
        },
        gap: 200,
        focus : 'center',
      },
      1300: {
        perPage: 2,
        padding: {
          left : '7rem',
          right: '0',
        },
        gap: 150,
        focus : 'center',
      },
      1100: {
        perPage: 2,
        padding: {
          left : '6%',
          right: '0',
        },
        gap: 100,
        focus : 'center',
      },
      1000: {
        perPage: 2,
        padding: {
          left : '4%',
          right: '0',
        },
        gap: 60,
        focus : 'center',
      },
      920: {
        perPage: 2,
        padding: {
          left : '4%',
          right: '0',
        },
        gap: 40,
        focus : 'center',
      },
      900: {
        perPage: 1,
        padding: {
          left : '5%',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
      750: {
        perPage: 1,
        padding: {
          left : '5%',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
      580: {
        perPage: 1,
        padding: {
          left : '3%',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
      480: {
        perPage: 1,
        padding: {
          left : '1%',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
      450: {
        perPage: 1,
        padding: {
          left : '1%',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
      400: {
        perPage: 1,
        padding: {
          left : '2.5%',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
      330: {
        perPage: 1,
        padding: {
          left : '1%',
          right: '0',
        },
        gap: 300,
        focus : 'center',
      },
    }
  }).mount();
});
