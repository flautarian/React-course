

export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];
        case 'remove':
            return initialState.filter(element => element.id !== action.id);
        case 'toggleDone':
            return initialState.map(element => {
                if (element.id === action.id) element.done = !element.done;
                return element;
            })
        default:
            return initialState;
    }
}