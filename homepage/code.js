//event listened to allow DOM to load
document.addEventListener('DOMContentLoaded',function() {
    //change masthead text color by accessing first (only) object of that class
    //document.getElementsByClassName("masthead")[0].style.color = "#0000ff";

    //Changing mashead baackground
    //Changing style of pseudo element requires a different approach
    //Changing  background color:
    //var styleElem = document.head.appendChild(document.createElement("style"));
    //styleElem.innerHTML = ".masthead::before {background-color: green;}";
    //styleElem.innerHTML = ".masthead::before {background-color: black;}";
    //Randomizing background image position:
    var styleElem2 = document.head.appendChild(document.createElement("style"));
    var ran_num = Math.random() * (-500);
    styleElem2.innerHTML = ".masthead::before {top: " + ran_num + "px;}";
    })