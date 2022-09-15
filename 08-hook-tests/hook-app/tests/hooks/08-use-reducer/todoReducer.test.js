import { todoReducer } from "../../../src/08-use-reducer/todoReducer";

describe('TodoReducer test', () => {

    const initialState = [{
        id: 1,
        desc: "desc",
        done: false
    }];

    test('should first return default values', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('should add a todo correctly', () => {
        const actionAdd = {
            type: "add",
            payload: { id: 2, desc: "desc2", done: true }
        }
        const newState = todoReducer(initialState, actionAdd);
        expect(newState.length).toBe(2);
        expect(newState).toContain(actionAdd.payload);
    });

    test('should remove a todo correctly', () => {
        const actionRemove = { type: "remove", id: 1 };
        const newState = todoReducer(initialState, actionRemove);
        expect(newState.length).toBe(0);
    });

    test('should change a todo correctly', () => {
        const actionToggle = { type: "toggleDone", id: 1 };

        const newState = todoReducer(initialState, actionToggle);
        expect(newState[0].done).toBeTruthy();
        
        const newState2 = todoReducer(initialState, actionToggle);
        expect(newState2[0].done).toBeFalsy();
        
        expect(newState.length).toBe(1);
    });
})