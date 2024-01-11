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
