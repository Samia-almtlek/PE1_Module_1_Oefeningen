// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in

let name = await userInput.question('Wat is je naam? ');
console.log(name);

let age = await userInput.question('Wat is je oud? ');
console.log(age);

let favoriteGame = await userInput.question('Wat is je favoriteGame? ');
console.log(favoriteGame);


console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();
