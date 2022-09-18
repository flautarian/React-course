import { types } from "../../../src/auth/types/types";

describe('Types tests', () => {

    test('should return all types', () => {

        let typesTest = types;
        expect(typesTest).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout"
        });

    });
})