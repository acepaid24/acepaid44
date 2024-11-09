const prompt = require("prompt-sync")()
//Check if student qualifies for admission
let score = parseFloat(prompt("Enter the student score-->"))
let sport =prompt("is he involve in any sport-->")
let recommendation =prompt("does he have an high recommendation-->")
// check admission criteria
if (score >=70 && sport == "yes" && recommendation === "yes"){
    console.log("he will gain admission 🎓")
}
else {
    console.log("he will not gain admission")
}