const menu = document.querySelector("menu");
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const closeMenu = document.querySelector(".close-menu");
const main = document.querySelector("main");
const features = document.querySelector(".features");
const featuresList = document.querySelector(".features-list");
const featuresLink = document.querySelector(".features-link");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company-list");
const companyLink = document.querySelector(".company-link");
const featuresArrow = document.querySelector(".features img");
const companyArrow = document.querySelector(".company img");
const largeScreens = 1280;
const overlay = document.querySelector(".overlay");
const nav = document.querySelector("nav");

function toggleDropdown(element, open) {
	element.setAttribute("data-open", open);
}

function changeArrow(element, src, direction) {
	element.setAttribute("src", src);
	element.setAttribute("alt", `Arrow ${direction} Icon`);
}

function toggleMenu(open, height, overflow) {
	menu.setAttribute("data-open", open);
	main.style.height = height;
	main.style.overflow = overflow;
}

hamburguerMenu.addEventListener("click", (event) => {
	toggleMenu("true", "calc(100vh - 59px)", "hidden");
});

closeMenu.addEventListener("click", (event) => {
	toggleMenu("false", "auto", "auto");
});

overlay.addEventListener("click", (event) => {
	if (!event.target.closest("nav")) {
		toggleMenu("false", "auto", "auto");
	}
});

features.addEventListener("mouseover", (event) => {
	if (window.innerWidth > largeScreens) {
		toggleDropdown(company, "false");
		changeArrow(companyArrow, "./images/icon-arrow-down.svg", "Down");

		toggleDropdown(features, "true");
		changeArrow(featuresArrow, "./images/icon-arrow-up.svg", "Up");
	}
});

featuresList.addEventListener("mouseover", (event) => {
	toggleDropdown(features, "true");
	changeArrow(featuresArrow, "./images/icon-arrow-up.svg", "Up");
});

featuresList.addEventListener("mouseout", (event) => {
	if (window.innerWidth > largeScreens) {
		toggleDropdown(features, "false");
		changeArrow(featuresArrow, "./images/icon-arrow-down.svg", "Down");
	}
});

featuresLink.addEventListener("click", (event) => {
	if (window.innerWidth <= largeScreens) {
		if (features.dataset.open === "true") {
			toggleDropdown(features, "false");
			changeArrow(featuresArrow, "./images/icon-arrow-Down.svg", "Down");
		} else {
			toggleDropdown(features, "true");
			changeArrow(featuresArrow, "./images/icon-arrow-up.svg", "Up");
		}
	}
});

company.addEventListener("mouseover", (event) => {
	if (window.innerWidth > largeScreens) {
		toggleDropdown(features, "false");
		changeArrow(featuresArrow, "./images/icon-arrow-down.svg", "Down");

		toggleDropdown(company, "true");
		changeArrow(companyArrow, "./images/icon-arrow-up.svg", "Up");
	}
});

companyList.addEventListener("mouseout", (event) => {
	if (window.innerWidth > largeScreens) {
		toggleDropdown(company, "false");
		changeArrow(companyArrow, "./images/icon-arrow-down.svg", "Down");
	}
});

companyLink.addEventListener("click", (event) => {
	if (window.innerWidth <= largeScreens) {
		if (company.dataset.open === "true") {
			toggleDropdown(company, "false");
			changeArrow(companyArrow, "./images/icon-arrow-Down.svg", "Down");
		} else {
			toggleDropdown(company, "true");
			changeArrow(companyArrow, "./images/icon-arrow-up.svg", "Up");
		}
	}
});
