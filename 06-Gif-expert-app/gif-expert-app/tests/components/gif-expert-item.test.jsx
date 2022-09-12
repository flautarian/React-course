import { render, screen } from '@testing-library/react'
import { GifExpertItem } from '../../src/components';

describe('gif-expert-item-test', () => { 

    const testImage = {
        id: 1,
        url: "test-url",
        title: "title-test"
    }
    
    test('should match snapshot', () => {        
        const { container } = render( <GifExpertItem key={testImage.id} {...testImage}/> );
        expect( container ).toMatchSnapshot();
    });

    test('should render url image', () => {
        render( <GifExpertItem key={testImage.id} {...testImage}/> );
        expect( screen.getByRole( 'img' ).src).toContain(testImage.url);
        expect( screen.getByRole( 'img' ).alt).toBe(testImage.title);
    });
    
    test('should render title', () => { 
        render( <GifExpertItem key={testImage.id} {...testImage}/> );
        expect( screen.getByText( testImage.title )).toBeTruthy();
     })

})