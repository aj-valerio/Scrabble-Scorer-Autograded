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

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
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

function initialPrompt(prompt) {
   wordEntered = input.question(prompt)
   return console.log(oldScrabbleScorer(wordEntered));
};

let newPointStructure;

let simpleScorer = function(word){
   word = word.toUpperCase();
   wordSimpleScore = word.length;
   return wordSimpleScore;
};

let vowelBonusScorer = function(word){
   wordArray = word.toUpperCase().split("");
   vowelBonusScore = 0;
   for (i = 0; i < word.length; i++){
      if (wordArray[i] === "A"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "E"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "I"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "O"){ 
         vowelBonusScore += 3;
      }
      else if (wordArray[i] === "U"){ 
         vowelBonusScore += 3;
      }
      else {
         vowelBonusScore += 1;
      }
   }
   return vowelBonusScore;
};


console.log(vowelBonusScorer("rhythm"));

let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

function runProgram() {
   initialPrompt("Let's play some scrabble!\n \nEnter a word: ");
   
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
