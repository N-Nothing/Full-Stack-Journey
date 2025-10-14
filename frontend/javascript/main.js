// JavaScript Basics: Functions

// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (x, y) => x * y;

// Using the functions
console.log(greet("Jibon")); // Output: Hello, Jibon!
console.log(add(5, 3));      // Output: 8
console.log(multiply(4, 6)); // Output: 24

// JavaScript Basics: Conditionals (if/else)

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Example with boolean
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella!");
} else {
  console.log("Enjoy the sunshine!");
}

// JavaScript Basics: Loops

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// For...of loop (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("Color:", color);
}

// JavaScript Basics: DOM Manipulation

// This code assumes you have an element with id="demo" in your HTML
// Example: <h1 id="demo">Hello World</h1>

// Select the element
const demoElement = document.getElementById("demo");

// Change the text content
if (demoElement) {
  demoElement.textContent = "Text changed by JavaScript!";
}

// Change the style
if (demoElement) {
  demoElement.style.color = "blue";
  demoElement.style.fontSize = "2em";
}

// Create a new element and add it to the page
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript.";
document.body.appendChild(newPara);
