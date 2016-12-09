// This file exports a large object of configs,
// where each property will become a variable that css files can use.
// This is so that

module.exports = Object.assign({},
  require('./breakpoints.js').breakpoints,
  require('./colors.js')
);
