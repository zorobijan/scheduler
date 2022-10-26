$(document).ready(function() {
    //loads DOM before page loads//

  })
var saveButton = $('.saveBtn col-md-1');

let today = moment();
$("#time-display").text(today.format("MMM Do, YYYY"));

var printText = function (text) {
    var textAreaEl = $('<textarea>');
    var listDetail = text.concat(' on ');
    textAreaEl.addClass('col-md-10 description').text(listDetail);
    textAreaEl.appendTo(skillsListEl);
  };

var saveNote = function (event) {
  event.preventDefault();
  var note = document.getElementByClass("col-md-10 description").value;
  localStorage.setItem("note", note);
}
var loadNote = function () {
  var note = localStorage.getItem("col-md-10 description");
  document.getElementByClass("note").value = note;
}

loadNote();
saveButton.on('click', saveNote);
