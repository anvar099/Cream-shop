// Carousel
$(".d__product__selected").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".d__product__column__list",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".d__prev__card",
        nextArrow: ".d__next__card",
        arrows: true,
        dots: true,
        autoplay: true,
        fade: false,
        autoplaySpeed: 2000,
      },
    },
  ],
});
$(".d__product__column__list").slick({
  slidesToShow: 5,
  slidesToScroll: 0,
  asNavFor: ".d__product__selected",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});


// incrementor
$("#d__plus").click(function () {
  changeValue(1);
});
$("#d__minus").click(function () {
  changeValue(-1);
});

function changeValue(val) {
  var container = $("#d__value");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


$(".products__info").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  nextArrow: ".next__card",
  variableWidth: true,
  prevArrow: ".prev__card",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 592,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});