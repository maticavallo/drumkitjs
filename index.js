// Select all elements with the class "drum" and store their count
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through all elements with the class "drum"
for (let i = 0; i < numberOfDrumButtons; i++) {
  // Add a click event listener to each element
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Get the inner HTML of the clicked element
    let buttonInnerHTML = this.innerHTML;

    // Call the makeSound function and pass in the inner HTML of the clicked element as an argument
    makeSound(buttonInnerHTML);

    // Call the buttonAnimation function and pass in the inner HTML of the clicked element as an argument
    buttonAnimation(buttonInnerHTML);
  });
}

// Add a keypress event listener to the entire document
document.addEventListener("keypress", function (event) {
  // Call the makeSound function and pass in the pressed key as an argument
  makeSound(event.key);

  // Call the buttonAnimation function and pass in the pressed key as an argument
  buttonAnimation(event.key);
});

const sounds = {
  w: new Audio("sounds/tom-1.mp3"),
  a: new Audio("sounds/tom-2.mp3"),
  s: new Audio("sounds/tom-3.mp3"),
  d: new Audio("sounds/tom-4.mp3"),
  j: new Audio("sounds/snare.mp3"),
  k: new Audio("sounds/crash.mp3"),
  l: new Audio("sounds/Kick-bass.mp3"),
};
// makeSound function takes in a key as an argument

function makeSound(key) {
  if (key in sounds) {
    sounds[key].currentTime = 0;
    sounds[key].play();
  } else {
    console.log(key);
  }
}
