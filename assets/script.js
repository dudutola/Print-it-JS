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

// selectionner les elements
let arrowLeft = document.getElementById('arrowLeft')
let arrowRight = document.getElementById('arrowRight')

// add event listener, en gros auront la meme logique mais non
arrowLeft.addEventListener('click', (event) => {
  console.log(event)
})

arrowRight.addEventListener('click', (event) => {
  console.log(event)
})


// select dots
const dots = document.querySelector('.dots')
// select dots index
let index = 0;

// for loop, la logique serait que pour chaque tour, le dot symbolise une image
// afficher les dots
function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    // creer un element
    const dot = document.createElement('span');
    // add la classe a l'interieur
    dot.classList.add('dot');
    // on place le dot dans dots
    dots.appendChild(dot);

    // si slides[i] === dot[index] donc on rajoute dot_selected
    if (i === index) {
      dot.classList.add('dot_selected');
    }
  }
}
// call the function(PAS OULIER DAPPELER LA FONCTION)
displayDots()
