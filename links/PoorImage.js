// PoorImage by Teodora Pencheva
//REFERENCES
//(1) https://stackoverflow.com/questions/27871537/how-to-randomize-video-on-click-and-on-page-load
//Helped me figure out how to randomize my videos

//////VARIABLES
var p = 0;
var videos = [ //(1)
    [{type:'mp4', 'src':'../images/tvVideo.mp4'}, {type:'mp4', 'src':'../images/tvVideo2.mp4'}],
    [{type:'mp4', 'src':'../images/tvVideo3.mp4'}],  
];



//////BUTTONS
//Play/Pause
$(".kOne").click(function(){
	p++;

	if ((p%2) != 0){
		$('#main').get(0).pause();
	}
	else {
		$('#main').get(0).play();
	}

	return p
});

$(".kTwo").click(function(){ //(1)
	var number = Math.floor(Math.random()*videos.length);
    $("#main").find('source').filter(function(index){ 
          videoSrc = videos[number][index].src;
          $(this).attr('src', videoSrc);
          $('#main').load();
          $('#main').play();
    });
});




////// RESIZING IMAGE MAP
jQuery(function($) { 
    $('map').imageMapResize();
});


console.log("poor image");