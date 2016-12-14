
const chboxes = document.querySelectorAll('input[type="checkbox"]');

let last;

function checkFunc(event) {
	console.dir(this);

	console.log(chboxes.find(checkbox => {
		if (checkbox == this) {
			return true;
		}
	}));


	last = this;

	if (event.shiftKey) {

	}
}


chboxes.forEach(checkbox => checkbox.addEventListener("click", checkFunc));
