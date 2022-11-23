const timer = 3;
let timeAmount = timer * 60;

function calcTime() {
   const countdown = document.querySelector("#countdown");
   let minutes = Math.floor(timeAmount / 60);
   let seconds = timeAmount % 60;

   countdown.textContent = `${minutes} : ${seconds}`
   timeAmount--;

   if (timeAmount < 0) {
      stopTimer();
      timeAmount = 0;
   }
   function stopTimer() {
      clearInterval(timerStop);
   }
}
let timerStop = setInterval(calcTime, 1000);