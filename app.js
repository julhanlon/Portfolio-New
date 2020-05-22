$(document).ready(function () {
  console.log("hello");

  $("#portfolio").hide();
  $("#footer").hide();

  hideOpening();

  var timer = "";
  function hideOpening() {
    timer = setTimeout(function () {
      $("#opening").fadeOut();
      $("#portfolio").show();
      $("#footer").show();
    }, 3000);
  }
});
