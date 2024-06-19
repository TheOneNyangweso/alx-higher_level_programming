#!/usr/bin/node
const { argv } = require('node:process');

function fact (num) {
  if (isNaN(num)) {
    return 1;
  }
  if (parseInt(num) === 0) {
    return 1;
  }
  return parseInt(num) * fact(parseInt(num) - 1);
}

console.log(fact(argv[2]));
