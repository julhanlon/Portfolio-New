$(document).ready(function () {
  console.log("hello");

  $("#portfolio").hide();
  $("#footer").hide();
  $(".navbar").hide();

  $("#opening").fadeOut(3500);
  hideOpening();

  var timer = "";
  function hideOpening() {
    timer = setTimeout(function () {
      $("#opening").hide();
      $("#portfolio").fadeIn(2000);
      $("#footer").show();
      $(".navbar").fadeIn(2000);
    }, 3000);
  }
});
