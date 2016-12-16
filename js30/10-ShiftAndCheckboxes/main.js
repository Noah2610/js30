
const chboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function checkFunc(event) {

	for (var count = 0; count < chboxes.length; count++) {
		if (chboxes[count] == this) {

			if (!event.shiftKey) {
				lastChecked = {index: count, obj: this};
			}

			else if (event.shiftKey && lastChecked) {
				if (count > lastChecked.index) {  // lastChecked is above
					var loopStart = count - 1;
					var loopIncr = -1;
				} else if (count < lastChecked.index) {  // lastChecked is below
					var loopStart = count + 1;
					var loopIncr = 1;
				} else return;
					var loopEnd = lastChecked.index;

				for (var subCount = loopStart; subCount < loopEnd || subCount > loopEnd; subCount += loopIncr) {
					// chboxes[subCount].checked = true;  // always set checkboxes to true
					// chboxes[subCount].checked = !chboxes[subCount].checked;  // invert checkboxes values (true -> false; false ->)
					chboxes[subCount].checked = this.checked;  // set checkboxes values to selected state (recommended)
				}
			}
		}
	}
}


chboxes.forEach(checkbox => checkbox.addEventListener("click", checkFunc));
