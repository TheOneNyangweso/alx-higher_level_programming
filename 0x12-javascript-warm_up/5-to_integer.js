#!/usr/bin/node
const { argv } = require('node:process');
const restOfArgs = argv.slice(2);
const boolRes = Number.isNaN(parseInt(restOfArgs[0]));
if (typeof restOfArgs[0] === 'undefined' || boolRes) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(restOfArgs[0])}`);
}
