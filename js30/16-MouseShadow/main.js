

const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 500;  // = max distance text can 'walk' (walk / 2 in all directions)


function shadow(event) {
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	// const { offsetWidth: width, offsetHeight: height } = hero;  // does same as above, JS destructuring

	let x = event.offsetX;
	let y = event.offsetY;
	// let { offsetX: x, offsetY: y } = event;  // again, JS destructuring

	// this --> element that has eventListener (always hero); event.target --> element function is interacting with (element mouse is hovering on)

	// if mouse hovers over h1, calculate proper x and y positions (naturally gets relative h1 x,y values)
	if (this !== event.target) {
		x += event.target.offsetLeft;
		y += event.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba( 0,255,255,0.75 ),
		${xWalk}px ${-yWalk}px 0 rgba( 255,0,255,0.75 ),
		${-xWalk}px ${yWalk}px 0 rgba( 255,255,0,0.75 ),
		${-xWalk}px ${-yWalk}px 0 rgba( 255,0,0,0.75 ),

		${yWalk * 2}px ${xWalk * 2}px 0 rgba( 255,0,0,0.75 ),
		${yWalk * 2}px ${-xWalk * 2}px 0 rgba( 0,255,0,0.75 ),
		${-yWalk * 2}px ${xWalk * 2}px 0 rgba( 0,0,255,0.75 ),
		${-yWalk * 2}px ${-xWalk * 2}px 0 rgba( 0,255,255,0.75 )
	`;

}


hero.addEventListener("mousemove", shadow);
