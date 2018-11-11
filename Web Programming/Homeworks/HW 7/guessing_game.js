/*
Name(s): Trevor Crow
Date: 11/8/2018
Description: Number Guessing Game
*/

function randomNum(x,y){//random number generator between x and y
    return x+Math.floor(Math.random()*y)
}

var R = randomNum(1,100); //assigns a random number between 1 and 100
var score = 50;
var win = false;

function checkGuess(){
    var G = Number(document.getElementById("guess").value);
    if(isNaN(G)){
        document.getElementById("distance").innerHTML = "<i><u>Please</u> enter something that is a number!</i>";
    }else{
        if((G < 1) || (G > 100)){
            document.getElementById("distance").innerHTML = "<i><u>Please</u> enter a number that is <u><b>BETWEEN</b></u> 1 and 100!</i>";
        }else{ //check how far or how close the player is to the answer
            if(Math.abs(G-R)>=80){
                document.getElementById("distance").innerHTML = "You are very cold";
                score -= 5;
            }else if(Math.abs(G-R)>=60){
                document.getElementById("distance").innerHTML = "You are cold";
                score -= 5;
            }else if(Math.abs(G-R)>=40){
                document.getElementById("distance").innerHTML = "You are warm";
                score -= 5;
            }else if(Math.abs(G-R)>=20){
                document.getElementById("distance").innerHTML = "You are hot";
                score -= 5;
            }else if(Math.abs(G-R)>0){
                document.getElementById("distance").innerHTML = "You are burning";
                score -= 5;
            }else if(Math.abs(G-R)==0){
                document.getElementById("distance").innerHTML = "You got it! If you would like to play again, please enter a new guess.";
                win = true;
            }

            if(score<=0){
                document.getElementById("distance").innerHTML = "You lose, the number was actually " + R + "! If you'd like to try again, enter a new guess.";
                document.getElementById("score").innerHTML = "0";
                score = 50; //resetting score
                R = randomNum(1,100); //picking a new number between 1 and 100
            }else{
                document.getElementById("score").innerHTML = score;
                if(win == true){
                    score = 50; //resetting score
                    R = randomNum(1,100); //picking a new number between 1 and 100
                    win = false;
                }
            }
        }
    }
}