// Select color input
let color = $('#colorPicker').val();

// Select size input
// When size is submitted by the user, call makeGrid
$('#sizePicker').submit(function() {
  //set user input to gridCols and gridRows vars
  //TODO supress default action of refreshing page upon submit
  let gridCols = $('#inputWeight').val();
  let gridRows = $('#inputHeight').val();
  makeGrid(gridRows, gridCols)
});

//Takes user input for grid dimensions as arguments,
//and adds table of that size to body of index.html
function makeGrid(gridRows, gridCols) {
  //establish HTML string for grid, to later append to body of page
  let gridHTML = "";
  //create grid
  for (var r = 0; r < gridRows; r++) {
    gridHTML += "<tr>";
    for (var c = 0; c < gridCols; c++) {
      gridHTML += "<td></td>";
    };
    gridHTML += "</tr>\n";
  };
  //add grid to body of index.html
  $('#pixelCanvas').append(gridHTML);
}

//TODO set up listener for every 'td', change color to color var
//when user clicks in a td
