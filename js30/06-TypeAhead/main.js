
// const body = document.querySelector("body");
const inputSearch = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));  // '...' --> spread into array


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function findMatches(targetWord, cities) {

	return cities.filter(place =>  {
		// check for matching word in cities
		const regex = new RegExp(targetWord, "gi");
		return place.city.match(regex) || place.state.match(regex);
	});

}


function displayMatches() {
	if (this.value == "") {
			console.log("TEST");
		suggestions.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
	} else {

		const matchArr = findMatches(this.value, cities);

		const html = matchArr.map(place => {
			const regex = new RegExp(this.value, "gi");
			const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
			const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

			return `
				<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="population">${numberWithCommas(place.population)}</span>
				</li>
			`;
		}).join("");

		if (html == "") {
			suggestions.innerHTML = `<li>No cities or states containing "${this.value.toUpperCase()}" found.</li>`;
		} else {
			suggestions.innerHTML = html;
		}
	}
}


// inputSearch.addEventListener("change", displayMatches);
inputSearch.addEventListener("keyup", displayMatches);
