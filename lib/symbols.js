SYMBOLS = {
  '-': 'dash',
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
