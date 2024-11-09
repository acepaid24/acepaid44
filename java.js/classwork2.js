const prompt = require("prompt-sync")()
//comparision of weekends & weekdays
let days= prompt("Enter the days of the week-->").toLowerCase()

if (days == "saturday" || days == "sunday"){
    console.log("it is weekend 😎")
}
else if (days == "monday" || days == "tuesday" || days == "wednesday" || days == "thursday" || days == "friday"){
   console.log ("it a weekdays... go to work 🧑‍💼")
}
else {
    console.log("invalid day")
}