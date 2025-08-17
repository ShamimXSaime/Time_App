const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
const timerDisplay = document.getElementById("timerDisplay");
const startTimer = document.getElementById("startTimer");
const pauseTimer = document.getElementById("pauseTimer");
const resetTimer = document.getElementById("resetTimer");

let timerInterval;
let remainingTime=0;
let running=false;

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime/60);
    const seconds = remainingTime%60;

    const m = minutes < 10 ? "0"+minutes:minutes;
    const s = seconds < 10 ? "0"+seconds:seconds;

    timerDisplay.textContent=m+":"+s;
    if (remainingTime<=0){
        clearInterval(timerInterval);
        running=false;
        alert("Time's up! ⏰");
    } else {
        remainingTime--;
    }
}

startTimer.addEventListener("click", ()=>{
    if(!running){
        if(remainingTime===0){
            const mins=parseInt(minutesInput.value)||0;
            const secs=parseInt(secondsInput.value)||0;
            remainingTime=mins*60+secs;
        }
        if(remainingTime>0){
            updateTimerDisplay();
            timerInterval=setInterval(updateTimerDisplay, 1000);
            running=true;
        }
    }
});

pauseTimer.addEventListener("click", ()=>{
    clearInterval(timerInterval);
    running=false;
});

resetTimer.addEventListener("click", ()=>{
    clearInterval(timerInterval);
    remainingTime=0;
    running=false;
    timerDisplay.textContent="00:00";
    minutesInput.value="";
    secondsInput.value="";
});