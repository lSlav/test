
var gold = 0;
var numbr = 1;
var lvl1 = 0;
var lvl2 = 0;
var lvl3 = 0;
var lvl4 = 0;
var img = document.getElementById("clickimg");


function clicker(){
   gold += numbr;
   document.getElementById("currency").innerHTML = gold ;
   document.getElementById("plusnum").style.display = "block";
   setTimeout(function(){ document.getElementById("plusnum").style.display = "none"; }, 200); 
   if (lvl1 == 0 && gold >= 100){
	document.getElementById("evolvebtn").style.background = "#33dc33";
	}

	else if (lvl2 == 0 && gold >= 400) {
	document.getElementById("evolvebtn").style.background = "#33dc33";
	}

	else if (lvl3 == 0 && gold >= 1000) {
	document.getElementById("evolvebtn").style.background = "#33dc33";	
	}

	else if (lvl4 == 0 && gold >= 100000){
	document.getElementById("evolvebtn").style.background = "#33dc33";
	}
}

function evolve (){

	if (lvl1 == 0 && gold >= 100) {
		gold = gold - 100;
		document.getElementById("currency").innerHTML = gold  ;
		numbr = 2;
		document.getElementById("gldnd").innerHTML = 400 ;
		lvl1 = 1;
		document.getElementById("num").innerHTML = numbr ;
		document.getElementById("evolvebtn").style.background = "#e94706e0";
		img.setAttribute("src","dollar.png");
	}
		
	else if (lvl2 == 0 && gold >= 400) {
		gold = gold - 400;
		document.getElementById("currency").innerHTML = gold  ;
		numbr = 5;
		document.getElementById("gldnd").innerHTML = 1000 ;
		lvl2 = 1
		document.getElementById("num").innerHTML = numbr
		document.getElementById("evolvebtn").style.background = "#e94706e0";
		img.setAttribute("src","5dollars.jpg");
	}

	else if (lvl3 == 0 && gold >= 1000) {
		gold = gold - 1000;
		document.getElementById("currency").innerHTML = gold  ;
		numbr = 100;
		document.getElementById("gldnd").innerHTML = 100000 ;
		lvl3 = 1
		document.getElementById("num").innerHTML = numbr
		document.getElementById("evolvebtn").style.background = "#e94706e0";
		img.setAttribute("src","100dollars.png");
	}

	else if (lvl4 == 0 && gold >= 100000){
		alert("Congratulations thx for playing <3");
	}

	else {
		alert("You dont have enough gold!")
	}
}