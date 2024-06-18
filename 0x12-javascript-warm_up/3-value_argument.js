#!/usr/bin/node
const { argv } = require('node:process');
const arg1 = argv[0];
const restOfArgs = argv.slice(1);
if (restOfArgs != null || undefined) {
  console.log(arg2);
}
