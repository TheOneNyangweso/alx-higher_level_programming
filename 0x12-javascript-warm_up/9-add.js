#!/usr/bin/node
const { argv } = require('node:process');
const newArgv = argv.slice(2);
const argc = argv.length;

function add (a, b) {
  const sum = parseInt(a) + parseInt(b);
  return sum;
}

if (argc <= 3) {
  console.log('NaN');
} else {
  console.log(add(newArgv[0], newArgv[1]));
}
