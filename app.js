var closeButton = document.getElementsByClassName("closebtn");
var leftNav = document.getElementById("nav-left");
var rightNav = document.getElementById("nav-right");
var slideoutContentLeft = document.getElementsByClassName("slideout-left");
var slideoutContentRight = document.getElementsByClassName("slideout-right");

function openLeftNav() {
  leftNav.style.width = "30%";
  for (var i=0; i < slideoutContentLeft.length; i++) {
    slideoutContentLeft[i].style.display = "block";
  }
};

function closeLeftNav() {
  for (var i=0; i < slideoutContentLeft.length; i++) {
    slideoutContentLeft[i].style.display = "none";
  }
}

function openRightNav() {
  rightNav.style.width = "30%";
  for (var i=0; i < slideoutContentRight.length; i++) {
    slideoutContentRight[i].style.display = "block";
  }
}

closeButton.onclick = function(e) {
  console.log('click');
  closeLeftNav();
}

leftNav.onclick = function(e) {
  //code to open nav-left
  openLeftNav();
};

rightNav.onclick = function(e) {
  //code to open nav-right
  openRightNav();
};
