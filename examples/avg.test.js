const calculateAverage = require('./avg')

describe('Funcion para calcular la media de un array de valores', () => {
    test("1. Para un array de valores 1, la media es 1. ([1, 1, 1])", () => {
        expect(calculateAverage([1, 1, 1])).toBe(1);
    })

    test("2. Para un array vacio ([]) la media es NaN.", () => {
        expect(calculateAverage([])).toBe(NaN)
    })

    test("3. Para un array de elementos positivos, la media debe ser positiva.", () => {
        expect(calculateAverage([2, 2, 2, 2, 2, 2, 2])).toBe(2)
    })

    test("3. Para un array de elementos positivos, la media debe ser positiva.", () => {
        expect(calculateAverage([-2, -20, -3,-5, -2, -2, -7, -2, -2])).toBe(-5)
    })
})