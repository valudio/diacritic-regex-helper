# diacritic-regex-helper

A small node.js module that helps to find strings containing diacritics with regular expressions.
Useful for accentued search in MongoDB.

[![NPM](https://nodei.co/npm/diacritic-regex-helper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/diacritic-regex-helper/)

#### Installation

`$ npm install diacritic-regex-helper`

#### Usage

JS :
```js
var diacriticHelper = require("diacritic-regex-helper");

var toFind = "noel";
var txt = "Vive le Père-Noël !";

// Without diactric-helper
var result1 = txt.replace(new RegExp("noel","gi"), "Fouettard")
console.log(result1);

// With diactric-helper
var result2 = txt.replace(new RegExp(diacriticHelper(toFind),"gi"), "Fouettard")
console.log(result2);
```

Console output :
```
Vive le Père-Noël !
Vive le Père-Fouettard !
```

## MIT Licensed

# Disclaimer
This package is exactly the same as [this one by](https://www.npmjs.com/package/diacritic-helper) [steevelefort](https://github.com/steevelefort/diacritic-helper). For some reason it was making Meteor apps to throw an error so I decided to publish it again and now it's working ok. All the credit goes to [steevelefort](https://github.com/steevelefort/diacritic-helper).
