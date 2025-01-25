import { Carrito } from './Carrito';

describe("Testing class Carrito", () => {

    describe("Testeando getTotalItems , addItem and totalCheck", () => {

        // hook que inicializa el carrito cada vez 
        // y lo sobre escribo por que lo quiero vacio cada vez
        let carrito;
        beforeEach(() => {
            carrito = new Carrito();
        })

        // getTotalItems = la cantidad de items
        // Carrito debe tener una función getTotalItems que devuelva 0 a la inicialización.
        it("Carrito debe tener una función getTotalItems que devuelva 0 a la inicialización.", () => {
            expect(carrito.getTotalItems()).toBe(0);
        });

        // Carrito.getTotalItems debe devolver 1 despues de añadir un elemento al carrito.
        it("Carrito.getTotalItems debe devolver 1 despues de añadir un elemento al carrito.", () => {
            carrito.addItem({ price: 1, name: 'sushiItem' });
            expect(carrito.getTotalItems()).toBe(1);
        });


        // Carrito.getTotalItems debe devolver 2 despues de añadir 1 elemento al carrito dos veces.
        it("Carrito.getTotalItems debe devolver 2 despues de añadir 1 elemento al carrito dos veces.", () => {
            carrito.addItem({ price: 1, name: 'sushiItem' });
            carrito.addItem({ price: 1, name: 'sushiItem' });
            expect(carrito.getTotalItems()).toBe(2);
        });

        // Errores
        // Carrito.addItem debe devolver un error si se añade un item sin precio.
        it("Carrito.addItem debe devolver un error si se añade un item sin precio.", () => {
            expect(() => carrito.addItem({})).toThrow();
        });

        // Carrito.addItem debe devolver un error si se añade un item sin nombre.
        it("Carrito.addItem debe devolver un error si se añade un item sin nombre.", () => {
            expect(() => carrito.addItem({ price: 1 })).toThrow();
        });

        // Carrito.addItem debe devolver un error diciendo 'Item must be an object' si el item no es un objeto.
        it("Carrito.addItem debe devolver un error diciendo 'Item must be an object' si el item no es un objeto.", () => {
            expect(() => carrito.addItem('sushiItem')).toThrow('Item must be an object');
        });

        // Carrito.addItem debe devolver un error diciendo 'Item must have price and name' si el item no contiene nombre o precio.
        it("Carrito.addItem debe devolver un error diciendo 'Item must have price and name' si el item no contiene nombre o precio.", () => {
            expect(() => carrito.addItem({})).toThrow('Item must have price and name');
        });

        
        
    });
});

//to do del 23/01/25
// 1. Should return 10 after adding 1 sushiItem
// Testing getTotalCheckout

describe("Testeando getTotalCheckout", () => {
    // Testing getTotalCheckout

    const sushiItem = {
        name: "sushiItem",
        price: 10
    };
    const waterItem = {
        name: "waterItem",
        price: 1.5
    }

    let carrito;
    beforeEach(() => {
        carrito = new Carrito();
    })

    // 1. Should return 10 after adding 1 sushiItem
    it("Debe devolver 10 despues de añadir 1 sushiItem", () => {
        // carrito.addItem({
        //     name: "sushiItem",
        //     price: 10
        // });
        carrito.addItem(sushiItem);
        expect(carrito.getTotalCheckout()).toEqual(10);
    });

    // 2. Should return 20 after adding 2 sushiItem
    it("Debe devolver 20 despues de añadir 2 sushiItem", () => {
        carrito.addItem(sushiItem);
        carrito.addItem(sushiItem);
        expect(carrito.getTotalCheckout()).toEqual(20);
    });

    // 3. Shoud return 11,5 after adding 1 sushiItem and 1 waterItem
    it("Debe devolver 11,5 despues de añadir 1 sushiItem i 1 waterItem", () => {
        carrito.addItem(sushiItem);
        carrito.addItem(waterItem);
        expect(carrito.getTotalCheckout()).toEqual(11.5);
    });

    // 4. Should return 0 if carrito is empty
    it("Debe devolver 0 si el carrito esta vacío", () => {
        expect(carrito.getTotalCheckout()).toEqual(0);
    });

})