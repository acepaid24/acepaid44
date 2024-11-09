const prompt = require("prompt-sync")()
let  society =(prompt("Are you a Student-->"))
let agerange =parseInt(prompt("Enter your age-->"))
let price = parseFloat(prompt("Enter the Original price-->"))

//To check if the user is eligible for a discount
if(society==="yes" || agerange>=60){
    //calculate the discounted price
let discount = price *0.10;
let discountedPrice = price - discount;
    console.log("You are eligible for a 10% discount")
    console.log("Price:"+ price)
    console.log("discounted price:" + discountedPrice)
}
else {
    console.log("You do not qualify for a discount")
    console.log("price:" + price )
}


