/*
Name(s): Trevor Crow
Date: 11/8/2018
Description: Number Guessing Game
*/
var R = 1+Math.floor(Math.random()*100); //assigns a random number between 1 and 100
var score = 50;

function check(){
    var G = Number(document.getElementById("guess").value);
    console.log(G);
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
            }else if(40<=(G-R)<60){
                document.getElementById("distance").innerHTML = "You are warm";
                score -= 5;
            }else if(20<=(G-R)<40){
                document.getElementById("distance").innerHTML = "You are hot";
                score -= 5;
            }else if(0<(G-R)<20){
                document.getElementById("distance").innerHTML = "You are burning";
                score -= 5;
            }else if((G-R)==0){
                document.getElementById("distance").innerHTML = "You got it!";
                score -= 5;
            }

            if(score<=0){
                
            }
        }
    }
}