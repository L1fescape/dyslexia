'use strict';

var randomInt = require('random-int');
var _assignIn = require('lodash/assignIn');

// parse words out of a string and mess them up
function dyslexia(str, options) {
  var messedUpText = '';

  // iterate through each word and scramble it
  var re = /\w+/g;
  var word;
  while ((word = re.exec(str)) != null) {
    // include any special characters before the word
    messedUpText += str.slice(messedUpText.length, word.index);
    // scramble the word
    messedUpText += scrambleWord(word[0], options);
  }
  // include any special characters after the word
  messedUpText += str.slice(messedUpText.length, str.length);

  return messedUpText;
}

// scramble the word, being sure to always keep the first and last letters
// in-tact. this is important so the text can still be read.
function scrambleWord(word, options) {
  options = _assignIn({}, options, {
    minWordLength: 3,
    scrambleChance: 100
  });

  if (options.scrambleChance > 100) {
    options.scrambleChance = 100;
  }

  // if it's a small word or ~randomness~, don't scramble it
  if (word.length < options.minWordLength || randomInt(100) > options.scrambleChance) {
    return word;
  }

  var a = randomInt(1, word.length - 1);
  var b = randomInt(a, word.length - 1);

  var scrambledWord = word.slice(0, a) +
                      word.slice(a, b).split('').reverse().join('') +
                      word.slice(b, word.length);

  return scrambledWord;
}

dyslexia.scrambleWord = scrambleWord;

module.exports = dyslexia;
