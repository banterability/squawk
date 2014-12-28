var processNumbers = require('./lib/numbers'),
    processLetters = require('./lib/letters');

function processCharacter(ch){
  var numberReplacement, letterReplacement;

  if(numberReplacement = processNumbers(ch)){
    return numberReplacement;
  }
  if(letterReplacement = processLetters(ch)){
    return letterReplacement;
  }
  return ch;
}

module.exports = function(input){
  var inputChars = input.toString().split('');
  return inputChars.map(function(ch){
    return processCharacter(ch);
  }).join('\n');
};
