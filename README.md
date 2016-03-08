# Dyslexia sj

> Jumble text to simulate reading with dyslexia

## Usage

```js
var dyslexia = require('dyslexia');

console.log(dyslexia("Sometimes I see things right to left and I know that's not right at all"));
//=> Sitemomes I see thnigs right to lfet and I know that\'s not right at all

console.log(dyslexia.scrambleWord("Wednesday"));
//=> Wedsenday

console.log(dyslexia("I'm not saying I invented the turtleneck, but I was the first person to realise its potential as a tactical garment.", {
  minWordLength: 2,
  scrambleChance: 80
}));
//=> I\'m not saying I invented the tureneltck, but I was the first perosn to realise its potential as a tactical ganemrt.
```

## Install

```
$ npm install dyslexia
```


## API

### `dyslexia(sentence, options)`

Returns a dyslexified sentence

#### sentence

Type: `string`

#### options

##### minWordLength

Type: `int`
Default: `3`

Minimum length a word has to be in order for it to be scrambled.

##### scrambleChance

Type: `int`
Default: `100`

Percentage chance out of `100` of a word being scrambled. `100` = will always be scrambled. `0` = never scrambled.

### `dyslexia.scrambleWord(word)`

Returns a dyslexified word

#### word

Type: `string`

#### options

##### minWordLength

Type: `int`
Default: `3`

Minimum length a word has to be in order for it to be scrambled.

##### scrambleChance

Type: `int`
Default: `90`

Percentage chance of a word being scrambled. `100` = will always be scrambled.


## Acknowledgements

- [Geon](https://github.com/geon)- Coming up with the idea and implementing it for his [blog post](http://geon.github.io/programming/2016/03/03/dsxyliea)
