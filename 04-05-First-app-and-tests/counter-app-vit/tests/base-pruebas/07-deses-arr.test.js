import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('07-deses-arr-test', () => {
    test('should retornaArreglo', () => {
        const arr = retornaArreglo();
        expect(arr[0]).toBe('ABC');
        expect(arr[1]).toBe(123);
;    });
});