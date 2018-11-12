//remove all comments I have made when you start work on this
var randomNumber = Math.floor(Math.random() * 100) + 1; //moved randomNumber here so that you don't reset the number everytime you guess
var score = 50;
var gg = false;
function game(){
	var guess = Number(document.getElementById("guess").value);
	if(isNaN(guess)){//added in if/else statement to check if the inputted value is not a number, if it is then it runs the code in the if statement
		document.getElementById("guess_distance").innerHTML = "Chief this ain't it"; //put something here stating that it isn't a number
	}else{
		if(80 <= Math.abs(guess-randomNumber)){
			document.getElementById("guess_distance").innerHTML = "You are very cold";
			score -= 5;
		}else if(60 <= Math.abs(guess-randomNumber)){
			document.getElementById("guess_distance").innerHTML = "You are cold";
			score -= 5;
		}else if(40 <= Math.abs(guess-randomNumber)){
			document.getElementById("guess_distance").innerHTML = "You are warm";
			score -= 5;
		}else if(20 <= Math.abs(guess-randomNumber)){
			document.getElementById("guess_distance").innerHTML = "You are hot";
			score -= 5;
		}else if(0 < Math.abs(guess-randomNumber)){
			document.getElementById("guess_distance").innerHTML = "You are burning";
			score -= 5;
		}else if(guess == randomNumber){
			document.getElementById("guess_distance").innerHTML = "You got it.  If you want to play again make another guess.";
			gg = true;
		}
		
		if (score <= 0){
			document.getElementById("guess_distance").innerHTML = "You lose, the number was actually " + randomNumber + "! If you'd like to try again, enter a new guess.";
			document.getElementById("score").innerHTML = "0";
			score = 50;
			randomNumber = Math.floor(Math.random() * 100) +1;	
		}else{
			document.getElementById("score").innerHTML = score;
			if(gg == true){
				score = 50;
				randomNumber = Math.floor(Math.random() * 100) +1;
				gg = false;
			}
		}
	}
}