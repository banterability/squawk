NUMBERS = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
};

function isDigit(ch){
  return !!ch.match(/\d/);
}

function numericCharAsWord(char){
  var numberWord;
  if (numberWord = NUMBERS[char]){
    return numberWord;
  }
  return char;
}

function processCharacter(ch){
  if(isDigit(ch)){
    return numericCharAsWord(ch);
  }
  return ch;
}

module.exports = function(input){
  var inputChars = input.toString().split('');
  return inputChars.map(function(ch){
    return processCharacter(ch);
  }).join('\n');
};
