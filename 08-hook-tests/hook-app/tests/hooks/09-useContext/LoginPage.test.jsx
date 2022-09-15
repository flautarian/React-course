import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-use-context/context/UserContext";
import { LoginPage } from "../../../src/09-use-context/LoginPage";

describe('<LoginPage/> test', () => { 

    const initialUser = {
        id: 1,
        email: "email",
        username: "username",
    };

    const mockSetUser = jest.fn();

    test('should match snapshot', () => {
        const snapshot = render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        expect(snapshot).toMatchSnapshot();
     });

     test('should show user context info', () => {
        render(
            <UserContext.Provider value={{ user: initialUser }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const pretag = screen.getByLabelText('pre');// aria-label
        expect(pretag.innerHTML).toContain(initialUser.id.toString());
        expect(pretag.innerHTML).toContain(initialUser.username.toString());
        expect(pretag.innerHTML).toContain(initialUser.email.toString());
        
    });

    test('should try setUser info button', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: mockSetUser }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const setUserButton =  screen.getByRole('button');
        fireEvent.click(setUserButton);
        const pretag = screen.getByLabelText('pre');// aria-label
        expect(mockSetUser).toHaveBeenCalledWith({ id: 123, email: "test@gmail.com", username: "test username"});
    });
 })