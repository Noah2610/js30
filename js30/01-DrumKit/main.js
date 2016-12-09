

window.addEventListener("keydown", function (event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	if (!audio) return;

	audio.currentTime = 0;  // reset audio playback
	audio.play();  // play audio

	key.classList.add("playing");  // add class to element
});


function removeTrans(event) {
	// console.log(event);
	if (event.propertyName !== "transform") return;  // skip if not a transform

	this.classList.remove("playing");
}

const keysArr = document.querySelectorAll(".key");
keysArr.forEach(key => key.addEventListener("transitionend", removeTrans));
