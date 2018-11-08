/*
Name(s): Trevor Crow
Date: 11/8/2018
Description: Number Guessing Game
*/
var R = 1+Math.floor(Math.random()*100); //assigns a random number between 1 and 100
var score = 50;
console.log(R);

function checkGuess(){
    var G = Number(document.getElementById("guess").value);
    if(isNaN(G)){
        document.getElementById("distance").innerHTML = "<i><u>Please</u> enter something that is a number!</i>";
    }else{
        if((G < 1) || (G > 100)){
            document.getElementById("distance").innerHTML = "<i><u>Please</u> enter a number that is <u><b>BETWEEN</b></u> 1 and 100!</i>";
        }else{
            if(80<=(G-R)){
                document.getElementById("distance").innerHTML = "You are very cold";
                score -= 5;
            }else if(60<=(G-R)<80){
                document.getElementById("distance").innerHTML = "You are cold";
                score -= 5;
            }
        }
    }
}