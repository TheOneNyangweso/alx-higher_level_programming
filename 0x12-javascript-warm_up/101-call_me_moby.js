#!/usr/bin/node
exports.callMeMoby = function callMeMoby (x, callbackfn) {
  let initial = 0;
  for (initial; initial < x; initial++) {
    const func = callbackfn;
    func();
  }
};
