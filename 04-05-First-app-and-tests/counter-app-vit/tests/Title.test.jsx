import { render } from '@testing-library/react'
import { Title } from '../src/Title';

describe('Title component tests', () => {

    test('should match with snapshot', () => {
        const testTitle= "title";
        const { container } = render( <Title title={ testTitle }/> );
        expect( container ).toMatchSnapshot();
    });

    test('should show title in h1', () => {
        const testTitle= "title";
        const testSubtitle= "subtitle";
        const { container, getByText, getByTestId } = render( <Title title={ testTitle } subtitle={ testSubtitle }/> );
        expect( getByText(testTitle) ).toBeTruthy();
        const h1 = container.querySelector('h1');
        const h2 = container.querySelector('h2');
        expect(h1.innerHTML).toContain(testTitle);
        expect(h2.innerHTML).toContain(testSubtitle);
        expect( getByTestId('test-title').innerHTML ).toContain(testTitle);

    });

});