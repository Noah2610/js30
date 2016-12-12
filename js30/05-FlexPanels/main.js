

const panels = document.querySelectorAll(".panel");
// console.log(panels);


function toggleOpen () {
	// /*
	panels.forEach(panel => {
		if (panel != this) {
			if (panel.classList.contains("open")) {
				panel.classList.remove("open");
			}
		}
	});
	// */
	this.classList.toggle("open");
}

function toggleActive (event) {
		console.log(this);
	if (event.propertyName.includes("flex")) {
		this.classList.toggle("open-active");
	}
}


panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
