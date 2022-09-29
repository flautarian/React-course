import { useSelector, useDispatch } from 'react-redux';
import { onAddNewEvent, onCloseDateModal, onDeleteEvent, onEditNewEvent, onOpenDateModal, onSetActiveEvent } from '../store';

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (event) => {
        dispatch(onSetActiveEvent(event));
    }

    const startSavingEvent = (event) => {
        // TODO: backend things

        //TODO: all ok? 
        if (!!event._id)
            dispatch(onEditNewEvent(event));
        else
            dispatch(onAddNewEvent({ ...event, _id: new Date().getTime() }));
    };

    const startDeleteEvent = () => {
        // TODO: backend things

        //TODO: all ok? 
        dispatch(onDeleteEvent());
    };

    return {
        // Properties
        events,
        activeEvent,
        // methods
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent
    }
}