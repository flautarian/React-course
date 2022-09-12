import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/add-category';

describe('Add category test', () => { 
    
    const testInput = "test";

    test('should set input category', () => { 
        render( <AddCategory onAddCategory={ () => { } } /> );
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: testInput }});
        expect( input.value ).toBe(testInput);
     })

     test('should submit category', () => { 
        render( <AddCategory onAddCategory={ ( newCategory ) => {
            expect( newCategory ).toBe(testInput);
        } } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: testInput }});
        fireEvent.submit( form );
        expect( input.value ).toBe('');
     })

     test('should submit category function', () => { 
        const newCategoryFunction = jest.fn();
        render( <AddCategory onAddCategory={newCategoryFunction} /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: testInput }});
        fireEvent.submit( form );
        expect( newCategoryFunction ).toHaveBeenCalled();
        expect( newCategoryFunction ).toHaveBeenCalledTimes(1);
        expect( newCategoryFunction ).toHaveBeenCalledWith(testInput);
     })

     test('should not submit category function', () => { 
        const newCategoryFunction = jest.fn();
        render( <AddCategory onAddCategory={newCategoryFunction} /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: "" }});
        fireEvent.submit( form );
        expect( newCategoryFunction ).not.toHaveBeenCalled();
        expect( newCategoryFunction ).toHaveBeenCalledTimes(0);
     })
 })