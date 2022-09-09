import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('11-async-await-test', () => {
    test('should await', async() => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});