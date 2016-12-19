
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let inputs = [];

const items = JSON.parse(localStorage.getItem("items")) || [];
populateList(items, itemsList);


function addItem(event) {
	event.preventDefault();

	let text = (this.querySelector("[name=item]")).value;
	let item = {
		text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	this.reset();

	inputs = document.querySelectorAll('input[type="checkbox"]');
	inputs.forEach(input => addEventListener("change", updateDone));

	localStorage.setItem("items", JSON.stringify(items));
	
}


function populateList(plates = [], platesList) {

	platesList.innerHTML = plates.map((plate, index) => {
		let status = plate.done ? "checked" : "";
		return `
			<li>
				<input type="checkbox" data-index=${index} id="item${index}" ${status} />
				<label for="item${index}">${plate.text}</label>
			</li>
		`;
	}).join("");

}


function updateDone() {
		console.log("TEST");
	inputs.forEach((input,index) => {
		items[index].done = input.checked;
	});

	localStorage.setItem("items", JSON.stringify(items));
}


addItems.addEventListener("submit", addItem);

window.addEventListener("load", () => {
	inputs = document.querySelectorAll('input[type="checkbox"]');
	inputs.forEach(input => addEventListener("change", updateDone));
});
