const menu = document.querySelector("menu");
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const menuIcon = document.querySelector(".menu-icon");

hamburguerMenu.addEventListener("click", (event) => {
	if (menu.dataset.open === "false") {
		menu.setAttribute("data-open", "true");
		menuIcon.setAttribute("src", "./images/icon-close-menu.svg");
	} else {
		menu.setAttribute("data-open", "false");
		menuIcon.setAttribute("src", "./images/icon-menu.svg");
	}
});
