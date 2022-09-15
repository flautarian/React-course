import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../../src/08-use-reducer/TodoApp';
import { useTodos } from '../../../src/hooks/useTodos';

jest.mock('../../../src/hooks/useTodos');

describe('TodoApp test', () => {

    useTodos.mockReturnValue({
        state: [{ id: 1, desc: "desc1", done: false },
        { id: 2, desc: "desc2", done: true }],
        todosCount: 2,
        todosRemaining: 1,
        deleteTodo: jest.fn(),
        toggleTodo: jest.fn(),
        createTodo: jest.fn(),
    });

    test('should match snapshot', () => {
        const { container } = render(<TodoApp />);
        expect(container).toMatchSnapshot();
    });

    test('asdf', () => {
        const { container } = render(<TodoApp />);
        expect(screen.getByText('desc1')).toBeTruthy();
        expect(screen.getByText('desc2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
})