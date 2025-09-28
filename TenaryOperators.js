// 1. Basic if-else replacement using ternary
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("1. Basic Ternary: " + status); // Adult

// 2. Assign value based on condition
let isLoggedIn = true;
let greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log("2. Conditional Assignment: " + greeting);

// 3. Nested ternary operators (be careful with readability)
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log("3. Nested Ternary (Grading): " + grade); // B

// 4. Ternary inside a function
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("4. Ternary in Function: " + checkEvenOdd(7)); // Odd

// 5. Use in template strings
let user = "Admin";
console.log(`5. Template String: Hello, ${user === "Admin" ? "Administrator" : "User"}`);

// 6. Conditional rendering (React-like example)
let isOnline = false;
let displayStatus = isOnline ? "<span>Online</span>" : "<span>Offline</span>";
