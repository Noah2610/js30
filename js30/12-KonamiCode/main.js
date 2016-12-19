
const body = document.querySelector("body");

const phrase = "test";
let inputArr = [];


function checkPhrase(checkArr) {
	let check = checkArr.join("");
	if (check == phrase) {

		// konami code activated, do something
		
		// document.body.insertAdjacentHTML('afterbegin', '<h1>KONAMI CODE ACTIVATED</h1>');
		cornify_add();

	}
}


window.addEventListener("keyup", event => {

	inputArr.push(event.key);
	inputArr.splice(-phrase.length - 1, inputArr.length - phrase.length);

	console.log(inputArr);

	checkPhrase(inputArr);
});
