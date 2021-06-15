const sub = (a, b) => {
  if (a === undefined || b === undefined) {
    return undefined;
  }
  if (a === null || b === null) {
    return null;
  }
  return a - b;
};

module.exports = {
  sub: sub
}