#!/usr/bin/node
const { argv } = require('node:process');
const argCount = argv.length;
if (argCount === 1) {
  console.log('No argument');
} else if (argCount === 2) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}