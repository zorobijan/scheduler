// your getElementByClass is not a method and should instead be querySelector's or querySelectorAll if you're trying to target multiple elements that all have that class name
// however dane and I recommend using event.target otherwise referred to as -event delegation- to listen on a container for whatever you have in your event listener
// I've provided some example code that you will need to modify to actually do what you want below

$(document).ready(function() {
  //loads DOM before page loads//

})

let containerEl = document.querySelector(".container")

let today = moment();
$("#time-display").text(today.format("MMM Do, YYYY"));

containerEl.addEventListener("click", function(event){
  if(event.target.matches("button")){
    let input_textarea = event.target.previousElementSibling.value
    localStorage.setItem('description', input_textarea);
  console.log(event.target.previousElementSibling.value)
  }
  // else if (event.target.matches("i")){
  // console.log(event.target.parent.previousElementSibling.value)
  // }
  });

  // function SaveBtn(){
  //   let input_textarea = document.querySelector('.description');
  //   let save_button = document.querySelector('.saveBtn');
    
  //   save_button.addEventListener('click', updateOutput);
    
  //   input_textarea.textContent = localStorage.getItem('.description');
  //   input_textarea.value = localStorage.getItem('.description');
    
  //   function updateOutput() {
  //        Del();
  //     localStorage.setItem('content', input_textarea.value);
  //       input_textarea.textContent = input_textarea.value;
  //   }
  //   }
// var note = document.querySelector(".description").value;
// notice how this note variable is only going to console.log the first textarea's value because querySelector just looks for the first instance of a element
//with the class description
// console.log(note)


// loadNote();
// saveButton.on('click', saveNote);

// this type of code will allow you to listen for button clicks that occur inside of your element with a class of container here I'm using an anonymous function with (event) passed into it
// when you do this you can look for the text areas relative to the button that was pressed. 
