
$(document).ready(function() {
  //loads DOM before page loads//

})

const containerEl = document.querySelector(".container")
const textAreaEl = document.querySelector(".description");
const buttonEl = document.getElementById(".saveBtn");

let today = moment();
$("#time-display").text(today.format("MMM Do, YYYY"));

<<<<<<< HEAD
containerEl.addEventListener("click", function(event){
  if(event.target.matches("button")){
    let input_textareaOne = event.target.previousElementSibling.value
    let input_textareaTwo = event.target.previousElementSibling.value
    let input_textareaThree = event.target.previousElementSibling.value
    let input_textareaFour = event.target.previousElementSibling.value
    let input_textareaFive = event.target.previousElementSibling.value
    let input_textareaSix = event.target.previousElementSibling.value
    let input_textareaSeven = event.target.previousElementSibling.value
    let input_textareaEight = event.target.previousElementSibling.value
    let input_textareaNine = event.target.previousElementSibling.value
    localStorage.setItem('1hr', input_textareaOne);
    localStorage.setItem('2hr', input_textareaTwo);  
    localStorage.setItem('3hr', input_textareaThree);
    localStorage.setItem('4hr', input_textareaFour);
    localStorage.setItem('5hr', input_textareaFive);
    localStorage.setItem('6hr', input_textareaSix);
    localStorage.setItem('7hr', input_textareaSeven);
    localStorage.setItem('8hr', input_textareaEight);
    localStorage.setItem('9hr', input_textareaNine);

    console.log(localStorage.getItem('1hr'))
    console.log(localStorage.getItem('2hr'))
    console.log(localStorage.getItem('3hr'))

  }
});
  
  function loadEvents() {
    let hourOne = localStorage.getItem("#hourOne");
    let hourTwo = localStorage.getItem("#hourTwo");
    let hourThree = localStorage.getItem("#hourThree");
    let hourFour = localStorage.getItem("#hourFour");
    let hourFive = localStorage.getItem("#hourFive");
    let hourSix = localStorage.getItem("#hourSix");
    let hourSeven = localStorage.getItem("#hourSeven");
    let hourEight = localStorage.getItem("#hourEight");
    let hourNine = localStorage.getItem("#hourNine");
  

  }
  loadEvents();
=======

>>>>>>> a16ff2ee84f034e5ebd3305a1dd0a64e33e03734
