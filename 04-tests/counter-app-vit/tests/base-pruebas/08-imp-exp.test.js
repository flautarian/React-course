import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/assets/data/heroes.js'

describe('08-imp-exp-test', () => {
    test('should getHeroeById OK', () => {
        const hero = getHeroeById(heroes[0].id);
        expect(hero).toBe(heroes[0]);
    });

    test('should getHeroeById KO by undefined', () => {
        const hero = getHeroeById(99);
        expect(hero).toBeFalsy();
    });

    test('should getHeroesByOwner KO by 0 results', () => {
        const heroesOwner = getHeroesByOwner("AmericaComics");
        expect( heroesOwner.length ).toEqual(0);
    });

    test('should getHeroesByOwner OK', () => {
        const heroesOwner = getHeroesByOwner("DC");
        expect( heroesOwner.length ).toEqual(3);
        expect( heroesOwner ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);
    });
});