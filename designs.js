// Select color input
let color = $('colorPicker');

// Select size input
let gridWidth = $('#inputWeight');
let gridHeight = $('#inputHeight');

//Takes user input for grid dimensions as arguments,
//and adds table of that size to body of index.html
function makeGrid(gridHeight, gridWidth) {
  $('body').append('<table><tr><td></td><td></td><td></td></tr></table>');
}

// When size is submitted by the user, call makeGrid
