const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Random Number', randomNumber)

let score = 10;
let highScore = 0;

// const button = document.querySelector(".user-input");
// const changeScoreText = function (message) {
//     document.querySelector('.user-input').textContent = message;
//     console.log(`User Input: ${}`)
// }
const inputUser = Number(document.querySelector(".user-input").value);

document.querySelector(".btn-check").addEventListener("click", function() {
    
    if (!inputUser) {
        document.querySelector(".msg").textContent = "No input";
    } else {
        document.querySelector(".msg").textContent = "";
    }
});
// console.log(`user input: ${inputUser}`)