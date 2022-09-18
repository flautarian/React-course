import { AuthContext } from "../../src/auth";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from "../../src/router/AppRouter";

describe('AppRouter test', () => {
    test('should show login on non auth', () => {
        const contextValue = {
            logged: false
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Login') ).toBeTruthy();
    });

    test("should show marvel's page when logged", () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getByText('Marvel') ).toBeTruthy();
    });

})