// const btn = document.getElementById("btn");
// console.log((btn.innerHTML = "value change from js file"));
// console.log((btn.innerText = "value change from js file"));

let age = 20;

let num1 = "300";
let num2 = 200;

console.log(num1 === num2);

const myArray = [
  "Bari",
  20,
  [4, "que"],
  { name: "Jones" },
  false,
  null,
  undefined,
];

// console.log(myArray[0]);
console.log(myArray[2][1]);

console.log(myArray.length);

// Array methods

// myArray.push("Kiwi");
// myArray.pop();
// myArray.shift();
// myArray.unshift("Banana");
console.log(myArray);

console.log(myArray.push("Kiwi"));
console.log(myArray.pop());
console.log(myArray.shift());
console.log(myArray.unshift("Banana"));

console.log(myArray);

// higher order function

const myMap = myArray.map((arrayItems) => arrayItems + " Barisudor");

console.log(myMap);

const myReduce = myArray.reduce(
  (arrayItems, accumulator) => arrayItems + accumulator,
  0,
);

console.log(myReduce);
