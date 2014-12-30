SYMBOLS = {
  '&': 'ampersand',
  '*': 'asterisk',
  '-': 'dash',
  '@': 'at',
  '–': 'dash',
  '—': 'dash'
};

function verboseSymbol(char){
  var symbolName;
  if(symbolName = SYMBOLS[char]){
    return symbolName;
  }
  return false;
}

module.exports = verboseSymbol;
