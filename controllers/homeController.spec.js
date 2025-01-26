import { index } from './homeController';
import Agent from '../models/Agent';

// Mockeamos todo el paquete de connect-mongo para inicializar los test
// Sin tener que arrancar la aplicacion
jest.mock('connect-mongo');
let req; 
let res;


describe("Testing de homeController", () => {

    beforeEach(() => {
        Agent.list = jest.fn();
        req = {
            session: {},
            query: {},
        };
        res = {
            locals: {},
            __: jest.fn(),
            render: jest.fn(),
        };
    });

    it("No se debe llamar a Agent.list si no hay usuario", async () => {
        expect.assertions(1);
        const spy = jest.spyOn(Agent, 'list');
        await index(req, res);
        expect(spy).not.toHaveBeenCalled();
    });

    it("Al llamar a homeController.index se deben listar los agentes solo si hay usuario", async () => {
        expect.assertions(1);
        const spy = jest.spyOn(Agent, 'list');
        req.session.userId = '1';
        await index(req, res);
        expect(spy).toHaveBeenCalled();
    });

    it("Al llamar a homeController.index con un filter de owner, se deben listar los agentes filtrados por owner", async () => {
        expect.assertions(1);
        const userId = '1';
        req.session.userId = userId;
        const spy = jest.spyOn(Agent, 'list');
        await index(req, res);
        expect(spy).toHaveBeenCalledWith({ owner: userId }, undefined, undefined, undefined);
    });

    it("Al llamar a homeController.index se debe llamar a render con el parametro home", async () => {
        expect.assertions(1);
        await index(req, res);
        expect(res.render).toHaveBeenCalledWith('home');
    });
    
});