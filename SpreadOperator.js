// Example 1: Copying an array
const fruits = ["apple", "banana", "orange"];
const moreFruits = [...fruits]; // Makes a copy
console.log("Copied array:", moreFruits);

// Example 2: Adding items to an array
const allFruits = [...fruits, "mango", "pineapple"];
console.log("Extended array:", allFruits);

// Example 3: Combining two arrays
const tropicalFruits = ["papaya", "guava"];
const combinedFruits = [...fruits, ...tropicalFruits];
console.log("Combined array:", combinedFruits);

// Example 4: Using spread in a function
function greet(name1, name2, name3) {
  console.log(`Hello ${name1}, ${name2}, and ${name3}!`);
}
const names = ["Alice", "Bob", "Charlie"];
greet(...names); // Unpacks names into the function

// Example 5: Copying an object
const person = { name: "John", age: 30 };
const copiedPerson = { ...person };
console.log("Copied object:", copiedPerson);

// Example 6: Adding properties to an object
const updatedPerson = { ...person, city: "Lagos" };
console.log("Updated object:", updatedPerson);
