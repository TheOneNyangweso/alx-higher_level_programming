#!/usr/bin/node
const { argv } = require('node:process');
const restOfArgs = argv.slice(2);
if (restOfArgs[0] == null || restOfArgs[0] == undefined) {
  console.log('No argument');
} else {
  console.log(restOfArgs[0]);
}
