//would like to display an image if get all 5 correct
//resultsCorrect = 0; resultsWrong = 0; needs set back to zero after alerts and enable buttons
var resultsCorrect =0;
var resultsWrong =0;
var unanswered =0;
var intervalId;
var clockRunning = false;
var time = 60;
var isStarted = false;
var buttons = ["q1t","q1f","q2t","q2f","q3t","q3f","q4t","q4f","q5t","q5f"];

$(document).ready(function() {
  $("#start").on("click", function() {
    if(!isStarted) {
        isStarted = true;
        start();
    }
})

function reset() {
   time = 60;
   $("#displayTime").html("01:00");
   isStarted= false;
   document.getElementById("q1t").disabled = false;
   document.getElementById("q1f").disabled = false;
   document.getElementById("q2t").disabled = false;
   document.getElementById("q2f").disabled = false;
   document.getElementById("q3t").disabled = false;
   document.getElementById("q3f").disabled = false;
   document.getElementById("q4t").disabled = false;
   document.getElementById("q4f").disabled = false;
   document.getElementById("q5t").disabled = false;
   document.getElementById("q5f").disabled = false;
   resultsWrong = 0;
   resultscorrect = 0;
   $("#resultscorrect").html("Correct: ");
   $("#resultswrong").html("Wrong: ");
 }

 function start() {
   intervalId = setInterval(count, 1000);
}

function stop() {
    reset();
    clearInterval(intervalId);
}

 function count() {
   time--;
   var converted = timeConverter(time);
   $("#displayTime").html(converted);
   if(time === 00){
    stop();
    alert("Time is up!");
    alert("You got " + resultsCorrect +" correct and " + resultsWrong + " wrong");
    if(resultsCorrect > resultsWrong){
        alert("Looks like you survived this time, great job!!");
    } else {
        alert("Better brush up on your survival skills and call Bear Grylls!");
    };
    reset();
   }
 }

 function timeConverter(t) {
   var minutes = Math.floor(t / 60);
   var seconds = t - (minutes * 60);

   if (seconds < 10) {
     seconds = "0" + seconds;
   }

   if (minutes === 0) {
     minutes = "00";
   }
   else if (minutes < 10) {
     minutes = "0" + minutes;
   }

   return minutes + ":" + seconds;
 }


$( "#q1t" ).on("click", function() {
    if(isStarted) {
        resultsCorrect++;
    $("#resultscorrect").html("Correct: " + resultsCorrect);
    document.getElementById("q1t").disabled = true;
    }
});

$( "#q1f" ).on("click", function() {
    if(isStarted) {
    resultsWrong++;
    $("#resultswrong").html("Wrong: " + resultsWrong);
    document.getElementById("q1f").disabled = true
}
});

$( "#q2t" ).on("click", function() {
    if(isStarted) {
    resultsWrong++;
    $("#resultswrong").html("Wrong: " + resultsWrong);
    document.getElementById("q2t").disabled = true;
}
});

$( "#q2f" ).on("click", function() {
    if(isStarted) {
    resultsCorrect++;
    $("#resultscorrect").html("Correct: " + resultsCorrect);
    document.getElementById("q2f").disabled = true;
}
});

$( "#q3t" ).on("click", function() {
    if(isStarted) {
    resultsWrong++;
    $("#resultswrong").html("Wrong: " + resultsWrong);
    document.getElementById("q3t").disabled = true;
}
});

$( "#q3f" ).on("click", function() {
    if(isStarted) {
    resultsCorrect++;
    $("#resultscorrect").html("Correct: " + resultsCorrect);
    document.getElementById("q3f").disabled = true;
}
});

$( "#q4t" ).on("click", function() {
    if(isStarted) {
    resultsWrong++;
    $("#resultswrong").html("Wrong: " + resultsWrong);
    document.getElementById("q4t").disabled = true;
}
});

$( "#q4f" ).on("click", function() {
    if(isStarted) {
    resultsCorrect++;
    $("#resultscorrect").html("Correct: " + resultsCorrect);
    document.getElementById("q4f").disabled = true;
}
});

$( "#q5t" ).on("click", function() {
    if(isStarted) {
    resultsCorrect++;
    $("#resultscorrect").html("Correct: " + resultsCorrect);
    document.getElementById("q5t").disabled = true;
}
});

$( "#q5f" ).on("click", function() {
    if(isStarted) {
    resultsWrong++;
    $("#resultswrong").html("Wrong: " + resultsWrong);
    document.getElementById("q5f").disabled = true;
}
});


/*
if (userGuess === q1t) {
        resultsCorrect++;
     } else if (userGuess === q1f) {
        resultsWrong++;
     };

if (userGuess === q2t) {
        resultsWrong++;
     } else if (userGuess === q2f) {
        resultsCorrect++;
     };

if (userGuess === q3t) {
        resultsWrong++;
     } else if (userGuess === q3f) {
        resultsCorrect++;
     };

if (userGuess === q4t) {
        resultsWrong++;
     } else if (userGuess === q4f) {
        resultsCorrect++;
     };

if (userGuess === q5t) {
        resultsCorrect++;
     } else if (userGuess === q5f) {
        resultsWrong++;
     };

if (userGuess !== q1t && q1f){
    unanswered++;
    $("#unanswered").html(unanswered);
}

if (userGuess !== q2t && q2f){
    unanswered++;
    $("#unanswered").html(unanswered);
}

if (userGuess !== q3t && q3f){
    unanswered++;
    $("#unanswered").html(unanswered);
}

if (userGuess !== q4t && q4f){
    unanswered++;
    $("#unanswered").html(unanswered);
}

if (userGuess !== q5t && q5f){
    unanswered++;
    $("#unanswered").html(unanswered);
}
*/

/*var html = 
     "<h5>Correct: " + resultsCorrect + "</h5>" +
     "<h5>Wrong: " + resultsWrong + "</h5>" +
     "<h5>Unanswered: " + unanswered + "</h5>";

     document.querySelector("#results").innerHTML = html;*/
//}

});
