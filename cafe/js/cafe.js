$(function(){
  $(".header-open-button").click(function(){
    $(".main-navigation").fadeIn();
    $(this).hide();
    return false;
  })
  $(".header-close-button").click(function(){
    $(".main-navigation").fadeOut();
    $(".header-open-button").show();
    return false;
  })
})