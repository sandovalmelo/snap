const menu = document.querySelector("menu");
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const closeMenu = document.querySelector(".close-menu");
const main = document.querySelector("main");

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
