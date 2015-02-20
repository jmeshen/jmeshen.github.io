var about = document.getElementById("about");
var speed = 1.5;

window.onscroll = function()
{
  var yOffset = window.pageYOffset;
    about.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
    }
