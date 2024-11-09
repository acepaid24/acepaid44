const prompt = require("prompt-sync")()
 // Get user input
 let num = parseFloat(prompt("Enter the first number-->"))
 let num1 = parseFloat(prompt("Enter the second number-->"))

 // Checking the signs of number
 if (num >0 && num1 >0){
    console.log("Both are positive numbers 😎")
 }
 else if (num===0 && num1===0){
    console.log("Both numbers are Zero 0️⃣")
 }
 else {
    console.log("At least one is zero")
 }