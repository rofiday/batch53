let isHamburgerOpen = false;
const openHamburger = () => {
  const hamburgerBars = document.getElementById("hamburger-bars-items");
  if (!isHamburgerOpen) {
    hamburgerBars.style.display = "block";
    isHamburgerOpen = true;
  } else {
    hamburgerBars.style.display = "none";
    isHamburgerOpen = false;
  }
};
