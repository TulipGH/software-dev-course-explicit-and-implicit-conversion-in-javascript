/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;            //when subtracting a string from a number, JavaScript implicitly converts the string to a number. However, it's better to explicitly convert it for clarity.
console.log("The result is: " + result);

let isValid = false; //having Boolean(false) is unnecessary here, as false is already a boolean value.
if (isValid) {
    console.log("This is valid!");
}

let age = "25"; 
let totalAge = Number(age) + 5; // Explicitly converting the string "25" to a number before adding 5 ensures that it will properly add it so that you dont get 255
console.log("Total Age: " + totalAge);

let minutes = 45; // minutes is implicitly convetered to a string when the console.log calls message.
let message = "your time was " + minutes + " minutes";
console.log(message);
console.log(typeof message);

let isActive = undefined / 2;
let equation = String(isActive); 
console.log(equation + " is the answer");
console.log(typeof equation); //using String() converts undefined as undefined is considered a number.