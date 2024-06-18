#!/usr/bin/node
const { argv } = require('node:process');
const str = 'C is fun';
const stopVal = argv[2];
let num = 0;
if (Number.isNaN(parseInt(num))) {
  console.log('Missing number of occurrences');
}
for (num; num < stopVal; num++) {
  console.log(str);
}
