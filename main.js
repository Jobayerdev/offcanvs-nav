const openNav = document.querySelector(".toggler");
const closeNav = document.querySelector(".close-nav-icon");
const togglePage = document.querySelector(".toggle-overlay");
const toggleAnimation = document.querySelector(".toggle-page");
openNav.addEventListener("click", function() {
	toggleAnimation.classList.add("resetAnimation");
	togglePage.classList.add("addInx");
});
closeNav.addEventListener("click", function() {
	toggleAnimation.classList.remove("resetAnimation");
	togglePage.classList.remove("addInx");
});
