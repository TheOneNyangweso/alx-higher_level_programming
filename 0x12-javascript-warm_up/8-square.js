#!/usr/bin/node
const { argv } = require('node:process');
const str = 'X';
const size = parseInt(argv[2]);
let num = 0;
if (Number.isNaN(size)) {
  console.log('Missing size');
} else {
  for (num; num < size; num++) {
    console.log(str.repeat(size));
  }
}
