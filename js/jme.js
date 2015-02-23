$(document).ready(function() {
  $('#fullpage').fullpage({
    responsive: 700
  });
  today = new Date();
  curTime = today.getHours();
  //console.log(curTime);
  checkBrowser();
  if (sBrowser == "Chrome" || sBrowser == "Safari") {
    updateLandingWebkit(curTime);
  }
  else if (sBrowser == "Firefox") {
    updateLandingFirefox(curTime);
  }
  else if (sBrowser == "IE") {
    updateLandingIE(curTime);
  }
  else if (sBrowser == "Opera") {
    updateLandingOpera(curTime);
  }
  $("#fn-greeting").css({'opacity': '0', 'visibility': 'visible'})
                  .animate({opacity: 1}, 1200);
  $("#fn-i-am").delay(1500).css({'opacity': '0', 'visibility': 'visible'})
                  .animate({opacity: 1}, 1200);
  $(".arrow-down").hide().delay(3000).fadeIn('slow').delay(500).animate({bottom: "4%"});
});

$(".arrow-down").click(function(){
  $.fn.fullpage.moveSectionDown();
});

var sBrowser, sUsrAg = navigator.userAgent;
function checkBrowser() {
  if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Chrome";
  } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Safari";
  } else if (sUsrAg.indexOf("Opera") > -1) {
      sBrowser = "Opera";
  } else if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Firefox";
  } else if (sUsrAg.indexOf("MSIE") > -1) {
      sBrowser = "IE";
  }
}
function updateLandingWebkit(curTime) {
  if (curTime < 4) {
    $('#fn-greeting').html('well met, night owl');
    $('#landing').css({'background': '-webkit-linear-gradient(top, rgb(0, 0, 0), rgb(38, 24, 86))'});
  }
  else if (curTime < 12) {
    $('#fn-greeting').html('good morrow');
    $('#landing').css({'background': '-webkit-linear-gradient(top, rgb(180, 210, 236), rgb(255, 210, 113))'});
  }
  else if (curTime < 17) {
    $('#fn-greeting').html('good afternoon');
    $('#landing').css({'background': '-webkit-linear-gradient(top, rgb(255, 210, 113), rgb(178, 209, 231))'});
  } else {
    $('#fn-greeting').html('good evening');
    $('#landing').css({'background': '-webkit-linear-gradient(top, rgb(21, 20, 20), rgb(136, 72, 57))'});
  }
}
function updateLandingFirefox(curTime) {
  if (curTime < 4) {
    $('#fn-greeting').html('well met, night owl');
    $('#landing').css({'background': '-moz-linear-gradient(top, rgb(0, 0, 0), rgb(38, 24, 86))'});
  }
  else if (curTime < 12) {
    $('#fn-greeting').html('good morrow');
    $('#landing').css({'background': '-moz-linear-gradient(top, rgb(180, 210, 236), rgb(255, 210, 113))'});
  }
  else if (curTime < 17) {
    $('#fn-greeting').html('good afternoon');
    $('#landing').css({'background': '-moz-linear-gradient(top, rgb(255, 210, 113), rgb(178, 209, 231))'});
  } else {
    $('#fn-greeting').html('good evening');
    $('#landing').css({'background': '-moz-linear-gradient(top, rgb(21, 20, 20), rgb(136, 72, 57))'});
  }
}
function updateLandingIE(curTime) {
  if (curTime < 4) {
    $('#fn-greeting').html('well met, night owl');
    $('#landing').css({'background': '-ms-linear-gradient(top, rgb(0, 0, 0), rgb(38, 24, 86))'});
  }
  else if (curTime < 12) {
    $('#fn-greeting').html('good morrow');
    $('#landing').css({'background': '-ms-linear-gradient(top, rgb(180, 210, 236), rgb(255, 210, 113))'});
  }
  else if (curTime < 17) {
    $('#fn-greeting').html('good afternoon');
    $('#landing').css({'background': '-ms-linear-gradient(top, rgb(255, 210, 113), rgb(178, 209, 231))'});
  } else {
    $('#fn-greeting').html('good evening');
    $('#landing').css({'background': '-ms-linear-gradient(top, rgb(21, 20, 20), rgb(136, 72, 57))'});
  }
}
function updateLandingOpera(curTime) {
  if (curTime < 4) {
    $('#fn-greeting').html('well met, night owl');
    $('#landing').css({'background': '-o-linear-gradient(top, rgb(0, 0, 0), rgb(38, 24, 86))'});
  }
  else if (curTime < 12) {
    $('#fn-greeting').html('good morrow');
    $('#landing').css({'background': '-o-linear-gradient(top, rgb(180, 210, 236), rgb(255, 210, 113))'});
  }
  else if (curTime < 17) {
    $('#fn-greeting').html('good afternoon');
    $('#landing').css({'background': '-o-linear-gradient(top, rgb(255, 210, 113), rgb(178, 209, 231))'});
  } else {
    $('#fn-greeting').html('good evening');
    $('#landing').css({'background': '-o-linear-gradient(top, rgb(21, 20, 20), rgb(136, 72, 57))'});
  }
}

// TO-DO: refactor to make updateLanding* more DRY
 
