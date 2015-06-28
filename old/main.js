var intro = 1000;
var cause = 2000;
var dday  = 3000;
var involved = 4000;

function scrollDown(position) {
    	window.scrollBy(0,80); // horizontal and vertical scroll increments
		if(window.pageYOffset < position){
    	    scrolldelay = setTimeout('scrollDown('+position+')',1); // scrolls every 100 milliseconds
		}
}

function scrollUp(position) {
    	window.scrollBy(0,-80); // horizontal and vertical scroll increments
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
   if(pos >= 0 && pos < intro){
	   $("#button_intro").attr("src", "img/intro_clicked.png");
	   $("#button_cause").attr("src", "img/cause.png");
	   $("#button_dday").attr("src", "img/dday.png");
	   $("#button_involved").attr("src", "img/involved.png");
   }else if(pos >= intro && pos < cause ){
	   $("#button_intro").attr("src", "img/intro.png");
	   $("#button_cause").attr("src", "img/cause_clicked.png");
	   $("#button_dday").attr("src", "img/dday.png");
	   $("#button_involved").attr("src", "img/involved.png");
   }else if(pos >= cause && pos < dday ){
	   $("#button_intro").attr("src", "img/intro.png");
	   $("#button_cause").attr("src", "img/cause.png");
	   $("#button_dday").attr("src", "img/dday_clicked.png");
	   $("#button_involved").attr("src", "img/involved.png");
   }else if(pos >= dday && pos < involved ){
	   $("#button_intro").attr("src", "img/intro.png");
	   $("#button_cause").attr("src", "img/cause.png");
	   $("#button_dday").attr("src", "img/dday.png");
	   $("#button_involved").attr("src", "img/involved_clicked.png");
   }
});






$('#button_intro').hover(	
    function(){
		$(this).attr("src", "img/intro_hover.png");
	},
    function(){
		var pos = window.pageYOffset;
        if(pos >= 0 && pos < intro){
			$(this).attr("src", "img/intro_clicked.png");
		}else{
			$(this).attr("src", "img/intro.png");
		}
	}
);
$('#button_cause').hover(
    function(){
		$(this).attr("src", "img/cause_hover.png");
	},
    function(){
    	var pos = window.pageYOffset;
        if(pos >= intro && pos < cause ){
			$(this).attr("src", "img/cause_clicked.png");
		}else{
			$(this).attr("src", "img/cause.png");
		}
	}
);
$('#button_dday').hover(	
    function(){
		$(this).attr("src", "img/dday_hover.png");
	},
    function(){
		var pos = window.pageYOffset;
        if(pos >= cause && pos < dday){
			$(this).attr("src", "img/dday_clicked.png");
		}else{
			$(this).attr("src", "img/dday.png");
		}
	}
);
$('#button_involved').hover(
    function(){
		$(this).attr("src", "img/involved_hover.png");
	},
    function(){
		var pos = window.pageYOffset;
        if(pos >= dday && pos < involved){
			$(this).attr("src", "img/involved_clicked.png");
		}else{
			$(this).attr("src", "img/involved.png");
		}
	}
);



$(document).ready(function(){
   var now = new Date();   
   var months = now.getMonth();

   if(months > 9){
       $("#day1").text("0");
       $("#hr1").text("0");
       $("#min1").text("0");
       $("#sec1").text("0");
   }else{
       count_down1();
   }
});


function count_down1(){
   var now = new Date();   
   var months = now.getMonth();
   
   var days;
   if(months == 7){
       days = 30+30+9-now.getDate();
   }else if(months == 8){
       days = 29+9-now.getDate();
   }else if(months == 9){
	   days = 8-now.getDate();
   }
   var hours = 23-now.getHours();
   var mins = 59-now.getMinutes();
   var seconds = 59-now.getSeconds();

   $("#day1").text(days);
   $("#hr1").text(hours);
   $("#min1").text(mins);
   $("#sec1").text(seconds);
   window.setTimeout('count_down1()',999); 
}


/*
$('#save').click(function(){
	var my_width = $(window).width();
    var my_height = $(window).height();

	$('#dialog').html('<img id="button_facebook" src="img/poster_small.png" />').dialog({ 
		buttons:  {'close': function(){$(this).dialog('close');}}, 
		closeOnEscape: true, draggable: false, resizable: false, show: 'fade', modal: true, position: "center",
});
});
*/
