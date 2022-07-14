const menu = document.querySelector("menu");
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const closeMenu = document.querySelector(".close-menu");
const main = document.querySelector("main");

hamburguerMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "true");
	// document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "false");
	// document.body.style.overflow = "auto";
});
