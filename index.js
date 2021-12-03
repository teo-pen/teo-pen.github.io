// Index by Teodora Pencheva


////// TITLES
//Add titles on hover
$(".wOne").mouseover(function(){

	$('#base').prepend('<img id="tOne" src="images/base1.jpg">');
	noBase();	
});

$(".wTwo").mouseover(function(){

	$('#base').prepend('<img id="tTwo" src="images/base2.jpg">');
	noBase();
});

$(".wThree").mouseover(function(){

	$('#base').prepend('<img id="tThree" src="images/base3.jpg">');
	noBase();
});

$(".wFour").mouseover(function(){

	$('#base').prepend('<img id="tFour" src="images/base4.jpg">');
	noBase();	
});


//Erase titles
$(".wOne").mouseout(function(){

	yesBase();
	$('#tOne').remove();
});

$(".wTwo").mouseout(function(){

	yesBase();
	$('#tTwo').remove();
});

$(".wThree").mouseout(function(){

	yesBase();
	$('#tThree').remove();
});

$(".wFour").mouseout(function(){

	yesBase();
	$('#tFour').remove();
});


//////CLICKING
$(".wOne").click(function(){

	window.location.href = 'http://www.google.com';
});

$(".wTwo").click(function(){

	window.location.href = 'http://www.google.com';
});

$(".wThree").click(function(){

	window.location.href = 'http://www.google.com';
});

$(".wFour").click(function(){

	window.location.href = 'http://www.google.com';
});




//Shortcut Base Image
function noBase(){
	$('#building').remove();
}

function yesBase(){
	$('#base').prepend('<img id="building" src="images/base.jpg">');
}


////// RESIZING IMAGE MAP
jQuery(function($) { 
    $('map').imageMapResize();
});



console.log("index");