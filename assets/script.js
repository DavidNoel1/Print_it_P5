const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const dotsContainer = document.querySelector('.dots');
const slideFirst = slides.length - 1;
const slideLast = slides.length - 1;
const imageSliding = document.querySelector(".banner-img");
const tagLine = document.querySelector(".banner p");
const baseUrl = "./assets/images/slideshow/";
let allDots;

function main() {
    initDots();
    slidePrevious();
    slideProchaine();
}

main();

function initDots() {
    for (let i = 0; i < slides.length; i++) {
        const nouvelleDiv = document.createElement("div");
        nouvelleDiv.className = "dot";
        dotsContainer.appendChild(nouvelleDiv);
    }
    allDots = document.querySelectorAll(".dot");
    allDots[index].classList.add("dot_selected");
}

function slidePrevious() {
    arrowLeft.addEventListener("click", () => {
        allDots[index].classList.remove("dot_selected");
        if (index === 0) {
            index = slideLast;
        } else {
            index--;
        }
        updateSlide();
    });
}

function slideProchaine() {
    arrowRight.addEventListener("click", () => {
        allDots[index].classList.remove("dot_selected");
        if (index === slideLast) {
            index = 0;
        } else {
            index++;
        }
        updateSlide();
    });
}

function updateSlide() {
    allDots[index].classList.add("dot_selected");
    imageSliding.src = baseUrl + slides[index].image;
    tagLine.innerHTML = slides[index].tagLine;
}



