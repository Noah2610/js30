
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interResults = true;

const triggerPhrase = "test";

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

// console.log("test");

recognition.addEventListener("result", event => {

	// console.log(event.results);
	// console.log(result);

	const transcript = Array.from(event.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join("");

		// console.log("test");
		// console.log(transcript);

	p.textContent = transcript;

	if (event.results[0].isFinal) {
		p = document.createElement("p");
		words.appendChild(p);
	}

	if (transcript.toLowerCase().includes(triggerPhrase)) {
		console.log("SPECIAL PHRASE MENTIONED!");
		p.textContent = "! YOYO WAS BESTIMMTES WURDE GESAGT :3 !";
		p = document.createElement("p");
		words.appendChild(p);
	}

});


recognition.addEventListener("end", recognition.start);

recognition.start();


// console logs
/* words.addEventListener("change", () => {
	let p = document.querySelectorAll("p");
	console.log(p[p.length - 1]);
}); */
