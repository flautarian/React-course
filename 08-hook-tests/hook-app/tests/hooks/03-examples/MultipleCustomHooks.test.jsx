import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../src/hooks';
import { useFetch } from '../../../src/hooks/useFetch';

jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');

describe('Breaking bad test', () => {

    const mockChangeValue = jest.fn();

    useCounter.mockReturnValue({
        valueCounter: {
            counter1: 1,
            counter2: 1,
            counter3: 1
        },
        changeValue: mockChangeValue,
    });

    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container } = render(<MultipleCustomHooks />);
        expect(container).toMatchSnapshot();
    });

    test('should default correctly', () => {
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Next quote'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should fetch correctly', () => {

        useFetch.mockReturnValue({
            data: [{
                id: "1",
                author: "Facundo",
                quote: 'Hello world',
            }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hello world - Facundo')).toBeTruthy();
    });

    test('should fetch next quote correctly', () => {

        useFetch.mockReturnValue({
            data: [{ id: "1", author: "Facundo", quote: 'Hello world' }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hello world - Facundo')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);
        expect(mockChangeValue).toHaveBeenCalled();
    });
})