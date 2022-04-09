// incrementor
$("#plus__number-1").click(function () {
  changeValue1(1);
});
$("#minus__number-1").click(function () {
  changeValue1(-1);
});

$("#plus__number-2").click(function () {
  changeValue2(1);
});
$("#minus__number-2").click(function () {
  changeValue2(-1);
});

$("#plus__number-3").click(function () {
  changeValue3(1);
});
$("#minus__number-3").click(function () {
  changeValue3(-1);
});

$("#plus__number-4").click(function () {
  changeValue4(1);
});
$("#minus__number-4").click(function () {
  changeValue4(-1);
});

function changeValue1(val) {
  var container = $(".d__value-1");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}
function changeValue2(val) {
  var container = $(".d__value-2");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}
function changeValue3(val) {
  var container = $(".d__value-3");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}
function changeValue4(val) {
  var container = $(".d__value-4");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}
