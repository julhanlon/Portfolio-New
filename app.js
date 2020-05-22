$(document).ready(function () {
  console.log("hello");

  $("#portfolio").hide();
  $("#footer").hide();
  $(".navbar").hide();

  hideOpening();

  var timer = "";
  function hideOpening() {
    timer = setTimeout(function () {
      $("#opening").fadeOut();
      $("#portfolio").show();
      $("#footer").show();
      $(".navbar").show();
    }, 3000);
  }
});
