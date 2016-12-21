
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.querySelector("#bands");
/* const articles = ["the", "a", "an"];

let bandsTmp = [];


function bandsFunc() {
	bands.map((band,index) => {
		
			let check = false;
		for (let count = 0; count < articles.length; count++) {
			if (band.substring(0,articles[count].length).toLowerCase() == articles[count]) {
				bandsTmp.push(band.substring(articles[count].length + 1));
				check = true;
				break;
			}
		}
		if (check == false) {
			bandsTmp.push(band);
		}

	});



	bandsTmp.sort();
}

bandsFunc(); */


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
