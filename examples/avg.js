// Funcion para calcular la media de un array de valores
function calculateAverage(array) {
    
    return array.reduce((acc, current) => acc + current, 0) / array.length;
    //return array.length === 0 ? NaN : array.reduce((acc, val) => acc + val) / array.length;

  }
  
// 1. Para un array de valores 1, la media es 1. ([1, 1, 1]).
// 2. Para un array vacio ([]) la media es NaN.
// 3. Para un array de elementos positivos, la media debe ser positiva.
// 4. Para un array de elementos negativos, la media debe ser negativa.

module.exports = calculateAverage