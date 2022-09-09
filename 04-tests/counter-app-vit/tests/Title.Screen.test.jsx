import { render, screen } from '@testing-library/react'
import { Title } from '../src/Title';

describe('Title screen component tests', () => {

    const testTitle= "title";
    const testSubtitle= "subtitle";
    
    test('should match snapshot', () => {
        const { container } = render( <Title title={ testTitle }/> );
        expect( container ).toMatchSnapshot();
    });

    test('should count 1 subtitle-test-element', () => {
        render( <Title title={ testTitle } subtitle={ testSubtitle }/> );
        expect( screen.getAllByText(testSubtitle).length ).toBe(1);
    });

});