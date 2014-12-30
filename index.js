var processNumbers = require('./lib/numbers'),
    processLetters = require('./lib/letters'),
    processSymbols = require('./lib/symbols');

function processCharacter(ch){
  var numberReplacement, letterReplacement, symbolReplacement;
  if(numberReplacement = processNumbers(ch)){
    return numberReplacement;
  }
  if(letterReplacement = processLetters(ch)){
    return letterReplacement;
  }
  if(symbolReplacement = processSymbols(ch)){
    return symbolReplacement;
  }
  return ch;
}

module.exports = function(input){
  var inputChars = input.toString().split('');
  return inputChars.map(function(ch){
    return processCharacter(ch);
  });
};
