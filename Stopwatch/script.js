const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function updateTime() {
    let time = Date.now() - startTime + elapsedTime;

    let milliseconds = Math.floor((time%1000)/10);
    let seconds = Math.floor((time/1000)%60);
    let minutes = Math.floor((time/60000)%60);

    milliseconds = milliseconds<10 ? "0"+milliseconds:milliseconds;
    seconds = seconds<10 ? "0"+seconds:seconds;
    minutes = minutes<10 ? "0"+minutes:minutes;

    display.textContent= minutes+":"+seconds+":"+milliseconds;
}

startStopBtn.addEventListener("click", () =>{
    if(!running){
        startTime=Date.now();
        timerInterval=setInterval(updateTime, 10);
        startStopBtn.textContent="Stop";
        running=true;
    } else {
        clearInterval(timerInterval);
        elapsedTime += Date.now()-startTime;
        startStopBtn.textContent = "Start";
        running = false;
    }
})

resetBtn.addEventListener("click", () =>{
    clearInterval(timerInterval);
    startTime =0;
    elapsedTime =0;
    running = false;
    display.textContent ="00:00:00";
    startStopBtn.textContent = "Start";
})