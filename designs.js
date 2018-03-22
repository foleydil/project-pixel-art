// Select color input
let color = $('#colorPicker').val();

// Select size input
let gridWidth = 0;
let gridHeight = 0;

//Takes user input for grid dimensions as arguments,
//and adds table of that size to body of index.html
function makeGrid(gridHeight, gridWidth) {
  //establish HTML string to be later appended to body of page
  //will append appropriate grid HTML based on user input
  let gridHTML = "";

  //set user input to gridWidth and gridHeight vars
  $(sizePicker).submit(function() {
    let gridWidth = $('#inputWeight').val();
    let gridHeight = $('#inputHeight').val();
  });

  for (var i = 0; i < gridWidth.length; i++) {
    array[i]
  }

  $('body').append(gridHTML);
}

// When size is submitted by the user, call makeGrid
