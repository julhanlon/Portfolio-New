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
      $("#portfolio").show();
      $("#footer").show();
      $(".navbar").show();
    }, 3000);
  }
});
