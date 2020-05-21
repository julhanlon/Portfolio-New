$(document).ready(function () {
  console.log("hello");

  $("#portfolio").hide();
  hideOpening();

  var timer = "";
  function hideOpening() {
    timer = setTimeout(function () {
      $("#opening").fadeOut();
      $("#portfolio").show();
    }, 3000);
  }
});
