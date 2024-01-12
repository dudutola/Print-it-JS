const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)

/** Select the elements.*/
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

const dots = document.querySelector('.dots');
let index = 0;

const img = document.querySelector('#banner img');
const tagLine = document.querySelector('#banner p');


/** This function handle the logic for moving to the next slide in a slideshow,
* when left arrow is clicked.*/
function arrowLeftClick() {
  arrowLeft.addEventListener('click', (event) => {
    console.log(event);

    const listDots = document.querySelectorAll('.dots .dot');
    listDots[index].classList.remove('dot_selected');

    index--;

    /** Checks if the index is less than 0,
    * it reached the beginning, so if true, sends to the last slide.*/
    if (index < 0) {
      index = slides.length - 1;
    }

    listDots[index].classList.add('dot_selected');
    img.src = slides[index].image
    tagLine.innerHTML = slides[index].tagLine
  })
}
/** Calls the function.*/
arrowLeftClick()


/** This function handle the logic for moving to the next slide in a slideshow,
* when right arrow is clicked.*/
function arrowRightClick() {
  arrowRight.addEventListener('click', (event) => {
    console.log(event);

    /** Selects all the elements with class dot.*/
    const listDots = document.querySelectorAll('.dots .dot');
    /** Unselect the actual slide, it removes the class dot_selected.*/
    listDots[index].classList.remove('dot_selected');

    index++;

    /** Checks if the index surpasses the last slide,
    * if true, it reached the end, so resets to 0 (index=0).*/
    if (index > slides.length - 1) {
      index = 0;
    }
    /** Select the actual slide, it adds the class dot_selected.*/
    listDots[index].classList.add('dot_selected');
    /** Updates the image source to a new one.*/
    img.src = slides[index].image
    /** Updates the HTML content to a new one.*/
    tagLine.innerHTML = slides[index].tagLine
  })
}
/** Calls the function.*/
arrowRightClick()


/** This function creates and displays the bullets points.*/
function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    /** Create a new span element(dot).*/
    const dot = document.createElement('span');
    /** Addds the class dot to this dot variable.*/
    dot.classList.add('dot');
    /** Addds this dot element to dots variable.*/
    dots.appendChild(dot);

    /** Checks if the current dot corresponds to the index,
    * if true it adds the class dot_selected.*/
    if (i === index) {
      dot.classList.add('dot_selected');
    }
  }
}
/** Calls the function.*/
displayDots()
