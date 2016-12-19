
// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
let team = players;
// console.log("players:",players);
// console.log("team:",team);

// You might think we can just do something like this:
// team[3] = "name";
// console.log("players:",players);
// console.log("team:",team);

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
	// apparently this should work, but doesn't :/
		// let team2 = team.splice();
		// // team2[3] = "name";
		// console.log("players:",players);
		// console.log("team:",team);
		// console.log("team2:",team2);

// one day

// or create a new array and concat the old one in
// let team2 = [].concat(players);
// team2[3] = "name";
// console.log("players:",players);
// console.log("team:",team);
// console.log("team2:",team2);

// or use the new ES6 Spread
// let team2 = [... players];
// team2[3] = "name";
// console.log("players:",players);
// console.log("team:",team);
// console.log("team2:",team2);

// Array.from
// let team2 = Array.from(players);
// team2[3] = "name";
// console.log("players:",players);
// console.log("team:",team);
// console.log("team2:",team2);

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
	name: "noah ros",
	age: 17
};

// and think we make a copy:
// let person2 = person;
// person2.age = "99";

// how do we take a copy instead?
// let person2 = Object.assign({}, person/*, {age: 99}*/);
// person2.age = 99;

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const deep = {
	index0: "hello",
	index1: "world",
	group: {
		gIndex0: "index of object inside object",
		gIndex1: "look, another index nested inside 2 objects"
	}
};

// let deep2 = Object.assign({}, deep);  // this doesn't work

// solution:
let deep2 = JSON.parse(JSON.stringify(deep));  // first -> converts obj into string, then -> converts that string back into object (depending on syntax)



