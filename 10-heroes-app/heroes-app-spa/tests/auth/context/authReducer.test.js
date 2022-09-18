import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";

describe('AuthReducer test', () => { 

    const initialState = [{
        logged: false,
        user
    }];

    const user = {
        id: '123',
        name: "Test Facundo"
    };

    test('should first return default values', () => {
        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('should login crrectly', () => {
        const loginState = {
            type: types.login,
            payload: user
        }
        const newState = authReducer(initialState, loginState);
        expect( newState ).toEqual({
            ...newState,
            logged: true,
            user: loginState.payload
        })
    });


    test('should logout correctly', () => { 
        let loggedState = [{
            logged: true,
            user
        }];
        
        let logoutAction = {
            type: types.logout,
        }

        const newState = authReducer(loggedState, logoutAction);
        expect( newState ).toEqual({ logged: false });
     })

})