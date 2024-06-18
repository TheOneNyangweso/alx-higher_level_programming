#!/usr/bin/node
const { argv } = require('node:process');
const argc = argv.length;
if (argc <= 3) {
  console.log(0);
} else {
  // Remove duplicates 1st
  // const newArgv = [...new Set(argv)];
  const arr = argv.slice(2).sort().reverse();
  console.log(arr[1]);
}
