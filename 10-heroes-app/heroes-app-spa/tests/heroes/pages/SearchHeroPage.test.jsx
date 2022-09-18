import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchHeroPage } from '../../../src/heroes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



describe('SearchHeroPage test', () => {


    beforeEach(() => jest.clearAllMocks() );

    
    test('should show default correctly', () => {
        
        const { container } =render(
            <MemoryRouter>
                <SearchHeroPage />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
        
    });

    test('should show batman and inputs', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchHeroPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('none');
        
    });

    test('should show error on search batman123', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchHeroPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');
        

    });

    test('should search correctly', () => {
        
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchHeroPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }})
        
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`)

    });


});