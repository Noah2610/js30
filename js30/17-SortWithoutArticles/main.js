
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.querySelector("#bands");


function strip(band) {
	return band.replace(/^(the |a |an )/i, "");
}


const sortedBands = bands.sort((a,b) => {
	if (strip(a) > strip(b)) {
		return 1;
	} else if (strip(a) < strip(b)) {
		return -1;
	} else return 0;
});


sortedBands.forEach((band) => {
	list.insertAdjacentHTML("beforeend", `<li>${band}</li>`);
});
