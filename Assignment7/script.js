// Part A.
    // The Temperature Converter - Let's make a converter based on the steps here and display the coverted
    // result. -Use template literals Only to display the result
    // • Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
    // • Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is
    // NN°C."
console.log("Part A");

let celsius = 30;
let fahrenheit = (celsius * (9/5)) + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);

fahrenheit = 86;
celsius = (fahrenheit - 32) * (5/9);
console.log(`${fahrenheit}°F is ${celsius}°C`);

// Part B.
//     Use the BMI example from class activity 1, and the code you already wrote, and improve it:
//     1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Lucas'
//     BMI is higher than John's!" or "John's BMI is higher than Lucas'!"
//     2. Use a template literal to include the BMI values in the outputs. Example: "Lucas' BMI (28.3) is higher
//     than John's (23.9)!"
//     HINT: Use an if/else statement
//Lucas 
console.log("\nPart B");

const massLucas = 78;
const heightLucas = 1.69;
let lucasBMI = massLucas / (heightLucas ** 2);
console.log("Lucas's BMI: ", lucasBMI*100);

//John
const massJohn = 92;
const heightJohn  = 1.95;
let johnBMI = massJohn / (heightJohn ** 2);
console.log("John'S BMI: ", johnBMI);

//Comparison
if (lucasBMI > johnBMI) {
    console.log(`Lucas's BMI (${lucasBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Lucas's (${lucasBMI})!`);
}

// C.
//     There are two teams, Nets and Knicks. They compete against each other 3 times. The team with the
//     highest average score wins a trophy!
//     Your tasks:
//     1. Calculate the average score for each team, using the test data below
//     2. Compare the team's average scores to determine the winner of the competition,
//     and print it to the console. Don't forget that there can be a draw, so test for that
//     as well(draw means they have the same average score)
//     3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a
//     higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical
//     operator to test for minimum score, as well as multiple else -if blocks.
//     4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the
//     same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
//     Test data:
//      Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110
//      Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
//      Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106
console.log("\nPart C");
// Data 1
// Nets Score Calculation
let sum = 0;
let score = 0;
let netsAverage = 0;

score = 96;
sum += score;
score = 108;
sum += score;
score = 89;
sum += score;
netsAverage = sum / 3;

// Knicks Score Calculation
let knicksAverage = 0;
sum = 0;
score = 88;
sum += score;
score = 91;
sum += score;
score = 110;
sum += score;
knicksAverage = sum / 3;

//Comparison
console.log ("Data Analysis 1:");
if (netsAverage == knicksAverage) {
    console.log("The Game is a Draw.");
} else if (netsAverage > knicksAverage) {
    console.log("Nets is the winner!");
} else {
    console.log("Knicks is the winner!");
}

//Data 2
let netsScore = 97 + 112 + 101;
let knicksScore = 109 + 95 + 123;

netsAverage = netsScore / 3;
knicksAverage = knicksScore / 3;
let isNetsGreater = netsAverage >= knicksAverage;

console.log("\nData Analysis 2:")
if (isNetsGreater) {
    if (netsAverage == knicksAverage) {
        console.log("The game is a Draw.");
    } else { 
        console.log("Nets is the winner.");
    }
} else {
    console.log("Knicks is the winner.");
}

//Data 3
console.log("\nData Analysis 3:");
netsScore = 97 + 112 + 101;
knicksScore = 109 + 95 + 106;
netsAverage = netsScore / 3;
knicksAverage = knicksScore / 3;
if (netsAverage == knicksAverage) {
    console.log("The Game is a Draw.");
} else if (netsAverage > knicksAverage) {
    console.log ("Nets is the winner.");
} else {
    console.log("Knicks is the winner.");
}

//Bonus
console.log("\nBonus:");
const team1 = 1;
const team2 = 2;
const minScore = 100;

if (team1 >= minScore || team2 >= minScore) {
    if (team1 == team2) {
        console.log(`Both teams have ${team1} equal score. The Game is a Draw.`);
    } else if (team1 > team2) {
        console.log(`Team1 is the winner with ${team1 - team2} score difference.`);
    } else {
        console.log(`Team2 is the winner with ${team2 - team1} score difference.`);
    }
} else {
    console.log(`Both teams don't have a score greater or equal to ${minScore} points! No team wins the trophy!`);
}
