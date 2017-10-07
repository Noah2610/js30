
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;


function addVoices() {
	voices = this.getVoices();
	voicesDropdown.innerHTML = voices
		.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
		.join("");
}

function setVoice() {
	msg.voice = voices.find((voice) => voice.name === this.value);
	speak();
}

function speak() {
	speechSynthesis.cancel();
	speechSynthesis.speak(msg);
}

function setOption() {
	// console.log(this.name,this.value);
	msg[this.name] = this.value;
	speak();
}

speechSynthesis.addEventListener("voiceschanged", addVoices);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", speak);
stopButton.addEventListener("click", () => speechSynthesis.cancel());
options.forEach((option) => option.addEventListener("change", setOption));
