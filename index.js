const REPLACEMENTS = {
  a: "alpha",
  b: "bravo",
  c: "charlie",
  d: "delta",
  e: "echo",
  f: "foxtrot",
  g: "golf",
  h: "hotel",
  i: "india",
  j: "juliet",
  k: "kilo",
  l: "lima",
  m: "mike",
  n: "november",
  o: "oscar",
  p: "papa",
  q: "quebec",
  r: "romeo",
  s: "sierra",
  t: "tango",
  u: "uniform",
  v: "victor",
  w: "whiskey",
  x: "x-ray",
  y: "yankee",
  z: "zulu",
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "&": "ampersand",
  "*": "asterisk",
  "-": "dash",
  "@": "at",
  "–": "dash",
  "—": "dash",
  "!": "exclamation-point",
  "#": "pound-sign",
  "%": "percent-sign",
  "?": "question-mark",
  '"': "quotation-mark",
  "[": "open-bracket",
  "]": "close-bracket",
  ".": "period",
  ",": "comma",
};

function processCharacter(ch) {
  let replacementStr;
  if ((replacementStr = REPLACEMENTS[ch.toLowerCase()])) {
    return replacementStr;
  }
  return `[${ch}]`;
}

module.exports = function (input) {
  var inputChars = input.toString().split("");
  return inputChars.map(function (ch) {
    return processCharacter(ch);
  });
};
