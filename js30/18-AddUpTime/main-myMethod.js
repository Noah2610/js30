

const times = document.querySelectorAll("[data-time]");
const body = document.querySelector("body");
let totalTimeSec = 0;
let totalTimeStr;

function convertToSec(string,sep) {
	let min = Number(string.substring(0,string.search(sep)));
	let sec = Number(string.substring(string.search(sep) + 1));
	let timeSec = parseFloat((min * 60) + sec);
	totalTimeSec += timeSec;
}

function convertToStr(timeSec) {
	let min = Math.floor(timeSec / 60);
	let sec = timeSec - min * 60;
	totalTimeStr = timeStr = min + ":" + sec;
}

times.forEach((dom,index) => {
	dom.insertAdjacentHTML('beforeend', "<br>duration: " + dom.dataset.time);  // display video duration in list
	convertToSec(dom.dataset.time,":");
})


convertToStr(totalTimeSec);
body.insertAdjacentHTML("beforeend", `<h1>Total Video Duration: ${totalTimeStr}</h1>`);
