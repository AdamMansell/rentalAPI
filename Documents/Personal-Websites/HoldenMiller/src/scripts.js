$( document ).ready(function() {
  $(".introText").fadeIn(3000);
  $(".introText").click(function() {
    $(".introText").fadeOut(1000);
    $(".text1").delay(1000).fadeIn(1000);
  });
  $(".text1").click(function() {
    $(".text1").fadeOut(1000);
    $(".text2").delay(1000).fadeIn(1000);
  });
  $(".text2").click(function() {
    $(".text2").fadeOut(1000);
    $(".text3").delay(1000).fadeIn(1000);
  });
  $(".text3").click(function() {
    $(".text3").fadeOut(1000);
    $(".text4").delay(1000).fadeIn(1000);
  });
  $(".text4").click(function() {
    $(".text4").fadeOut(1000);
    $(".text5").delay(1000).fadeIn(1000);
  });
  $(".text5").click(function() {
    $(".text5").fadeOut(1000);
    $(".text6").delay(1000).fadeIn(1000);
  });
  $(".text6").click(function() {
    $(".text6").fadeOut(1000);
    $(".text7").delay(1000).fadeIn(1000);
  });
});