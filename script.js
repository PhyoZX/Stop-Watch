const watchTag = document.getElementsByClassName("stopWatch")[0];
const startTag = document.getElementsByClassName("startButton")[0];
const pauseTag = document.getElementsByClassName("pauseButton")[0];
const continueTag = document.getElementsByClassName("continueButton")[0];
const restartTag = document.getElementsByClassName("restartButton")[0];
const clearTag = document.getElementsByClassName("clearButton")[0];
let seconds = 0, minutes = 0, hours = 0,millisec=0;

const startTime =()=>{
	
	seconds+=1;
	if(seconds===60){
		seconds=0;
		minutes+=1;
	}
	if(minutes===60){
		minutes=0;
		hours+=1;
	}
	const secondsText = seconds<10 ? "0" + seconds.toString() : seconds;
	const minutesText = minutes<10 ? "0" + minutes.toString() : minutes;
	const hoursText = hours<10 ? "0" + hours.toString() : hours;
	watchTag.textContent=hoursText+":"+minutesText+":"+secondsText  ;
} 
let interval;



startTag.addEventListener("click",()=>{
	interval = setInterval( startTime,1000);
	setInterval(minutes,1000);
})

pauseTag.addEventListener("click" ,()=>{
	clearInterval(interval);
})
 continueTag.addEventListener("click",()=>{
 	clearInterval(interval);
 	interval = setInterval( startTime,1000);
 })

 restartTag.addEventListener("click",()=>{
 	clearInterval(interval);
 	(seconds=0),(minutes=0),(hours=0);
 	interval = setInterval( startTime,1000);
 })
clearTag.addEventListener("click",()=>{
	clearInterval(interval)
	watchTag.textContent = "00:00:00";
})
