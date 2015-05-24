// Initialize the container div and the buttons
$(document).ready ( function() {
	$('body').append("<div id=container></div>");
	
	$("body").prepend("<div id=button><button onclick='newGrid(); return false'>New Grid</button></div>");
	
	$("#button").css({
		'text-align':'center'
	});

	$("button").css({
		margin:'10px 0',
		padding: '10px',
		'font-size':'16px'
	});

	$("#container").css({
		margin:'0 auto',
		'margin-top':'20px',
		width:'960px',
		height:'960px',
		border:'2px solid black'
	});

	// Call the function that will create a new grid
	newGrid();

});

// This function creates a new grid
function newGrid() {
	// Remove the old grid table
	$("#grid").remove();
	// Append a new grid table to the container div
	$("#container").append("<table id='grid'></table>");

	// Get the dimensions of the new grid from the user.
	var dimension = null;

	while (dimension == null || dimension > 50) {
		dimension = prompt("Enter the dimensions of the new grid (<=50).");
	}

	// Create new rows given the dimensions of the grid
	for (h = 0; h < dimension; h++) {
		var row = document.getElementById('grid').insertRow(h);
		// Insert new cells for the dimensions of the grid
		for (w = 0; w < dimension; w++) {
			row.insertCell(w);
		}
	}

	// Style the table
	tableStyle();

	// When the mouse hovers over a td element, change the background color to a random color
	$("td").hover(function() {
		$(this).css('background-color', chooseColor());
	});

}

// This function returns a random RGB value
function chooseColor() {
	var red, green, blue;

	red = Math.floor((Math.random() * 255) + 1);
	green = Math.floor((Math.random() * 255) + 1);
	blue = Math.floor((Math.random() * 255) +1);

	return "rgb(" + red + "," + green + "," + blue +")";
}


// Applies CSS styles to the new grid
function tableStyle() {
	$('#grid').css({
		border:'2px solid gray',
		cellpadding:0,
		cellspacing:0,
		width:'100%',
		height:'100%'
	});

	$('td').css({
		border:'1px solid black',
		'background-color':'black'
	});
}