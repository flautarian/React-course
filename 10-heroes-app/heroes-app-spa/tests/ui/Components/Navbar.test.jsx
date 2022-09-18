import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from '../../../src/ui';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../src/auth";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Navbar test', () => {

    const logoutFnMock = jest.fn();

    const contextValue = {
        logged: true,
        user: {
            name: "Facundo Giacconi",
            id: '123'
        },
        logout: logoutFnMock
    };

    beforeEach(() => { jest.clearAllMocks(); });


    test("should has the user's name in navbar", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    });

    test("should logout on click logout 'button'", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);
        expect(logoutFnMock).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    });


});