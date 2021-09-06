
var buttonStart = document.querySelector("#start");
var inputText = document.querySelector("#word");

var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];


buttonStart.addEventListener("click", function() {
    
    for(i=0; i < words[0].length; i++)
    {
        inputText = words[0].substr(i, 1);
        inputText += "_";
        inputText += "_";
        i = i+2;
    }
    
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);


    // If mode is dark, apply light background
    // if (mode === "dark") {
    //   mode = "light";
    //   container.setAttribute("class", "light");
    // }
    // If mode is light, apply dark background 
    // else {
    //   mode = "dark";
    //   container.setAttribute("class", "dark");
    // }
  });
  