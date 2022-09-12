import { render, screen } from '@testing-library/react'
import { GifExpertCategoriesGrid } from '../../src/components';
import { UseFetchGifs } from '../../src/hooks/UseFetchGifs';

jest.mock('../../src/hooks/UseFetchGifs');
describe('Gif expert categories grid tests', () => { 
    
    const testCategory = "test";

    test('should show loading label correctly', () => { 
        UseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifExpertCategoriesGrid category={ testCategory } />)
        expect( screen.getByText( 'Loading...' ));
        expect( screen.getByText( testCategory ));
    })

    test('should hide loading label correctly and show gifs', () => { 
        const gifs = [
            {
                id:'1',
                title: 'test',
                url: 'url-test'
            },
            {
                id:'2',
                title: 'test',
                url: 'url-test'
            }
        ];

        UseFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifExpertCategoriesGrid category={ testCategory } />)
        expect( screen.getAllByRole( 'img' ).length).toBe(2);
    })


 })