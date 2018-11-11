var counter = 0;
var MaxTries = 10;
function game(){
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guess = prompt("Guess a number between 1 and 100.");
while (guess != randomNumber){
	var guess = prompt("Guess a number between 1 and 100.");
	counter += 1;
	if(counter > MaxTries){
		document.write("Game over. PLease guess a new Number.");
		break
	}if(80 <= |guess - randomNumber|){
		document.write("You are very cold");
	}if(60 <= |guess - randomNumber| < 80){
		document.write("You are cold");
	}if(40 <= |guess - randomNumber < 60){
		document.write("You are warm");
	}if(20 <= |guess - randomNumber| < 40){
		document.write("You are hot");
	}if(randomNumber < |guess - randomNumber| < 20){
		document.write("You got it!");
	}if(guess == randomNumber){
		document.write("You got it!");
	}
}
}
