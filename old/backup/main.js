
function scrollDown(position) {
    	window.scrollBy(0,80); // horizontal and vertical scroll increments
		if(window.pageYOffset < position){
    	    scrolldelay = setTimeout('scrollDown('+position+')',1); // scrolls every 100 milliseconds
		}
}

function scrollUp(position) {
    	window.scrollBy(0,-70); // horizontal and vertical scroll increments
		if(window.pageYOffset > position){
			scrolldelay = setTimeout('scrollUp('+position+')',1); // scrolls every 100 milliseconds
		}    	
}

/*
function scrollStop() {
    	clearTimeout(scrolldelay);
}
*/

function scrollPage(position){
   if(window.pageYOffset < position){
	   scrollDown(position);
   }
   else if(window.pageYOffset > position){
	   scrollUp(position);
   }
}


//whenever the window gets scrolled, this function gets called
$(window).scroll( function(){
   var pos = window.pageYOffset;
   if(pos >= 0 && pos < 920){
	   $("#button_yellow").attr("src", "button_yellow_on.png");
	   $("#button_red").attr("src", "button_red_off.png");
   }else if(pos >= 920 && pos < 1920 ){
	   $("#button_yellow").attr("src", "button_yellow_off.png");
	   $("#button_red").attr("src", "button_red_on.png");
	   $("#button_blue").attr("src", "button_blue_off.png");
   }else if(pos >= 1920 && pos < 2920 ){
	   $("#button_red").attr("src", "button_red_off.png");
	   $("#button_blue").attr("src", "button_blue_on.png");
	   $("#button_white").attr("src", "button_white_off.png");
   }else if(pos >= 2920 && pos < 3920 ){
	   $("#button_blue").attr("src", "button_blue_off.png");
	   $("#button_white").attr("src", "button_white_on.png");
	   $("#button_black").attr("src", "button_black_off.png");
   }else if(pos >= 3920){
	   $("#button_white").attr("src", "button_white_off.png");
	   $("#button_black").attr("src", "button_black_on.png");
   }
});
