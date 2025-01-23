import suma from './suma'
 // Solid. Cada test una responsabilidad
 // todos los matchers como .toBe() devuelven booleanos
describe.skip("Funcion suma", () => {

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

    describe("Función sum con valores negativos", () => {
        test('Sumar 1 + -1 es igual a 0', () => {
            expect(suma(1, -1)).toBe(0);
        })
    
        test("Sumar -1 + -3 debe dar un valor negativo", () => {
            expect(suma(-1, 3)).toBeGreaterThan(0);
            expect(suma(-1, -0.3)).not.toBeGreaterThan(0);
        })
    })

    describe("Testear con valores no numericos", () => {
        // Si sumamos 1 y 'a' debe devolver un error
        test("Sumar 1 y 'a' debe devolver un error", () => {
            expect(() => suma(1, 'a')).toThrow();
        });
        // Si sumamos 'a' y 1 debe devolver un error
        test("Sumar 'a' y '1' debe devolver un error", () => {
            expect(() => suma('a', 1)).toThrow();
        });
        // Si sumamos 'a' y 'a' debe devolver un error
        test("Sumar 'a' y '1' debe devolver un error", () => {
            expect(() => suma('a', 'a')).toThrow();
        });
        // Solo aceptamos valores numericos
        test("Sumar 'a' y '1' debe devolver un error", () => {
            expect(() => suma('a', '1')).toThrow();
        });
    })
})



