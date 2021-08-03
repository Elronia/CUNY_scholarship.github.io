// A.
// Jason wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his
// country, it's usual to tip 15% if the bill value is between 30 and 300. If the value is different, the tip is 20%.
// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. Try not
// to use an if/else statement.
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example:
// 'The bill was 275, the tip was 41.25, and the total value 316.25'
// * TEST DATA: Test for bill values 275, 28 and 430
console.log("Part A - Tip Calculator");
const bills1 = [275, 28, 430];

for (let i = 0; i < 3; i++) {
    let tip15 = bills1[i] * 0.15;
    let tip20 = bills1[i] * 0.20;
    bills1[i] > 300 && bills1[i] < 30
    ? console.log(`If the bill is $${bills1[i]}, the tip would be $${tip20}, and the total value is $${bills1[i] + tip20}.`) 
    : console.log(`If the bill is $${bills1[i]}, the tip would be $${tip15}, and the total value is $${bills1[i] + tip15}.`);
}


// B.
// Create a function called celsiusToFahrenheit:
// 1. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius;
// 2. Store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
console.log("\nPart B");

function celsiusToFahrenheit() {
    let celsius = 30;
    let fahrenheit = (celsius * (9/5)) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
}
celsiusToFahrenheit(30);

function fahrenheitToCelsius() {
    fahrenheit = 86;
    celsius = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F is ${celsius}°C`);
}
fahrenheitToCelsius(86);


// C.
// Back to the two teams game! There is a new discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per
// team). A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no
// team wins!
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgNets' and
// 'avgKnicks'), and then logs the winner to the console, together with the victory points, according to the
// rule above. Example: "Knicks win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.
// TEST DATA 1: Nets score 44, 23 and 71. Knicks score 65, 54 and 49
// TEST DATA 2: Nets score 85, 54 and 41. Knicks score 23, 34 and 27
console.log("\nPart C");

netsdata1 = [44, 23, 71];
knicksdata1 = [65, 54, 49];

netsdata2 = [85, 54, 41];
knicksdata2 = [23, 34, 27];

const calcAverage = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i]; 
    }
    return total/array.length;
}

//Use the function to calculate the averages
let avgNets1 = calcAverage(netsdata1);
let avgNets2 = calcAverage(netsdata2);

let avgKnicks1 = calcAverage(knicksdata1);
let avgKnicks2 = calcAverage(knicksdata2);

const checkWinner = (Knicks, Nets) => {
    if (Knicks > 2 * Nets) {
        return `the Knicks win (${Knicks} vs ${Nets})`;
    }
    else if (Nets > 2 * Knicks){
        return `the Nets win (${Nets} vs ${Knicks})`;
    }
    else {
        return `no team wins`;
    }
}

console.log(`For test data 1, ${checkWinner(avgKnicks1, avgNets1)}.`);

console.log(`For test data 2, ${checkWinner(avgKnicks2, avgNets2)}!`);


// D
// Lucas is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and
// if the value is different, the tip is 20%.
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules
// above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test
// the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
// TEST DATA: 125, 555 and 44
console.log("\nPart D");

const calcTip = (bill) => {
    if(bill >=50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

let bills = [125, 555, 44];

const calcBills = (bills) => {
    let tipsList = [];
    tipsList.push(calcTip(bills[0]));
    tipsList.push(calcTip(bills[1]));
    tipsList.push(calcTip(bills[2]));
    console.log("tips: " + tipsList);

    let totalBillList = [];
    totalBillList.push(tipsList[0] + bills[0]);
    totalBillList.push(tipsList[1] + bills[1]);
    totalBillList.push(tipsList[2] + bills[2]);
    return totalBillList;
}

console.log("total bills: ", calcBills(bills));