//Variables
const sizePicker = $('#sizePicker');
const colorPicker = $('#colorPicker');
const pixelCanvas = $('#pixelCanvas');
let color = "#000000";


//Event listeners
//When size is submitted by the user, call makeGrid, passing in user input
sizePicker.submit(function(event) {
  //supress default action of form submission, to block page reloading
  event.preventDefault();
  //set user input to gridCols and gridRows vars
  const gridCols = $('#inputWeight').val();
  const gridRows = $('#inputHeight').val();
  makeGrid(gridRows, gridCols);
});

//When user dismisses color picker, change color value
colorPicker.change(function() {
  color = colorPicker.val();
});

//When user clicks on a cell, change that cell's background color to color value
pixelCanvas.on('click', 'td', function(event) {
  $(this).css('background-color', color);
});


//Functions
/**
* @description Creates grid based on user input, appends table to body
* @param {number} gridRows
* @param  {number} gridCols
*/
function makeGrid(gridRows, gridCols) {
  //clear any existing grid
  pixelCanvas.empty();
  //establish local var (string) to later append to body of page
  let gridHTML = '';
  //build HTML string for grid
  for (let r = 0; r < gridRows; r++) {
    gridHTML += '\n<tr>';
    for (let c = 0; c < gridCols; c++) {
      gridHTML += '\n<td></td>';
    };
    gridHTML += '</tr>';
  };
  //add completed grid to body of index.html
  pixelCanvas.append(gridHTML);
}
