let score = 10;
let highScore = 0;
let guesses = [];
let msgLog = () => document.querySelector("#msg");
let guessContainer = () => document.querySelector(".guess-history");
// This function gets executed if the score reaches 0

function youLose() {
    // Score becomes 0 and Display 
    score = 0;
    document.querySelector('.scr').textContent = score;
    // Message Log displays Game Over
    msgLog().style.fontSize = '2em';
    msgLog().style.fontWeight = 'bold';
    msgLog().textContent = `GAME OVER`;
    // Disables Check Button
    document.querySelector('.btn-check').disabled = true;
    // Disables input box
    document.querySelector('.user-input').disabled = true;
    // Update the title to denote the correct number
    document.querySelector('#title').textContent = 'Correct Number Was:';
    document.querySelector('#title').style.color = '#BE1830';
    document.querySelector('.title-box').style.background = '#393A41';
    // Displays when the correct answer was on the logo box
    document.querySelector('.questionLogo').style.fontSize = '4em';       
    document.querySelector('.questionLogo').textContent = randomNumber;
    // Change of characteristics to the msg div to denote user's lost
    document.querySelector('.msg').style.background = '#BE1830';
    msgLog().style.textShadow = '0px 0px 5px #F1DB4B';
    msgLog().style.color = '#040122';
}

// This function is executed in case the user's input is an incorrect guess
function hint (input, random) {
    if (input > random) {
        msgLog().style.color = "#BE1830";
        msgLog().style.fontSize = "1.5em";
        msgLog().textContent = 'Too High';
    } else {
        msgLog().style.color = "#BE1830";
        msgLog().style.fontSize = "1.2em";
        msgLog().textContent = 'Too Low';
    }
}

// This function is executed in case the user guesses the correct number
function youWin() {
    // Message log message, color and size font
    msgLog().style.color = "#BE1830";
    msgLog().style.fontSize = "2em";
    msgLog().textContent = "YOU WIN! 🎉";

    // Generate a new random Number after user's win
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log("NEW RANDOMNUMBER: " + randomNumber);

    // Change logo to green check
    // 1. Elimitate text from the msg
    // 2. Create Image
    // 3. Append Image 
    document.querySelector('.questionLogo').textContent = '';
    var questionlogo = document.createElement('img');
    questionlogo.src = 'win.png';
    document.querySelector('.questionLogo').appendChild(questionlogo);
    // Change Background Color when win
    document.body.style.backgroundColor = '#0A3227';
    
}

// This function replaces the previous highest score
function highscore(scr, hgscr) {
    // console.log('Score from scr: '+ scr)
    // console.log('HighScore from hgscr: '+ hgscr)
    if (scr > hgscr) {
        hgscr = scr;
        return hgscr;
    } else {
        return hgscr;
    }
}

function wrongInputLayout() {
    msgLog().style.color = "#BE1830";
    msgLog().style.fontSize = "1.25em";
}

let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log("This is RANDOM NUMBER: " + randomNumber);


// This is where the game starts. This funtion checks if the button check has been pressed 

document.querySelector('.btn-check').addEventListener('click', function() {

    // When the button has been pressed input value is stored on inputUser
    const inputUser = Number(document.querySelector(".user-input").value);
    document.body.style.backgroundColor = '#040122';
    // console.log("This is input userd: "+ typeof inputUser + Boolean(inputUser)+randomNumber)
   
    // Validate input
    if (!inputUser) {

        wrongInputLayout();
        msgLog().textContent = "Invalid Input";

    } else if (inputUser < 0) {

        wrongInputLayout();
        msgLog().textContent = "Please, enter a positive number";

    } else if (inputUser > 100) {

        wrongInputLayout();
        msgLog().textContent = "Please, enter a number between 1 to 100";

    } else {
        // Displaying the input values on the logo box 
        document.querySelector('.questionLogo').style.fontSize = "4em";       
        document.querySelector('.questionLogo').textContent = inputUser;
        // Delete value from input box every time the userd hits submit
        document.querySelector('.user-input').value = "";
        // Keep the cursor on the input box
        document.querySelector('.user-input').focus();
        document.querySelector('.user-input').select();

        // is input different than randomNumber and score > 1?
        // Yes: Keep playing 
        // No: check other conditions 
        if (inputUser !== randomNumber && score > 1) {
            guesses.push(inputUser);
            hint(inputUser, randomNumber);
            score --;
            document.querySelector('.scr').textContent = score;
            console.log("this is score " + score);
            while(guessContainer().firstChild) {
                guessContainer().removeChild(guessContainer().firstChild);
            }
            displayGuesses();
        }

        // Is Iput === randomnumber
        // Yes: You win 
        // No: Check next condition
        else if (inputUser === randomNumber){
            youWin();
            highScore = highscore(score,highScore);
            document.querySelector('.highestScr').textContent = highScore 
            score = 10;
            document.querySelector('.scr').textContent = score;
        }

        // Is Score === 1
        // Yes: You Lose 
        else if (score === 1) { 
            youLose();
        }
    }
});

document.querySelector('.reset').addEventListener('click',function() {
    // Score reset to 10 and display 
    score = 10;
    guesses = [];
    while(guessContainer().firstChild) {
        guessContainer().removeChild(guessContainer().firstChild);
    }
    document.querySelector('.scr').textContent = score;

    highScore = 0;
    document.querySelector('.highestScr').textContent = highScore;

    // Original msg display 
    msgLog().textContent = 'Let\'s Start Guessing...';
    msgLog().style.color = "black";
    msgLog().style.fontSize = "1em";

    // original img display 
    document.querySelector('.questionLogo').textContent = '';
    var questionlogo = document.createElement('img');
    questionlogo.src = 'question_logo2.png';
    document.querySelector('.questionLogo').appendChild(questionlogo);

    // Refenerate a random number
    randomNumber = Math.floor(Math.random() * 100 + 1);
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log("RESET RANDOMNUMBER: " + randomNumber);

    // Reset Title
    document.querySelector('#title').textContent = 'Guess My Number';
    document.querySelector('#title').style.color = '#F1DB4B';

    // Reset msg background
    document.querySelector('.msg').style.background = 'none';
     msgLog().style.color = 'white';
     msgLog().style.textShadow = 'none';
    
    // Reset body background
    document.body.style.backgroundColor = '#040122';

    // Reset title background 
    document.querySelector('.title-box').style.background = 'none';
});


function displayGuesses() {

    guesses.forEach(guess => {
        let p = document.createElement('p');
        p.textContent = guess;
        p.style.marginRight = "10px";
        p.style.float = "left";
        guessContainer().appendChild(p);
    });
};