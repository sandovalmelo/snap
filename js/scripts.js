const menu = document.querySelector("menu");
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const closeMenu = document.querySelector(".close-menu");
const main = document.querySelector("main");
const features = document.querySelector(".features");
const featuresList = document.querySelector(".features-list");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company-list");
const largeScreens = 1280;

hamburguerMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "true");
	main.style.height = "calc(100vh - 59px)";
	main.style.overflow = "hidden";
});

closeMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "false");
	main.style.height = "auto";
	main.style.overflow = "asuto";
});

features.addEventListener("mouseover", (event) => {
	if (window.innerWidth > largeScreens) {
		featuresList.classList.add("active");
		companyList.classList.remove("active");
	}
});

featuresList.addEventListener("mouseout", (event) => {
	if (window.innerWidth > largeScreens) {
		featuresList.classList.remove("active");
	}
});

features.addEventListener("click", (event) => {
	if (window.innerWidth <= largeScreens) {
		featuresList.classList.toggle("active");
	}
});

company.addEventListener("mouseover", (event) => {
	if (window.innerWidth > largeScreens) {
		companyList.classList.add("active");
		featuresList.classList.remove("active");
	}
});

companyList.addEventListener("mouseout", (event) => {
	if (window.innerWidth > largeScreens) {
		companyList.classList.remove("active");
	}
});

company.addEventListener("click", (event) => {
	if (window.innerWidth <= largeScreens) {
		companyList.classList.toggle("active");
	}
});
