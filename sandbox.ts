// const character = "mario";

// console.log(character);

// const inputs = document.querySelectorAll("input");

// inputs.forEach(input => {
//   console.log(input);
// });

// const character = "mario";

// console.log(character);

const inputs = document.querySelectorAll("input");

// console.log(inputs);

inputs.forEach(input => {
  console.log(input);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(4));

// arrays
let names = ["luigi", "mario", "yoshi", 4, true];

names.push("toad");

console.log(names);

// objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30
};

console.log(ninja);

// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 12;

console.log(age);

// array
let ninjas: string[];

ninjas = ["yoshi", "mario"];
ninjas.push("shaun");

console.log(ninjas);

// union types
let mixed: (string | number | boolean)[] = [];

mixed.push("hello");
mixed.push(20);

console.log(mixed);

// objects
let ninjaOne: object;

ninjaOne = { name: "yoshi", age: "30" };
ninjaOne = { name: "hello" };
console.log(ninjaOne);

// dynamic (any) types
let age: any = 25;

age = true;
age = { name: "luigi" };
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);

console.log(mixed);

// functions
let greet: Function;

greet = () => {
  console.log("hello, world!");
};

greet();

// functions #2
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

// functions #3
const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7);
console.log(result);
