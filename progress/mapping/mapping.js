// mapping progress by Teodora Pencheva

//////REFERENCES
// (1) https://github.com/davidjbradshaw/image-map-resizer
//  https://raw.githubusercontent.com/davidjbradshaw/imagemap-resizer/master/js/imageMapResizer.min.js
//This is where I found the image map resizer


////// TEST
function mapTest(){
	$("hand").attr("usemap","#fingers2");
	$("hand").attr("src","test.png");
}

function mapTestOff(){
	$("hand").attr("usemap","#fingers");
	$("hand").attr("src","handF.png");
}

//THUMB
$(".tthumb").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="hand1.png"/>');
	$('.handHolder').prepend('<img id="blank" src="blank.png"/>');


	zChange();
});

////// FINGERS
//THUMB
$(".thumb").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="test.png"/>');	
	$('.handHolder').prepend('<img id="blank" src="blank.png"/>');

	zChange();
	mapTest();
});

//FORE
$(".fore").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="hand2.png"/>');	
	$('.handHolder').prepend('<img id="blank" src="blank.png"/>');

	zChange();
});

//MIDDLE
$(".middle").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="hand3.png"/>');	
	$('.handHolder').prepend('<img id="blank" src="blank.png"/>');

	zChange();
});

//RING
$(".ring").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="hand4.png"/>');
	$('.handHolder').prepend('<img id="blank" src="blank.png"/>');

	zChange();
});

//PINKY
$(".pinky").click(function(){
	$('.handHolder').prepend('<img id="hand1" src="hand5.png"/>');
	$('.handHolder').prepend('<img id="blank" src="blank.png"/>');

	zChange();
});


////// DISPLAY
function zChange(){
	$("#hand").css({
		"z-index": "-10"
	});
}

function zChangeOff(){
	$("#hand").css({
		"z-index": "100"
	});
}

//EXIT BUTTON
$("#exit").click(function(){
  zChangeOff();
  mapTestOff();

  $("#hand1").remove();
  $('#blank').remove();
});



////// RESIZING IMAGE MAP
jQuery(function($) { //(1)
    $('map').imageMapResize();
});


console.log("mapping");