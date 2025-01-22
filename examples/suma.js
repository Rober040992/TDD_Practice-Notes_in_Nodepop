function suma(a, b) {
  if (b == 'a' || a == 'a') {
      throw new Error('Must be a number');
  }

  return a + b;
}

module.exports = suma;