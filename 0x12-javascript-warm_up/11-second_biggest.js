#!/usr/bin/node
const { argv } = require('node:process');
// Remove duplicates 1st
const newArgv = [...new Set(argv)];
const argc = argv.length;
if (argc <= 3) {
  console.log(0);
} else {
  const arr = newArgv.slice(2).sort().reverse();
  console.log(arr[1]);
}
