import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/gif-expert-app";

describe('gitExpertApp test', () => { 
    test('should match with snapshot', () => {
        const { container } = render( <GifExpertApp/ >);
        expect( container ).toMatchSnapshot();
    });

    test('should AddCategory', async() => {
        render( <GifExpertApp/ >);       
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: "test" }});
        fireEvent.submit( form );
        await waitFor(
            () => {
                const testResultsLabel = screen.getAllByText('test');
                expect( testResultsLabel ).toBeTruthy();
            },
            {
                timeout: 10000
            }
        );
    });

    test('should not add repeated categories', async() => {
        render( <GifExpertApp/ >);       
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: "test" }});
        fireEvent.submit( form );
        fireEvent.submit( form );
        await waitFor(
            () => {
                const testResultsLabel = screen.getAllByText('test');
                expect( testResultsLabel ).toBeTruthy();
                expect( testResultsLabel.length ).toBe(1);
            },
            {
                timeout: 10000
            }
        );
    });
 })