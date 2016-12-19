

// get elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreenBtn = player.querySelector("#fullscreenBtn");


// functions
function togglePlay() {
	const method = video.paused ? "play" : "pause";
	video[method]();
}

function updateBtn() {
	// const icon = this.pause ? '►' : '❚ ❚';
	toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
	const skipVal = Number(this.dataset.skip);
	video.currentTime += skipVal;
}

function updateSlider() {

	video[this.name] = this.value;
}

function updateProgress() {
	const perc = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = perc + "%";
}

function scrub(event) {
	if (progressMouse == true) {
		const posPerc = event.offsetX / this.clientWidth;
		video.currentTime = video.duration * posPerc;
	}
}

function toggleFullscreen() {
	// unfinished

		console.log("fullscreen");
	if (player.requestFullscreen) {
		player.requestFullscreen();
	} else if (player.mozRequestFullscreen) {
		player.mozRequestFullscreen();
	} else if (player.webkitRequestFullscreen) {
		player.webkitRequestFullscreen();
	}
}


// event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);

toggle.addEventListener("click", togglePlay);

skipBtns.forEach(btn => btn.addEventListener("click", skip));

ranges.forEach(slider => slider.addEventListener("change", updateSlider));
ranges.forEach(slider => slider.addEventListener("mousemove", updateSlider));

video.addEventListener("timeupdate", updateProgress);

let progressMouse = false;
progress.addEventListener("mousedown", () => progressMouse = true);
window.addEventListener("mouseup", () => progressMouse = false);
progress.addEventListener("mousemove", scrub);
progress.addEventListener("mousedown", scrub);

fullscreenBtn.addEventListener("click", toggleFullscreen);
