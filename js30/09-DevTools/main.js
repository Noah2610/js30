
const dom = document.querySelector("#link");

const dogs = [
	{ name: 'Snickers', age: 7, type: "good" },
	{ name: 'Hugo', age: 8, type: "bad" },
	{ name: 'Milo', age: 2, type: "goofy" },
	{ name: 'Doggie', age: 4, type: "strange" }
];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

// Regular
	// console.log("Hello World!");

// Interpolated
	// console.log("test string %s here %s", "stuff inserted here", "double here");

// Styled
	// console.log("%ctest string, styled!", 'color: red');

// warning!
	// console.warn("WARNING MESSAGE");

// Error :|
	// console.error("ERROR MESSAGE");

// Info
	// console.info("info message");

// Testing
	// var bool = false;
	// console.assert(bool === true, "bool? that's not true!");

// clearing
	// console.clear();

// Viewing DOM Elements
	// console.dir(dom);

// Grouping together
	/*
	dogs.forEach(dog => {
		console.group(dog.name);
		// console.groupCollapsed(dog.name);
			console.log(`This is ${dog.name}.`);
			console.log(`${dog.name} is ${dog.age} years old.`);
			console.log(`${dog.name} is a ${dog.type} dog.`);
		console.groupEnd(dog.name);
	});
	*/

// counting
	/*
	console.count("test");
	console.count("tmp");
	console.count("test");
	console.count("tmp");
	console.count("test");
	console.count("test");
	console.count("tmp");
	console.count("tmp");
	console.count("test");
	console.count("test");
	console.count("tmp");
	console.count("test");
	console.count("tmp");
	console.count("test");
	console.count("test");
	console.count("test");
	*/

// timing
	/*
	console.time("fetching github data");
	fetch("https://api.github.com/users/Noah2610")
		.then(data => data.json())
		.then(data => {
			console.timeEnd("fetching github data");
			console.log(data);
		});
	*/

// table
	// console.table(dogs);
