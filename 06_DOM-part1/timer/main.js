document.addEventListener('DOMContentLoaded', function () {
let numInput = document.querySelector('.num-input');
let startTimerButton = document.querySelector('.start-timer-button');
let timerBlock = document.querySelector('.timer-block');

let timer = null;

 function movTimerBlock () {
  let currentCount = parseInt(timerBlock.textContent);
    timerBlock.textContent = currentCount - 1;
    if (currentCount < 2) {
      clearInterval(timer);
    }
 }

  function startTimer () {
    if (numInput.value > 0) {
      timerBlock.textContent = numInput.value
      timer = setInterval(movTimerBlock, 1000);
  }
 }

  function stopInterval() {
      clearInterval(timer)
    }


document.getElementById('stop').addEventListener('click', stopInterval); 
startTimerButton.addEventListener('click', startTimer); 
  
});
