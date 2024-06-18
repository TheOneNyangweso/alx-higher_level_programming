#!/usr/bin/node
const { argv } = require('node:process');
const str = 'x';
const stopVal = argv[2];
let num = 0;
if (Number.isNaN(parseInt(stopVal))) {
  console.log('Missing size');
}
for (num; num < stopVal; num++) {
  console.log(str.repeat(stopVal));
}
