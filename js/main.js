// Start Button The Menu
let bars = document.querySelector(".bars");
let llinks = document.querySelector(".links-right");
let button = document.querySelector(".links");

bars.addEventListener("click",function() {
  bars.classList.toggle("open");
  if(bars.classList.contains("open")) {
    llinks.style.display = "flex";
    button.style.left = "0px";
  }
  else {
    button.style.left = "-50em";
  }
})
// End Button The Menu

// start container 
function manageContainer(){
  let containerImg = document.querySelector(".img-right img");
  containerImg.style.left = "0px";

  let containerText = document.querySelector(".text-left");
  containerText.style.transform = "scale(1)" 
}


// start boxs 
let boxs = Array.from(document.querySelectorAll("#boxes .continar .box"));
let boxsHeader= document.querySelector("#boxes h1");
let boxsSection = document.querySelector(".ani");


window.onscroll = function () {
  if (window.scrollY >= "800") {
    boxsHeader.style.transform = "scale(1)"
    setTimeout(function () {
      document.querySelector(".box1").style.transform = "scale(1)";
    },1000)
    setTimeout(function () {
      document.querySelector(".box2").style.transform = "scale(1)";
    },2000)
    setTimeout(function () {
      document.querySelector(".box3").style.transform = "scale(1)";
    },3000)
  }
};

window.onload = () => {
  manageContainer();
}