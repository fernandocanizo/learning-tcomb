'use strict';

// This is supposed to throw only in development according to
// [the little guide](https://github.com/gcanti/tcomb/blob/master/docs/GUIDE.md)

function sum(a, b) {
  t.Number(a);
  t.Number(b);
  return a + b;
}

sum(1, 's'); // => throws '[tcomb] Invalid value "s" supplied to Number'

// running this with `NODE_ENV=production node throws.only.in.development.js` still throws
