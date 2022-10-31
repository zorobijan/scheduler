// your getElementByClass is not a method and should instead be querySelector's or querySelectorAll if you're trying to target multiple elements that all have that class name
// however dane and I recommend using event.target otherwise referred to as -event delegation- to listen on a container for whatever you have in your event listener
// I've provided some example code that you will need to modify to actually do what you want below

$(document).ready(function() {
  //loads DOM before page loads//

})

let containerEl = document.querySelector(".container")

let today = moment();
$("#time-display").text(today.format("MMM Do, YYYY"));


