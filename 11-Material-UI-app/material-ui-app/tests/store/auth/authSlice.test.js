import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures';



describe('AuthSlice test', () => {

    test('shoudl return InitialState and call "auth"', () => {
        
        const state = authSlice.reducer( initialState, {});

        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');

    });

    test('should do auth correctly', () => {

        const state = authSlice.reducer( initialState, login( demoUser ) );
        expect( state ).toEqual({
            status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });
    });

    test('should logout without args', () => {

        // authenticatedState // logout without args
        const state = authSlice.reducer( authenticatedState, logout() );
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    });

    test('should do logout and show error message', () => {

        // authenticatedState // logout with args 
        const errorMessage = 'Credenciales no son correctas';

        const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) );
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        });
        
    });

    test('shoudl change state to checking', () => {

        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect( state.status ).toBe('checking');
    });

    
});