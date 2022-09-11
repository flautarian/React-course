import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('09-promesas-test', () => {
    test('should getHeroeByIdAsync OK', (done) => {
        const id = 1;
        const hero = "";
        getHeroeByIdAsync(id).then( hero => {
            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
            done();
        })
    });

    test('should getHeroeByIdAsync KO non exist', (done) => {
        const id = 100;
        const hero = "";
        getHeroeByIdAsync(id).then( hero => {
            expect(hero).toBeFalsy();
            done();
        }).catch( nohero => {
            expect(nohero).toEqual(`No se pudo encontrar el héroe con id: ${ id }`);
            done();
        });
    });
});