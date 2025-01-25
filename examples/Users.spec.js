import { Users } from './Users';


describe.skip("Users class test", () => {

    describe("Usando api real", () => {

        // Hooks
        // Lifecycle
        // hacemos el hook a la peticion y la guardamos en el user para antes de todos los test
        let users;
        beforeAll(async () => {
            users = await Users.all();
        });
        // beforeEach(() => {
        //     console.log("Antes de cada test");
        // });
        // al terminar los test reseteamos users
        afterAll(() => {
            users = undefined;
        });
        // afterEach();

        it("Debe devolver un array de 10 usuarios cuando llamamos a all()", async () => {
            expect.assertions(2);
            // const response = await Users.all();
            expect(users).toBeArray();
            expect(users).toBeArrayOfSize(10);
        });

        it("Debe devolver un array donde el tercer elemento tiene la propiedad name que incluye el valor 'Clementine'", async () => {
            expect.assertions(4);
            // const response = await Users.all();
            expect(users[2]).toHaveProperty('name');
            expect(users[2]).toContainKey('name');
            expect(users[2]).toContainEntry(['name', 'Clementine Bauch']);
            expect(users[2].name).toMatch(/Clementine/);
        });
    })
});