const suma = require('./suma');

describe("Funcion suma", () => {

    test("Sumar 0 + 0 es igual a 0", () => {
        expect(suma(0, 0)).toEqual(0);
    })

    test('sumar 1 + 2 es igual a 3', () => {
      expect(suma(1, 2)).toBe(3);
    });
    
    it('Sumar 1 + -1 es igual a 0', () => {
        expect(suma(1, -1)).toBe(0);
    })

    // Crea un test que evalue que 1.1000000 + 2.230404 sea igual a 3.330404
    test('Sumar 1.1000000 + 2.230404 sea igual a 3.330404', () => {
        expect(suma(1.1000000, 2.230404)).toBe(3.330404);
    })
    
   /*  esto no funciona por que :  
   JS trata a los flotantes "mal"
   
    test('suma(0.1, 0.2)).toBe(0.3)', () => {
        expect(suma(0.1, 0.2)).toBe(0.3);
    }) 
    
    Expected: 0.3
    Received: 0.30000000000000004
    para que funcione deberiamos usar .toBeCloseTo instead of .toBe
    */
})