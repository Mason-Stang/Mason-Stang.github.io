/*!
 * Custom JS for CS33
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  var func = function(event) {
      var $anchor = $(this);
      $("#page-title").addClass("top-nav-collapse");
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 800, 'easeInOutExpo');
      event.preventDefault();
  };
  $('a.page-scroll').bind('click', func);
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// Adds background class on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 65) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


function collapse(ele) {
  let content = $(ele);
  if (content.css('display') !== 'none') {
      content.css('display', 'none');
  } else {
      content.css('display', 'block');
  }
}

if ($("button.foldable").length > 0) {
  $('.foldable').click(function (event) {
      collapse(event.target.nextElementSibling);
  });
}

function changeImg(){
          const fileName = getFileName(document.getElementById("home-img").src);
          if (fileName == "traderTomsCsFaded.png") {
            document.getElementById("home-img").src = "img/cauliflower-gnocci-no-bg.png";
          } else if (fileName == "cauliflower-gnocci-no-bg.png") {
            document.getElementById("home-img").src = "img/everything-bag-seas-no-bg.png";
          } else if (fileName == "everything-bag-seas-no-bg.png") {
            document.getElementById("home-img").src = "img/PB-Cups-No-Bg.png";
          } else if (fileName == "PB-Cups-No-Bg.png") {
            document.getElementById("home-img").src = "img/tt-watermelon-spread-resize.jpg";
          } else if (fileName == "tt-watermelon-spread-resize.jpg") {
            document.getElementById("home-img").src = "img/traderTomsCsFaded.png";
          } else if (fileName == "Asset_4.svg") {
            document.getElementById("home-img").src = "static/img/shrek.png";
          } else if (fileName == "shrek.png") {
            document.getElementById("home-img").src = "static/img/Asset_7.svg";
          }

}

function getFileName(path) {
  const arr = path.split("/");
  return arr[arr.length - 1];
}
