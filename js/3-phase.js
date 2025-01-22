// Start Boxes Phas
window.onload = function() {
  var box1 = document.getElementById("box-1");
  var box2 = document.getElementById("box-2");
  var box3 = document.getElementById("box-3");
  var box4 = document.getElementById("box-4");

  setTimeout(function() {
     box1.style.bottom = `0px`;
     box1.style.transform = `scale(1)`;
  },1000)
  setTimeout(function() {
     box2.style.bottom = `0`;
     box2.style.transform = `scale(1)`;
  },2000)
  setTimeout(function() {
     box3.style.bottom = `0`;
     box3.style.transform = `scale(1)`;
  },3000)
  setTimeout(function() {
     box4.style.bottom = `0`;
     box4.style.transform = `scale(1)`;
  },4000)
};
// End Boxes Phase
