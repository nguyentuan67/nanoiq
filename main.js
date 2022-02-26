 //đóng mở menu mobile tablet
 
 const menuIcon = document.querySelector('.header__menu-icon');
 const ClosedIcon = document.querySelector('.nav-menu-close');
 const navMenu = document.querySelector('.nav-menu');
 const Overlay = document.querySelector('.overlay');
 var menuItems = document.querySelectorAll('.menu-item--link')

//open nav mobile
 menuIcon.onclick = function() {
    navMenu.classList.add('open-nav');
//    navMenu.style.transform = 'translateX(0%)';
    Overlay.style.display = 'block';
 }

//close nav mobile
 ClosedIcon.onclick = function(){
    navMenu.classList.remove('open-nav');
    Overlay.style.display = 'none';
 }

// click overlay to closed nav mobile
 Overlay.onclick = function(){
    navMenu.classList.remove('open-nav');
    Overlay.style.display = 'none';
 }

for (var i=0; i < menuItems.length; i++) {
   var menuItem = menuItems[i];
   
   menuItem.onclick = function() {
      navMenu.classList.remove('open-nav');
    Overlay.style.display = 'none';
   }
}

// nút mũi tên

// var btnLeft = document.querySelector('.arrow-left');
// var btnRight = document.querySelector('.arrow-right');
// var tourContainer = document.querySelector('.tours-container')

// btnLeft.onclick = function() {
//    tourContainer.style.transform = 'translateX(100px)'
// }

// btnRight.onclick = function() {
//    tourContainer.style.transform = 'translateX(-50%)'
// }


const gap = 2;

const carouselTours = document.getElementById("carosel-tours"),
  toursContent = document.getElementById("tours-content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

  let width = carouselTours.offsetWidth;
  window.addEventListener("resize", e => (width = carouselTours.offsetWidth));

next.addEventListener("click", e => {
  carouselTours.scrollBy(width + gap, 0);
  if (carouselTours.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (toursContent.scrollWidth - width - gap <= carouselTours.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carouselTours.scrollBy(-(width + gap), 0);
  if (carouselTours.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!toursContent.scrollWidth - width - gap <= carouselTours.scrollLeft + width) {
    next.style.display = "flex";
  }
});

