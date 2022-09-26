import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tEvent = {
    _id: new Date().getTime(),
    title: 'test event',
    notes: 'to test the event obv',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '1234',
        name: 'Fernando'
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tEvent],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onEditNewEvent: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event._id === payload._id)
                    return payload;
                return event;
            });
            state.activeEvent = null;
        },
        onDeleteEvent: (state, { payload }) => {
            state.events = state.events.filter(event => event._id !== state.activeEvent._id);
            state.activeEvent = null;
        }
    }
});
// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onEditNewEvent, onDeleteEvent } = calendarSlice.actions;