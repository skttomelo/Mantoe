/*
Name(s): Trevor Crow
Date: 11/8/2018
Description: Number Guessing Game
*/

var R = 1+Math.floor(Math.random()*100); //assigns a random number between 1 and 100

function checkGuess(){
    var G = document.getElementById("guess");
    if(isNaN(G)){
        document.getElementById("distance").innerHTML = "<i><u>Please</u> enter something that is a number!</i>";
    }else{
        if(G < 1 || G > 100){
            document.getElementById("distance").innerHTML = "<i><u>Please</u> enter a number that is <u><b>BETWEEN</b></u> 1 and 100!</i>";
        }else{

        }
    }
}