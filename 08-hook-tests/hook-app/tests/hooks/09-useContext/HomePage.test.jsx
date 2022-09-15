import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-use-context/context/UserContext';
import { HomePage } from '../../../src/09-use-context/HomePage'

describe('<HomePage/> test', () => {

    const initialUser = {
        id: 1,
        email: "email",
        username: "username",
    };

    test('should match snapshot', () => {
        const snapshot = render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        expect(snapshot).toMatchSnapshot();
    });

    test('should show user context null', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        const pretag = screen.getByLabelText('pre');// aria-label
        expect(pretag.innerHTML).toBe('null');
    });

    test('should show user context info', () => {
        render(
            <UserContext.Provider value={{ user: initialUser }}>
                <HomePage />
            </UserContext.Provider>
        );
        const pretag = screen.getByLabelText('pre');// aria-label
        expect(pretag.innerHTML).toContain(initialUser.id.toString());
        expect(pretag.innerHTML).toContain(initialUser.username.toString());
        expect(pretag.innerHTML).toContain(initialUser.username.toString());
    });
})