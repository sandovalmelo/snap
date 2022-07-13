const menu = document.querySelector("menu");
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const closeMenu = document.querySelector(".close-menu");

hamburguerMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "true");
});

closeMenu.addEventListener("click", (event) => {
	menu.setAttribute("data-open", "false");
});
