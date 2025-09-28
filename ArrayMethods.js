// Initial array of student names
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

// 1. push() – Add a new student
students.push("Frank");
console.log("After push:", students);

// 2. pop() – Remove the last student
students.pop();
console.log("After pop:", students);

// 3. unshift() – Add to the beginning
students.unshift("Grace");
console.log("After unshift:", students);

// 4. shift() – Remove from the beginning
students.shift();
console.log("After shift:", students);

// 5. includes() – Check if a student is in the list
console.log("Includes 'Alice'?", students.includes("Alice"));

// 6. indexOf() – Find position of a student
console.log("Index of 'Charlie':", students.indexOf("Charlie"));

// 7. slice() – Get a portion of the list
let topStudents = students.slice(0, 3);
console.log("Top students:", topStudents);

// 8. splice() – Remove and/or add students
students.splice(2, 1, "Zara"); // Replace 3rd student with Zara
console.log("After splice:", students);

// 9. sort() – Sort alphabetically
students.sort();
console.log("Sorted students:", students);

// 10. reverse() – Reverse the list
students.reverse();
console.log("Reversed students:", students);

// 11. filter() – Get students with names longer than 4 characters
let longNames = students.filter(name => name.length > 4);
console.log("Long names:", longNames);

// 12. map() – Convert all names to uppercase
let upperNames = students.map(name => name.toUpperCase());
console.log("Uppercase names:", upperNames);

// forEach() – Print each student
console.log("All students:");
students.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// 14. join() – Combine names into a single string
let nameString = students.join(", ");
console.log("Joined names:", nameString);

// 15. concat() – Merge with another list
let newStudents = ["Hannah", "Ian"];
let allStudents = students.concat(newStudents);
console.log("All students after concat:", allStudents);
