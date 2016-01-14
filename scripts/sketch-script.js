var MAXWIDTH = 120;
var MAXHEIGHT = 60;

var gridWidth = 60;
var gridHeight = 30;
var cellWidth = 10;
var cellHeight = 10;

var isSilly = false;
var isShadow = false;

var colors=["#009f6a","#4285F4","#ea4335","#fbbc05"];

$(document).ready(function() {

	addMenu();
	setupGrid();

	$("#reset-button").click(function() {
		var isValid = getNewDimensions();
		if(isValid){
			$("#container").remove();
			isSilly = false;
			isShadow = false;
			removeShadowMode();
			setupGrid();
		}
		else{
			alert("Grid maximum size is 120x60");
		}
	});

	$("#silly-button").click(function() {
		isSilly = !isSilly;
		if(isShadow){
			removeShadowMode();
			isShadow = false;
		}
	});

	$("#shadow-button").click(function() {
		isShadow = !isShadow;
		if(isShadow)
			$(".cell").css("background-color","black");
		if(isSilly)
			isSilly = false;
	});
});

function addMenu() {
	$("body").append("<div id='menu'></div>");
	$("#menu").append("<div class='button' id='reset-button'>Reset</div>");
	$("#menu").append("<div class='button' id='silly-button'>Silly Mode</div>");
	$("#menu").append("<div class='button' id='shadow-button'>Shadow Mode</div>");
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

	$(".cell").mouseenter(function() {
		if(isSilly) {
			$(this).css("background-color", colors[Math.floor(Math.random() * colors.length)]);
		}
		else if(isShadow) {
			$(this).css("opacity", $(this).css("opacity") - 0.1);
		}
		else {
			$(this).css("background-color", "black");
		}
	});
}

function getNewDimensions() {
	var inputDimensions = prompt("Please enter the new grid dimensions as the example: width,height", "16,16");

	inputDimensions = inputDimensions.replace(/\s/g,'');
	var splittedDimensions = inputDimensions.split(",");
	if(splittedDimensions !== null ) {
		if (splittedDimensions.length !== 2) {
			alert("Dimensions need to be separated as these examples(white spaces are ignored): \n width,height \n width , height");
		}
		else {
			var newWidth = parseInt(splittedDimensions[0]);
			var newHeight = parseInt(splittedDimensions[1]);

			if(newWidth <= MAXWIDTH && newHeight <= MAXHEIGHT){
				gridWidth = newWidth;
				gridHeight = newHeight;
				return true;
			}
		}
	}

	return false;
}

function removeShadowMode(){
	$(".cell").css("background-color","white");
	$(".cell").css("opacity", 1);
}