import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from '../../../src/09-use-context/MainApp'

describe('Router test', () => { 
    test('should show Home page', () => { 
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.findByText('Home')).toBeTruthy();
     });

     test('should show Login page', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.findByText('Login')).toBeTruthy();
     });

     test('should show About page', () => { 
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.findByText('About')).toBeTruthy();
     });
 })