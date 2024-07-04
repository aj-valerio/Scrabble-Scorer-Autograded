// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(str) {
	let word = String(str);
   word.toLowerCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

//Prompt user for a word

function initialPrompt(prompt) {
   wordEntered = input.question(prompt)
   return wordEntered;
}

let newPointStructure = transform(oldPointStructure);

function simpleScorer(str) {
   let word = String(str);
   word.toLowerCase();
   let wordSimpleScore = word.length;
   return wordSimpleScore;
}

function vowelBonusScorer(str){
   let word = String(str);
   wordArray = word.toLowerCase().split("");
   vowelBonusScore = 0;
   for (i = 0; i < word.length; i++){
      if (wordArray[i] === "a"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "e"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "i"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "o"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "u"){ 
         vowelBonusScore += 3;
      }
      else {
         vowelBonusScore += 1;
      }
   }
   return vowelBonusScore;
}

// Uses newPointStructure to transform oldPointStructure and score string according to Scrabble point allocation //
function scrabbleScorer(str){
   let word = String(str);
   let wordArray = word.toLowerCase().split("");
   let totalScore = 0;
   for (i = 0; i < wordArray.length; i++){
      for (item in newPointStructure){
         if (item.includes(wordArray[i])){
            letterPoints = newPointStructure[item];
            totalScore += letterPoints;
         }
      }
   }
   return totalScore;
}

// Create objects which will be arrayed within scoringAlgorithms //

let simpleScore = {name:"Simple Score", description:"Each letter is worth 1 point.", scorerFunction:simpleScorer};

let vowelBonus = {name:"Bonus Vowels", description:"Vowels are 3 pts, consonants are 1 pt.", scorerFunction:vowelBonusScorer};

let scrabble = {name:"Scrabble", description:"The traditional scoring algorithm.", scorerFunction:scrabbleScorer};

let scoringAlgorithms = [simpleScore, vowelBonus, scrabble];


// Finish writing scorerPrompt() so that the user can select which scoring algorithm to use.
// scorerPrompt() should return the object the user has selected.

function scorerPrompt(array) {
   console.log("Which scoring algorithm would you like to use? ");
   for (i = 0; i < array.length; i++){
      console.log(`${i} - ${array[i].name}: ${array[i].description}`);
   }
   algSelection = input.question("Enter 0, 1, or 2: ");
   for (i = 0; i < array.length; i++){
      if (i == algSelection){
         return array[i].scorerFunction;
      }  
    }
}

// When input is oldPointStructure, new object of output is newPointStructure. //
function transform(obj) {
   let newObject = {};
   for (key in obj){
      for (i = 0; i < obj[key].length; i++)
      newObject[obj[key][i].toLowerCase()] = Number(key);
   }
   return newObject;
}

function runProgram() {
   let word = initialPrompt("Let's play some scrabble!\n \nEnter a word: ");
   algChoice = scorerPrompt(scoringAlgorithms);
   let wordScore = algChoice(word);
   return console.log(`Score for "${word}": ${wordScore}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
