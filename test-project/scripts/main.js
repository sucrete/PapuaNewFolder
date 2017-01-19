var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1310011278775-dumpfm-FAUXreal-tumblr_lmybgxJiRk1qcnhzto1_500.jpg') {
      myImage.setAttribute ('src','images/tumblr_m59m39TrZF1qb3erro1_1280.gif');
    } else {
      myImage.setAttribute ('src','images/1310011278775-dumpfm-FAUXreal-tumblr_lmybgxJiRk1qcnhzto1_500.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = "Sorry. Chrome ain't bad, " + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}