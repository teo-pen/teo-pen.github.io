// Index by Teodora Pencheva


$(".windowOne").click(function(){
	
});








// UNUSED CODE
// _2_ (drag with library)

// //window height and width
// var h = window.innerHeight;
// var w = window.innerWidth;

// $("#viewport").on( "mouseenter", function() {
//     $( this ).css({
//       "height": h + "px",
//       "width": w + "px",
//     });
// });

// //Infinite Drag Function
// var wall = jQuery.infinitedrag("#wall");

// var infinitedrag = jQuery.infinitedrag("#wall", {}, {
//     width: w,
//     height: h,
//     start_col: 0,
//     start_row: 0
// });

// var disabled = wall.disabled();

// //windows
// $('#testDot').click(function(e){
//     $(this).toggleClass('fullscreen'); 

//     wall.disabled(true);

//     $('#exit').css( "z-index", "200" );
// });

// $('#exit').click(function(e){
//     $('testDot').toggleClass('fullscreen'); 

//     wall.disabled(false);

//     $(this).css( "z-index", "-10" );
// });



// _1_ (drag no library)

// var w = window.innerWidth;
// var h = window.innerHeight;

// let newtop = newleft = 0;
// var move = {
//   drag: function() {
//     main = $('main');
//     main.draggable({
//       	drag: function(event, ui) {

// 	        newtop = Math.abs(ui.position.top);
// 	        newleft = Math.abs(ui.position.left);
	        
// 	        $(this).css({
// 	            'padding-right': newleft,
// 	            'padding-bottom': newtop,
// 	        });

// 	        if(newtop>h){
// 	        	$( this ).css('background-position', "-100% -100%");
// 	        };
// 	        if(newleft<w){
// 	        	$( this ).css('background-position', "-100% -100%");
//             };
	        
//       	}, scroll: false,
//     });
//   }
// }

// move.drag();

console.log("index");