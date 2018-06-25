
// Select color input
const colorFill = $('#colorPicker');

 // Select size input
const inputHeight = $('#inputHeight');
const inputWidth = $('#inputWidth');

// When size is submitted by the user, call makeGrid()
$(document).ready( function(){
	$('#sizePicker').submit( function(event){
		makeGrid();
		event.preventDefault();
	});
});

/**
*@description
*The function makes a grid table of rows and columns, the number of which is provided by the user

*/
function makeGrid() {
	  $('#pixelCanvas tr').remove();     //clear any existing table rows.
    for (let row = 0; row < inputHeight.val(); row++){  //Create rows according
      $('#pixelCanvas').append('<tr></tr>');            //to the input
    }
    for (let col = 0; col < inputWidth.val(); col++){  //For each row, insert
      $('#pixelCanvas tr').each( function(){           //input number of table
        $(this).append('<td></td>');                   //data cells.
      });
    }
		tableFill();
}

/**
@description
*The function fills the data cells with the selected color
*When a user clicks on a cell,it is filled with the selected color
*When a user double clicks, the cell color is reset to white
*/
function tableFill(){
	$('tr td').click( function(){
    const color = colorFill.val();              //take the color of the color piker
			$(this).css('background-color', color);   //and fill it in the clicked cell
	});
	$('tr td').dblclick( function(){
			$(this).css('background-color', 'white');  //reset the cell color to white when a usser double-clicks the cell
	});
}
