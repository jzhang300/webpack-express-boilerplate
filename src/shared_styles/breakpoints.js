// Breakpoints

const breakpointsSource = [
  ['xx-small', '320px'],
  ['x-small', '360px'],
  ['small', '640px'],
  ['medium', '768px'],
  ['large', '1024px'],
  ['x-large', '1200px'],
  ['xx-large', '1280px']
];

module.exports = {
  // Container names
  breakpointsArr: breakpointsSource.map((e) => e[0]),
  // Containers object
  breakpoints: breakpointsSource.reduce(
    (prev, next) => {
      prev[next[0]] = next[1];
      return prev;
    },
    {}
  ),
};
