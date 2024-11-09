const prompt = require("prompt-sync")()
// getting input for user
let student = (prompt("Are you a student-->"))
let agerange =parseInt(prompt("Enter your age-->"))
let principalamount = parseFloat(prompt("Enter your principal amount-->"))
let years = parseInt(prompt("Enter the number of years-->"))

//check if the user qualifies for a discounted intrest rate
if (student==="yes" || agerange>=60){
   intrestrate= 0.05;  //You get a 5% Intrest 😊
}
else {
    intrestrate= 0.10; //You are charged 10% Intrest rate ☹️
}

//calculate the simple intrest
let intrest =(principalamount * intrestrate * years )

//Calculate  the total amount payable
let totalAmount = (principalamount + intrest)

//Display the result
console.log ("intrest Rate" + intrestrate * 100 + "%")
console.log ("Principal Amount" + principalamount)
console.log ("Intrest:" + intrest)
console.log("Total Amount Payable" + totalAmount)
