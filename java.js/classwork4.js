const prompt = require("prompt-sync")()
//Write a program that ask the user to enter a password  and check it strength
let password=prompt("Enter your password 🔑-->")

// check the password strength
if (password.length >= 8 && password.toLowerCase(). includes("secure")){
    console.log("STRONG PASSWORD!!! 💪")
}
else if (password.length >=8){
    console.log("MEDUIM PASSSWORD!!!! 🌡️")
}
else {
    console.log ("WEAK PASSWORD!!! ⚠️")
}

