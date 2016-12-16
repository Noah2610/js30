
const chboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;


function checkFunc(event) {

	for (var count = 0; count < chboxes.length; count++) {
		if (chboxes[count] == this) {

			if (!event.shiftKey) {
				lastChecked = {index: count, obj: this};
			}

			else if (event.shiftKey && lastChecked) {
				let loopIncr = 0;

				if (count > lastChecked.index) {  // lastChecked is above
					var loopStart = count - 1;
					var loopEnd = lastChecked.index - 1;
					loopIncr = -1;
				} else if (count < lastChecked.index) {  // lastChecked is below
					var loopStart = count + 1;
					var loopEnd = lastChecked.index + 1;
					loopIncr = 1;
				} else return;
					// var loopStart = count;
					// var loopEnd = lastChecked.index;

				for (var subCount = loopStart; subCount < loopEnd || subCount > loopEnd; subCount += loopIncr) {
					// chboxes[subCount].checked = true;  // always set checkboxes to true
					// chboxes[subCount].checked = !chboxes[subCount].checked;  // invert checkboxes values (true -> false; false ->)
					// chboxes[subCount].checked = this.checked;  // set checkboxes values to lastChecked state (recommended)
					chboxes[subCount].checked = chboxes[count].checked;  // set checkboxes values to selected state
				}
			}
		}
	}
}


chboxes.forEach(checkbox => checkbox.addEventListener("click", checkFunc));
