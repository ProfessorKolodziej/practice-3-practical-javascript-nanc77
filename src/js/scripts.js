// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const myName = "Nan";
const myAge = 21;

console.log(myAge);

// Practical Javascript
// show and hide an element on the page

// find the element to hide
const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

// write a function that toggles the show/hide classes
function toggleParagraph() {
	toggledParagraph.classList.toggle("hide");
	toggledParagraph.classList.toggle("show");
	console.log("My toggle function");
	console.log(toggledParagraph);
}

// find the button and toggle the paragraph when we click it
const toggleButton = document.querySelector('#toggle-control');

toggleButton.addEventListener("click", toggleParagraph);
