import { successfullRequest, failedRequest } from './promises';

describe.skip("Async / Await style", () => {

    it("Debe devolver un codigo 200 cuando llamamos a successfullRequest", async () => {
        // En un test de promesa resuelta no podemos poner try catch
        expect.assertions(1);
        const response = await successfullRequest();
        expect(response.status).toBe(200);
    })

    it("Debe devolver un error con código de estado 403 para failedRequest", async () => {
        try {
            expect.assertions(1);
            const response = await failedRequest();
        } catch (e) {
            expect(e.response.status).toBe(403);
        }
    });

});

describe.skip("Callback style", () => {

    it("Debe devolver un codigo 200 cuando llamamos a successfullRequest", (done) => {
        expect.assertions(2);
        successfullRequest().then((response) => {
            expect(response.status).toBe(200);
            expect(response.statusText).toMatch(/OK/);
            done();
        })
    });

    it("Debe devolver un error con código de estado 403 para failedRequest", (done) => {
        expect.assertions(1);

        failedRequest().catch(error => {
            expect(error.message).toMatch(/403/);
            done();
        })
    }, 10000); // Podemos definir un timeout de ejecucion personalizado.

});

describe.skip("Pomise style", () => {

    it("Debe devolver un error con código de estado 403 para failedRequest", () => {
        expect.assertions(1);
        return failedRequest().catch(error => {
            expect(error.message).toMatch(/403/);
        });
    });

    it("Debe devolver un codigo 200 cuando llamamos a successfullRequest", () => {
        expect.assertions(2);
        return successfullRequest().then((response) => {
            expect(response.status).toBe(200);
            expect(response.statusText).toMatch(/OK/);
        });
    });
})


// Sobre promesas
// Top level await no se podia utilizar en versiones antiguas de node.
// Ahora si pero no se recomienda sin try / catch.
// await 