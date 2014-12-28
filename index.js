var processNumbers = require('./lib/numbers');

function isDigit(ch){
  return !!ch.match(/\d/);
}

function processCharacter(ch){
  if(isDigit(ch)){
    return processNumbers(ch);
  }
  return ch;
}

module.exports = function(input){
  var inputChars = input.toString().split('');
  return inputChars.map(function(ch){
    return processCharacter(ch);
  }).join('\n');
};
