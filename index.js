// Variable declarations
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")

// Function that generates the random passwords
function generateRandomPasswords(){
    // Remove the previous passwords generated
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""

    // Get 15 random characters for each password as each password is 15 characters long.
    // Also, add both passwords to the corresponding section using the DOM.
    for(let i=0; i<15; i++){
        let characterIndex = Math.floor(Math.random()*characters.length)
        passwordOneEl.textContent += characters[characterIndex]

        characterIndex = Math.floor(Math.random()*characters.length)
        passwordTwoEl.textContent += characters[characterIndex]
    }
}
