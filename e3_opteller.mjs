// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal1 = parseFloat(await userInput.question('Geef een getal in:'));
let getal2 = parseFloat(await userInput.question('Geef andere getal in:'));
console.log(getal1 + getal2);


process.exit();
