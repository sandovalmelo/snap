const menu = document.querySelector("menu");
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const closeMenu = document.querySelector(".close-menu");
const main = document.querySelector("main");
const features = document.querySelector(".features");
const featuresList = document.querySelector(".features-list");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company-list");

hamburguerMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "true");
	main.style.height = "calc(100vh - 59px)";
	main.style.overflow = "hidden";
});

closeMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "false");
	main.style.height = "auto";
	main.style.overflow = "auto";
});

features.addEventListener("click", (event) => {
	featuresList.classList.toggle("active");
});

company.addEventListener("click", (event) => {
	companyList.classList.toggle("active");
});
