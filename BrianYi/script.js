function passwordcheck() {
  let text1="password";
  let text2=document.getElementById('Password').value; //find the string in the text box
  let result = text1===text2;
  if(result) {open("index.html")} 
  else {open("https://youtu.be/dQw4w9WgXcQ")}; //open rick roll when password is incorrect
};

window.onload=function(){
  var input = document.getElementById("Password");
  input.addEventListener("keypress", enterkey);
  timer();
};

function enterkey(event){
  if (event.key === "Enter") {
      event.preventDefault();
      passwordcheck();
  }
};

// Goal: I want to make a game where I have to press a button 13 times or more in less than
// 3 seconds.

// make a button done!

// make a timer of 3 seconds that starts when I do my first click

function starttimer(){
  const currenttime = document.getElementById('safeTimerDisplay').innerHTML;
  if(currenttime === 'Seconds left: 1') {
    timer();
  }
}

function timer(){
  var sec = 0;
  var timer = setInterval(function(){
    document.getElementById('safeTimerDisplay').innerHTML = 'Seconds left: '+sec;
    sec--;
    if (sec < -1) {
      clearInterval(timer);
      checker();
    }
  }, 1000);
}

// make a function that checks how many times I pressed a button

var count = 0

function addCount(){
  count++;
  document.getElementById("display").innerHTML = count;
};

// make a function that checks if the number of presses is 13 times or more

function checker(){
  if(count >= 13){
    success();
  } else {
    failure();
  }
}

function success(){
  window.open("https://youtu.be/kUWXrGqpWtI", "_self");
}

function failure(){
  window.open("https://youtu.be/nPGvhgOMu9g", "_self");
}

// change the button to img