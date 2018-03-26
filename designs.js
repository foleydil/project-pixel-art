//Variables
let sizePicker = $('#sizePicker');
let colorPicker = $('#colorPicker');
let pixelCanvas = $('#pixelCanvas');
let color = "#000000";


//Event listeners
// When size is submitted by the user, call makeGrid, passing in user input
sizePicker.submit(function(event) {
  //supress default action of form submission, to block page reloading
  event.preventDefault();
  //set user input to gridCols and gridRows vars
  let gridCols = $('#inputWeight').val();
  let gridRows = $('#inputHeight').val();
  makeGrid(gridRows, gridCols)
});

//update color var when user dismisses color picker
colorPicker.change(function() {
  color = colorPicker.val();
});

//change td color to chosen color assignment
pixelCanvas.on('click', 'td', function(event) {
  $(this).css("background-color", color);
});


//Functions
/*Takes user input for grid dimensions as arguments,
appends table to body of index.html*/
function makeGrid(gridRows, gridCols) {
  //clear any existing grid
  pixelCanvas.empty();
  //establish local var (string) to later append to body of page
  let gridHTML = "";
  //build HTML string for grid
  for (let r = 0; r < gridRows; r++) {
    gridHTML += "<tr>";
    for (let c = 0; c < gridCols; c++) {
      gridHTML += "<td></td>";
    };
    gridHTML += "</tr>\n";
  };
  //add completed grid to body of index.html
  pixelCanvas.append(gridHTML);
}
