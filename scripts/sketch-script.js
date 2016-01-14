var gridWidth = 16;
var gridHeight = 16;
var cellWidth = 15;
var cellHeight = 15;

$(document).ready(function() {

	addClearButton();
	setupGrid();

	$(".cell").hover(function() {
		$(this).css("background-color", "red");
	});

	$("#clear-button").click(function() {
		$("#container").remove();
		
	});
	
});

function addClearButton() {
	$("body").append("<div id='clear-button'><a href=''>Clear</a></div>");
}

function setupGrid() {
	$("body").append("<div id='container'></div>");
	var $container = $("#container");

	$container.height((cellHeight+2)*gridHeight);
	$container.width((cellWidth+2)*gridWidth);
	setupCells();
}

function setupCells() {
	for (var i = 0; i < gridWidth; i++) {
		for (var j = 0; j < gridHeight; j++) {
			$("<div class='cell'></div>").height(cellHeight).width(cellWidth).appendTo("#container");
		}
	}
}
