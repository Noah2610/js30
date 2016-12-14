
const cnv = document.querySelector("#draw");
const ctx = cnv.getContext("2d");

cnv.width = window.innerWidth * 0.975;
cnv.height = window.innerHeight * 0.975;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;
let direction = true;



function draw(event) {
	if (!isDrawing) return;  // exit function if user is not drawing
	// console.log(event);

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();

	[lastX, lastY] = [event.offsetX, event.offsetY];

	hue++;
	if (hue >= 360) {
		hue = 0;
	}

	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	if (direction) {
		ctx.lineWidth++;
	} else if (!direction) {
		ctx.lineWidth--;
	}
}

cnv.addEventListener("mousedown", (event) => {
	isDrawing = true;
	[lastX, lastY] = [event.offsetX, event.offsetY];
});

cnv.addEventListener("mousemove", draw);
cnv.addEventListener("mouseup", () => isDrawing = false);
cnv.addEventListener("mouseout", () => isDrawing = false);
