document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
}

if (document.querySelector('.carousels__slider') ) {
  const slider = tns({
    items: 3,
    nav: false,
    controls: true,
    controlsPosition: 'bottom',
    controlsContainer: '.arrow',
    container: '.carousels__slider',
    responsive: {
      "320": {
        items: 1,
        fixedWidth: 300,
        center: true
      },
      "768": {
        items: 1,
        fixedWidth: 400,
        center: true
      },
      "1024": {
        items: 2,
        edgePadding: 50,
        fixedWidth: 450,
        center: false
      }
    },
    mouseDrag: true,
    slideBy: "page",
    arrowKeys: true,
    swipeAngle: false,
    speed: 400,
    gutter: 10,
    loop: false,
    fixedWidth: 500,
    center: false,
  });
}

if (document.querySelector('.my-slider-people') ) {
  const slider = tns({
    items: 2,
    nav: false,
    controls: false,
    container: '.my-slider-people',
    responsive: {
      "300": {
        items: 1,
        fixedWidth: 300,
        center: true
      },
      "550": {
        items: 1,
        fixedWidth: 400,
        center: true
      },
      "1024": {
        items: 3,
        edgePadding: 50,
        fixedWidth: 450,
        center: false
      }
    },
    mouseDrag: true,
    slideBy: "page",
    arrowKeys: true,
    swipeAngle: false,
    speed: 400,
    loop: false,
    edgePadding: 50,
    fixedWidth: 555,
    center: false,
  });
}