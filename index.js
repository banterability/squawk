var processNumbers = require('./lib/numbers');


function processCharacter(ch){
  var numberReplacement;

  if(numberReplacement = processNumbers(ch)){
    return numberReplacement;
  }
  return ch;
}

module.exports = function(input){
  var inputChars = input.toString().split('');
  return inputChars.map(function(ch){
    return processCharacter(ch);
  }).join('\n');
};
