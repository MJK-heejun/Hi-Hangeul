<!doctype html>
<html lang="en">
<head>
   <meta charset="utf-8" />
   <title>K-Project</title>
   <link rel="stylesheet" type="text/css" href="main.css" />
   <link rel="stylesheet" type="text/css" href="jquery-ui-1.8.23.custom.css" />

</head>
<body>

<div id="menu">
   <img id="button_intro" src="img/intro_clicked.png" onClick="scrollPage(0)"/>
   <img id="button_cause" src="img/cause.png" onClick="scrollPage(1000)"/>
   <img id="button_dday" src="img/dday.png" onClick="scrollPage(2000)"/>
   <img id="button_involved" src="img/involved.png" onClick="scrollPage(3000)"/>
</div>

<div id="intro">
   <center>
   <div id="movie_clip">
   </div>
   </center>
   <div id="count_downs">
       <div id="count_down1">
	      <p id="count_down1_title">D-Day: Oct 13, 2012</p>
		     <div id="count_down1_left">
                 <p id="day1">day</p>          
                 <p id="hr1">hr</p>          
                 <p id="min1">min</p>		          
                 <p id="sec1">sec</p>          
			 </div>
			 <div id="count_down1_right">
                 <p id="day1_back">DAYS</p>
                 <p id="hr1_back">HOURS</p>
                 <p id="min1_back">MINUTES</p>  
                 <p id="sec1_back">SECONDS</p>
			 </div>
       </div>
	   <div id="count_down2">
	   </div>
   </div>
</div>

<div id="cause">
    <div id="cause_left">
	   <div id="cause_left_textbox">
	   </div>
	</div>
	<div id="cause_right">
	   <div id="cause_right_textbox">
	   </div>
	</div>
</div>

<div id="dday">
    <div id="dday_left">
	   <div id="dday_left_textbox">
       </div>
	</div>
	<div id="dday_right">
	   <div id="dday_right_textbox">
	   </div>
	</div>
</div>

<div id="involved">
    <div id="involved_left">

	    <a href="http://www.twitter.com/HiHangeulVan" target="_blank"><img id="button_twitter" src="img/twitter_logo.png"/></a>
	    <a href="http://www.facebook.com/hihangeul" target="_blank"><img id="button_facebook" src="img/facebook_logo.png"/></a>
		<div id="involved_left_textbox">
		</div>
	</div>
	<div id="involved_right">
	    <div id="involved_right_poster">
		   <a href="img/poster.jpg" target="_blank"><img id="poster" src="img/poster_small.jpg" /></a>
		</div>
	</div>   
</div>


<!--
<div id="test">
  <input id="save" type="button" value="save"/>
  <div id="dialog"></div>
</div>
-->

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js" ></script>
<script type="text/javascript" src="jquery-ui-1.8.23.custom.min.js" ></script>
<script type="text/javascript" src="main.js" ></script>
</body>
</html>