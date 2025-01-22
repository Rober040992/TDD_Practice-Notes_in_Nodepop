const calculateAverage = require('./avg')

describe('Funcion para calcular la media de un array de valores', () => {
    test("1. Para un array de valores 1, la media es 1. ([1, 1, 1])", () => {
        expect(calculateAverage([1, 1, 1])).toEqual(1);
    })
})