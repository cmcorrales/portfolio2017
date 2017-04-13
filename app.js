var leftButton = document.getElementById("left-btn");
var leftNav = document.getElementById("nav-left");
var rightNav = document.getElementById("nav-right");
var slideoutLeft = document.querySelectorAll('#slideout-left');
var slideoutRight = document.querySelectorAll('#slideout-right');
var leftClose = document.getElementById('left-btn');

navClick (leftNav, slideoutLeft);
navClick (rightNav, slideoutRight);

function navClick (navElement, containerToDisplay) {
  navElement.onclick = function() {
    menuDisplay(containerToDisplay, 'block');
    navElement.style.width = '30%';
  };
}

closeMenu(leftClose, slideoutLeft);

function closeMenu (closeTriggers, closeContainer) {
  closeTriggers.onclick = function() {
    console.log("click");
    menuDisplay(closeContainer, 'none');
    return false;
  }
}

function menuDisplay (elements, specifiedDisplay) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = specifiedDisplay;
    if(specifiedDisplay === 'none') {
      elements[index].style.width = '0';
      elements[index].style.position = 'absolute';
      elements[index].style.index = '-2';


    }
  }
}


// function openLeftNav() {
//   leftNav.style.width = "30%";
//   for (var i=0; i < slideoutContentLeft.length; i++) {
//     slideoutContentLeft[i].style.display = "block";
//   }
// };
//
// leftButton.onclick = function(e) {
//   console.log('click');
//   closeLeftNav();
// }
//
// function closeNav (elements) {
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].style.display = 'none';
//   }
// }
//
// closeNav(slideoutLeft);
// closeNav(slideoutRight);
//
//
// function openRightNav() {
//   rightNav.style.width = "30%";
//   for (var i=0; i < slideoutContentRight.length; i++) {
//     slideoutRight[i].style.display = "block";
//   }
//   var timeout = setTimeout(timeoutShow, 100);
// }
//
// function timeoutShow() {
//   for (var i=0; i < slideoutContentRight.length; i++) {
//     slideoutContentRight[i].style.transition = 2;
// }
// }
