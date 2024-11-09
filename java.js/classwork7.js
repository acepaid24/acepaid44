const prompt = require("prompt-sync")()
//getting input from the user
let monthlyIncome = parseFloat(prompt("Enter your monthly income-->"))
let totalExpenses = parseFloat(prompt("Enter your total monthly expenses-->"))

//Calculating monthly savings
let monthlysavings = (monthlyIncome - totalExpenses)

//Calculating 20% saving aim
let savingsAim = (monthlyIncome * 0.02);

//Check if savings meets aim
if (monthlysavings >= savingsAim){
    console.log("Goal Achieved! Your monthly savings is" + monthlysavings)
}
else {
    console.log ("Increase Savings! Your monthly savings is" + monthlysavings)
    console.log ("You need to save an additional" + savingsAim - monthlysavings + "to meet your goals")
}
//Display Summary
console.log ("Monthly Income:" + monthlyIncome)
console.log ("Total Expenses:" + totalExpenses)
console.log ("Monthly savings:" + monthlysavings)
console.log ("20% savings Aims" + savingsAim)