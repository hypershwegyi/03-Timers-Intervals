var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
'Welcome to Pearl Restaurant. A friendly welcome with low prices and full service. I pray for the parents of thosee who came to support me to have peace of mind.';
  var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } 
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    }   
     else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
