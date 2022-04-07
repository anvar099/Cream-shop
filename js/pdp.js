// Carousel
$(".product__selected").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".product__column__list",

});
$(".product__column__list").slick({
  slidesToShow: 5,
  slidesToScroll: 0,
  asNavFor: ".product__selected",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});


// incrementor
$("#plus").click(function () {
  changeValue(1);
});
$("#minus").click(function () {
  changeValue(-1);
});

function changeValue(val) {
  var container = $("#value");
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


