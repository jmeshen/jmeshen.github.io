$(document).ready(function() {
  today = new Date();
  var curTime = today.getHours();
  checkBrowser();
  updateLanding(browserPrefix, curTime);
  $("#fn-greeting")
    .css({'opacity': '0', 'visibility': 'visible'})
    .animate({opacity: 1}, 1200);
  $("#fn-i-am")
    .delay(1500)
    .css({'opacity': '0', 'visibility': 'visible'})
    .animate({opacity: 1}, 1200);
});

$(".arrow-down, .arrow-up").click(function(){
  $("#landing").slideToggle('slow');
});

var sBrowser, browserPrefix, sUsrAg = navigator.userAgent;
function checkBrowser() {
  if (sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Chrome";
    browserPrefix = '-webkit-';
  } else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Safari";
    browserPrefix = '-webkit-';
  } else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
    browserPrefix = '-o-';
  } else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Firefox";
    browserPrefix = '-moz-';
  } else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "IE";
    browserPrefix = '-ms-';
  }
}

function updateLanding(browserPrefix, curTime) {
  if (curTime < 4) {
    $('#fn-greeting').html('well met, night owl');
    $('#landing').css({'background': browserPrefix + 'linear-gradient(top, rgb(0, 0, 0), rgb(38, 24, 86))'});
  }
  else if (curTime < 12) {
    $('#fn-greeting').html('good morning');
    $('#landing').css({'background': browserPrefix + 'linear-gradient(top, rgb(180, 210, 236), rgb(255, 210, 113))'});
  }
  else if (curTime < 17) {
    $('#fn-greeting').html('good afternoon');
    $('#landing').css({'background': browserPrefix + 'linear-gradient(top, rgb(255, 210, 113), rgb(178, 209, 231))'});
  } else {
    $('#fn-greeting').html('good evening');
    $('#landing').css({'background': browserPrefix + 'linear-gradient(top, rgb(21, 20, 20), rgb(17, 81, 121)'});
  }
}


