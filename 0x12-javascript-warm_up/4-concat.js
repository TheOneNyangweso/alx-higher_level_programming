#!/usr/bin/node
const { argv } = require('node:process');
if (argv.length === 2) {
  console.log('undefined is undefined');
}
if (argv.length === 3) {
  console.log(`${argv[2]} is undefined`);
}
if (argv.length >= 4) {
  console.log(`${argv[2]} is ${argv[3]}`);
}
