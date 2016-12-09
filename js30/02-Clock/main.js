
const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function setSec() {
	const curTime = new Date();
	const sec = curTime.getSeconds();
	const secDeg = ((sec / 60) * 360) + 90;

		if (sec == 0) {
			secHand.style.transition = "0s";
		} else if (sec >= 1) {
			secHand.style.transition = "0.15s";
		}

	secHand.style.transform = `rotate(${secDeg}deg)`;

	console.log(sec);

	if (sec == 0) setMin();
}

function setMin() {
	const curTime = new Date();
	const min = curTime.getMinutes();
	const minDeg = ((min / 60) * 360) + 90;

		if (min == 0) {
			minHand.style.transition = "0s";
		} else if (min >= 1) {
			minHand.style.transition = "0.5s";
		}

	minHand.style.transform = `rotate(${minDeg}deg)`;

	console.log("MINUTE: " + min);

	if (min == 0) setHour();
}

function setHour() {
	const curTime = new Date();
	const hour = curTime.getHours();
	const hDeg = ((hour / 12) * 360) + 90;

		if (hour == 0) {
			hourHand.style.transition = "0s";
		} else if (hour >= 1) {
			hourHand.style.transition = "1s";
		}

	hourHand.style.transform = `rotate(${hDeg}deg)`;

	console.log("HOUR: " + hour);
}


setSec(); setMin(); setHour();
setInterval(setSec, 1000);
// setInterval(setMin, 60000);
// setInterval();
