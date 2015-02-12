
$(document).ready(function()
{
  reset();
  transitionOnActiveImage();
})

///// INIT vars


///// INIT build
reset = function() {
  console.log("start build");
  TweenLite.to( $(".bg", ".image_group"), 0, {scale:1.15, opacity:0, transformOrigin:"50% 10%"});
  TweenLite.to( $(".cutout", ".image_group"), 0, {scale:1.35, transformOrigin:"50% 40%"})
}

transitionOnActiveImage = function() {
  var selectedGroup = $("div.active");
  console.log("selectedGroup: ", selectedGroup);
  TweenLite.to( $(".bg", selectedGroup), 1, {opacity:1});
  TweenLite.to( $(".bg", selectedGroup), 4.25, {scale:1, ease:Power1.easeOut, delay:0.25});
  TweenLite.to( $(".cutout", selectedGroup), 3.5, {scale:1, ease:Power3.easeInOut});
}
