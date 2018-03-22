// Select color input
let color = $('#colorPicker').val();

// Select size input
//set user input to gridCols and gridRows vars
let gridCols = $('#inputWeight').val();;
let gridRows = $('#inputHeight').val();

//Takes user input for grid dimensions as arguments,
//and adds table of that size to body of index.html
function makeGrid(gridRows, gridCols) {
  //establish HTML string to be later appended to body of page
  //will append appropriate grid HTML based on user input
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


// When size is submitted by the user, call makeGrid
$(sizePicker).submit(function() {
  makeGrid(gridRows, gridCols)
});
