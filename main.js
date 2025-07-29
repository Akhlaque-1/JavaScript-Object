// assignment = 07
// 1.
// Prompt user to enter a city name
let city = prompt("Enter your city name:");

// Convert input to lowercase to avoid case sensitivity issues
city = city.toLowerCase();

// Check if the city is Karachi
if (city === "karachi") {
  alert("Welcome to city of lights");
} 


// 2.
// Take gender input 
var gender = prompt("Enter your gender (male/female):");

// Convert to lowercase for safe comparison
gender = gender.toLowerCase();

// Show message based on gender
if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma’am.");
} 



// 3.

// Take signal color as input from user
var signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):");

// Convert input to lowercase for comparison
signalColor = signalColor.toLowerCase();

// Check and display appropriate message
if (signalColor === "red") {
  alert("Must Stop");
} else if (signalColor === "yellow") {
  alert("Ready to move");
} else if (signalColor === "green") {
  alert("Move now");
} else {
  alert("Invalid color. Please enter Red, Yellow, or Green.");
}


// 4.

// Take remaining fuel input from user
var remainingFuel = prompt("Enter remaining fuel in your car (in litres):");

// Convert input to a number
remainingFuel = parseFloat(remainingFuel);

// Check if fuel is less than 0.25 litres
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("You have enough fuel");
}


// 5.

// a.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}



// b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
alert("True");
}
if (false){
alert("False");
}
// f. 
if("car" < "cat"){
alert("car is smaller than cat");
}




//   // Input marks
  var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
  var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
  var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
  var totalMarks = parseFloat(prompt("Enter total marks:"));

  // Calculate obtained marks and percentage
  var obtainedMarks = subject1 + subject2 + subject3;
  var percentage = (obtainedMarks / totalMarks) * 100;

  // Grade and Remarks
  var grade, remarks;

  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "Fail";
    remarks = "Sorry";
  }

// Output the result
document.write("Marks Sheet\n <br>" +
      "Total Marks: " + totalMarks + "\n <br>" +
      "Marks Obtained: " + obtainedMarks + "\n<br>" +
      "Percentage: " + percentage.toFixed(2) + "%\n <br>" +
      "Grade: " + grade + "\n <br>"  +
       "Remarks: " + remarks);




// 7. Guess Game
var secretNumber = 7; // Secret number between 1 and 10
var userGuess = +prompt("Guess the secret number (1-10):");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess! Try again.");
}




// 8. Divisible by 3
var number = +prompt("Enter a number to check if it's divisible by 3:");
if (number % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is not divisible by 3.");
}



// 9. Even or Odd
var num = +prompt("Enter a number to check even or odd:");
if (num % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}



// 10. Temperature Checker
let temperature = +prompt("Enter temperature in °C:");
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It's very cold today!");
}




// 11. Simple Calculator
let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  alert("Invalid operation");
}

if (result !== undefined) {
  alert("Result: " + result);
}







// assignment 8


let input = prompt("Enter a single character:");
let charCode = input.charCodeAt(0); // Get ASCII code of first character

if (charCode >= 48 && charCode <= 57) {
  alert("You entered a number.");
} else if (charCode >= 65 && charCode <= 90) {
  alert("You entered an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  alert("You entered a lowercase letter.");
} else {
  alert("You entered a special character or something else.");
}



//  02
let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");

if (num1 > num2) {
  alert("The larger number is: " + num1);
} else if (num2 > num1) {
  alert("The larger number is: " + num2);
} else {
  alert("Both numbers are equal.");
}

// 03
let number = +prompt("Enter a number:");

if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

// 04
let char = prompt("Enter a single character:");

if (char.length === 1) {
  let lowerChar = char.toLowerCase(); // Convert to lowercase for easy comparison

  if (
    lowerChar === 'a' ||
    lowerChar === 'e' ||
    lowerChar === 'i' ||
    lowerChar === 'o' ||
    lowerChar === 'u'
  ) {
    alert(true);
  } else {
    alert(false);
  }
} else {
  alert("Please enter only a single character.");
}

// 05
// a. Store correct password
var correctPassword = "MySecret123";

// b. Ask user to enter password
var userPassword = prompt("Enter your password:");

// c. Validate the password
if (!userPassword) {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}



// 06

var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

alert(greeting);



// 07

let time = +prompt("Enter time in 24-hour format (e.g. 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time. Please enter a value between 0 and 2359.");
}
