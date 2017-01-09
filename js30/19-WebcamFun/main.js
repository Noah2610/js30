
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const vidUpdate = 128;
const rgbSplitDist = {r: 200, g: -200, b: 200};


function getVideo() {
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
		.then(localMediaStream => {
			video.src = window.URL.createObjectURL(localMediaStream);
			video.play();
		})
		.catch(err => {
			console.error("ERROR - enable webcam", err);
		});
}


function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;

	setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		// get pixels
		let pixels = ctx.getImageData(0,0, width,height);
		// edit pixels
		pixels = rgbFiler(pixels);
		pixels = greenScreen(pixels);
		// pixels = rgbSplit(pixels);
		ctx.globalAlpha = document.querySelector(".afterImg input").value;
		// pixels = greenScreen(pixels);
		// commit new pixels
		ctx.putImageData(pixels, 0,0);

	}, vidUpdate);
}


function takePhoto() {
	// play snap sound
	snap.currentTime = 0;
	snap.play();

	// take data from canvas
	const data = canvas.toDataURL("image/jpeg");
	const link = document.createElement("a");
	link.href = data;
	link.setAttribute("download", "img");
	link.innerHTML = `<img src="${data}" />`;
	strip.insertBefore(link, strip.firstChild);
}


function rgbFiler(pixels) {
	let rgb = {};

	document.querySelectorAll(".rgbFilter input").forEach((input) => {
		rgb[input.name] = parseInt(input.value);
	});

	// console.log(rgb);

	for (let count = 0; count < pixels.data.length; count += 4) {
		pixels.data[count + 0] += rgb.red;  // red
		pixels.data[count + 1] += rgb.green;  // green
		pixels.data[count + 2] += rgb.blue;  // blue
		pixels.data[count + 3] += rgb.alpha;  // alpha
	}
	return pixels;
}

function rgbSplit(pixels) {
	for (let count = 0; count < pixels.data.length; count += 4) {
		pixels.data[count + rgbSplitDist.r] = pixels.data[count + 0];  // red
		pixels.data[count + rgbSplitDist.g] = pixels.data[count + 1];  // green
		pixels.data[count + rgbSplitDist.b] = pixels.data[count + 2];  // blue
		// pixels.data[count + rgbSplitDist] = pixels.data[count + 3] * Math.random();  // alpha
	}
	return pixels;
}


function greenScreen(pixels) {
	let levels = {};

	document.querySelectorAll(".rgb input").forEach((input) => {
		levels[input.name] = input.value;
	});

	for (let count = 0; count < pixels.data.length; count += 4) {
		let red = pixels.data[count + 0];  // red
		let green = pixels.data[count + 1];  // green
		let blue = pixels.data[count + 2];  // blue
		let alpha = pixels.data[count + 3];  // alpha

		if (red >= levels.rmin
			&& red <= levels.rmax
			&& green >= levels.gmin
			&& green <= levels.gmax
			&& blue >= levels.bmin
			&& blue <= levels.bmax) {

			// take it out (reduce alpha to 0)
			pixels.data[count + 3] = 0;
		}
	}

	return pixels;
}


getVideo();

video.addEventListener("canplay", paintToCanvas);
