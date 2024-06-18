#!/usr/bin/node
const { argv } = require('node:process');
const str = 'x';
const size = argv[2];
let num = 0;
if (Number.isNaN(parseInt(size))) {
  console.log('Missing size');
} else {
  for (num; num < size; num++) {
    console.log(str.repeat(size));
  }
}
