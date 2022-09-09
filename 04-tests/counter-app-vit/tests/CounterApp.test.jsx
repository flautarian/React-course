import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp';

describe('CounterApp component test', () => {

    const initialValue10= 10;
    
    test('should match snapshot', () => {
        const { container } = render( <CounterApp value={ initialValue10 }/> );
        expect( container ).toMatchSnapshot();
    });
    
    test('should count initial value', () => {
        render( <CounterApp value={ initialValue10 } /> );
        expect( screen.getByText( `Valor: ${initialValue10}`  ) ).toBeTruthy();
        expect( screen.getByRole( 'heading', { level: 2} ).innerHTML ).toContain(`Valor: ${initialValue10}`);
    });

    test('should check add button', () => {
        render( <CounterApp value={ initialValue10 } /> );
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText( `Valor: ${initialValue10 + 1}`  )).toBeTruthy();
    });

    test('should check add button', () => {
        render( <CounterApp value={ initialValue10 } /> );
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByText( `Valor: ${initialValue10 - 1}`  )).toBeTruthy();
    });

    test('should check add button', () => {
        render( <CounterApp value={ initialValue10 } /> );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('Reset') );
        expect(screen.getByText( `Valor: ${initialValue10}`  )).toBeTruthy();
    });

});