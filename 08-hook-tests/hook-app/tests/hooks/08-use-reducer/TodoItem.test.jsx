import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-use-reducer/TodoItem";

describe('TodoItem test', () => {
    const item = {
        id: 1,
        desc: "Todo Description",
        done: false
    };

    const mockToDelete = jest.fn();
    const mockToToggle = jest.fn();

    beforeEach(() => { jest.clearAllMocks(); });

    test('should match snapshot', () => {
        const { container } = render(<TodoItem item={item} />);
        expect(container).toMatchSnapshot();
    });

    test('should toggle the Todo item', () => {
        render(<TodoItem item={item} toToggle={mockToToggle} toDelete={mockToDelete} />);
        const toggleButton = screen.getByText('To do') || screen.getByText('Done');
        fireEvent.click(toggleButton);
        expect(mockToToggle).toHaveBeenCalledWith(item.id);
    });

    test('should delete the Todo item', () => {
        render(<TodoItem item={item} toToggle={mockToToggle} toDelete={mockToDelete} />);
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(mockToDelete).toHaveBeenCalledWith(item.id);
    });
});