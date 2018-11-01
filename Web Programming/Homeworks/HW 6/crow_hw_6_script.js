/*
Name(s): Trevor Crow
Date: 10/31/2018
Description: Contains functions for starting, stopping, and resetting the scroll. The function populateList makes it easier to add in a bunch of random nonexistent people to
the credit's list. And finally, the setInterval is used for the scrolling stuff both checking if scrolling is true and if it needs to move positions back to the top and keep going. 
*/
var scrolling = false;
var currentPos = 0;
var finalPos;
function start(){//starts scrolling, sets currentPos to the window's scrollY and the finalPos to the bottom of the page
    scrolling = true;
    currentPos = window.scrollY;
    finalPos = document.querySelector("body").scrollHeight-window.innerHeight+20;
}
function stop(){//stops scrolling
    scrolling = false;
}
function reset(){//resets scroll position to the top of the screen and stops scrolling
    stop();
    currentPos=0;
    window.scrollTo({
        top:currentPos,
        behavior:"instant"
    });
}
function populateList(header, amount){//adds a bunch of names to a list for a fake credits list (made by: Trevor)
    var listofFnames = ["Asher", "Jasper", "Cameron", "Teddy", "Phil", "Bryan", "Dave", "David", "Nick", "Nicholas", "Jake", "Jacob", "Malcolm", "Richard", "Michael", "Amelia", "Jasmine", "Ene", "Celene", "Stephanie", "Melanie", "Elyssa"];
    var listofLnames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Moore", "Anderson", "Jackson", "Stewart", "Cooper"];
    var li = document.createElement("li");
    var h2 = document.createElement("h2");
    
    h2.innerHTML = header;
    document.querySelector("#credits").appendChild(h2);
    for(var i = 0; i<amount;i++){
        li = document.createElement("li");
        li.appendChild(document.createTextNode(listofFnames[Math.floor(Math.random() * Math.floor(listofFnames.length))]+" "+listofLnames[Math.floor(Math.random() * Math.floor(listofLnames.length))]));
        document.querySelector("#credits").appendChild(li);
    }
}

populateList("Director:", 1);
populateList("Producers:", 3);
populateList("Co-Producers:", 2);
populateList("Actors:", 47);
populateList("Special Effects Done By:", 12);
populateList("Art Created By:", 23);
populateList("Music Done By:", 4);

var h2 = document.createElement("h2");
h2.innerHTML = "Made in:";
document.querySelector("#credits").appendChild(h2);
document.querySelector("#credits").appendChild(document.createElement("li").appendChild(document.createTextNode("Georgia")));

setInterval(
        function(){
            if(scrolling){
                if(currentPos>=finalPos){
                    currentPos=0;
                    window.scrollTo(0,0);
                }
                currentPos+=4;
                window.scrollTo(0,currentPos);
            }
        },
        20
);