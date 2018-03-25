
// When size is submitted by the user, call makeGrid
$('#sizePicker').submit(function(event) {
  //set user input to gridCols and gridRows vars
  //supress default action of form submission, to avoid page reloading
  event.preventDefault();
  let gridCols = $('#inputWeight').val();
  let gridRows = $('#inputHeight').val();
  makeGrid(gridRows, gridCols)
});

// When color is submitted by the user, call set color var
$('#colorPicker').submit(function() {
  let color = $('#colorPicker').val();
  console.log("color selected: " + color);
  return color;
});

/*Takes user input for grid dimensions as arguments,
appends table to body of index.html*/
function makeGrid(gridRows, gridCols) {
  //clear existing grid
  $('#pixelCanvas').empty();
  //establish string of grid html to later append to body of page
  let gridHTML = "";
  //create grid
  for (let r = 0; r < gridRows; r++) {
    gridHTML += "<tr>";
    for (let c = 0; c < gridCols; c++) {
      gridHTML += "<td></td>";
    };
    gridHTML += "</tr>\n";
  };
  //add grid to body of index.html
  $('#pixelCanvas').append(gridHTML);
}


//listener for every 'td', change td color to colorPicker assignment
$('td').click(function() {
  console.log("cell selected, color chosen: " + color);
  this.fill(color);
});
