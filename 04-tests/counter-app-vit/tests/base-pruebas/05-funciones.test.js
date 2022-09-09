import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('05-funciones-test', () => {
    test('should get user', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser(testUser.uid, testUser.username);
        expect(user).toEqual(testUser);
    });

    test('should get active user', () => {
        const activeUserTest = "Facundo";
        const activeUser = getUsuarioActivo(activeUserTest);

        expect(activeUser.username).toStrictEqual(activeUserTest);
    });
});