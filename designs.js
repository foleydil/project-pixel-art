// Select color input
let color = $('#colorPicker').val();

// Select size input
let gridWidth = $('#inputWeight').val();
let gridHeight = $('#inputHeight').val();

//Takes user input for grid dimensions as arguments,
//and adds table of that size to body of index.html
function makeGrid(gridHeight, gridWidth) {
  $('body').append('<table><tr><td></td><td></td><td></td></tr></table>');
}

// When size is submitted by the user, call makeGrid
