
$(document).ready(function()
{
  init();
  reset();
  transitionOnActiveImage();
  timerStart();

  TweenLite.to("#loader", 0, {rotation:270, opacity:1});

})

///// INIT vars
init = function() {
  imageCount = $("div.image_group").length;
  i = 1;
}

///// INIT build
reset = function() {
  
}

transitionOnActiveImage = function() {
  var selectedGroup = $("div.active");
  // first reset the active
  TweenLite.set( $(".fade", selectedGroup), { opacity:1 });
  TweenLite.set( $(".gradient_fade", selectedGroup), { opacity:1 });
  TweenLite.set( $(".bg", selectedGroup), {scale:1.25, transformOrigin:"40% 30%"});
  TweenLite.set( $(".cutout", selectedGroup), {scale:1.5, transformOrigin:"40% 25%"})
  // now transition on
  TweenLite.to( $(".bg", selectedGroup), 4.25, {scale:1, ease:Power1.easeOut, delay:0.25});
  TweenLite.to( $(".cutout", selectedGroup), 5.5, {scale:1, ease:Power3.easeInOut, delay:0.75});
  TweenLite.to( $(".fade", selectedGroup), 1.5, {opacity:0});
  TweenLite.to( $(".gradient_fade", selectedGroup), 3, {opacity:0, delay:2});
}

transitionOffActiveImage = function() {
  var selectedGroup = $("div.active");
  TweenLite.to( $(".fade", selectedGroup), .75, {opacity:1});
  TweenLite.to( $(".gradient_fade", selectedGroup), .25, {opacity:1});
}

timerStart = function() {
  TweenLite.to("#loader_path", 0, {drawSVG:"100%"});
  TweenLite.from("#loader_path", 7, {drawSVG:"0%", delay:0.5, onComplete:advanceNextImage});
}

advanceNextImage = function() {
  activeImage = $('div.active');
  if (i >= imageCount) {
    i = 1;
    $('div.active').parent().children('div:nth-child(2)').addClass('active')
  } else {
    i++;
    activeImage.next().addClass('active');
  }
  activeImage.removeClass('active');
  transitionOnActiveImage();
  timerStart();
}
