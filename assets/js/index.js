let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector("#menu-toggle");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};
menuOpenBtn.onclick = function () {
  document.getElementById("links-web-site").style.opacity = "1";
  document.getElementById("links-web-site").style.visibility = "visible";
  navLinks.style.left = "0";
  document.getElementById("menu-overlay").style.display = "block";
};

function showMenuInSideBar(idDiv, idIcon) {
      if (window.innerWidth >= 1100) return;
  const element = document.getElementById(idDiv);
  const icon = document.getElementById(idIcon);
  if (
    icon.style.transform === "rotate(360deg)" ||
    icon.style.transform === ""
  ) {
    icon.style.transform = "rotate(180deg)";
  } else {
    icon.style.transform = "rotate(360deg)";
  }
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Close the menu with the transition
function closeMenu() {
  document.getElementById("menu-overlay").style.display = "none";
  navLinks.style.left = "-100%";
  setTimeout(() => {
    document.getElementById("links-web-site").style.opacity = "1";
    document.getElementById("links-web-site").style.visibility = "initial";
  }, 500);
}
menuCloseBtn.onclick = closeMenu;
// menuCloseOverlay.onclick = closeMenu;

 window.addEventListener("scroll", toggleHeaderBackground);
  window.addEventListener("DOMContentLoaded", toggleHeaderBackground);

  function toggleHeaderBackground() {
    const header = document.querySelector("header.shadow-on-scroll");
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }


 //Carousel
    var swiper = new Swiper(".carousel-hero", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  

    // Video Modal
    
    function openModal() {
    document.getElementById("videoModal").style.display = "flex";
    const video = document.getElementById("localVideo");
    video.currentTime = 0;
    video.play();
  }

  function closeModal() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none";
    const video = document.getElementById("localVideo");
    video.pause();
    video.currentTime = 0;
  }
