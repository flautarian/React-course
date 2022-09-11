import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas 02-template-string', () => {
    test('getSaludo tiene que retornar "Hola Facundo"' , () => {
        const name = "Facundo";
        expect( getSaludo( name ) ).toBe(`Hola ${ name }`);
    });
});